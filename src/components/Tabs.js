import React, { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState('skills');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="bg-black text-white p-14" id="ref2">
      <div className="flex justify-center">
        <div className="tab-box bg-gray-800 rounded-full p-2 space-y-4">
          <Tab
            tabName="skills"
            activeTab={activeTab}
            onClick={handleTabClick}
            colorOnHover="hover:text-blue-400"
          >
            <i className="text-2xl pr-2 fas fa-lightbulb"></i>Skills
          </Tab>
          <Tab
            tabName="education"
            activeTab={activeTab}
            onClick={handleTabClick}
            colorOnHover="hover:text-green-400"
          >
            <i className="text-2xl pr-2 fas fa-graduation-cap"></i>Education
          </Tab>
          <Tab
            tabName="experience"
            activeTab={activeTab}
            onClick={handleTabClick}
            colorOnHover="hover:text-red-400"
          >
            <i className="text-2xl pr-2 fas fa-briefcase"></i>Experience
          </Tab>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="tab-content-container">
          <TabContent tabName="skills" activeTab={activeTab}>
            <h2 className="text-6xl text-center">Skills</h2>
            <br />
            <ul className="text-xl list-disc">
              <li>
                <span>Data Analysis </span> [Python, Machine Learning, Deep
                Learning, Matlab] <br/>- Interpreting Data Patterns.
              </li>
              <li>
                <span>Web Development </span> [Html, CSS, Bootstrap, Javascript] <br/>-
                Designing Web Interfaces
              </li>
              <li>
                <span>Design</span> <br/>- Posters, Interfaces and Much more...
              </li>
            </ul>
          </TabContent>
        </div>

        <div className="tab-content-container">
          <TabContent tabName="education" activeTab={activeTab}>
            <h2 className="text-6xl text-center">Education</h2>
            <br />
            <ul className="text-xl list-disc">
              <li>
                <span>Vellore Institute of Technology </span><br/> [CGPA:8.69] : 2021-2025
                (Expected)
              </li>
              <li>
                <span>Delhi Public School, Mathura </span><br/> [488/600] : 2020-2021
              </li>
              <li>
                <span>Sacred Heart Conv. Hr. Sec. School, Mathura </span><br/> [461/600] :
                2018-2029
              </li>
            </ul>
          </TabContent>
        </div>

        <div className="tab-content-container">
          <TabContent tabName="experience" activeTab={activeTab}>
            <h2 className="text-6xl text-center">Experience</h2>
            <br />
            <ul className="text-xl list-disc">
              <li>
                <span>Member of Open Source Programming Club </span> [VITC]
              </li>
              <li>
                <span>Intern at CodSoft </span>
              </li>
              <li>
                <span>Intern at MotionCut </span>
              </li>
            </ul>
          </TabContent>
        </div>
      </div>
    </div>
  );
}

const Tab = ({ tabName, activeTab, onClick, colorOnHover, children }) => (
  <div
    className={`tab cursor-pointer ${tabName === activeTab ? 'active' : ''} ${colorOnHover} hover:bg-blue-800 p-2 rounded-full transition-all duration-300 ${
      tabName === activeTab ? 'bg-gray-500' : ''
    }`}
    onClick={() => onClick(tabName)}
  >
    {children}
  </div>
);

const TabContent = ({ tabName, activeTab, children }) => (
  <div
    id={tabName}
    className={`tab-content ${tabName === activeTab ? '' : 'hidden'}`}
  >
    {children}
  </div>
);

export default Tabs;
