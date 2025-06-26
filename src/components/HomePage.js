import React from 'react';
import { ChevronsDown, ArrowRight } from 'lucide-react';
import Animated from './Animated';

const HomePage = ({ data, handleNavClick }) => {
    return (
    <>
        <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            <div 
                className="absolute z-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1')`
                }}
            ></div>
            <div className="relative z-20 text-center px-4">
                <Animated type="fadeInDown">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-shadow-xl leading-tight">{data.home.hero.title}</h1>
                </Animated>
                <Animated type="fadeInUp" delay={300}>
                    <p className="max-w-4xl mx-auto text-xl md:text-2xl text-stone-200 mb-10 text-shadow leading-relaxed">{data.home.hero.subtitle}</p>
                </Animated>
                <Animated type="zoomIn" delay={600}>
                    <button 
                        onClick={() => handleNavClick(2)} 
                        className="inline-flex items-center justify-center px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full text-xl md:text-2xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-red-500/50 hover:-translate-y-1"
                    >
                        {data.home.hero.cta}
                        <ArrowRight className={`${data.dir === 'ltr' ? 'ms-3' : 'me-3'} h-6 w-6`} />
                    </button>
                </Animated>
            </div>
            <div className="absolute bottom-10 z-20 animate-bounce">
                <ChevronsDown size={40} className="text-white" />
            </div>
        </section>

        <div className="bg-gray-50 dark:bg-stone-900 py-20 relative">
             <div className="container mx-auto px-4">
                <Animated type="fadeInUp">
                    <h3 className="text-center text-lg font-semibold text-gray-900 dark:text-stone-200 uppercase tracking-wider mb-12">{data.home.clients.title}</h3>
                </Animated>
                <div className="relative overflow-hidden group">
                     <div className="flex animate-marquee group-hover:pause">
                         {data.home.clients.logos.concat(data.home.clients.logos).map((logo, index) => (
                             <div key={index} className="flex-shrink-0 mx-12 flex items-center justify-center">
                                 <img 
                                     src={logo} 
                                     alt={`Client logo ${index + 1}`} 
                                     className="h-16 w-auto object-contain opacity-70 dark:opacity-90 transition-all duration-300 hover:opacity-100 hover:scale-110" 
                                     onError={(e) => {
                                         e.target.style.display = 'none';
                                     }}
                                 />
                             </div>
                         ))}
                     </div>
                 </div>
             </div>
         </div>
        
        <section className="bg-red-700 text-white bg-cover bg-center relative overflow-hidden" style={{backgroundImage: `linear-gradient(rgba(219, 39, 48, 0.8), rgba(185, 28, 28, 0.9)), url('https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <Animated type="fadeInUp">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg">{data.home.ctaBanner.title}</h2>
                </Animated>
                <Animated type="fadeInUp" delay={200}>
                    <p className="text-red-100 max-w-3xl mx-auto mb-10 text-xl leading-relaxed">{data.home.ctaBanner.subtitle}</p>
                </Animated>
                <Animated type="zoomIn" delay={400}>
                    <button 
                        onClick={() => handleNavClick(4)} 
                        className="px-10 py-5 bg-white text-red-600 font-bold rounded-full text-xl transition-all duration-300 transform hover:scale-110 shadow-xl hover:shadow-black/20 hover:-translate-y-1"
                    >
                        {data.home.ctaBanner.cta}
                    </button>
                </Animated>
            </div>
        </section>
    </>
    );
};

export default HomePage; 