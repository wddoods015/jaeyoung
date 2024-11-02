import React from 'react';
import './InfoCard.css'
import { Link } from "react-router-dom";

const InfoCard = () => {

    const myMail = "wddoods015@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(myMail)
      .then(() => {
        alert('wddoods015@gmail.com 클립보드에 복사되었습니다!'); // 알림 메시지
      })
      .catch(err => {
        console.error('텍스트 복사 실패:', err);
      });
  };

    return(
        <div className='info-card'>
        <div className="profile-section">
            <img src="https://wddoods015.github.io/jaeyoung/resume-profile.jpg" className="profile-img" />
            <div className="contact-section">
                <div>
                    <h3>김재영</h3>
                    <p>react를 주로 활용하는 프론트엔드 주니어 개발자입니다.</p>
                    <p>04.12 - 10.23 K-digital | AICC 웹서비스개발 </p>
                </div>
                <h4>contact me</h4>
            <ul className="contact-ul">
<li className="contact-li">
<a href="https://github.com/wddoods015" target="_blank" rel="noopener noreferrer">
        <img
            className="github-logo"
            src="https://wddoods015.github.io/jaeyoung/github_logo.ico"
            alt="github"
            />
        </a>   
</li>
<li className="contact-li">
<a href="https://velog.io/@wddoods015/posts" target="_blank" rel="noopener noreferrer">
        <img
            className="velog-logo"
            src="https://wddoods015.github.io/jaeyoung/velog_logo.ico"
            alt="velog"
            />
        </a>   
</li>
<li className="contact-li">
<a href="https://www.linkedin.com/in/jae-young-kim-4559b6311" target="_blank" rel="noopener noreferrer">
        <img
            className="linkedin-logo"
            src="https://wddoods015.github.io/jaeyoung/linkedin_logo.ico"
            alt="linkedin"
            />
        </a>   
</li>
<li className="contact-li">
        <img
            className="linkedin-logo"
            src="https://wddoods015.github.io/jaeyoung/mail.svg"
            alt="mail"
            onClick={handleCopy}
            />
     
</li>
<li className="contact-li"><Link to='/Resume'><button className='resume-btn'>Resume</button></Link></li>
</ul>
    </div>  
        </div>
        </div>
    );
};

export default InfoCard;