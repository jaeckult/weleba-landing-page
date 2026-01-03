# Blog & News Pages - Folder Structure

## Overview
Implemented a clean, organized folder structure for blog and news sections following Next.js 13+ app directory conventions.

## Folder Structure

```
app/
├── blog/
│   ├── components/
│   │   ├── BlogHero.jsx          # Hero section for blog page
│   │   ├── BlogList.jsx          # Blog listing with search & filters
│   │   └── RelatedPosts.jsx      # Related posts section
│   └── page.js                   # Main blog page
│
├── news/
│   ├── components/
│   │   ├── NewsHero.jsx          # Hero section for news page
│   │   ├── NewsList.jsx          # News listing with filters & load more
│   │   └── NewsletterSubscribe.jsx # Newsletter subscription form
│   └── page.js                   # Main news page
│
├── components/
│   └── sections/
│       └── BlogCTA.jsx           # Shared CTA component (used by both)
│
└── lib/
    ├── blogData.js               # Blog posts data & categories
    └── newsData.js               # News articles data & categories
```

## Features Implemented

### Blog Page (`/blog`)
- **Hero Section**: Large title with decorative illustration
- **Search & Filter**: Real-time search + category filtering
- **Blog Grid**: Responsive 3-column grid layout
- **Related Posts**: Shows 3 related articles
- **CTA Section**: Call-to-action with stats
- **Metadata**: SEO-optimized title and description

### News Page (`/news`)
- **Hero Section**: News-specific branding (green accent)
- **Category Filter**: Filter by Company News, Product Updates, etc.
- **Featured Layout**: First 2 articles in larger cards
- **Load More**: Pagination with "Load More" button
- **Newsletter**: Email subscription form
- **CTA Section**: Shared demo/pricing CTA

## Key Differences

| Feature | Blog | News |
|---------|------|------|
| Accent Color | Blue | Green |
| Search | ✅ Yes | ❌ No |
| Load More | ❌ No | ✅ Yes |
| Newsletter | ❌ No | ✅ Yes |
| Featured Layout | Equal grid | 2 large + grid |

## Routes
- `/blog` - Blog listing page
- `/news` - News listing page
- `/blog/[slug]` - Individual blog post (to be implemented)
- `/news/[slug]` - Individual news article (to be implemented)

## Data Management
- Centralized data in `/app/lib/blogData.js` and `/app/lib/newsData.js`
- Easy to extend with CMS integration (Supabase, Contentful, etc.)
- Sample data includes 9 posts/articles each

## Component Reusability
- `BlogCTA` component is shared between both pages
- Each section has its own scoped components for maintainability
- Consistent design patterns across both pages
