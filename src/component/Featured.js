import React, { Component } from 'react'
import './styles/article2.css'
import FeatCard from './FeatCard'
import google from './pic/company/google.png'


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
class Featured extends Component {
    render() {
        return (
            <div className='featured'>
                <h1>{this.props.lang === 'English' ? 'featured Job' : 'شغل های برتر'}</h1>
                <div className='cards'>
                    <FeatCard title={this.props.lang === 'English' ? 'Technical Support Specialist' : 'کارشناس پشتیبانی فنی'}
                        active='active'
                        time={this.props.lang === 'English' ? 'PART-TIME' : 'پاره وقت'}
                        price='20,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Senior UX Designer' : 'UX طراح ارشد'}
                        active='active'
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='120,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Marketing Officer' : 'افسر بازاریابی'}
                        active=''
                        time={this.props.lang === 'English' ? 'Internship' : 'کارآموزی'}
                        price='34,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Junior Graphic Designer' : 'طراح گرافیک جوان'}
                        active=''
                        time={this.props.lang === 'English' ? 'Internship' : 'کارآموزی'}
                        price='100,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Interaction Designer' : 'طراح تعامل'}
                        active=''
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='70,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Project Manager' : 'مدیر پروژه'}
                        active=''
                        time={this.props.lang === 'English' ? 'Part-Time' : 'پاره وقت'}
                        price='20,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Software Engineer' : 'مهندس نرم افزار'}
                        active='active'
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='80,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Visual Designer' : 'طراح بصری'}
                        active=''
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='60,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Project Manager' : 'مدیر پروژه'}
                        active=''
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='20,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Front End Developer' : 'Front End توسعه دهنده'}
                        active=''
                        time={this.props.lang === 'English' ? 'Part-Time' : 'پاره وقت'}
                        price='25,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Senior UX Designer' : 'UX طراح ارشد'}
                        active=''
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='80,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    <FeatCard title={this.props.lang === 'English' ? 'Marketing Manager' : 'مدیر بازاریابی'}
                        active='active'
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='69,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                </div>'




                <Swiper
                    className='card mobile'
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={35}
                    slidesPerView={1}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                >
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Technical Support Specialist' : 'کارشناس پشتیبانی فنی'}
                        active='active'
                        time={this.props.lang === 'English' ? 'PART-TIME' : 'پاره وقت'}
                        price='20,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Senior UX Designer' : 'UX طراح ارشد'}
                        active='active'
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='120,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Marketing Officer' : 'افسر بازاریابی'}
                        active=''
                        time={this.props.lang === 'English' ? 'Internship' : 'کارآموزی'}
                        price='34,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Junior Graphic Designer' : 'طراح گرافیک جوان'}
                        active=''
                        time={this.props.lang === 'English' ? 'Internship' : 'کارآموزی'}
                        price='100,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Interaction Designer' : 'طراح تعامل'}
                        active=''
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='70,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Project Manager' : 'مدیر پروژه'}
                        active=''
                        time={this.props.lang === 'English' ? 'Part-Time' : 'پاره وقت'}
                        price='20,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Software Engineer' : 'مهندس نرم افزار'}
                        active='active'
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='80,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Visual Designer' : 'طراح بصری'}
                        active=''
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='60,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Project Manager' : 'مدیر پروژه'}
                        active=''
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='20,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Front End Developer' : 'Front End توسعه دهنده'}
                        active=''
                        time={this.props.lang === 'English' ? 'Part-Time' : 'پاره وقت'}
                        price='25,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Senior UX Designer' : 'UX طراح ارشد'}
                        active=''
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='80,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FeatCard title={this.props.lang === 'English' ? 'Marketing Manager' : 'مدیر بازاریابی'}
                        active='active'
                        time={this.props.lang === 'English' ? 'Full-Time' : 'تمام وقت'}
                        price='69,000'
                        ci={google} cn={this.props.lang === 'English' ? 'Google Inc' : 'گوگل' }
                        loc={this.props.lang === 'English' ? 'Iran,Tehran' :  'ایران , تهران'} />
                    </SwiperSlide>



















                </Swiper>
            </div>
        )
    }
}

export default Featured
