// import React from 'react'
// import Stripe from './Stripe'

// const Stripes = () => {
//     let data = [
//         {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 52},
//         {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 2},
//         {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 12},
//         {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 52},
//         {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 2},
//         // {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 12},
//     ]
//   return (
//     <div className='flex items-center bg-red-600 mt-32 overflow-hidden'>
//       {data.map((elem, index) => <Stripe key={index} val={elem} />)}
//     </div>
//   )
// }

// export default Stripes

import React, { useState, useEffect } from 'react';
import Stripe from './Stripe';

const Stripes = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Adjust the width as per your mobile breakpoint
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let data = [
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 52},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 2},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg", number: 12},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg", number: 52},
        {url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg", number: 2},
    ];

    if (isMobile) {
        data = data.slice(0, 2); // Render only the first item on mobile
    }

    return (
        <div className='flex items-center mb-24 mt-32 sm:mt-32'>
            {data.map((elem, index) => <Stripe key={index} val={elem} />)}
        </div>
    );
};

export default Stripes;
