import React from 'react';

const FixedPhoneButton: React.FC = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pb-safe">
            <a
                href="tel:0249445286"
                className="block bg-igusa hover:bg-[#8FB365] text-white text-center py-4 font-bold shadow-lg flex items-center justify-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>お電話でのお問い合わせ</span>
            </a>
        </div>
    );
};

export default FixedPhoneButton;
