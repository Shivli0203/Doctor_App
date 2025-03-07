import React from 'react'

// import heroImg01 from '../assets/images/hero-img01.png'
// import heroImg02 from '../assets/images/hero-img02.png'
// import heroImg03 from '../assets/images/hero-img03.png'

// import icon04 from '../assets/images/icon04.png'
// import icon05 from '../assets/images/icon05.png'
// import icon03 from '../assets/images/icon03.png'

// import featureImg from '../assets/images/feature-img.png'
// import videoIcon from '../assets/images/video-icon.png'
// import avatarIcon from '../assets/images/avatar-icon.png'
// import faqImg from '../assets/images/faq-img.png'

import { Link } from 'react-router-dom'
import { BsArrowRight} from 'react-icons/bs'
import About from '../components/About/About'

import ServiceList from '../components/Services/ServiceList'
import DoctorList from '../components/Doctors/DoctorList'
import FaqList from '../components/Faq/FaqList'
import Testimonial from '../components/Testimonial/Testimonial'


const Home = () => {
  return (
    <>

      {/* hero section */} 

      <section className='hero__section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] 
                md:text-[60px] md:leading-[70px]'>
                Compassionate care, expert guidance—dedicated to your well-being.</h1><br></br> 
                <h1 className='text-[26px] leading-[36px] text-headingColor font-[600] 
                md:text-[30px] md:leading-[40px]'>Your journey to health starts here.</h1>
                
                <p className='text__para'>
                Finding doctors online at any time offers convenience,
                immediate access, and a broader range of expertise. 
                 This accessibility empowers individuals to prioritize 
                 their well-being and seek expert healthcare advice with 
                 ease and convenience.
                </p>
                <button className='btn'>
                Request An Appointment
                </button>
              </div>

              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 
                 lg:gap-[30px]'>       
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor'>
                    20+
                   </h2>
                   <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                   <p className='text__para'>Years Of Experience</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor'>
                    10+
                   </h2>
                   <span className='w-[100px] h-2 bg-purple-300 rounded-full block mt-[-14px]'></span>
                   <p className='text__para'>Clinic Location</p>
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700]
                   text-headingColor'>
                    100%
                   </h2>
                   <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                   <p className='text__para'>Patient Satisfaction</p>
                  </div>

                 </div>

            </div> 
              <div className=''>
                <img src="./image/hero2.png" alt="" className='w-full mb-[160px]'/>
                
            </div>

          </div>
        </div>
      </section>

      {/* How It Work section */} 

      <section>
        <div className="container">
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Healing hands, caring hearts. Your well-being, our mission.</h2>
            <p className='text__para text-center'>
            Embarking on a journey to well-being, we prioritize your health with unwavering commitment. Through compassionate care and expert guidance, we pave the way for your enduring vitality. </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] 
          mt-[30px] lg:mt-[55px]'>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src="./image/doctor (1).png" className="h-[250px]"alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    Find A Doctor
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Embarking on a journey to well-being, we prioritize your health with unwavering commitment.
                  </p>


                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src="./image/location.png" className="h-[250px]" alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    Find A Location
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Embarking on a journey to well-being, we prioritize your health with unwavering commitment.
                  </p>


                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>
            </div>

            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'>
                <img src="./image/medical-app.png" className="h-[250px] mb-[10px]" alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                    Book Appointment
                  </h2>
                  <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Embarking on a journey to well-being, we prioritize your health with unwavering commitment.
                  </p>


                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center group
                   hover:bg-primaryColor hover:border-none justify-center'>
                    <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                   </Link>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* About section */} 

      <About/>

      {/* Services section */} 

      <section>
        <div className="container">
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Medical Services</h2>
            <p className='text__para text-center'>Embarking on a journey to well-being, we prioritize your health with unwavering commitment.
            </p>
            <img src='./image/service.png' className="w-[300px] h-[300px] ml-[20%] mt-[40px]"/>
      
          </div>


          <ServiceList />
        </div>
      </section>

      {/* Feature section */} 

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">

            <div className='xl:w-[670px]'>
              <h2 className="heading">
                Get Virtual Treatment <br /> Anytime.
              </h2>

              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule The Appointment Directly.
                </li>
                <li className="text__para">
                  2. Search for Your Physician Here and Contact Their Office.
                </li>
                <li className="text__para">
                  3. View Our Physicians Who Are Accepting New Patients,
                   Use the Online Scheduling Tool to Select an Appointment Time.
                </li>
              </ul>
            <Link to='/'>
              <button className="btn">Learn More</button>
            </Link>
            </div>

            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src="./image/doctor.png" className='w-3/4' alt="" />

              <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] 
              md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                      Tue , 24
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                      10:00 AM
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src="./image/box.png" className='h-[45px] w-[500px]' alt="" />
                  </span>
                </div>

              <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px]
               leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                Consultation 
              </div>

              <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                <img src="./image/profile2.png" className="w-[50px] h-[50px]" alt="" />
                <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700]
                 text-headingColor'></h4>
              </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors section */}

      <section>
        <div className="container">
        <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Great Doctors</h2>
            <p className='text__para text-center'>Embarking on a journey to well-being, we prioritize your health with unwavering commitment.
            </p>
          </div>

          <DoctorList/>
        </div>
      </section> 

      {/* FAQ section */}

      <section>
        <div className="container">
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src="./image/1.png" alt="" />
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='heading'>
                Most Questions By Our Beloved Patient
                </h2>
              <FaqList/>
            </div>
          </div>
        </div>
      </section>

    { /* testimonial */ }
      <section>
        <div className="container">
        <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>What Our Patients Say</h2>
            <p className='text__para text-center'>Embarking on a journey to well-being, we prioritize your health with unwavering commitment.
            </p>
          </div>

          <Testimonial/>
        </div>
      </section>
    </>
  )
}

export default Home