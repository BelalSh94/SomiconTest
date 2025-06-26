import React from 'react';
import Animated from './Animated';
import PageHeader from './PageHeader';

const AboutPage = ({ data }) => (
    <>
        <PageHeader title={data.title} />
        <div className="py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <Animated type="slideInLeft" className="space-y-8 text-xl text-stone-600 dark:text-stone-300 leading-relaxed text-justify">
                        <p className="text-2xl leading-relaxed">{data.content1}</p>
                        <p className="text-2xl leading-relaxed">{data.content2}</p>
                    </Animated>
                    <Animated type="slideInRight">
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-10 text-center">
                            {data.stats.map((stat, index) => (
                                <div key={stat.label} className="bg-stone-100 dark:bg-stone-800/50 p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                                    <span className="text-5xl md:text-6xl font-extrabold text-red-600 block mb-4">{stat.value}</span>
                                    <p className="text-lg text-stone-500 dark:text-stone-400 uppercase tracking-wider font-semibold">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </Animated>
                </div>
            </div>
        </div>

        <div className="py-24 md:py-32 bg-stone-100 dark:bg-stone-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <Animated type="slideInLeft">
                        <img src={data.chairmanMessage.image} alt={data.chairmanMessage.name} className="rounded-xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
                    </Animated>
                    <Animated type="slideInRight" className="space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-stone-800 dark:text-white">{data.chairmanMessage.title}</h2>
                        <p className="text-xl text-stone-600 dark:text-stone-300 text-justify leading-relaxed">{data.chairmanMessage.message}</p>
                        <div className="pt-4">
                            <p className="font-bold text-red-600 text-2xl">{data.chairmanMessage.name}</p>
                            <p className="text-lg text-stone-500">{data.chairmanMessage.role}</p>
                        </div>
                    </Animated>
                </div>
            </div>
        </div>

        <div className="py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <Animated type="fadeInUp" className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-800 dark:text-white">{data.missionVision.title}</h2>
                </Animated>
                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <Animated type="fadeInUp" delay={100}>
                         <div className="bg-white dark:bg-stone-900 p-10 rounded-xl shadow-xl flex items-start gap-8 h-full border-t-4 border-red-600 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <data.missionVision.mission.icon className="h-12 w-12 text-red-600 flex-shrink-0 mt-2"/>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-stone-800 dark:text-white">{data.missionVision.mission.title}</h3>
                                <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed">{data.missionVision.mission.description}</p>
                            </div>
                        </div>
                    </Animated>
                    <Animated type="fadeInUp" delay={200}>
                         <div className="bg-white dark:bg-stone-900 p-10 rounded-xl shadow-xl flex items-start gap-8 h-full border-t-4 border-red-600 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <data.missionVision.vision.icon className="h-12 w-12 text-red-600 flex-shrink-0 mt-2"/>
                            <div>
                                <h3 className="text-3xl font-bold mb-4 text-stone-800 dark:text-white">{data.missionVision.vision.title}</h3>
                                <p className="text-xl text-stone-600 dark:text-stone-300 leading-relaxed">{data.missionVision.vision.description}</p>
                            </div>
                        </div>
                    </Animated>
                </div>
            </div>
        </div>
    </>
);

export default AboutPage; 