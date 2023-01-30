import React, { useEffect, useState } from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//images
import testimoni1 from '../assets/images/harrysyles.jpg'
import testimoni2 from '../assets/images/niallhoran.jpg'
import testimoni3 from '../assets/images/louis.jpg'

const Testimony = () => {

    const [testi, setTesti] = useState([])
    useEffect(()=> {
        setTesti([
        {
            id: 1,
            name: 'Niall Horan',
            image: testimoni1,
            skill: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.'
        },
        {
            id: 2,
            name: 'Harry Styles',
            image: testimoni2,
            skill: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.'
        },
        {
            id: 3,
            name: 'Louis Tomlinson',
            image: testimoni3,
            skill: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.'
        }, 
        {
            id: 4,
            name: 'Niall Horan',
            image: testimoni1,
            skill: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.'
        },
        {
            id: 5,
            name: 'Harry Styles',
            image: testimoni2,
            skill: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.'
        },
        {
            id: 6,
            name: 'Louis Tomlinson',
            image: testimoni3,
            skill: 'Web Developer',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.'
        },                               
        ])
    }, [])

return (
        <>
            <h1 className='text-center text-3xl font-semibold'>Their opinion about peworld</h1>
            <Swiper
            className='w-8/12 h-fit'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={3}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >          
                {testi.map((item)=> (
                <SwiperSlide key={item.id} className='slide'>
                            <div className="card w-72 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={item.image} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{item.name}</h2>
                                    <p className='text-slate-400'>{item.skill}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            
                </SwiperSlide>
                ))}
            </Swiper>
        </>
    )

}

export default Testimony;
