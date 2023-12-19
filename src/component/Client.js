import React, { Component } from 'react'
import './styles/article2.css'
import user1 from './pic/client/Image.png'
import user2 from './pic/client/Image (1).png'
import user3 from './pic/client/Image (2).png'
import ClientCard from './ClientCard'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
class Client extends Component {
    render() {
        return (
            <div className='client'>
                <h1>Clients Testimonial</h1>
                <Swiper
                    className='card mobile'
                    modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
                    pagination={{ clickable: false }}
                    spaceBetween={35}
                    slidesPerView={1}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        980: {
                          slidesPerView: 3,
                        },
                      }}
                >
                    <SwiperSlide>
                        <ClientCard
                            star={5}
                            caption='“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”'
                            userPic={user1}
                            userName='Robert Fox'
                            userJob='UI/UX Designer'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientCard
                            star={1}
                            caption='“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”'
                            userPic={user2}
                            userName='Bessie Cooper'
                            userJob='Creative Director'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientCard
                            star={2}
                            caption='“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”'
                            userPic={user3}
                            userName='Jane Cooper'
                            userJob='Photographer'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientCard
                            star={3}
                            caption='“Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui. Maecenas ac placerat metus, in faucibus est.”'
                            userPic={user1}
                            userName='Robert Fox'
                            userJob='UI/UX Designer'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientCard
                            star={5}
                            caption='“Mauris eget lorem odio. Mauris convallis justo molestie metus aliquam lacinia. Suspendisse ut dui vulputate augue condimentum ornare. Morbi vitae tristique ante”'
                            userPic={user2}
                            userName='Bessie Cooper'
                            userJob='Creative Director'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ClientCard
                            star={4}
                            caption='“Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse et magna quis nibh accumsan venenatis sit amet id orci. Duis vestibulum bibendum dapibus.”'
                            userPic={user3}
                            userName='Jane Cooper'
                            userJob='Photographer'
                        />
                    </SwiperSlide>

                </Swiper>
            </div>
        )
    }
}

export default Client
