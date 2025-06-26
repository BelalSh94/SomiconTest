import React, { useState } from 'react';
import PageHeader from '../PageHeader';
import Animated from '../Animated';

const AntiscalantProjectionPage = ({ handleNavClick, data, dir }) => {
    const [formData, setFormData] = useState({
        // Contact Information
        name: '',
        email: '',
        projectName: '',
        companyName: '',
        mobileNumber: '',
        projectSite: '',
        
        // Technical Parameters
        desalinationMethod: '',
        mechanicalCleaning: '',
        waterType: '',
        naclRejection: '',
        ph: '',
        temperature: '',
        feedFlow: '',
        recovery: '',
        
        // Raw Water Cations (mg/L)
        naPlus: '',
        kPlus: '',
        caPlusPlus: '',
        mgPlusPlus: '',
        baPlusPlus: '',
        srPlusPlus: '',
        fePlusPlus: '',
        mnPlusPlus: '',
        
        // Raw Water Anions (mg/L)
        clMinus: '',
        fMinus: '',
        so4MinusMinus: '',
        po4MinusMinus: '',
        no3Minus: '',
        hco3Minus: '',
        sio2: '',
        
        // Chemicals Dosing
        dosingTank: '',
        dosingPumpCapacity: '',
        dosingPumpPulseRate: '',
        acidAlkali: '',
        concentration: '',
        density: '',
        dose: '',
        dosingPump: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Add increment/decrement handlers for number fields
    const handleIncrement = (field, step, max) => {
        setFormData(prev => {
            let value = parseFloat(prev[field]) || 0;
            let newValue = Math.min(value + step, max);
            // Fix floating point precision
            newValue = Math.round((newValue + Number.EPSILON) * 1000) / 1000;
            return { ...prev, [field]: newValue };
        });
    };
    const handleDecrement = (field, step, min) => {
        setFormData(prev => {
            let value = parseFloat(prev[field]) || 0;
            let newValue = Math.max(value - step, min);
            // Fix floating point precision
            newValue = Math.round((newValue + Number.EPSILON) * 1000) / 1000;
            return { ...prev, [field]: newValue };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        alert('Thank you! Your antiscalant projection request has been submitted.');
    };

    return (
        <div className="py-24 md:py-32 bg-white dark:bg-stone-900 text-lg md:text-xl">
            <style jsx>{`
                /* Custom styling for select dropdown arrow */
                .custom-select {
                    background-repeat: no-repeat;
                    background-size: 1.5em 1.5em;
                    cursor: pointer;
                    /* Use the original SVG arrow design */
                    background-image: url("data:image/svg+xml,%3csvg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M7 10l5 5 5-5' stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'/%3e%3c/svg%3e");
                }
                
                /* RTL arrow positioning */
                [dir="rtl"] .custom-select {
                    background-position: left 0.5rem center !important;
                    padding-left: 2.5rem !important;
                    padding-right: 1rem !important;
                }
                
                /* LTR arrow positioning */
                [dir="ltr"] .custom-select {
                    background-position: right 0.5rem center !important;
                    padding-right: 2.5rem !important;
                    padding-left: 1rem !important;
                }
                
                /* Placeholder styling for select elements - match mg/L color */
                .custom-select option[value=""] {
                    color: #9ca3af !important;
                    display: block !important;
                }
                
                /* Ensure placeholder shows when no value is selected */
                .custom-select:not([value]) {
                    color: #9ca3af;
                }
                
                .custom-select:invalid {
                    color: #9ca3af;
                }
                
                /* Better hover styling for select options */
                .custom-select option:hover {
                    background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
                    color: #991b1b;
                    font-weight: 500;
                }
                
                .custom-select option:checked {
                    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                    color: white;
                    font-weight: 600;
                }
                
                .custom-select option:focus {
                    background: linear-gradient(135deg, #fef2f2 0%, #fecaca 100%);
                    color: #991b1b;
                    outline: none;
                }
                
                /* Dark mode support */
                .dark .custom-select option:hover {
                    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
                    color: #fca5a5;
                    font-weight: 500;
                }
                
                .dark .custom-select option:checked {
                    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
                    color: white;
                    font-weight: 600;
                }
                
                .dark .custom-select option:focus {
                    background: linear-gradient(135deg, #374151 0%, #4b5563 100%);
                    color: #fca5a5;
                    outline: none;
                }
                
                /* Custom styling for number input arrows */
                input[type='number']::-webkit-inner-spin-button,
                input[type='number']::-webkit-outer-spin-button {
                    -webkit-appearance: none;
                    margin: 0;
                    display: none;
                }
                input[type='number'] {
                    -moz-appearance: textfield;
                }
                /* Custom arrow button styling */
                .custom-number-input {
                    position: relative;
                    display: inline-block;
                    width: 100%;
                }
                .arrow-buttons {
                    position: absolute;
                    ${dir === 'rtl' ? 'left: 0.5rem;' : 'right: 0.5rem;'}
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    height: 2.5rem;
                    justify-content: center;
                }
                .arrow-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 0.125rem;
                    color: #6b7280;
                    transition: color 0.2s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .arrow-btn:hover {
                    color: #374151;
                }
                .arrow-btn:first-child {
                    margin-bottom: -0.25rem;
                }
                .arrow-btn:last-child {
                    margin-top: -0.25rem;
                }
            `}</style>
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
                <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
                    <Animated type="fadeInLeft">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 dark:text-white mb-6">
                                {data.sectionTitle}
                            </h2>
                            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed mb-6">
                                {data.sectionDesc1}
                            </p>
                            <p className="text-lg text-stone-600 dark:text-stone-300 leading-relaxed">
                                {data.sectionDesc2}
                            </p>
                        </div>
                    </Animated>
                    <Animated type="fadeInRight">
                        <img
                            src="/assets/chemical-indust.jpg"
                            alt={data.imageAlt}
                            className="rounded-lg shadow-2xl w-full h-96 object-cover"
                        />
                    </Animated>
                </div>

                <Animated type="fadeInUp" delay={400}>
                    <div className="bg-stone-50 dark:bg-stone-800 rounded-xl p-8 shadow-xl">
                        <h3 className="text-2xl font-bold text-stone-800 dark:text-white mb-8 text-center">
                            {data.formTitle}
                        </h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Contact Information Section */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                        {data.name}
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                        style={{ paddingRight: '2.5rem' }}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                        {data.email}
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                        style={{ paddingRight: '2.5rem' }}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                        {data.projectName}
                                    </label>
                                    <input
                                        type="text"
                                        name="projectName"
                                        value={formData.projectName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                        style={{ paddingRight: '2.5rem' }}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                        {data.companyName}
                                    </label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                        style={{ paddingRight: '2.5rem' }}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                        {data.mobileNumber}
                                    </label>
                                    <input
                                        type="tel"
                                        name="mobileNumber"
                                        value={formData.mobileNumber}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                        style={{ paddingRight: '2.5rem' }}
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                        {data.projectSite}
                                    </label>
                                    <input
                                        type="text"
                                        name="projectSite"
                                        value={formData.projectSite}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                        style={{ paddingRight: '2.5rem' }}
                                    />
                                </div>
                            </div>

                            {/* Technical Parameters Section */}
                            <div className="border-t border-stone-300 dark:border-stone-600 pt-8">
                                <h4 className="text-xl font-bold text-stone-800 dark:text-white mb-6">
                                    {data.technicalParamsTitle}
                                </h4>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                            {data.desalinationMethod}
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="desalinationMethod"
                                                value={formData.desalinationMethod}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300 appearance-none bg-white dark:bg-stone-700 custom-select"
                                            >
                                                <option value="" disabled selected hidden>{data.selectMethod}</option>
                                                <option value="RO">{data.ro}</option>
                                                <option value="NF">{data.nf}</option>
                                                <option value="MSF">{data.msf}</option>
                                                <option value="MED">{data.med}</option>
                                                <option value="MVC">{data.mvc}</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                            {data.mechanicalCleaning}
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="mechanicalCleaning"
                                                value={formData.mechanicalCleaning}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300 appearance-none bg-white dark:bg-stone-700 custom-select"
                                            >
                                                <option value="" disabled selected hidden>{data.selectOption}</option>
                                                <option value="None">None</option>
                                                <option value="Balls">Balls</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                            {data.waterType}
                                        </label>
                                        <div className="relative">
                                            <select
                                                name="waterType"
                                                value={formData.waterType}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300 appearance-none bg-white dark:bg-stone-700 custom-select"
                                            >
                                                <option value="" disabled selected hidden>{data.selectWaterType}</option>
                                                <option value="Sea water">{data.seaWater}</option>
                                                <option value="Brackish Water">{data.brackishWater}</option>
                                                <option value="RO Reject">{data.roReject}</option>
                                                <option value="Waste Water">{data.wasteWater}</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                            {data.naclRejection}
                                        </label>
                                        <div className="custom-number-input">
                                        <input
                                            type="number"
                                            name="naclRejection"
                                            value={formData.naclRejection}
                                            onChange={handleInputChange}
                                            required
                                            min="0"
                                            max="100"
                                            step="0.1"
                                            placeholder={`${data["e.g."]}, 99.5`}
                                            className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                style={{ paddingRight: '2.5rem' }}
                                            />
                                            <span className="arrow-buttons">
                                                <button type="button" className="arrow-btn" onClick={() => handleIncrement('naclRejection', 0.1, 100)} aria-label="Increment">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                </button>
                                                <button type="button" className="arrow-btn" onClick={() => handleDecrement('naclRejection', 0.1, 0)} aria-label="Decrement">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                            {data.ph}
                                        </label>
                                        <div className="custom-number-input">
                                        <input
                                            type="number"
                                            name="ph"
                                            value={formData.ph}
                                            onChange={handleInputChange}
                                            required
                                            min="0"
                                            max="14"
                                            step="0.1"
                                            placeholder={`${data["e.g."]}, 7.2`}
                                            className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                style={{ paddingRight: '2.5rem' }}
                                            />
                                            <span className="arrow-buttons">
                                                <button type="button" className="arrow-btn" onClick={() => handleIncrement('ph', 0.1, 14)} aria-label="Increment">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                </button>
                                                <button type="button" className="arrow-btn" onClick={() => handleDecrement('ph', 0.1, 0)} aria-label="Decrement">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                            {data.temperature}
                                        </label>
                                        <div className="custom-number-input">
                                        <input
                                            type="number"
                                            name="temperature"
                                            value={formData.temperature}
                                            onChange={handleInputChange}
                                            required
                                            min="-50"
                                            max="100"
                                            step="0.1"
                                            placeholder={`${data["e.g."]}, 25`}
                                            className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                style={{ paddingRight: '2.5rem' }}
                                            />
                                            <span className="arrow-buttons">
                                                <button type="button" className="arrow-btn" onClick={() => handleIncrement('temperature', 0.1, 100)} aria-label="Increment">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                </button>
                                                <button type="button" className="arrow-btn" onClick={() => handleDecrement('temperature', 0.1, -50)} aria-label="Decrement">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                            {data.feedFlow}
                                        </label>
                                        <div className="custom-number-input">
                                        <input
                                            type="number"
                                            name="feedFlow"
                                            value={formData.feedFlow}
                                            onChange={handleInputChange}
                                            required
                                            min="0"
                                            step="0.1"
                                            placeholder={`${data["e.g."]}, 100`}
                                            className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                style={{ paddingRight: '2.5rem' }}
                                            />
                                            <span className="arrow-buttons">
                                                <button type="button" className="arrow-btn" onClick={() => handleIncrement('feedFlow', 0.1, 1000)} aria-label="Increment">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                </button>
                                                <button type="button" className="arrow-btn" onClick={() => handleDecrement('feedFlow', 0.1, 0)} aria-label="Decrement">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                            {data.recovery}
                                        </label>
                                        <div className="custom-number-input">
                                        <input
                                            type="number"
                                            name="recovery"
                                            value={formData.recovery}
                                            onChange={handleInputChange}
                                            required
                                            min="0"
                                            max="100"
                                            step="0.1"
                                            placeholder={`${data["e.g."]}, 75`}
                                            className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                style={{ paddingRight: '2.5rem' }}
                                            />
                                            <span className="arrow-buttons">
                                                <button type="button" className="arrow-btn" onClick={() => handleIncrement('recovery', 0.1, 100)} aria-label="Increment">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                </button>
                                                <button type="button" className="arrow-btn" onClick={() => handleDecrement('recovery', 0.1, 0)} aria-label="Decrement">
                                                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Raw Water and Chemicals Dosing Section */}
                            <div className="border-t border-stone-300 dark:border-stone-600 pt-8">
                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Raw Water Cations */}
                                    <div>
                                        <h4 className="text-lg font-bold text-stone-800 dark:text-white mb-4">
                                            {data.rawWaterTitle} - Cations
                                        </h4>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.naPlus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="naPlus"
                                                    value={formData.naPlus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('naPlus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('naPlus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.kPlus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="kPlus"
                                                    value={formData.kPlus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('kPlus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('kPlus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.caPlusPlus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="caPlusPlus"
                                                    value={formData.caPlusPlus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('caPlusPlus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('caPlusPlus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.mgPlusPlus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="mgPlusPlus"
                                                    value={formData.mgPlusPlus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('mgPlusPlus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('mgPlusPlus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.srPlusPlus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="srPlusPlus"
                                                    value={formData.srPlusPlus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('srPlusPlus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('srPlusPlus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.baPlusPlus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="baPlusPlus"
                                                    value={formData.baPlusPlus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('baPlusPlus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('baPlusPlus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.fePlusPlus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="fePlusPlus"
                                                    value={formData.fePlusPlus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('fePlusPlus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('fePlusPlus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.mnPlusPlus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="mnPlusPlus"
                                                    value={formData.mnPlusPlus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('mnPlusPlus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('mnPlusPlus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Raw Water Anions */}
                                    <div>
                                        <h4 className="text-lg font-bold text-stone-800 dark:text-white mb-4">
                                            {data.rawWaterTitle} - Anions
                                        </h4>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.clMinus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="clMinus"
                                                    value={formData.clMinus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('clMinus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('clMinus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.fMinus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="fMinus"
                                                    value={formData.fMinus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('fMinus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('fMinus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.so4MinusMinus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="so4MinusMinus"
                                                    value={formData.so4MinusMinus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('so4MinusMinus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('so4MinusMinus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.po4MinusMinus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="po4MinusMinus"
                                                    value={formData.po4MinusMinus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('po4MinusMinus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('po4MinusMinus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.no3Minus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="no3Minus"
                                                    value={formData.no3Minus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('no3Minus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('no3Minus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.hco3Minus}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="hco3Minus"
                                                    value={formData.hco3Minus}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('hco3Minus', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('hco3Minus', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    SiO₂/SiO₃⁻⁻
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="sio2"
                                                    value={formData.sio2}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('sio2', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('sio2', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Chemicals Dosing */}
                                    <div>
                                        <h4 className="text-lg font-bold text-stone-800 dark:text-white mb-4">
                                            {data.chemicalsDosingTitle}
                                        </h4>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.dosingTank}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="dosingTank"
                                                    value={formData.dosingTank}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.1"
                                                    placeholder="L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('dosingTank', 0.1, 1000)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('dosingTank', 0.1, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.pumpCapacity}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="dosingPumpCapacity"
                                                    value={formData.dosingPumpCapacity}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.1"
                                                    placeholder="L/h"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('dosingPumpCapacity', 0.1, 1000)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('dosingPumpCapacity', 0.1, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.pulseRate}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="dosingPumpPulseRate"
                                                    value={formData.dosingPumpPulseRate}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    max="100"
                                                    step="0.1"
                                                    placeholder="%"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('dosingPumpPulseRate', 0.1, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('dosingPumpPulseRate', 0.1, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.acidAlkali}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="acidAlkali"
                                                    value={formData.acidAlkali}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.1"
                                                    placeholder="L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('acidAlkali', 0.1, 1000)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('acidAlkali', 0.1, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.concentration}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="concentration"
                                                    value={formData.concentration}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    max="100"
                                                    step="0.1"
                                                    placeholder="%"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('concentration', 0.1, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('concentration', 0.1, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.density}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="density"
                                                    value={formData.density}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="g/cm³"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('density', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('density', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.dose}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="dose"
                                                    value={formData.dose}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.01"
                                                    placeholder="mg/L"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('dose', 0.01, 100)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('dose', 0.01, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-stone-700 dark:text-stone-300 mb-2">
                                                    {data.dosingPump}
                                                </label>
                                                <div className="custom-number-input">
                                                <input
                                                    type="number"
                                                    name="dosingPump"
                                                    value={formData.dosingPump}
                                                    onChange={handleInputChange}
                                                    min="0"
                                                    step="0.1"
                                                    placeholder="L/h"
                                                    className="w-full px-4 py-3 border border-stone-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-stone-700 dark:text-white transition-colors duration-300"
                                                        style={{ paddingRight: '2.5rem' }}
                                                    />
                                                    <span className="arrow-buttons">
                                                        <button type="button" className="arrow-btn" onClick={() => handleIncrement('dosingPump', 0.1, 1000)} aria-label="Increment">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 8 4 4 4-4"/></svg>
                                                        </button>
                                                        <button type="button" className="arrow-btn" onClick={() => handleDecrement('dosingPump', 0.1, 0)} aria-label="Decrement">
                                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="m6 12 4-4 4 4"/></svg>
                                                        </button>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center pt-6">
                                <button
                                    type="submit"
                                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-12 rounded-lg transition-colors duration-300 text-lg"
                                >
                                    {data.submitButton}
                                </button>
                            </div>
                        </form>
                    </div>
                </Animated>
            </div>
        </div>
    );
};

export default AntiscalantProjectionPage; 