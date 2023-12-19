import React, { Component } from 'react'
import Card from './Card'
import arrowTwo from './pic/arrow/Arrows (1).png'
import arrowOne from './pic/arrow/Arrows.png'
import cardOne from './pic/how/1.png'
import cardTwo from './pic/how/2.png'
import cardThree from './pic/how/3.png'
import cardFour from './pic/how/4.png'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
class How extends Component {
    render() {
        return (
            <div className='how'>
                <h1>{this.props.lang === "English" ? 'How jobpilot work' : "نحوه کار با جاب پیلتو"}</h1>
                <div className='arrows'>
                    <img src={arrowOne} />
                    <img src={arrowTwo} />
                    <img src={arrowOne} />
                </div>
                <div className='cards'>
                    <Card pic={cardOne} br={false}
                        title={this.props.lang === "English" ? 'Create account' : 'ایجاد حساب کاربری'}
                        caption={this.props.lang === "English" ? 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'} />
                    <Card pic={cardTwo} br={false}
                        title={this.props.lang === "English" ? 'Upload CV/Resume' : 'آپلود رزومه'}
                        caption={this.props.lang === "English" ? 'Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'} />
                    <Card pic={cardThree} br={false}
                        title={this.props.lang === "English" ? 'Find suitable job' : 'شغل مناسب پیدا کنید'}
                        caption={this.props.lang === "English" ? 'Phasellus quis eleifend ex. Morbi nec fringilla nibh.' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'} />
                    <Card pic={cardFour} br={false}
                        title={this.props.lang === "English" ? 'Apply job' : 'درخواست شغل'}
                        caption={this.props.lang === "English" ? 'Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'} />
                </div>

                <Swiper
                    className='cards mobile'
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={1}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                  }} 
                // onSlideChange={() => console.log('slide change')} 
                // onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide>
                        <Card pic={cardOne} br={true}
                            title={this.props.lang === "English" ? 'Create account' : 'ایجاد حساب کاربری'}
                            caption={this.props.lang === "English" ? 'Aliquam facilisis egestas sapien, nec tempor leo tristique at.' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card pic={cardTwo} br={true}
                            title={this.props.lang === "English" ? 'Upload CV/Resume' : 'آپلود رزومه'}
                            caption={this.props.lang === "English" ? 'Curabitur sit amet maximus ligula. Nam a nulla ante. Nam sodales' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card pic={cardThree} br={true}
                            title={this.props.lang === "English" ? 'Find suitable job' : 'شغل مناسب پیدا کنید'}
                            caption={this.props.lang === "English" ? 'Phasellus quis eleifend ex. Morbi nec fringilla nibh.' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card pic={cardFour} br={true}
                            title={this.props.lang === "English" ? 'Apply job' : 'درخواست شغل'}
                            caption={this.props.lang === "English" ? 'Curabitur sit amet maximus ligula. Nam a nulla ante, Nam sodales purus.' : 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'} />
                    </SwiperSlide>
                </Swiper>
            </div>
        )
    }
}

export default How
