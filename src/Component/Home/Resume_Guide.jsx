import React from 'react';
import Resume_Guide_Detail from './Resume_guide_Detail';

function Course(props) {
  const course =[
    
    {
        img:"https://marketplace.canva.com/EAFzfwx_Qik/3/0/283w/canva-GLS7iCH3mUA.jpg",title:"Social Media Marketer Resume",link:"https://www.canva.com/design/DAGIkOgXTzU/QOQd3TA7eaMaPPkNjs7BUA/edit?utm_content=DAGIkOgXTzU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
    },
    { img:"https://marketplace.canva.com/EAFcO7DTEHM/1/0/283w/canva-dL748wTwcRo.jpg",title:"Academic Resume",link:"https://www.canva.com/design/DAGIkO19_30/FjyRSrLMCluyN4gcSQjUTg/edit?utm_content=DAGIkO19_30&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFk2sEzxO8/2/0/283w/canva-4PHLNC4jvNo.jpg",title:"Freelance Writer Resume Examples and Guide",link:"https://www.canva.com/design/DAGIkEFdHM0/8YNwTWYlmNU2WBJJZsbrew/edit?utm_content=DAGIkEFdHM0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFjRZP7Qy4/1/0/283w/canva-w7vPJrquk6g.jpg",title:"Sales Associate Resume",link:"https://www.canva.com/design/DAGIkE_BJPU/1LiKGod85UG0lNrHv7_LCQ/edit?utm_content=DAGIkE_BJPU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFhbMF-H2g/1/0/283w/canva-rIQl6eH1ZtM.jpg",title:"Investigator Resume",link:"https://www.canva.com/design/DAGIkGwP-qM/S2OsIpcjD7e7lRcQowS-Fw/edit?utm_content=DAGIkGwP-qM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFcTxn1AOk/2/0/283w/canva-W1EI9m4odoU.jpg",title:"Professional Resume",link:"https://www.canva.com/design/DAGIkFZVYyQ/tJOBZ4wZ-Tw-mw_42kYCSA/edit?utm_content=DAGIkFZVYyQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFjRZP7Qy4/1/0/283w/canva-w7vPJrquk6g.jpg",title:"Fresher Resume",link:"https://www.canva.com/design/DAGIkG569mc/m1C-rJT7l2UDuYwCntVCdw/edit?utm_content=DAGIkG569mc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFk2sEzxO8/2/0/283w/canva-4PHLNC4jvNo.jpg",title:"Business Accountant Resume",link:"https://www.canva.com/design/DAGIkMwka5U/37xKGTnSTrADb8NkyFba_Q/edit?utm_content=DAGIkMwka5U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFlgmxCh-M/1/0/283w/canva-rXm34r9dBm4.jpg",title:"Business Analyst Resume",link:"https://www.canva.com/design/DAGIkJz9ZEg/McsSevQrNgny3_VnKMAKCw/edit?utm_content=DAGIkJz9ZEg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFoxAIruaI/1/0/283w/canva-cACejiRadXQ.jpg",title:"Senior Associate Resume",link:"https://www.canva.com/design/DAGIkHgxYRA/VjWOYO39GaMAhd39XR-8Uw/edit?utm_content=DAGIkHgxYRA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFfUETqcL8/2/0/1131w/canva-4r6P24uiwQc.jpg",title:"Software Developer Resume",link:"https://www.canva.com/design/DAGIkFailEw/wSPJg1PptYll97aBcoLApw/edit?utm_content=DAGIkFailEw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    { img:"https://marketplace.canva.com/EAFyPm_279E/1/0/283w/canva-a82Uh6SU69w.jpg",title:"Interior Designer Resume",link:"https://www.canva.com/design/DAGIkF0w2uA/XhC8PnMMWD2LxgVbUcFqGg/edit?utm_content=DAGIkF0w2uA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"},
    
    
  ];
  return (
    <>
      <Resume_Guide_Detail course={course} id='course' />
    </>
  )
}

export default Course
