
import { useTypewriter } from 'react-simple-typewriter';
import React, { useEffect, useState } from 'react';
import './Home.css';
import Skill from './Skill';
import InfoCard from './InfoCard';
import Project from './Project';



// Home 컴포넌트 정의
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    const timer = setTimeout(() => {
        setIsVisible(true); // 7초 후에 부모 요소 보이기
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const [text] = useTypewriter({
    words: ['Frontend Developer'],
    loop: 1,
    typeSpeed: 30,
  })


  return (
    <div className="home">
      <div className='main'>
        <h1 className='welcome-text'>{text}</h1>
        <div className='underline'></div>
        <div className='intro'>
          <h1 className='portfolio'>PORTFOLIO</h1>
         <p>도전과 모험을 즐기는 개발자, 김재영입니다. <br/>내가 상상한것을 만들어낸다는 매력에 프론트엔드 개발을 시작하게 되었습니다.<br/>새로운관점으로 웹세상을 바라보며 안주하지 않고 개발자로서 역량을 확장시키고 싶습니다.</p>
        </div>
        <div className={`arrow-div ${isVisible ? 'show' : ''}`}>
        <img src='https://wddoods015.github.io/jaeyoung/arrow.svg' alt="arrow icon" className='arrow-svg'/>
        </div> 
      </div>
      <InfoCard/>
      <Skill/>
      <Project/>
    </div> 
  );
};

export default Home;
