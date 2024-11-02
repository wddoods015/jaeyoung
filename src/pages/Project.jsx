import React from 'react';
import './Project.css';


const Project = () => {

    return (
        <div className='project'>
        <h2 className='project-title'>My Project</h2>

        <div className='pj-div'>
        <h2>PFLOW AICC 회사 추천 웹사이트</h2>
        <img src="https://wddoods015.github.io/jaeyoung/PFLOW-MAIN.png" className="project-img" />    
         <div className='pj-info-div'>
            <span className='pj-info-title'>기간</span>
            <span className='pj-info-content'>2024. 05. ~ 2024. 10.</span>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>개발인원</span>
            <span className='pj-info-content'>5명 (AI: 2명 DEVOPS: 1명 B.E: 1명 F.E: 1명)</span>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>URL</span>
            <div className='pj-info-content'><a href='https://pflow.ddns.net/'>https://pflow.ddns.net/</a></div>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>GITHUB</span>
            <div className='pj-info-content'><a href='https://github.com/AICC-PFLOW/webDev'>소스코드</a></div>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>MAIN-SKILLS</span>
            <div className='pj-info-content'>
                <span className='pj-badge'>Python</span>
                <span className='pj-badge'>Node.js</span>
                <span className='pj-badge'>React</span>
                <span className='pj-badge'>Docker</span>
                <span className='pj-badge'>Jenkins</span>
            </div>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>TOOLS</span>
            <div className='pj-info-content'>
                <span className='pj-badge'>VSCode</span>
                <span className='pj-badge'>Jupiter</span>
                <span className='pj-badge'>Github</span>
                <span className='pj-badge'>Figma</span>
                <span className='pj-badge'>Notion</span>
            </div>
        </div>
        <details>
            <summary className='drop-summary'>구현 상세</summary>
            <div className='pj-description'>
                    <span>로그인 & 로그아웃</span>
                    <ul>
                    <li>
                        jwt 방식으로 엑세스토큰 여부로  로그인 & 로그아웃 인증 처리
                        </li>
                        </ul>
                        <span>커뮤니티</span>
                        <ul>
                            <li>
                            react-router-dom에서 link와 useparms를 사용해 커뮤니티, 저장한 이력서페이지 마다 상세페이지마다 동적라우팅을 설정.
                            </li>
                        </ul>
                        <span>이력서 작성 도움 기능</span>
                        <ul>
                            <li>
                           map 메서드를 사용하여 경력추가 section 반영, npm hook을 사용하여 download 기능 적용. 
                            </li>
                            <li>
                          open ai api를 적용하여 문구추천 기능 연동 
                            </li>
                        </ul>
                        <span>회사 공고 추천</span>
                        <ul>
                            <li>
                                useRef로 대화가 추가될 때마다 채팅창 맨 아래로 이동하는 동적 스크롤 구현
                            </li>
                        </ul>
                </div>
        </details>
        </div>
        <div className='pj-div'>
        <h2>뉴스 요약 웹서비스 프로젝트</h2>
        <img src="https://wddoods015.github.io/jaeyoung/WI-MAIN.png" className="project-img" />    
         <div className='pj-info-div'>
            <span className='pj-info-title'>기간</span>
            <span className='pj-info-content'>2024. 10. 19 ~ 2024. 10. 29</span>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>개발인원</span>
            <span className='pj-info-content'>3명 (B.E: 1명 F.E: 2명)</span>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>URL</span>
            <div className='pj-info-content'><a href='https://news-summary-lake.vercel.app/'>https://news-summary-lake.vercel.app/</a></div>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>GITHUB</span>
            <div className='pj-info-content'><a href='https://github.com/wddoods015/news-summary'>소스코드</a></div>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>MAIN-SKILLS</span>
            <div className='pj-info-content'>
                <span className='pj-badge'>Next.js</span>
                <span className='pj-badge'>Node.js</span>
                <span className='pj-badge'>Typescript</span>
                <span className='pj-badge'>Tailwind CSS</span>
                <span className='pj-badge'>Gemini AI</span>
            </div>
        </div>
        <div className='pj-info-div'>
            <span className='pj-info-title'>TOOLS</span>
            <div className='pj-info-content'>
                <span className='pj-badge'>VSCode</span>
                <span className='pj-badge'>Slack</span>
                <span className='pj-badge'>Github</span>
                <span className='pj-badge'>Figma</span>
            </div>
            </div>
            <details>
            <summary className='drop-summary'>구현 상세</summary>
            <div className='pj-description'>
                    <span>뉴스 데이터</span>
                    <ul>
                    <li>
                        Redux Thunk로 기사 데이터 상태관리
                        </li>
                        <li>
                          Gemini AI로 뉴스 요약
                            </li>
                        </ul>
                        <span>뉴스 북마크 저장</span>
                        <ul>
                            <li>
                          Chrome storage api로 북마크 저장기능 구현 예정
                            </li>
                        </ul>
                        <span>헤드라인 뉴스 무한 스와이프</span>
                        <ul>
                            <li>
                            Npm 모듈 및 Animation 활용하여 구현 예정
                            </li>
                        </ul>
                        <span>키워드 검색</span>
                        <ul>
                            <li>
                            구글에서 제공하는 오늘의 트렌드 를 활용하여 주요 키워드로 검색
                            </li>
                        </ul>
                </div>

            </details>
            </div>
        </div>
    );
};

export default Project;


