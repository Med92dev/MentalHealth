

import React, { useState } from 'react';
import './loginAndRegister.css';
import Footer from '../main-interface/Footer';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكنك إضافة منطق تسجيل الدخول
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
    <div className='register'>
    <div className="login-container">
      <h2>تسجيل الدخول</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">البريد الإلكتروني:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">كلمة المرور:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">تسجيل الدخول</button>
      </form>
      <p>ليس لديك حساب؟ <a href="/register">سجل هنا</a></p>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default Login;
