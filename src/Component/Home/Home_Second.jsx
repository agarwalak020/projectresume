import React from 'react'
import Home_Third from './Home_Third'
import './Home.css'
import {Link} from 'react-router-dom'

function Home_Second() {
  return (
    <>
    
      <div className=' py-8 bg-gray-100'>
        <div className=' font-bold text-4xl flex py-6 px-6  justify-center'>
        Let Your Resume Stand Ahead Of Competition With Our Robust AI
        </div>
        <div className=' flex flex-col md:flex-row gap-2 md:gap-7 py-5 px-5 justify-center'>
            <div className=' flex flex-col items-center'>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/thumbnails/024/235/881/small/cv-icon-resume-illustration-sign-user-data-symbol-or-logo-vector.jpg" alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200' />
                </div>
                <div className=' font-bold text-lg text-center'>Upload Resume</div>
            </div>
            <div className=' flex flex-col items-center'>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMEDNPH-oWSljrDQqqZPZwTJW2ZKinaqrrl84aiuGE66ET3DwclpEDLelKKQpankZU_T4&usqp=CAU" alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200'  />
                </div>
                <div className=' font-bold text-lg text-center'>
                AI Analysis
                </div>
            </div>
            <div className=' flex flex-col items-center'>
                <div><img src="https://previews.123rf.com/images/djvstock/djvstock1701/djvstock170104518/69490783-cv-or-resume-related-icons-image-vector-illustration-design.jpg" alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200'  /></div>
                <div className=' font-bold text-lg text-center'>Select Design</div>
            </div>
            <div className=' flex flex-col items-center'>
                <div><img src="https://masterbundles.com/wp-content/uploads/2023/03/preview_03--226.jpg" alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200'  /></div>
                <div className=' font-bold text-lg text-center'>Improve with AI</div>
            </div>
            <div className=' flex flex-col items-center'>
                <div><img src="https://freedesignfile.com/upload/2019/12/Resume-illustration-vector.jpg" alt="" className=' h-48 hover:h-52 hover:shadow-xl hover:shadow-gray-200'  /></div>
                <div className=' font-bold text-lg text-center'>Download</div>
            </div>
        </div>
        <Link to='/login'>
        <div className=' flex justify-center mt-4'>
            <button className=' px-5 py-3 rounded-full text-lg text-white font-bold hover:px-8 hover:shadow-2xl hover:shadow-slate-500' id='home_third'>
                Create my Resume
            </button>
        </div>
        </Link>
        
      </div>

      <Home_Third/>
      
    </>
  )
}

export default Home_Second
