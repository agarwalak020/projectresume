import React from "react";
import './Job.css'
import '../Home/Home.css'
import {Link} from 'react-router-dom'

const CourseDetail = ({ course }) => {
  return (
    <>
    <div id="course">
    <h1 className=" text-5xl font-bold px-5 md:px-16 py-5 text-center">Browse Our Resume Templates</h1>
    <p className=" mx-auto text-lg text-slate-700 md:w-[800px]">Explore our recently updated Resume templates to help you refine and modernize your resume.</p>
      <div className=" flex flex-col md:flex-row px-5 md:px-56  py-9 bg-white text-black md:mx-auto md:grid md:grid-cols-4 gap-3 ">
        
        {course.map((card, index) => (
          <div key={index}>
            
            <Link to={card.link} target='_blank'>
            <div className="flex flex-col justify-center h-[400px] border-2 px-2 py-2 rounded-xl border-white shadow-md shadow-slate-400 card-container" >
  <img src={card.img} className=" w-auto h-full card-image rounded-md" alt="Course" />
  <h1 className="text-xl font-bold " id='jobcard'>{card.title}</h1>
  
  
  
</div>
            </Link>



          </div>
        ))}
        
        
      </div>
      <div className=" flex py-5 justify-center">
        <button className=" px-3 py-3  hover:bg-black font-semibold text-white border-2 rounded-xl text-center" id='home_third' >
            View More Templates
        </button>
        </div>

        </div>
    </>
  );
};

export default CourseDetail;
