import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">お問い合わせ</h2>
                    <p className="text-gray-600">
                        お見積もりやご相談など、お気軽にお問い合わせください。<br />
                        以下の方法で受け付けております。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Phone Section */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-navy/10 rounded-full flex items-center justify-center mb-4 text-navy">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">お電話</h3>
                        <p className="text-gray-500 mb-4 text-sm">受付時間 8:00〜18:00（日曜定休）</p>
                        <a href="tel:0249445286" className="text-3xl font-bold text-navy hover:text-opacity-80 transition-colors">
                            024-944-5286
                        </a>
                    </div>

                    {/* LINE Section */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-[#06C755]/10 rounded-full flex items-center justify-center mb-4 text-[#06C755]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M12 2.5c-5.52 0-10 3.58-10 8c0 2.21 1.11 4.22 2.95 5.76c.42.34.35 1.07.25 1.57c-.1.52-.46 1.95-.46 1.95c0 0-.08.41.28.58c.36.17.84.09 3.05-1.35c.29-.19.64-.32 1-.3c.96.16 1.95.25 2.93.25c5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">公式LINE</h3>
                        <p className="text-gray-500 mb-4 text-sm">友だち追加でお気軽にご相談</p>

                        {/* Placeholder QR */}
                        <div className="w-32 h-32 bg-gray-200 mb-4 flex items-center justify-center border-2 border-dashed border-gray-400">
                            <span className="text-xs text-gray-500">LINE QR Code<br />(Placeholder)</span>
                        </div>

                        <a href="#" className="text-[#06C755] font-bold hover:underline">
                            https://line.me/R/ti/p/placeholder
                        </a>
                    </div>

                    {/* Instagram Section */}
                    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-[#E1306C]/10 rounded-full flex items-center justify-center mb-4 text-[#E1306C]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.069-4.85.069-3.204 0-3.584-.012-4.849-.069-3.225-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.849 0-3.204.012-3.584.069-4.849.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Instagram</h3>
                        <p className="text-gray-500 mb-4 text-sm">施工事例や最新情報を発信中</p>

                        {/* Placeholder QR */}
                        <div className="w-32 h-32 bg-gray-200 mb-4 flex items-center justify-center border-2 border-dashed border-gray-400">
                            <span className="text-xs text-gray-500">Instagram QR<br />(Placeholder)</span>
                        </div>

                        <a
                            href="https://www.instagram.com/ouchi_tatami_store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E1306C] font-bold hover:underline break-all"
                        >
                            @ouchi_tatami_store
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
