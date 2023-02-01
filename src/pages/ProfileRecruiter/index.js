import React from 'react'
import { Link } from 'react-router-dom'

import propic from '../../assets/images/makmur.jpg'
import location from '../../assets/icons/location.svg'
import email_icon from '../../assets/icons/email.svg'
import phone_icon from '../../assets/icons/phone-icon.svg'
import ig_icon from '../../assets/icons/ig-icon.svg'
import linkedin_icon from '../../assets/icons/linkedin-icon.svg'


const ProfileRecruiter = () => {
  return (
    <>

       <div className='w-full bg-grey pt-[10vh] pb-[10vh]'>      
            <div className='bg-primary mx-auto w-[80vw] h-[20vh]'>
                {/* Container Card */}
                <div className="card w-[50vw] h-[110vh] mx-auto">
                            <figure className="px-10 pt-10">
                                    <img src={propic} alt="Shoes" className="rounded-full" />
                            </figure>
                            <div className="card-body text-center pb-0">
                                <h2 className="card-title text-2xl mx-auto">PT Martabat Jaya Abadi</h2>
                                <p className='text-lg h-[0vh]' >Financial</p>
                                <div className='flex mx-auto pb-3'>
                                    <img src={location} alt='location'/>
                                    <p className='text-neutral-400 ml-3'>Purwokerto, Jawa Tengah</p>                   
                                </div>
                                <p className='text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                            </div>
                            <div className='mx-auto'>
                               <Link to='/edit-profile-recruiter'><button className='bg-purple text-white text-xl font-bold w-[25vw] h-[10vh] rounded-lg'>Edit Profile</button></Link>                                                 
                            </div>
                            <div className='mx-auto'>
                                <ol className='mt-5'>
                                    <li className='flex justify-start gap-3 mb-5'><img src={email_icon} alt='email-img' /><p className='text-neutral-400'>martabatjaya@gmail.com</p></li>
                                    <li className='flex justify-start gap-3 mb-5'><img src={ig_icon} alt='ig-img' /><p className='text-neutral-400'>martabat_jaya</p></li>
                                    <li className='flex justify-start gap-3 mb-5'><img src={phone_icon} alt='phone-img' /><p className='text-neutral-400'>0821-8190-1821</p></li>
                                    <li className='flex justify-start gap-3 mb-5'><img src={linkedin_icon} alt='linkedin-img' /><p className='text-neutral-400'>martabatjaya@gmail.com</p></li>                                                                                    
                                </ol>
                            </div>
                </div>
            </div>
            <div className='bg-white mx-auto w-[80vw] h-[120vh] ' >
            </div>                       
        </div> 

    </>
  )
}

export default ProfileRecruiter