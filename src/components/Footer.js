import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const Footer = ({ data }) => (
    <footer className="bg-stone-100 dark:bg-black text-stone-600 dark:text-stone-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div className="md:col-span-2 lg:col-span-1 mb-8 md:mb-0">
                    <h3 className="text-3xl font-bold text-stone-800 dark:text-white mb-4">{data.companyName}</h3>
                    <p className="text-lg max-w-xs leading-relaxed">{data.subtitle}</p>
                </div>
                {data.contact.branches.slice(0, 3).map(branch => (
                    <div key={branch.name}>
                        <h4 className="font-semibold text-xl text-stone-700 dark:text-stone-200 mb-6">{branch.name}</h4>
                        <ul className="space-y-3 text-lg">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>{branch.address}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={20} className="mt-1 flex-shrink-0" />
                                <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-red-600 transition-colors">{branch.phone}</a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
            <div className="mt-16 border-t border-stone-300 dark:border-stone-800 pt-10 text-center text-lg">
                <p>&copy; {new Date().getFullYear()} {data.companyName}. {data.rights}</p>
            </div>
        </div>
    </footer>
);

export default Footer; 