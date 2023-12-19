import React, { Component } from 'react'
import './styles/article1.css'
class Popular extends Component {
    render() {
        return (
            <div className='popular'>
                <h1>{this.props.lang === "English" ? "Most Popular Vacancies" : "محبوب ترین مشاغل"}</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Anesthesiologists" : "متخصصین بیهوشی"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "45,904 Open Positions" : "پوزیشن باز 45904"}</span>
                        </div>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Maxillofacial Surgeons" : "جراحان فک و صورت"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "74,875 Open Positions" : "74875 پوزیشن باز"}</span>
                        </div>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Financial Manager" : "مدیر مالی"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "61,391 Open Positions" : "61391 پوزیشن باز"}</span>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Surgeons" : "جراحان"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "50,364 Open Positions" : "50,364 پوزیشن باز"}</span>
                        </div>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Software Developer" : "توسعه دهنده نرم افزار"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "43359 Open Positions" : "43359 پوزیشن های باز"}</span>
                        </div>

                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Management Analysis" : "تحلیل مدیریت"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "93,046 Open Positions" : "93046 پوزیشن باز"}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Obstetricians-Gynecologists" : "متخصص زنان و زایمان"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "4,339 Open Positions" : "4339 پوزیشن باز"}</span>
                        </div>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Psychiatrists" : "روانپزشکان"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "18,599 Open Positions" : "18599 پوزیشن باز"}</span>
                        </div>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "IT Manager" : "مدیر فناوری اطلاعات"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "50,963 Open Positions" : "50963 پوزیشن باز"}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Orthodontists" : "متخصصین ارتودنسی"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "20,079 Open Positions" : "20079 پوزیشن باز"}</span>
                        </div>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Data Scientist" : "دانشمند داده"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "28,200 Open Positions" : "28200 پوزیشن باز"}</span>
                        </div>
                        <div className='col'>
                            <b>{this.props.lang === "English" ? "Operations Research Analysis" : "تجزیه و تحلیل تحقیق در عملیات"}</b>
                            <br />
                            <span>{this.props.lang === "English" ? "16,627 Open Positions" : "16627 پوزیشن باز"}</span>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Popular
