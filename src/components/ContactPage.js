import React, { useState } from 'react';
import { MapPin, Phone, Mail, Building } from 'lucide-react';
import Animated from './Animated';
import PageHeader from './PageHeader';

const ContactPage = ({ data }) => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted:", formState);
        alert("Thank you for your message!");
        setFormState({ name: '', email: '', message: '' });
    };

    return (
        <>
            <PageHeader title={data.title} subtitle={data.subtitle} />
            <div className="py-24 md:py-32">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20">
                        <Animated type="slideInLeft">
                             <div className="bg-stone-100 dark:bg-stone-900/50 p-10 rounded-xl shadow-xl">
                                 <h3 className="text-3xl font-bold mb-8 text-stone-800 dark:text-white">{data.form.send}</h3>
                                 <form onSubmit={handleSubmit} className="space-y-6">
                                     <input 
                                         type="text" 
                                         name="name" 
                                         placeholder={data.form.name} 
                                         value={formState.name} 
                                         onChange={handleInputChange} 
                                         required 
                                         className="w-full p-4 rounded-lg bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:ring-2 focus:ring-red-500 outline-none transition text-lg"
                                     />
                                     <input 
                                         type="email" 
                                         name="email" 
                                         placeholder={data.form.email} 
                                         value={formState.email} 
                                         onChange={handleInputChange} 
                                         required 
                                         className="w-full p-4 rounded-lg bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:ring-2 focus:ring-red-500 outline-none transition text-lg"
                                     />
                                     <textarea 
                                         name="message" 
                                         placeholder={data.form.message} 
                                         rows="6" 
                                         value={formState.message} 
                                         onChange={handleInputChange} 
                                         required 
                                         className="w-full p-4 rounded-lg bg-white dark:bg-stone-800 border border-stone-300 dark:border-stone-700 focus:ring-2 focus:ring-red-500 outline-none transition text-lg resize-none"
                                     ></textarea>
                                     <button 
                                         type="submit" 
                                         className="w-full py-4 px-8 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:scale-105 text-xl"
                                     >
                                         {data.form.send}
                                     </button>
                                 </form>
                             </div>
                        </Animated>
                        <Animated type="slideInRight" className="space-y-12">
                            <h3 className="text-3xl font-bold text-stone-800 dark:text-white">{data.info.title}</h3>
                            {data.info.branches.map(branch => (
                                <div key={branch.name} className="flex items-start gap-6">
                                    <div className="mt-2">
                                        <branch.icon className="h-10 w-10 text-red-600"/>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-2xl text-stone-800 dark:text-white mb-4">{branch.name}</h4>
                                        <div className="space-y-3 text-lg text-stone-600 dark:text-stone-300">
                                            <p className="flex items-center gap-3"><MapPin size={20}/><span>{branch.address}</span></p>
                                            <p className="flex items-center gap-3"><Phone size={20}/><a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="hover:text-red-600 transition-colors">{branch.phone}</a></p>
                                            <p className="flex items-center gap-3"><Mail size={20}/><a href={`mailto:${branch.email}`} className="hover:text-red-600 transition-colors">{branch.email}</a></p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Animated>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage; 