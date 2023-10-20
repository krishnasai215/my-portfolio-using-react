import React from 'react'

function Projects() {
  return (
    <div>
      
      <div className="p-20" style={{ backgroundColor: 'black' }} id="ref3">
      <div>
        <h1 className="bg-white p-2 mx-5 text-6xl" style={{ filter: 'invert(1)', textAlign: 'left' }}>Projects</h1>
        <ul className="py-5 mx-5 list-disc" style={{ filter: 'invert(1)', fontSize: '150%' }}>
          <li>Object Recognition System <br />
            <span>Built a tool that should be able to process images and identify characters. (On-going)</span></li><br />
          <li>A simple BMI calculator <br/>
            <span>To find out if a person is overweight, underweight, or has a good weight.</span></li><br />
          <li>Supermarket App <br/>
            <span>To store data about product and easily accessible.</span></li><br />
            <li>More Projects are in my   
<a href="https://github.com/krishnasai215" class="font-medium text-cyan-600 dark:text-blue-500 hover:underline invert"> Github</a>
 <br/>
            <span>Do visit my Profile.</span></li><br />
        </ul>
      </div>
    </div>

    </div>
  )
}

export default Projects
