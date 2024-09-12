import React from 'react'
import { Link } from 'react-router-dom'


function About() {
  return (
    <section>
        <div className="container">
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
                            
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:first-letter:order-1'>
                    <img src="./image/hero11.png" className='h-[500px]' alt="" />
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]'>
                        
                    </div>
                </div>

                <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                    <h2 className='heading'>Honored to stand among the nation's finest.</h2>
                    <p className='text__para'>Greetings to our Doctor's Appointment App! Our mission is to offer effortless access to healthcare, empowering you to schedule appointments, retrieve medical records, and receive tailored care, all conveniently centralized in one platform.</p>

                <p className="text__para mt-[30px]">Presenting our groundbreaking Doctor's Appointment App! Crafted with your ease in focus, it simplifies the appointment booking, ensures real-time availability, and facilitates secure communication with healthcare experts. Encounter seamless healthcare right at your fingertips.!</p>

                    <Link to='/'>
                        <button className="btn">Learn More</button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About