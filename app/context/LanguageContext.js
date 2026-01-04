'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [locale, setLocale] = useState('en');

    // Load saved language from localStorage if available
    useEffect(() => {
        const savedLocale = localStorage.getItem('weleba-locale');
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'am')) {
            setLocale(savedLocale);
        }
    }, []);

    const toggleLanguage = () => {
        const newLocale = locale === 'en' ? 'am' : 'en';
        setLocale(newLocale);
        localStorage.setItem('weleba-locale', newLocale);
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
