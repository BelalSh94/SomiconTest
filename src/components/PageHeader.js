import React from 'react';
import Animated from './Animated';

const PageHeader = ({ title, subtitle }) => (
    <div className="bg-stone-50 dark:bg-stone-900/50 pt-36 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Animated type="fadeInDown">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-stone-800 dark:text-white tracking-tight leading-tight">{title}</h1>
            </Animated>
            {subtitle && (
                <Animated type="fadeInUp" delay={200}>
                    <p className="mt-6 text-xl md:text-2xl text-stone-600 dark:text-stone-300 max-w-4xl mx-auto leading-relaxed">{subtitle}</p>
                </Animated>
            )}
        </div>
    </div>
);

export default PageHeader; 