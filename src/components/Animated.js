import React, { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (options = { rootMargin: '0px', threshold: 0.1 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !hasAnimated) {
                setIsVisible(true);
                setHasAnimated(true);
                observer.unobserve(entry.target);
            }
        }, options);
        
        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [options, hasAnimated]);

    return [ref, isVisible];
};

const Animated = ({ children, type = 'fadeInUp', delay = 0, className = '', duration = 1000 }) => {
    const [ref, isVisible] = useScrollAnimation();
    const animationClass = `transition-all duration-[1000ms] transform ${className}`;
    
    const styles = {
        'fadeInUp': {
            initial: 'opacity-0 translate-y-10',
            visible: 'opacity-100 translate-y-0',
        },
        'fadeIn': {
            initial: 'opacity-0',
            visible: 'opacity-100',
        },
        'fadeInDown': {
            initial: 'opacity-0 -translate-y-10',
            visible: 'opacity-100 translate-y-0',
        },
        'slideInLeft': {
            initial: 'opacity-0 -translate-x-12',
            visible: 'opacity-100 translate-x-0',
        },
        'slideInRight': {
            initial: 'opacity-0 translate-x-12',
            visible: 'opacity-100 translate-x-0',
        },
        'zoomIn': {
            initial: 'opacity-0 scale-75',
            visible: 'opacity-100 scale-100',
        },
        'bounceIn': {
            initial: 'opacity-0 scale-50',
            visible: 'opacity-100 scale-100',
        },
        'flipIn': {
            initial: 'opacity-0 rotate-y-90',
            visible: 'opacity-100 rotate-y-0',
        },
        'rotateIn': {
            initial: 'opacity-0 -rotate-12',
            visible: 'opacity-100 rotate-0',
        },
        'scaleIn': {
            initial: 'opacity-0 scale-0',
            visible: 'opacity-100 scale-100',
        }
    };
    
    const style = styles[type] || styles.fadeInUp;

    return (
        <div 
            ref={ref} 
            className={`${animationClass} ${isVisible ? style.visible : style.initial}`} 
            style={{transitionDelay: `${delay}ms`}}
        >
            {children}
        </div>
    );
};

export default Animated; 