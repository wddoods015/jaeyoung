import React from "react";
import './Skill.css'
import { FaCss3, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiFigma, SiTailwindcss } from 'react-icons/si'; // next.js icon


const Skill = () => {

    return (
    <div className="skill">
     <h2 className='skill-title'>My Skill</h2>
        <ul className='skill-ul'>
            <li className='skill-li'>
            <span className='my-skill'>CSS</span>
               <FaCss3 size="40" color="1572B6"/>
                <div className='skill-container'> 
                <div className='skill-gage' style={{width: '70%'}}>
                    <span className='skill-span' > 70%</span>
                    </div>
                    </div>
               
            </li>
            <li className='skill-li'>
            <span className='my-skill'>javaScript</span>
            <FaJs size="40" color="#f0db4f" /> 
                 <div className='skill-container'>
                 <div className='skill-gage' style={{width: '60%'}}>
                 <span className='skill-span' > 60%</span>
                 </div>
                 </div>   
            </li>
            <li className='skill-li'>
            <span className='my-skill'>React</span>
               <FaReact size="40" color="#61DAFB"/>
                 <div className='skill-container'>
                 <div className='skill-gage' style={{width: '80%'}}>
                 <span className='skill-span' > 80%</span>
                 </div>
                 </div>
            </li>
            <li className='skill-li'>
                 <span className='my-skill'>Axios</span>
                 <img src="https://wddoods015.github.io/jaeyoung/skill-Axios.svg" className="skill-logo" />
                 <div className='skill-container'>
                 <div className='skill-gage' style={{width: '60%'}}>
                 <span className='skill-span' > 70%</span>
                 </div>
                 </div>
                 
            </li>
            <li className='skill-li'>
                 <span className='my-skill'>tailwind CSS</span>
                 <SiTailwindcss size="40" color="38B2AC"/>
                 <div className='skill-container'>
                 <div className='skill-gage' style={{width: '50%'}}>
                 <span className='skill-span' > 50%</span>
                 </div>
                 </div>
            </li>
            <li className='skill-li'>
            <span className='my-skill'>Redux</span>
            <img src="https://wddoods015.github.io/jaeyoung/skill-Redux.svg" className="skill-logo" />
                 <div className='skill-container'>
                 <div className='skill-gage' style={{width: '50%'}}>
                 <span className='skill-span' > 70%</span>
                 </div>
                 </div>
                 
            </li>
            <li className='skill-li'>
            <span className='my-skill'>Next.js</span>
            <SiNextdotjs size="40" color="000000"/>
                 <div className='skill-container'>
                 <div className='skill-gage' style={{width: '60%'}}>
                 <span className='skill-span' >60%</span>
                 </div>
                 </div>
            </li>
            <li className='skill-li'>
            <span className='my-skill'>typescript</span>
            <SiTypescript  size="40" color="007ACC" />
                 <div className='skill-container'>
                 <div className='skill-gage' style={{width: '60%'}}>
                 <span className='skill-span' >60%</span>
                 </div>
                 </div>
            </li>
            <li className='skill-li'>
            <span className='my-skill'>Figma</span>
            <img src="https://wddoods015.github.io/jaeyoung/skill-Figma.svg" className="skill-logo" />       
                 <div className='skill-container' >
                 <div className='skill-gage' style={{width: '70%'}}>
                 <span className='skill-span' > 80%</span>
                 </div>
                 </div>
            </li>
            <li className='skill-li'> 
            <span className='my-skill'>Github</span>
               <FaGithub size="40" color="000000"/>
                 <div className='skill-container' >
                 <div className='skill-gage' style={{width: '70%'}}>
                 <span className='skill-span' > 70%</span>
                 </div>
                 </div>
            </li>
        </ul>
    </div>
    );
};

export default Skill;