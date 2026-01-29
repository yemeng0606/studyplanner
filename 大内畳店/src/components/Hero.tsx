import React from 'react';
import heroImage from '../assets/hero.png';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="朝の光が差し込む畳の部屋"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div> {/* Overlay for readability */}
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center md:items-start">

                {/* Vertical Text Container */}
                <div className="absolute top-1/2 left-1/2 md:left-20 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 bg-white/80 p-8 md:p-12 shadow-xl backdrop-blur-sm rounded-sm">
                    <div className="writing-vertical-rl text-navy font-serif tracking-widest leading-loose h-64 md:h-80 flex flex-col items-center justify-center">
                        <h1 className="text-3xl md:text-5xl font-bold whitespace-nowrap py-4">
                            思い出、畳む。
                        </h1>
                        <h1 className="text-3xl md:text-5xl font-bold whitespace-nowrap py-4 mt-8">
                            丁寧な暮らし。
                        </h1>
                    </div>
                </div>

                {/* CTA Button (positioned bottom) */}
                <div className="absolute bottom-20 left-0 right-0 text-center">
                    <a
                        href="#contact"
                        className="inline-block bg-igusa hover:bg-[#8FB365] text-white font-bold py-4 px-10 rounded-full shadow-lg transform transition hover:scale-105 duration-300 text-lg tracking-wider"
                    >
                        お問い合わせ・見積もり依頼
                    </a>
                    <p className="mt-4 text-white text-sm shadow-black drop-shadow-md">
                        まずは無料でお見積もりから
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
