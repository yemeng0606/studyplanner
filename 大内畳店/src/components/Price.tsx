import React from 'react';

const Price: React.FC = () => {
    const priceList = [
        {
            category: '新畳（1帖あたり）',
            items: [
                { name: '並級品', price: '12,000円〜', description: 'アパート・貸家向け' },
                { name: '中級品', price: '16,000円〜', description: '一般住宅・子供部屋向け' },
                { name: '上級品', price: '22,000円〜', description: '客間・リビング向け（国産表使用）' },
                { name: '特上品', price: '30,000円〜', description: 'こだわりの和室に（最高級国産表使用）' },
            ]
        },
        {
            category: '表替え（1帖あたり）',
            items: [
                { name: '並級品', price: '6,000円〜', description: 'リーズナブルな価格' },
                { name: '中級品', price: '9,000円〜', description: '一番人気のスタンダード' },
                { name: '上級品', price: '14,000円〜', description: '美しい色艶と耐久性' },
                { name: '特上品', price: '20,000円〜', description: '極上の肌触りと香り' },
            ]
        },
        {
            category: 'その他工事',
            items: [
                { name: '裏返し', price: '3,800円〜', description: '3〜5年以内の畳に最適' },
                { name: '古畳処分費', price: '1,500円〜', description: '入れ替え時の処分費用' },
                { name: '半帖タタミ', price: '70%掛け', description: '1帖価格の70%となります' },
            ]
        }
    ];

    return (
        <section id="price" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">料金の目安</h2>
                    <p className="text-gray-600">
                        明朗会計を心がけております。お見積もりは無料ですので、お気軽にご相談ください。<br />
                        ※表示価格は全て税抜価格です。
                    </p>
                </div>

                <div className="space-y-12">
                    {priceList.map((section, idx) => (
                        <div key={idx} className="bg-washi/30 rounded-lg p-6 md:p-8">
                            <h3 className="text-xl font-bold text-navy mb-6 border-b-2 border-igusa/30 pb-2 inline-block">
                                {section.category}
                            </h3>
                            <div className="space-y-4">
                                {section.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex flex-col md:flex-row justify-between md:items-center py-3 border-b border-gray-100 last:border-0 hover:bg-white/50 px-2 rounded transition-colors">
                                        <div className="mb-1 md:mb-0">
                                            <span className="font-bold text-gray-800">{item.name}</span>
                                            <span className="text-sm text-gray-500 ml-2 md:ml-4 block md:inline">{item.description}</span>
                                        </div>
                                        <div className="font-bold text-igusa text-lg">
                                            {item.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Price;
