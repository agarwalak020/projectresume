import React from 'react'
import './Home.css'
import icon1 from './video_icon1.png'
import icon2 from './video_icon2.gif'
import icon3 from './video_icon3.gif'
import icon4 from './video_icon4.gif'
import { Link } from 'react-router-dom'

function Home_Third() {
  return (
    <>
    <div className=' bg-gray-100 py-10 mb-3'>
      <div className=' flex justify-center bg-gray-100'>
        <div className=' md:w-[78%] rounded-xl py-5 px-4' id='home_third'>
          
        <div className=' flex flex-col gap-2 justify-evenly md:flex-row  text-white rounded-xl  px-5 ' >
          
          <div >
            
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFEqi6SuKJQa8g57GxXRuQh_CosBftaGDsA&s" alt="" className=' h-[400px] w-[500px] rounded-xl shadow-lg shadow-gray-600 ' />
          </div>
          <div className='flex flex-col font-semibold px-3 gap-5'>
          <h1 className=' text-center font-bold text-4xl py-2  text-white'>How Our AI Resume Works For You</h1>
                 <div>
                    <div className='flex items-center hover:border-b-2 shadow-lg rounded-2xl py-2 shadow-gray-600 px-3 hover:border-slate-500 hover:rounded-lg  gap-2'>
                        <div>
                          <img src={icon1} className=' h-16 w-16'/>
                        </div>
                        <div className=' text-xl'>
                            
                            <p>Check Resume Score,
                            In few seconds with just couple of clicks.</p>
                        </div>
                    </div>
                    <div className='flex items-center shadow-lg rounded-2xl px-3 hover:border-b-2 py-2 shadow-gray-600 hover:border-slate-500 hover:rounded-lg gap-2'>
                        <div>
                          <img src={icon2} className=' h-16 w-16'/>
                        </div>
                        <div className=' text-xl'>
                            
                            <p>Our AI does deep checks on your resume & suggest you edits.</p>
                        </div>
                    </div>
                    
                     <div className='flex items-center shadow-lg rounded-2xl px-3 hover:border-b-2 py-2 shadow-gray-600 hover:border-slate-500 hover:rounded-lg gap-2'>
                     <div>
                          <img src={icon3} className=' h-16 w-16'/>
                        </div>
                        <div className=' text-xl'>
                            
                            <p>Land in Abroad Interviews with our AI technology. </p>
                        </div>
                     </div>
                     <div className='flex items-center shadow-lg rounded-2xl px-3 hover:border-b-2 py-2 shadow-gray-600 hover:border-slate-500 hover:rounded-lg gap-2'>
                     <div>
                          <img src={icon4} className=' h-16 w-16'/>
                        </div>
                        <div className=' text-xl'>
                            
                            <p>Improve Resume with our robust AI, in just few clicks.</p>
                        </div>
                     </div>
                
                  </div>          
          </div>


                
        </div>
      </div>
      </div>

  

{/* Start Building component */}

      <div className='flex flex-col gap-5 border-2 my-8 rounded-xl bg-white justify-center px-5 py-10 shadow-md shadow-gray-600 md:mx-auto md:w-[78%]'>
  <div className='flex flex-col items-center'>
    <h1 className='text-5xl font-bold text-center py-6'>Explore Our Wide Range Of Trending Templates That Recruiters Loves To See
    </h1>
    <p className=' text-lg text-left'>Chosen & Crafted by Our Experts | Powered by our Robust AI </p>
    <p className=' text-lg text-left'>Backed by our Technology | Get it ready in less than 15 minutes </p>
    
  </div>
  <div className='flex flex-col justify-center gap-5 items-center md:flex-row'>
    {[
      { src: "https://www.resume-now.com/sapp/uploads/2024/04/assistant-editor-resume-example.svg", alt: "Assistant Editor Resume Example", title: "Create Resume Template" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-template-farmer.svg", alt: "Farmer Resume Template", title: "Simple Resume Template" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-template-doctor.svg", alt: "Doctor Resume Template", title: "Modern Resume Template" }
    ].map((template, index) => (
      <div key={index} className='relative group'>
        <img src={template.src} alt={template.alt} className=' h-96 w-full rounded-xl hover:h-[400px]' />
        <h1 className='font-bold text-xl text-center mt-2' id='homecard'>{template.title}</h1>
        <Link to='/signup'><button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit  text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' id='home_third'>Build Your Resume Now</button></Link>
      </div>
    ))}
  </div>
</div>


{/* <Home_Fourth/> */}

{/* Make your Resume component */}

<div className='flex flex-col gap-5 px-9 py-7   rounded-xl md:mx-auto md:w-[79%]'>
  <div className='flex flex-col items-center'>
    <h1 className='text-5xl font-bold text-center py-6'>Make Your Resume Using Real-World Examples</h1>
    <p className=' text-xl'>Browse <span className=' font-semibold text-blue-600'>350+ popular resume</span> examples covering all types of jobs, industries and levels of experience. Every example has been reviewed and approved by a Certified Professional Resume Writer (CPRW).
    </p>
  </div>
  <div className='flex flex-col justify-center gap-5 items-center md:flex-row'>
    {[
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-example-teacher.svg", alt: "Assistant Editor Resume Example", title: "Teacher Resume" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-example-registered-nurse.svg", alt: "Farmer Resume Template", title: "Professional Resume" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-example-college-student.svg", alt: "Doctor Resume Template", title: "College Resume" },
      { src: "https://www.resume-now.com/sapp/uploads/2023/11/resume-example-administrative-assistant.svg", alt: "Doctor Resume Template", title: "Student Resume" }
    ].map((template, index) => (
      <div key={index} className='relative group'>
        <img src={template.src} alt={template.alt} className=' h-[400px] w-full rounded-xl' />
        <h1 className='font-bold  text-xl text-center mt-2' id='homecard'>{template.title}</h1>
        <Link to='/signup'><button className='absolute top-0 left-0 right-0 bottom-0 m-auto w-fit h-fit bg-blue-600 text-white font-bold py-2 px-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300' id='home_third'>Create Your Resume </button></Link>
      </div>
    ))}
  </div>
</div>

</div>
    </>
  )
}

export default Home_Third
