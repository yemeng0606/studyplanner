import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy text-white text-opacity-80 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-xl font-serif font-bold tracking-wider text-white">（有）大内畳店</h2>
                        <p className="text-sm mt-1">〒963-8822 郡山市昭和一丁目6-20</p>
                    </div>
                    <div className="flex space-x-6 text-sm">
                        <a href="#home" className="hover:text-igusa transition-colors">ホーム</a>
                        <a href="#products" className="hover:text-igusa transition-colors">畳を知る</a>
                        <a href="#gallery" className="hover:text-igusa transition-colors">施工事例</a>
                        <a href="#contact" className="hover:text-igusa transition-colors">お問い合わせ</a>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
                    &copy; {new Date().getFullYear()} Finite Company Ouchi Tatami Shop. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
