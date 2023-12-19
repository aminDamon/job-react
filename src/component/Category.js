import React, { Component } from 'react'
import PopCard from './PopCard'
import pic1 from './pic/category/1.png'
import pic2 from './pic/category/2.png'
import pic3 from './pic/category/3.png'
import pic4 from './pic/category/4.png'
import pic5 from './pic/category/5.png'
import pic6 from './pic/category/6.png'
import pic7 from './pic/category/7.png'
import pic8 from './pic/category/8.png'


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
class Category extends Component {
    render() {
        return (
            <div className='category'>
                <h1 className='title'>{this.props.lang === "English" ? "Popular category" : "دسته بندی های محبوب"}</h1>
                <div className='item'>
                    <PopCard
                        src={pic1}
                        title={this.props.lang === "English" ? "Graphics & Design" : "گرافیک و طراحی"}
                        caption={this.props.lang === "English" ? "357 Open position" : "357 موقعیت باز"} />
                    <PopCard
                        src={pic2}
                        title={this.props.lang === "English" ? "Code & Programming" : "کد و برنامه نویسی"}
                        caption={this.props.lang === "English" ? "312 Open position" : "312 موقعیت باز"} />
                    <PopCard
                        src={pic3}
                        title={this.props.lang === "English" ? "Digital Marketing" : "بازاریابی دیجیتال"}
                        caption={this.props.lang === "English" ? "297 Open position" : "297 موقعیت باز"} />
                    <PopCard
                        src={pic4}
                        title={this.props.lang === "English" ? "Video & Animation" : "ویدئو و انیمیشن"}
                        caption={this.props.lang === "English" ? "247 Open position" : "247 موقعیت باز"} />
                    <PopCard
                        src={pic5}
                        title={this.props.lang === "English" ? "Music & Audio" : "موسیقی و صدا"}
                        caption={this.props.lang === "English" ? "122 Open position" : "122 موقعیت باز"} />
                    <PopCard
                        src={pic6}
                        title={this.props.lang === "English" ? "Account & Finance" : "حساب و امور مالی"}
                        caption={this.props.lang === "English" ? "412 Open position" : "412 موقعیت باز"} />
                    <PopCard
                        src={pic7}
                        title={this.props.lang === "English" ? "Health & Care" : "مراقبت های بهداشتی"}
                        caption={this.props.lang === "English" ? "333 Open position" : "333 موقعیت باز"} />
                    <PopCard
                        src={pic8}
                        title={this.props.lang === "English" ? "Data & Science" : "داده و علم"}
                        caption={this.props.lang === "English" ? "249 Open position" : "249 موقعیت باز"} />
                </div>


                <Swiper
                    className='item mobile'
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={5}
                    slidesPerView={2}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <PopCard
                            src={pic1}
                            title={this.props.lang === "English" ? "Graphics & Design" : "گرافیک و طراحی"}
                            caption={this.props.lang === "English" ? "357 Open position" : "357 موقعیت باز"}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopCard
                            src={pic2}
                            title={this.props.lang === "English" ? "Code & Programming" : "کد و برنامه نویسی"}
                            caption={this.props.lang === "English" ? "312 Open position" : "312 موقعیت باز"}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopCard
                            src={pic3}
                            title={this.props.lang === "English" ? "Digital Marketing" : "بازاریابی دیجیتال"}
                            caption={this.props.lang === "English" ? "297 Open position" : "297 موقعیت باز"}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopCard
                            src={pic4}
                            title={this.props.lang === "English" ? "Video & Animation" : "ویدئو و انیمیشن"}
                            caption={this.props.lang === "English" ? "247 Open position" : "247 موقعیت باز"}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopCard
                            src={pic5}
                            title={this.props.lang === "English" ? "Music & Audio" : "موسیقی و صدا"}
                            caption={this.props.lang === "English" ? "122 Open position" : "122 موقعیت باز"}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopCard
                            src={pic6}
                            title={this.props.lang === "English" ? "Account & Finance" : "حساب و امور مالی"}
                            caption={this.props.lang === "English" ? "412 Open position" : "412 موقعیت باز"}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopCard
                            src={pic7}
                            title={this.props.lang === "English" ? "Health & Care" : "مراقبت های بهداشتی"}
                            caption={this.props.lang === "English" ? "333 Open position" : "333 موقعیت باز"}

                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopCard
                            src={pic8}
                            title={this.props.lang === "English" ? "Data & Science" : "داده و علم"}
                            caption={this.props.lang === "English" ? "249 Open position" : "249 موقعیت باز"}

                        />
                    </SwiperSlide>









                </Swiper>

            </div>
        )
    }
}

export default Category
