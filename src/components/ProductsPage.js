import React from 'react';
import Animated from './Animated';
import PageHeader from './PageHeader';

const ProductsPage = ({ data }) => (
    <>
        <PageHeader title={data.title} subtitle={data.subtitle} />
        <div className="py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {data.categories.map((cat, index) => (
                         <Animated key={cat.name} type="fadeInUp" delay={index * 200}>
                             <div className="bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-6 flex flex-col h-full group border border-gray-100 dark:border-stone-800">
                                 <div className="relative h-96">
                                     <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                     <div className="absolute bottom-0 left-0 p-8">
                                         <h3 className="text-5xl font-bold text-white text-shadow-2xl mb-2">{cat.name}</h3>
                                         <div className="w-20 h-1 bg-red-500 rounded-full"></div>
                                     </div>
                                 </div>
                                 <div className="p-8 flex-grow">
                                     <p className="text-xl text-stone-600 dark:text-stone-300 mb-8 leading-relaxed">{cat.description}</p>
                                     <ul className="space-y-4">
                                         {cat.items.map((item, itemIndex) => (
                                             <li key={item} className="flex items-center gap-4 text-lg text-stone-700 dark:text-stone-200 group/item hover:text-red-600 dark:hover:text-red-400 transition-colors duration-300">
                                                 <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                                                 <span className="font-medium">{item}</span>
                                             </li>
                                         ))}
                                     </ul>
                                 </div>
                             </div>
                         </Animated>
                    ))}
                </div>
            </div>
        </div>
    </>
);

export default ProductsPage; 