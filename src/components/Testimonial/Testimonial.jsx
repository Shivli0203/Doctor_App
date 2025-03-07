import React from 'react'
import { Pagination} from 'swiper'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
// import PatientAvatar from '../../assets/images/patient-avatar.png'
import {HiStar} from 'react-icons/hi'
 
function Testimonial() {
  return (
    <div className='mt-[30px] lg:mt-[55px]'>
        <Swiper modules={[Pagination]} spaceBetween={30} slidesPerView={1} pagination={{clickable:true}} 
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }}
        >
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src="./image/profile.png" className="h-[65px] w-[65px]" alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                XYZ
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    I've experienced their medical services, and the quality of care I received was outstanding. They consistently deliver exceptional healthcare services, setting a high standard in the industry.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src="./image/profile.png" className="h-[65px] w-[65px]"alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                XYZ
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    I've experienced their medical services, and the quality of care I received was outstanding. They consistently deliver exceptional healthcare services, setting a high standard in the industry.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src="./image/profile.png" className="h-[65px] w-[65px]" alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                XYZ
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    I've experienced their medical services, and the quality of care I received was outstanding. They consistently deliver exceptional healthcare services, setting a high standard in the industry.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src="./image/profile.png" className="h-[65px] w-[65px]"  alt="" />
                       
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                XYZ
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    I've experienced their medical services, and the quality of care I received was outstanding. They consistently deliver exceptional healthcare services, setting a high standard in the industry.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src="./image/profile.png"  className="h-[65px] w-[65px]" alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                XYZ
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    I've experienced their medical services, and the quality of care I received was outstanding. They consistently deliver exceptional healthcare services, setting a high standard in the industry.
                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='py-[30px] px-5 rounded-3'>
                    <div className='flex items-center gap-[13px]'>
                        <img src="./image/profile.png" className="h-[65px] w-[65px]" alt="" />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor'>
                                XYZ
                            </h4>
                            <div className='flex items-center gap-[2px]'>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                                <HiStar className='text-yellowColor w-[18px] h-5'/>
                            </div>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                    I've experienced their medical services, and the quality of care I received was outstanding. They consistently deliver exceptional healthcare services, setting a high standard in the industry.
                    </p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial