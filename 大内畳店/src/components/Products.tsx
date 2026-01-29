import React from 'react';

const Products: React.FC = () => {
    const services = [
        {
            title: '新畳 (新規製作)',
            description: '部屋の寸法に合わせて畳床から新しく作ります。リフォームや新築に最適です。',
            price: '12,000円〜',
            icon: '🌿'
        },
        {
            title: '表替え (張り替え)',
            description: '畳床はそのままに、畳表（ゴザ）と縁（ヘリ）を新しくします。3〜5年が目安です。',
            price: '6,000円〜',
            icon: '✨'
        },
        {
            title: '裏返し',
            description: '現在の畳表を裏返して再利用します。コストを抑えてリフレッシュできます。',
            price: '3,800円〜',
            icon: '🔄'
        }
    ];

    return (
        <section id="products" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">畳を知る</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        お客様のライフスタイルやご予算に合わせて、最適なプランをご提案いたします。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-washi p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                            <div className="text-4xl mb-4 text-center">{service.icon}</div>
                            <h3 className="text-xl font-bold text-navy mb-3 text-center">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                {service.description}
                            </p>
                            <div className="text-center">
                                <span className="text-igusa font-bold text-lg">{service.price}</span>
                                <span className="text-gray-500 text-sm"> / 1帖</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-navy text-washi p-8 md:p-12 rounded-lg">
                    <div className="md:flex items-center justify-between">
                        <div className="mb-6 md:mb-0 md:w-2/3">
                            <h3 className="text-2xl font-serif mb-3">機能性畳のご案内</h3>
                            <p className="opacity-90 leading-relaxed">
                                従来のい草だけでなく、カビ・ダニに強い「和紙畳」や、水拭きできる「樹脂畳」、
                                フローリングに置くだけの「置き畳」など、現代の暮らしに合わせた高機能な畳も取り扱っております。
                                カラーバリエーションも豊富ですので、インテリアに合わせてお選びいただけます。
                            </p>
                        </div>
                        <div className="md:w-1/3 text-center md:text-right">
                            <a href="#contact" className="inline-block bg-white text-navy font-bold py-3 px-8 rounded-full hover:bg-igusa hover:text-white transition-colors">
                                カタログを見る
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
