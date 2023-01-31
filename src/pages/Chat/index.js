import React from 'react'

import chat_img from '../../assets/images/chat-image.jpg'
import propic_chat_default from '../../assets/images/propic-chat-default.jpg'

const Chat = () => {

   


  return (
        <>

        {/* Chat belum ada */}
        <div className='flex bg-grey h-[120vh] pt-10'>
            <div className="card w-[30vw] h-[83vh] shadow-xl ml-[8vw] bg-white">
                <div className="w-full">
                    <h2 className="card-title text-2xl py-6 pl-5">Chat</h2>
                    <hr/> 
                    <div className='w-full h-full'>
                        <img src={chat_img} className='mx-auto mt-[18vh]' alt='chat-img'/>
                    </div> 
                </div>      
            </div>
            
            <div className="card w-[50vw] h-[83vh] bg-base-100 shadow-xl mx-auto">
                    <div className='w-full'>
                        <h1 className="text-[30px] card-title mb-3 py-5 pl-10"> &nbsp;</h1> 
                        <hr/>        
                    </div> 
                    <div className="card-body">
                    </div>
            </div>            
        </div>

        {/* Chat sudah ada */}
        <div className='flex bg-grey h-[120vh] pt-10'>
            <div className="card w-[30vw] h-[83vh] shadow-xl ml-[8vw] bg-white">
                <div className="w-full">
                        <h2 className="card-title text-2xl py-8 pl-5">Chat</h2>
                        <hr/> 
                    <div className='w-full h-full'>
                        <div className='flex pl-5 pt-5'>
                            <img src={propic_chat_default} alt='img_profile_pict' className='rounded-full w-[4vw]'/>
                            <div className='ml-5'>
                                <p className='text-lg font-bold'>Jonas Adam</p>
                                <p className=''>Permisi kak mau tanya...</p>
                            </div>
                        </div>
                    </div> 
                </div>      
            </div>
            
            <div className="card w-[50vw] h-[83vh] bg-base-100 shadow-xl mx-auto">
                    <div className='w-full flex pl-10 py-5'>
                        <img src={propic_chat_default} alt='img-profile-pict' className='rounded-full w-[4vw]'/>
                        <p className='text-lg font-bold pt-3 pl-5'>Jonas Adam</p>                 
                    </div> 
                    <hr/>  
            </div>            
        </div>

        </>
  )
}

export default Chat