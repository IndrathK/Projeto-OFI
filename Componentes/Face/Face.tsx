import React from 'react';
import './Face.css';
import './assets';
import path from 'path';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Style.css';

function Face (){

    const data = [
        {id: '1', Image: path.join(__dirname, 'assets/eletromax_papel.jpg') },
        {id: '2', Image: path.join(__dirname, 'assets/eletromax2.jpg') },
        {id: '3', Image: path.join(__dirname, 'assets/eletromax2old.jpg') },
    ]

    return(
        <div className='Container__Face'>
            <Swiper
            slidesPerView={1}
            pagination={{clickable: true}}
            navigation
            
            >
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.Image} alt='Slider' className='slider-item'/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Face;