import ServiceCard from '../components/Services/ServiceCard'
import { services } from '../assets/data/services'

const Services = () => {
  return (
    <div className="container">
      <img src='./image/service.png' className="w-[300px] h-[300px] ml-[40%] mt-[40px]"/>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>
        {services.map((item,index) => (
        <ServiceCard item={item} index={index} key={index}/>
        ))}
    </div>
    </div>
    )
}

export default Services