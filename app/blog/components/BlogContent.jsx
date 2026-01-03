'use client';

import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ChevronRight } from 'lucide-react';

const BlogContent = ({ contentHtml }) => {
    const [activeId, setActiveId] = useState('');
    const [headings, setHeadings] = useState([]);
    const contentRef = useRef(null);

    useEffect(() => {
        // Extract headings from markdown content for the TOC
        // This is a simple regex-based extraction for the sidebar
        // H1 (#), H2 (##), H3 (###)
        const headingLines = contentHtml
            .split('\n')
            .filter(line => line.startsWith('#'))
            .map(line => {
                const level = line.match(/^#+/)[0].length;
                const text = line.replace(/^#+\s+/, '').replace(/\s+$/, '');
                const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                return { level, text, id };
            });

        setHeadings(headingLines);
    }, [contentHtml]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -66% 0px' }
        );

        const headingElements = contentRef.current?.querySelectorAll('h1, h2, h3');
        headingElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [headings]);

    // Transform markdown and inject IDs into headings
    const components = {
        h1: ({ node, ...props }) => {
            const id = props.children?.[0]?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') || '';
            return <h1 id={id} {...props} />;
        },
        h2: ({ node, ...props }) => {
            const id = props.children?.[0]?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') || '';
            return <h2 id={id} {...props} />;
        },
        h3: ({ node, ...props }) => {
            const id = props.children?.[0]?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') || '';
            return <h3 id={id} {...props} />;
        }
    };

    return (
        <div className="flex flex-col lg:flex-row gap-12 relative">
            {/* Table of Contents - Sidebar */}
            <aside className="lg:w-64 flex-shrink-0 hidden lg:block">
                <div className="sticky top-32">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
                        Table of Contents
                    </h4>
                    <nav className="space-y-1">
                        {headings.map((heading, index) => (
                            <a
                                key={`${heading.id}-${index}`}
                                href={`#${heading.id}`}
                                className={`toc-item block text-sm py-2 transition-all duration-300 ${activeId === heading.id
                                        ? 'toc-item-active text-[#0066FF] translate-x-1'
                                        : 'text-gray-500 hover:text-gray-900'
                                    } ${heading.level === 3 ? 'pl-4' : ''}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(heading.id)?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                <div className="flex items-center gap-2">
                                    {activeId === heading.id && <ChevronRight className="w-3 h-3" />}
                                    <span className={activeId === heading.id ? 'scale-105 origin-left inline-block' : 'scale-100'}>
                                        {heading.text}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </nav>
                </div>
            </aside>

            {/* Main content */}
            <div
                ref={contentRef}
                className="flex-1 prose-custom min-w-0"
            >
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={components}
                >
                    {contentHtml}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default BlogContent;
