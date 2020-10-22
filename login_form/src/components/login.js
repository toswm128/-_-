import React from 'react';
import './login.css'

function Login() {
  return (
    <div className="container">  
        <div className="item">
           <div className="item">
            <div className="itemLoginBox">
                <div className="Ex">
                    <h1 className="font">로그인</h1>
                    <h2 className="fontMin">계정이 없으신가요? <a href="/login_join/login_join.html">가입하기</a></h2>
                </div>
                <div className="Email">
                    <h5 className="fontMinMin">이메일</h5>
                    <input type="text" className="idpw" />
                </div>
                <div className="pw">
                    <h5 className="fontMinMin">비밀번호</h5>
                    <input type="password" className="idpw" />
                    <a className="fontMinMin" id="lost" href="/login_lost/login_lost.html">비밀번호를 잊어버리셨나요?</a>
                </div>
                <div className="ok">
                    <button className="font" id="loginButton" >로그인</button>
                </div>
            </div>
        </div> 
        </div>
        
    </div>
  );
}

export default Login;