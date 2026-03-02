import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationKey, LanguageCode } from "@/locales/translations";

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
    t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<LanguageCode>("pt");

    useEffect(() => {
        const savedLang = localStorage.getItem("bichocoin_language") as LanguageCode;
        if (savedLang && translations[savedLang]) {
            setLanguage(savedLang);
        }
    }, []);

    const handleSetLanguage = (lang: LanguageCode) => {
        setLanguage(lang);
        localStorage.setItem("bichocoin_language", lang);
    };

    const t = (key: TranslationKey): string => {
        const translation = translations[language][key];
        if (translation) return translation;

        // Fallback to Portuguese if key is missing in another language
        return translations["pt"][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
