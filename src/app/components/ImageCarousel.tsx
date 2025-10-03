'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function ImageCarousel() {
    const slides = [
        '/imagens/pontes.png',
        '/imagens/tema.png'
    ];
    return (
        // <Swiper
        //     modules={[Autoplay]}
        //     spaceBetween={10}
        //     slidesPerView={1}
        //     loop
        //     // explicitly set autoplay delay and ensure it restarts after interactions
        //     autoplay={{ delay: 2000, disableOnInteraction: false }}
        //     onInit={(swiper) => {
        //         // ensure autoplay is started programmatically if module wasn't auto-registered
        //         try {
        //             if (swiper && swiper.autoplay && !swiper.autoplay.running) swiper.autoplay.start();
        //         } catch (e) {
        //             // noop - runtime might not expose autoplay until module registered
        //         }
        //     }}
        // >
        //     {slides.map((s) => (
        //         <SwiperSlide key={s}>
        //             <img src={s} alt="slide" className="w-full h-64 object-cover rounded-lg shadow" />
        //         </SwiperSlide>
        //     ))}
        // </Swiper>
        <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 8000, disableOnInteraction: false }}
            loop
            coverflowEffect={{
                rotate: 30,
                stretch: 0,
                depth: 200,
                modifier: 2,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
        >
            {slides.map((src, idx) => (
                <SwiperSlide
                    key={idx}
                    className="flex items-center justify-center"
                >
                    <img
                        style={{
                            minWidth: '200px',
                            minHeight: '380px',
                            height: 'auto',
                        }}
                        src={src}
                        className="rounded-2xl shadow-2xl object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}