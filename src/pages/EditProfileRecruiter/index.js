import React from 'react'

import propic from '../../assets/images/makmur.jpg'
import location from '../../assets/icons/location.svg'
import btn_edit from '../../assets/icons/btn-edit.jpg'
import { Link } from 'react-router-dom'

const EditProfileRecruiter = () => {
  return (
    <>
    <div className='bg-purple w-full h-[40vh] relative'>
        {/* Container */}
        <div className='flex justify-evenly absolute top-[15vh] gap-10'>
                {/* Profile Company */}
            <div>
                <div className="card w-[30vw] h-[83vh] shadow-xl ml-[8vw] bg-white">
                    <figure className="px-10 pt-10">
                        <img src={propic} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <button className='mx-auto'><img src={btn_edit} alt='edit'/></button>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">PT Martabat Jaya Abadi</h2>
                        <p className='text-lg'>Financial</p>
                        <div className='flex'>
                            <img src={location} alt='location'/>
                            <p className='text-neutral-400 ml-3'>Purwokerto, Jawa Tengah</p>                   
                        </div>
                        <p className='text-neutral-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                    </div>
                </div> 
                {/* button save */}
                <div>
                    <button className='bg-purple text-white text-xl font-bold w-[30vw] ml-[8vw] h-[10vh] mt-3 rounded-lg'>Simpan</button>                                                 
                </div>
                
                {/* button back */}               
                <Link to='/profile-recruiter'><button className='border-2 border-purple text-purple text-xl font-bold w-[30vw] ml-[8vw] h-[10vh] mt-3 rounded-lg'>Kembali</button></Link>    
            </div>   
                {/* Form */}
            <div className="card w-[50vw] bg-base-100 shadow-xl mx-auto">
                    <div className='w-full  '>
                        <h1 className="text-[30px] card-title mb-3 pt-10 pb-3 pl-10">Data Diri</h1> 
                        <hr/>        
                    </div> 
                    <div className="card-body">
                        <div className='mb-4 mt-4'>
                            <label className='block  text-slate-400 mb-1'>Nama Perusahaan</label>
                            <input type='text' className='w-full border-gray-300 rounded-md' placeholder='Masukkan Nama Perusahaan'/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-slate-400 mb-1'>Bidang</label>
                            <input type='text' className='w-full border-gray-300 rounded-md' placeholder='Masukan bidang perusahaan ex : Financial'/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-slate-400 mb-1'>Domisili</label>
                            <input type='text' className='w-full border-gray-300 rounded-md' placeholder='Masukan Domisili'/>
                        </div>
                        <div className='mb-4'>
                            <label className='block text-slate-400 mb-1'>Deskripsi Singkat</label>
                            <input className='form-textarea w-full border-gray-300 rounded-md' placeholder='Tuliskan Deskripsi Singkat'/>
                        </div> 
                        <div className='mb-4'>
                            <label className='block text-slate-400 mb-1'>Email</label>
                            <input type='email' className='w-full border-gray-300 rounded-md' placeholder='Masukkan Email'/>
                        </div>               
                        <div className='mb-4'>
                            <label className='block text-slate-400 mb-1'>Instagram</label>
                            <input type='text' className='w-full border-gray-300 rounded-md' placeholder='Masukkan Username IG'/>
                        </div> 
                        <div className='mb-4'>
                            <label className='block text-slate-400 mb-1'>Nomor Telepon</label>
                            <input type='text' className='w-full border-gray-300 rounded-md' placeholder='Masukkan Nomor Telepon'/>
                        </div> 
                        <div className='mb-4'>
                        <label className='block text-slate-400 mb-1'>Linkedin</label>
                            <input type='text' className='w-full border-gray-300 rounded-md' placeholder='Masukkan nama Linkedin'/>
                        </div> 
                    </div>
            </div>
        </div>
    </div>

    <div className='bg-grey h-[150vh]'>
    </div>   
    
    </>
  )
}

export default EditProfileRecruiter