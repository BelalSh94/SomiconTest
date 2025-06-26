import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = ({ isScrolled, data, activePage, handleNavClick, isMenuOpen, setIsMenuOpen, toggleTheme, toggleLanguage, theme, activePageIndex }) => {
    // Check if we're on home page (index 0)
    const isHomePage = activePageIndex === 0;
    
    // Header background logic:
    // - On home page: transparent when not scrolled, solid when scrolled
    // - On other pages: always solid background
    const headerClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen || !isHomePage 
            ? 'bg-white/98 dark:bg-stone-950/98 backdrop-blur-md shadow-lg' 
            : 'bg-transparent'
    }`;
    
    // Text color logic:
    // - On home page when not scrolled: white text for better contrast against background image
    // - On other pages or when scrolled: normal dark/light theme colors
    const textColorClass = isHomePage && !isScrolled && !isMenuOpen 
        ? 'text-white drop-shadow-lg' 
        : 'text-gray-900 dark:text-stone-300';
    
    const navLinksKeys = [0, 1, 2, 3, 4]; // Use indices instead of page names
    
    return (
        <header className={headerClass}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <div className="flex-shrink-0">
                        <button 
                            className="flex items-center gap-3 group transition-all duration-300 hover:scale-105" 
                            onClick={() => handleNavClick(0)}
                        >
                             <span className="text-4xl font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">{data.companyName}</span>
                             <span className="text-4xl animate-pulse-slow">{data.flag}</span>
                        </button>
                    </div>

                    <nav className="hidden md:flex items-center gap-10">
                        {navLinksKeys.map(key => (
                            <button 
                                key={key} 
                                onClick={() => handleNavClick(key)}
                                className={`text-xl font-medium transition-all duration-300 hover:text-red-600 dark:hover:text-red-500 relative after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-[3px] after:bg-red-600 after:transition-all after:duration-300 after:transform hover:scale-105 ${
                                    activePage === data.navLinks[key] 
                                        ? 'text-red-600 dark:text-red-500 after:scale-x-100 font-semibold' 
                                        : `${textColorClass} after:scale-x-0 hover:after:scale-x-100`
                                }`}
                            >
                                {data.navLinks[key]}
                            </button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button 
                            onClick={toggleLanguage} 
                            className={`p-3 rounded-full text-xl font-semibold hover:bg-gray-100 dark:hover:bg-stone-800 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg ${
                                isHomePage && !isScrolled && !isMenuOpen 
                                    ? 'text-white drop-shadow-lg hover:bg-white/20' 
                                    : 'text-gray-900 dark:text-stone-400'
                            }`}
                        >
                            {data.lang === 'en' ? 'AR' : 'EN'}
                        </button>
                        <button 
                            onClick={toggleTheme} 
                            className={`p-3 rounded-full hover:bg-gray-100 dark:hover:bg-stone-800 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg ${
                                isHomePage && !isScrolled && !isMenuOpen 
                                    ? 'text-white drop-shadow-lg hover:bg-white/20' 
                                    : 'text-gray-900 dark:text-stone-400'
                            }`}
                        >
                            {theme === 'light' ? <Moon size={28} /> : <Sun size={28} />}
                        </button>
                        <div className="md:hidden">
                            <button 
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className={`p-3 hover:text-red-600 dark:hover:text-red-500 transition-all duration-300 hover:scale-110 ${
                                    isHomePage && !isScrolled && !isMenuOpen 
                                        ? 'text-white drop-shadow-lg' 
                                        : 'text-gray-900 dark:text-stone-400'
                                }`}
                            >
                                {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 dark:bg-stone-950/95 backdrop-blur-md shadow-lg animate-fade-in-down">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinksKeys.map(key => (
                            <button 
                                key={key} 
                                onClick={() => handleNavClick(key)}
                                className={`w-full text-start block px-4 py-4 rounded-lg text-xl font-medium transition-all duration-300 hover:scale-105 ${activePage === data.navLinks[key] ? 'bg-red-600 text-white shadow-lg' : 'text-gray-800 dark:text-stone-300 hover:bg-gray-100 dark:hover:bg-stone-800 hover:text-red-600 dark:hover:text-red-500'}`}
                            >
                                {data.navLinks[key]}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header; 