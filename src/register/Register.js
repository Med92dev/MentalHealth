
import React, { useState } from 'react';
import './loginAndRegister.css';
import Footer from '../main-interface/Footer';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    // هنا يمكنك إضافة منطق التسجيل
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
    <div className='register'>
    <div className="register-container">
      <h2>إنشاء حساب</h2>
      <form onSubmit={handleSubmit} className="register-form">
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
        <label htmlFor="confirm-password">تأكيد كلمة المرور:</label>
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">تسجيل</button>
      </form>
      <p>لديك حساب؟ <a href="/login">تسجيل الدخول</a></p>
    </div>
    </div>
    <Footer />
    </>
  );
}

export default Register;
