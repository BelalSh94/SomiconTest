import React from 'react';
import PageHeader from './PageHeader';
import Animated from './Animated';

const ServicesPage = ({ handleNavClick, data, dir }) => {
    const services = [
        {
            title: data.waterAnalysis.title,
            description: data.waterAnalysis.description,
            imageUrl: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', // Keep water chemical analysis image
            pageIndex: 5
        },
        {
            title: data.antiscalant.title,
            description: data.antiscalant.description,
            imageUrl: '/assets/chemical-indust.jpg', // Chemical industry image
            pageIndex: 6
        },
        {
            title: data.precipitationTest.title,
            description: data.precipitationTest.description,
            imageUrl: '/assets/laboratory.jpg', // Laboratory testing image
            pageIndex: 7
        },
        {
            title: data.membraneAutopsy.title,
            description: data.membraneAutopsy.description,
            imageUrl: '/assets/industry.jpg', // Industrial inspection image
            pageIndex: 8
        },
        {
            title: data.cleaningTests.title,
            description: data.cleaningTests.description,
            imageUrl: '/assets/water-treatment.jpg', // Water treatment image
            pageIndex: 9
        },
        {
            title: data.plantInspection.title,
            description: data.plantInspection.description,
            imageUrl: '/assets/chemist.jpg', // Chemist/technical inspection image
            pageIndex: 10
        }
    ];

    return (
        <div className={`py-24 md:py-32 bg-white dark:bg-stone-900 text-lg md:text-xl`} dir={dir}>
            <PageHeader
                title={data.title}
                subtitle={data.subtitle}
            />
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Animated key={service.title} delay={index * 200} type="fadeInUp">
                            <div 
                                className="bg-white dark:bg-stone-800 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer group h-full flex flex-col"
                                onClick={() => handleNavClick(service.pageIndex)}
                            >
                                <div className="relative overflow-hidden rounded-t-xl">
                                    <img
                                        src={service.imageUrl}
                                        alt={service.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                                </div>
                                <div className="p-6 flex flex-col h-full">
                                    <h3 className="text-xl font-bold text-stone-800 dark:text-white mb-3 group-hover:text-red-600 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-4 flex-grow">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-red-600 font-semibold group-hover:text-red-700 transition-colors duration-300 mt-auto">
                                        {data.learnMore}
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </Animated>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
