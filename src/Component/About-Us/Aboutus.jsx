import React from 'react'

function Aboutus() {
  return (
    <>
      <div>
          <div className=' flex flex-col px-10 py-10'>
            <div className=' flex flex-col md:flex-row py-10 justify-evenly gap-5 px-10 items-center '>
                <div>Welcome to ResumeMaster, your trusted partner in crafting the perfect resume! At ResumeMaster, we understand that your resume is more than just a document—it's your personal marketing tool that opens doors to your dream job. Our mission is to empower job seekers from all walks of life by providing them with the tools and guidance needed to create compelling and professional resumes that stand out.</div>
                <div><img src='https://www.resume-now.com/sapp/uploads/2024/02/about-us-hero-dst.png' ></img></div>
            </div>
            <div className=' flex  justify-center px-10 gap-5 py-5 items-center '>
                {/* <div><img src='https://www.resume-now.com/sapp/uploads/2024/02/about-us-testimonial-1.png'></img></div> */}
                <div>
                    <h1 className=' font-bold text-3xl text-center py-5 '>Who we are</h1>
                    <p className=' font-medium text-lg text-slate-700'>We are a team of dedicated professionals with extensive experience in recruitment, career coaching, and design. Our diverse background allows us to understand the intricacies of various industries and what employers are looking for in a resume. We combine this expertise with cutting-edge technology to offer a user-friendly platform that simplifies the resume creation process.</p>
                </div>
            </div>
            <div>
                <h1 className=' font-bold text-3xl text-center py-5 '>What we Offer</h1>
                <div className=' flex flex-col px-10'>
                    <div><h1 className=' font-bold text-xl'>Easy-to-Use Resume Builder:</h1><p>Our intuitive resume builder guides you step-by-step, allowing you to create a professional resume in minutes. With customizable templates designed by industry experts, you can tailor your resume to fit your unique style and career goals.</p></div>
                    <div><h1 className=' font-bold text-xl'>Expert Tips and Guidance:</h1><p>We provide valuable resources, including articles, tutorials, and sample resumes, to help you understand what makes a resume effective. Our tips cover everything from formatting and content to optimizing your resume for Applicant Tracking Systems (ATS).</p></div>
                    <div><h1 className=' font-bold text-xl'>Personalized Support:</h1><p>Our customer support team is always ready to assist you with any questions or concerns. Whether you need help choosing the right template or advice on how to showcase your experience, we are here to support you every step of the way.</p></div>
                    <div><h1 className=' font-bold text-xl'>Continuous Improvement:</h1><p>We are committed to continuously improving our platform based on user feedback and the latest industry trends. Our goal is to provide you with the best tools and resources to succeed in your job search.</p></div>
                </div>
            </div>


          </div>


      </div>


    </>
  )
}

export default Aboutus
