import React from "react";
import '../style/Resume.css'
import Header from "../compoenets/Header";

const Resume = () => {


    return (
        <div className="top">
           <Header/>
           <h1>확인해주셔서 감사합니다 : )</h1>
            <div className="resume">
            <h2>김재영 | FrontEnd Developer</h2> 
            <div className="resume-div">
                <div className="resume-section-1">
                <img src="https://wddoods015.github.io/jaeyoung/resume-img.jpg" className="resume-img" />
                <h3>INFO</h3>
                <span>🎂 96. 12. 17.</span>
                <span>📍경기도 고양시 일산 거주</span>
                <h3>CONTACT</h3>
                <span>📞 010-2191-1703</span>
                <span>📧 wddoods015@gmail.com</span>
                <h3>TECH BLOG</h3>
                <a href="https://wddoods015.github.io/jaeyoung">📁 https://wddoods015.github.io/jaeyoung</a>
                <a href="https://github.com/wddoods015">🔗  https://github.com/wddoods015</a>
                <a href="https://velog.io/@wddoods015/posts">🔗  https://velog.io/@wddoods015</a>
                <h3>STACK</h3>
                <span className="stack-subtitle">language /</span>
                <div className="resume-stack">
                    <span className="resume-stack-bdage">JavaScript</span>
                    <span className="resume-stack-bdage">TypeScript</span>
                    <span className="resume-stack-bdage">CSS</span>
                </div>
                <span className="stack-subtitle">library & framework /</span>
                <div className="resume-stack">
                    <span className="resume-stack-bdage">React</span>
                    <span className="resume-stack-bdage">Next.js</span>
                    <span className="resume-stack-bdage">Redux</span>
                    <span className="resume-stack-bdage">Axios</span>
                    <span className="resume-stack-bdage">Tailwind CSS</span>
                </div>
                <span className="stack-subtitle">deploy & test /</span>
                <div className="resume-stack">
                <span className="resume-stack-bdage">Jest</span>
                <span className="resume-stack-bdage">CI/CD</span>
                </div>
                <span className="stack-subtitle">tool /</span>
                <div className="resume-stack">
                <span className="resume-stack-bdage">Figmaa</span>
                <span className="resume-stack-bdage">Github</span>
                <span className="resume-stack-bdage">Notion</span>
                </div>
                </div>
                 <div className="resume-section-2">
                    <div className="resume-intro">
                    <p>
 프론트엔드 개발자로서의 역량을 키우고자 AICC 웹 개발 과정을 수강하며 취업을 준비해왔습니다. KDT 과정을 통해 프론트엔드뿐 아니라 네트워크, 백엔드, 데이터베이스(DB) 등 웹 개발 전반의 지식을 습득할 수 있었습니다. 특히 HTML, CSS, JavaScript를 활용해 정적 페이지를 구성하고 JavaScript로 동적 기능을 구현하는 과제를 통해 웹 페이지의 구조와 기능 구현에 대한 깊은 이해를 쌓았습니다. 이후 PFLOW의 회사 추천 및 취업 사이트 프로젝트에서는 React를 사용하여 CSR(Client-Side Rendering) 개념과 React 라이프사이클을 학습하고 실습하며 실무 역량을 한층 더 강화했습니다.

또한, 프론트엔드 개발자로서 필요한 역량을 확장하기 위해hub 팀 프로젝트로 온라인 쇼핑몰 웹사이트를 개발 프로젝트를 진행했습니다. 이 프로젝트는 웹 개발에 관심이 있는 팀원들과 각자의 기술을 발전시키고 실제 개발 프로세스를 경험해 보는 것을 목표로 하였습니다. 주제 선정과 기획, 도메인 지식 학습, 데이터베이스 설계, UI/UX 구성까지 웹 서비스 개발의 전 과정을 체계적으로 이해하며 협업 능력과 실무 기술을 함께 발전시킬 수 있었습니다.

프론트엔드 개발자로서 중요한 점은 단순히 성능 향상에 그치지 않고, 사용자가 서비스를 이용하며 느끼는 편의와 경험을 최우선으로 고려하는 것이라 생각합니다. 저 역시 사용자에게 더 편리한 UI/UX를 제공할 수 있는 개발자가 되기 위해 쉽게 만족하지 않고 발전을 멈추지 않는 개발자로 성장하고 싶습니다.

</p>
                    </div>
                    <div className="career-block">
                        <h3 className="resume-section-2-subtitle">경력</h3>
                        <span>하이미디어 컴퓨터 디자인학원 /행정팀 /사원</span>
                        <span>2022. 08. 01. ~ 2023. 12. 01. (1년 4개월)</span>
                    </div>
                    <div className="career-block">
                        <h3 className="resume-section-2-subtitle">학력</h3>
                        <span>용인대학교 연극학과 학사 졸업</span>
                        <span>2016. 03. ~ 2020. 02.</span>
                    </div>
                        <div className="edu-block">
                        <h3 className="resume-section-2-subtitle">교육</h3>
                            <li className="edu-li">
                            <span> KDT 코드랩 [부트캠프] AI 인공지능 웹서비스 풀스택 개발자(AICC 딥러닝)</span>
                            <span>2024. 04. 12. ~ 2020. 10. 23. / 수료</span>
                            </li>
                            <li className="edu-li">
                            <span> KDT 코드잇 [부트캠프심화] 프론트엔드 단기심화</span>
                            <span>2024. 11. 07. ~  / 진행중</span>
                            </li>
                        </div>
                        <div className="project-block">
                        <h3 className="resume-section-2-subtitle">PROJECT</h3>
                       <h4>PFLOW AI챗봇 & 이력서 작성도우미 취업 웹사이트</h4>
                       <table className="project-table">
                        <tr>
                        <th>기간:</th>
                         <td>2024. 05. ~ 2024. 10.</td>
                        </tr>
                        <tr>
                        <th>담당/인원:</th>
                         <td>Front-End 파트  (AI: 2명 DEVOPS: 1명 B.E: 1명 F.E: 1명)</td>
                        </tr>
                        <tr>
                            <th>url</th>
                            <td><a href="https://pflow.ddns.net/">https://pflow.ddns.net/</a></td>
                        </tr>
                        <tr>
                        <th>개발목표:</th>
                         <td>
                         <p>- 원하는 조건을 입력하면 채용공고를 추천해주는 챗봇</p> 
                         <p>- 취업준비를 하는 사용자들의 정보교환을 위한 커뮤니티</p>
                         <p>- 사용자의 보유기술과 희망분야를 바탕으로 이력서 문구 추천</p>
                         <p>- 사용자의 활동이력과 개인정보 관리를 위한 마이페이지</p>
                         </td>
                         </tr>
                         <tr>
                         <th>담당 기능 구현:</th>
                         <td>
                         <p>- axios로 커뮤니티 또는 회원 정보 데이터의 조회, 수정, 작성, 삭제 CRUD 요청</p> 
                         <p>- 상태가 자주 변경하는 커뮤니티 데이터를 Redux의 Thunk를 활용하여 잦은 비동기 요청을 효율적으로 관리</p>
                         <p>- animation과 media query로 특정 view 이하일 때 break point를 설정하여 반응형 웹 구현</p>
                         <p>- react-router-dom 라이블러리의 Link, useParms로 동적 라우팅 구현</p>
                         </td>
                         </tr>
                         <tr>
                            <th>FE. 사용기술</th>
                            <td>React, Axios, Npm, Redux, CSS, Figma</td>
                         </tr>
                        </table> 
                        <h4>WI gemini ai를 활용한 네이버 뉴스 요약 서비스</h4>
                        <table className="project-table">
                        <tr>
                        <th>기간:</th>
                         <td> 2024. 10. 19. ~ 2024. 10. 29.</td>
                        </tr>
                        <tr>
                        <th>담당/인원:</th>
                         <td>Front-End 파트  (B.E: 1명 F.E: 2명)</td>
                        </tr>
                        <tr>
                            <th>url</th>
                            <td><a href="https://news-summary-lake.vercel.app/">https://news-summary-lake.vercel.app/</a></td>
                        </tr>
                        <tr>
                        <th>개발목표:</th>
                         <td>
                         <p>- 네이버 뉴스 데이터를 ai summary 하여 사용자에게 기사내용 요약본을 제공</p> 
                         <p>- 페이지를 내릴 때마다 뉴스 리스트 무한 스크롤</p>
                         <p>- 원하는 뉴스 저장 및 삭제하는 스크랩 기능</p>
                         </td>
                         </tr>
                         <tr>
                         <th>담당 기능 구현:</th>
                         <td>
                         <p>- redux slice로 요약데이터 & 뉴스 전체 데이터 불러오기</p> 
                         <p>- 메뉴바 & 요약 & 검색 모달창 구현</p>
                         <p>- 브라우저 local storage를 활용하여 뉴스데이터 저장 및 삭제 스크랩 기능 구현</p>
                         </td>
                         </tr>
                         <tr>
                            <th>FE. 사용기술</th>
                            <td>Next.js(13이상), Typescript, Axios, Redux,  Tailwind CSS, Figma</td>
                         </tr>
                        </table>    
                    </div>
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default Resume;




{/* <div className='skills-section'>
<h2>Skillls</h2>
<div className='skill-div'>
<h4>Javascript</h4>
<p>화살표함수, Template Literals, 각 변수선언 등, ES6 문법에 익숙합니다.</p>
</div>
<div className='skill-div'>
<h4>React</h4>
<p>프로젝트에서 주로 사용했으며 CSR과 리액트 컴포넌트 라이프사이클을 이해하고 있습니다.</p>
</div>
<div className='skill-div'>
<h4>Redux-toolkit</h4>
<p>slices와 action의 개념을 알고 정의할 수 있으며 프로젝트에서 thunk를 사용하여 복잡한 비동기처리에  적용하였습니다. </p>
</div>
<div className='skill-div'>
<h4>Axios</h4>
<p>REST API요청 </p>
</div>
<div className='skill-div'>
<h4>HTML & CSS</h4>
<p>HTML 설계하는데 시맨틱태그를 고려하여 규칙을 준수하려고합니다. Media query를 사용해 반응형 css를 구현하였고, 동적인 ui를 위하여 Animation keyframes를 사용할 수 있습니다.</p>
</div>
<div className='skill-div'>
<h4>Figma</h4>
<p>ui디자인 툴로 사용 경험이 있습니다.</p>
</div>
<div className='skill-div'>
<h4>Github</h4>
<p>각 프로젝트의 브랜치전략을 준수하며 커밋, 머지를 하였습니다.</p>
</div>
</div> */}



// <h1>김재영 | FrontEnd Developer</h1> 
// <div className="resume-section-1">
// <img src="https://wddoods015.github.io/jaeyoung/resume-profile.jpg" className="profile-img" />
// <div className='my-info-section'>
// <span className='contact-subtitle'>contact</span>
// <ul className='resume-ul'>
// <li><span className='resume-ct-tag'>Email.</span><span className='resume-ct-item'>wddoods015@gmail.com</span></li>
// <li><span className='resume-ct-tag'>Phone.</span><span className='resume-ct-item'>010-2191-1703</span></li>
// </ul>
// <span className='contact-subtitle'>chanel</span>
// <ul className='resume-ul'>
// <li><span className='resume-ct-tag'>Portfolio.</span><span className='resume-ct-item'>https://wddoods015.github.io/jaeyoung/</span></li>
// <li><span className='resume-ct-tag'>Github.</span><span className='resume-ct-item'>https://github.com/wddoods015</span></li>
// <li><span className='resume-ct-tag'>Velog.</span><span className='resume-ct-item'>https://velog.io/@wddoods015</span></li>
// </ul>
// </div>
// </div>
// <div className='intro-section'>
// <h2>Intro</h2>
// <p>
// 주니어 프론트엔드 개발자를 희망하는 김재영입니다. 사용경험 개선과 편안한 인터페이스, 웹의 가치관을 설명할 인터랙트 애니메이션을 
// 발전시기키 위해 노력중입니다. 다방면으로 역량을 키우고싶습니다.    
// 리액트 라이브러리를 주로 활용하여 웹개발 프로젝트에서 프론트엔드 전반 부분을 담당하였습니다.
// </p>
// </div>


// <div className='project-section'>
// <h2>Project experience</h2>
// <div className='project-div'>
//     <div className='period-project'>
//     <h3>PFLOW 회사 추천 웹개발 </h3>
//     <span>프론트엔드 개발자</span>
//        <h3>2024. 05. ~ 2024. 10.</h3>  
//     </div> 
//     <div className='description-project'>
//         <span>로그인 & 로그아웃</span>
//         <ul>
//         <li>
//             jwt 방식으로 엑세스토큰 여부로  로그인 & 로그아웃 인증 처리
//             </li>
//             </ul>
//             <span>커뮤니티</span>
//             <ul>
//                 <li>
//                 react-router-dom에서 link와 useparms를 사용해 클라이언트 라우팅을 적용하고 각 상세페이지마다 동적라우팅을 설정.
//                 </li>
//             </ul>
//             <span>이력서 작성 도움 기능</span>
//             <ul>
//                 <li>
//                map 메서드를 사용하여 경력추가 section 반영, npm hook을 사용하여 download 기능 적용. 
//                 </li>
//                 <li>
//               open ai api를 적용하여 문구추천 기능 연동 
//                 </li>
//             </ul>
//             <span>회사 공고 추천</span>
//             <ul>
//                 <li>
//                     useRef로 대화가 추가될 때마다 채팅창 맨 아래로 이동하는 동적 스크롤 구현
//                 </li>
//             </ul>
//             <div className='skills-div'>
//                 <span className='skill-bdage'>React</span>
//                 <span className='skill-bdage' >Redux</span>
//                 <span className='skill-bdage'>CSS</span>
//                 <span className='skill-bdage'>Animation & Keyframe</span>
//                 <span className='skill-bdage'>Axios</span>
//                 <span className='skill-bdage'>npm</span>
//             </div>  
//     </div>
// </div>
// </div>