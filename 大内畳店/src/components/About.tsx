import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-washi relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-igusa/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-navy mb-6">店舗紹介</h2>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">創業80年<br />「町の信頼できる畳屋さん」として地域に根付いて。</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            （有）大内畳店は、心を込めた丁寧な仕事で皆様の暮らしを支えて参ります。<br /><br />
                            『心地よい』を、今日から。
                        </p>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">会社名</dt>
                                    <dd className="mt-1 text-sm text-gray-900 border-b border-gray-100 pb-2">（有）大内畳店</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">代表者</dt>
                                    <dd className="mt-1 text-sm text-gray-900 border-b border-gray-100 pb-2">佐藤　新悟</dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">所在地</dt>
                                    <dd className="mt-1 text-sm text-gray-900 border-b border-gray-100 pb-2">
                                        〒963-8822 郡山市昭和一丁目6-20<br />
                                        <span className="text-xs text-gray-500">（イオンタウン郡山から徒歩５分）</span>
                                    </dd>
                                </div>
                                <div className="sm:col-span-2">
                                    <dt className="text-sm font-medium text-gray-500">Instagram</dt>
                                    <dd className="mt-1 text-sm text-gray-900 border-b border-gray-100 pb-2">
                                        <a
                                            href="https://www.instagram.com/ouchi_tatami_store/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:text-blue-800 hover:underline"
                                        >
                                            https://www.instagram.com/ouchi_tatami_store/
                                        </a>
                                    </dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">電話番号</dt>
                                    <dd className="mt-1 text-sm text-gray-900">024-944-5286</dd>
                                </div>
                                <div className="sm:col-span-1">
                                    <dt className="text-sm font-medium text-gray-500">営業時間</dt>
                                    <dd className="mt-1 text-sm text-gray-900">8:00〜18:00（日曜定休）</dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    {/* Map / Image Area */}
                    <div className="h-full min-h-[400px] bg-gray-200 rounded-lg overflow-hidden relative">
                        {/* Map Placeholder */}
                        <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                            <span className="text-gray-500 font-bold">Google Map Loading...</span>
                        </div>
                        {/* In production, embed Google Maps iframe here */}
                        <iframe
                            title="map"
                            className="absolute inset-0 w-full h-full opacity-80 hover:opacity-100 transition-opacity"
                            src="https://maps.google.com/maps?q=%E3%80%92963-8822%20%E7%A6%8F%E5%B3%B6%E7%9C%8C%E9%83%A1%E5%B1%B1%E5%B8%82%E6%98%AD%E5%92%8C%E4%B8%80%E4%B8%81%E7%9B%AE6-20%20%E5%A4%A7%E5%86%85%E7%95%B3%E5%BA%97&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
