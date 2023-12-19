import React, { Component } from 'react'
import './styles/header.css'
import Illustration from './pic/img/Illustration.png'
import searchIcon from './pic/svg/search.png'
import locationIcon from './pic/svg/fi_map-pin.png'
import live from './pic/benefit/Icon.png'
import comp from './pic/benefit/Icon (1).png'
import cand from './pic/benefit/Icon (2).png'
import Benefit from './Benefit'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            num1: {
                start1: 0,
                start2: 0,
                last1: 750,
                last2: 325
            },
            num2: {
                start1: 0,
                start2: 0,
                last1: 97,
                last2: 374
            },
            num3: {
                start1: 0,
                start2: 0,
                start3: 0,
                last1: 38,
                last2: 417,
                last3: 154,
            },
            num4: {
                start1: 0,
                start2: 0,
                last1: 7,
                last2: 532
            },
            refFlag: this.props.refFlag
        }

        this.inpRef = React.createRef()
    }

    componentDidMount() {
        window.addEventListener("scroll", (event) => {
            if (window.scrollY > 40) {
                this.benefitHandler()
            }
        })

    }
    componentDidUpdate(prevProps) {
        if (this.props.refFlag !== prevProps.refFlag) {
            this.inpRef.current.focus();
        }
    }
    benefitHandler = () => {
        setInterval(() => {
            this.setState(prevState => ({
                num1: {
                    ...prevState.num1,
                    start1: prevState.num1.start1 < prevState.num1.last1 ? prevState.num1.start1 + 1 : prevState.num1.start1,
                    start2: prevState.num1.start2 < prevState.num1.last2 ? prevState.num1.start2 + 1 : prevState.num1.start2,
                },
                num2: {
                    ...prevState.num2,
                    start1: prevState.num2.start1 < prevState.num2.last1 ? prevState.num2.start1 + 1 : prevState.num2.start1,
                    start2: prevState.num2.start2 < prevState.num2.last2 ? prevState.num2.start2 + 1 : prevState.num2.start2,
                },
                num3: {
                    ...prevState.num3,
                    start1: prevState.num3.start1 < prevState.num3.last1 ? prevState.num3.start1 + 1 : prevState.num3.start1,
                    start2: prevState.num3.start2 < prevState.num3.last2 ? prevState.num3.start2 + 1 : prevState.num3.start2,
                    start3: prevState.num3.start3 < prevState.num3.last3 ? prevState.num3.start3 + 1 : prevState.num3.start3,
                },
                num4: {
                    ...prevState.num4,
                    start1: prevState.num4.start1 < prevState.num4.last1 ? prevState.num4.start1 + 1 : prevState.num4.start1,
                    start2: prevState.num4.start2 < prevState.num4.last2 ? prevState.num4.start2 + 1 : prevState.num4.start2,
                },
            }));
        }, 50);
    };


    render() {
        return (
            <header>
                <div className='top'>
                    <div className='left'>
                        <h6>{(this.props.lang === "English"
                            ? "Find a job that suits your interest & skills."
                            : "شغلی را پیدا کنید که متناسب با علاقه و مهارت شما باشد.")}</h6>
                        <p>{(this.props.lang === "English"
                            ? "Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum."
                            : "لورم ایپسوم به سادگی متن ساختگی صنعت چاپ و حروفچینی است.")}</p>
                        <div className='search_box'>
                            <img src={searchIcon} />
                            <input type='text' ref={this.inpRef} placeholder={this.props.lang === "English"
                                ? 'Job tittle, Keyword...'
                                : 'عنوان شغلی , حرفه ...'} className='search' />
                            <span></span>
                            <img src={locationIcon} />
                            <input type='text' placeholder={this.props.lang === "English" ? 'Your Location' : 'کشور شما'} className='loc' />
                            <a href='#'>{(this.props.lang === "English"
                                ? "Find Job"
                                : "پیدا کردن")}</a>
                        </div>
                        <span>{(this.props.lang === "English"
                            ? `Suggestion: Designer,  Programing,  ${<a href='#'>Digital Marketing</a>}, Video, Animation.`
                            : `پیشنهاد: طراح,  برنامه نویسی,  ${<a href='#'>'بازاریابی دیجیتال'</a>}, ویدئو, انیمیشن.`)}</span>
                    </div>
                    <div className='right'>
                        <img src={Illustration} />
                    </div>
                </div>
                <div className='benefits'>
                    <Benefit pic={live}
                        num={`1,${this.state.num1.start1},${this.state.num1.start2}`}
                        tit={this.props.lang === "English" ? "Live Job" : "پروژه در حال انجام"} />
                    <Benefit pic={comp}
                        num={`${this.state.num2.start1},${this.state.num2.start2}`}
                        tit={this.props.lang === "English" ? "Companies" : "شرکت ها"} />
                    <Benefit pic={cand}
                        num={`${this.state.num3.start1},${this.state.num3.start2},${this.state.num3.start3}`}
                        tit={this.props.lang === "English" ? "Candidates" : "نامزد ها"} />
                    <Benefit pic={live}
                        num={`${this.state.num4.start1},${this.state.num4.start2}`}
                        tit={this.props.lang === "English" ? "New Jobs" : "پروژه های جدید"} />
                </div>

                <Swiper
                    className='mobile_benefits'
                    modules={[Navigation, Scrollbar, A11y, Autoplay]}
                    spaceBetween={15}
                    slidesPerView={2}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                // onSlideChange={() => console.log('slide change')} 
                // onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Benefit pic={live} num={`1,750,325`} tit={this.props.lang === "English" ? "Live Job" : "پروژه در حال انجام"} />
                    </SwiperSlide>
                    <SwiperSlide><Benefit pic={comp} num={`97,374`} tit={this.props.lang === "English" ? "Companies" : "شرکت ها"} /></SwiperSlide>
                    <SwiperSlide><Benefit pic={cand} num={`38,415,174`} tit={this.props.lang === "English" ? "Candidates" : "نامزد ها"} /></SwiperSlide>
                    <SwiperSlide><Benefit pic={live} num={`7,532`} tit={this.props.lang === "English" ? "New Jobs" : "پروژه های جدید"} /></SwiperSlide>
                </Swiper>
            </header>
        )
    }
}
// "1,750,325"
export default Header
