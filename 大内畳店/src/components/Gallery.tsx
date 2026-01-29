import React from 'react';

const Gallery: React.FC = () => {
    // Placeholder data for gallery images
    // In a real app, these would be imported images or CMS data
    const works = [
        { id: 1, title: 'モダンな和室', category: '新畳', size: 'col-span-1 md:col-span-2 row-span-2', color: 'bg-gray-200', image: '/images/gallery/modern-room.png' },
        { id: 2, title: '縁なし畳（琉球畳）', category: '新畳', size: 'col-span-1 row-span-1', color: 'bg-gray-300', image: '/images/gallery/ryukyu-tatami.png' },
        { id: 3, title: '古民家再生', category: '表替え', size: 'col-span-1 row-span-1', color: 'bg-gray-400', image: '/images/gallery/kominka.png' },
        { id: 5, title: '子供部屋', category: '機能性畳', size: 'col-span-1 md:col-span-2 row-span-1', color: 'bg-gray-300', image: '/images/gallery/kids-room.png' },
    ];

    return (
        <section id="gallery" className="py-20 bg-washi">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-navy mb-4">施工事例</h2>
                    <p className="text-gray-600">熟練の職人が仕上げた美しい空間をご覧ください。</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-3 gap-4 h-[800px] md:h-[600px]">
                    {works.map((work) => (
                        <div key={work.id} className={`relative group overflow-hidden rounded-lg ${work.size} ${work.color}`}>
                            {/* Image */}
                            <img
                                src={work.image}
                                alt={work.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay on Hover */}
                            <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                                <h3 className="text-xl font-bold mb-2">{work.title}</h3>
                                <p className="text-sm">{work.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">※写真はイメージです</p>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
