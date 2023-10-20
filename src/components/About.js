import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function About() {
  return (
    <div>
      
      <div className="parallax" id='ref0'>
        <h3 className="p-20 mx-10 text-7xl bg-gradient-to-r bg-gradient-to-r from-cyan-50 to-cyan-900 inline-block text-transparent bg-clip-text break-normal">Hi, I'm <span>Sai Krishna</span></h3>
        <br></br>
        <TypeAnimation className="p-20 mx-10 text-7xl bg-gradient-to-r bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text "
      sequence={[
        'Full Stack Developer', // Types 'One'
        2000, // Waits 1s
        'Data Analyst', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Software Engineer', // Types 'Three' without deleting 'Two'
        2000,
        () => {
          console.log('Sequence completed');
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ display: 'inline-block' }}
    />

      </div>

      <div className="d-flex p-5" style={{ height: 'auto', backgroundColor: 'black', fontSize: '150%' }}>
        <div>
          <phot className="card-img-top p-2 m-2" style={{ borderRadius: '20px' }} src="./images/img4.jpg" alt="Card image cap" />
        </div>

        <div id="ref1">
          <p className="text-white p-20 m-2" style={{ fontSize: 'auto' }}>
            <span className="text-6xl text-gray-600">About Me</span>
            <br />
            I am a highly skilled and multi-talented professional with expertise in data analysis, web development, and design. As a data analyst, I possess a deep understanding of statistical methodologies and data manipulation techniques, allowing them to extract valuable insights and drive data-informed decision-making.
            <br />
            <br />
            In the realm of web development, I showcase strong proficiency in various programming languages and frameworks. My expertise extends to both front-end and back-end development, enabling them to create visually stunning and seamlessly functional websites. With a keen eye for user experience, I consistently try to deliver intuitive and engaging digital solutions.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About
