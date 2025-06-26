import React from 'react';
import PageHeader from '../PageHeader';
import Animated from '../Animated';

const WaterChemicalAnalysisPage = ({ handleNavClick, data, dir }) => {
    return (
        <div className={`py-24 md:py-32 bg-white dark:bg-stone-900 text-lg md:text-xl`} dir={dir}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Animated type="fadeInDown">
                    <button 
                        onClick={() => handleNavClick(3)}
                        className="mb-8 flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors duration-300"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        {data.backToServices}
                    </button>
                </Animated>
            </div>
            <PageHeader
                title={data.title}
                subtitle={data.subtitle}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <Animated type="fadeInLeft">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-white mb-6">
                                {data.sectionTitle}
                            </h2>
                            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                                {data.sectionDesc1}
                            </p>
                            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                                {data.sectionDesc2}
                            </p>
                        </div>
                    </Animated>
                    <Animated type="fadeInRight">
                        <img
                            src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
                            alt={data.imageAlt}
                            className="rounded-lg shadow-2xl w-full h-96 object-cover"
                        />
                    </Animated>
                </div>

                <Animated type="fadeInUp" delay={400}>
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-stone-50 dark:bg-stone-800 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-stone-800 dark:text-white mb-4">
                                {data.whatWeAnalyzeTitle}
                            </h3>
                            <ul className="space-y-3 text-stone-600 dark:text-stone-300">
                                {data.whatWeAnalyzeList.map((item, idx) => (
                                    <li className="flex items-start" key={idx}>
                                        <span className="text-red-600 mr-2">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-stone-50 dark:bg-stone-800 p-8 rounded-lg">
                            <h3 className="text-2xl font-bold text-stone-800 dark:text-white mb-4">
                                {data.benefitsTitle}
                            </h3>
                            <ul className="space-y-3 text-stone-600 dark:text-stone-300">
                                {data.benefitsList.map((item, idx) => (
                                    <li className="flex items-start" key={idx}>
                                        <span className="text-red-600 mr-2">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Animated>

                <Animated type="fadeInUp" delay={600}>
                    <div className="bg-red-50 dark:bg-red-900/20 p-8 rounded-lg text-center">
                        <h3 className="text-2xl font-bold text-stone-800 dark:text-white mb-4">
                            {data.ctaTitle}
                        </h3>
                        <p className="text-lg text-stone-600 dark:text-stone-300 mb-6">
                            {data.ctaDesc}
                        </p>
                        <button 
                            onClick={() => handleNavClick(4)}
                            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                        >
                            {data.ctaButton}
                        </button>
                    </div>
                </Animated>
            </div>
        </div>
    );
};

export default WaterChemicalAnalysisPage; 