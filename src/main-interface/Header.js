


import React, { useState, useEffect } from 'react';

// src/main-interface/Header.js
import "./Header.css";
import llllllllllllllggggggggg from '../images/llllllllllllllggggggggg.png';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const contentButtons = (handleMenuClick) => (
  <div className="content-button">
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button className='home-page' variant="contained" onClick={handleMenuClick}>الصفحة الرئيسية</Button>
    </Link>
    <Link to="/doctors">
      <Button variant="contained" onClick={handleMenuClick}>قائمة الأطباء</Button>
    </Link>
    <Link to="/consultation">
      <Button variant="contained" onClick={handleMenuClick}>الاستشارة النفسية</Button>
    </Link>
    <Link to="/articles">
      <Button variant="contained" onClick={handleMenuClick}>قراءة المقالات</Button>
    </Link>
    <Link to="/booking">
      <Button variant="contained" onClick={handleMenuClick}>حجز المواعيد</Button>
    </Link>
    <Link to="/newsFeed">
      <Button variant="contained" onClick={handleMenuClick}>أخر المستجدات</Button>
    </Link>
    <Link to="/login" style={{ textDecoration: 'none' }}>
      <Button className='bttn-log-reg' variant="contained" onClick={handleMenuClick}>تسجيل دخول</Button>
    </Link>
    <Link to="/register" style={{ textDecoration: 'none' }}>
      <Button className='bttn-log-reg' variant="contained" onClick={handleMenuClick}>تسجيل</Button>
    </Link>
  </div>
);

const Header = () => {
  const [showButtons, setShowButtons] = useState(false);

  const handleMenuClick = () => {
    setShowButtons(!showButtons);
  };

  useEffect(() => {
    if (showButtons) {
      // إخفاء شريط التمرير عند فتح القائمة
      document.body.style.overflow = 'hidden';
    } else {
      // إظهار شريط التمرير عند إغلاق القائمة
      document.body.style.overflow = 'auto';
    }

    // تنظيف التأثير عند إلغاء المكون
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showButtons]);

  return (
    <>
      <div className='all-header'>
        <header className="header">
          {/* Logo */}
          <div className="logo">
            <img src={llllllllllllllggggggggg} alt="Logo" />
          </div>

          {/* Search Box */}
          <div className="search-box">
            <input
              style={{ textAlign: "center" }}
              type="text"
              placeholder="search"
            />
          </div>

          {/* Buttons */}
          <div className="buttons">
            <Link to="/login">
              <Button>تسجيل دخول</Button>
            </Link>
            <Link to="/register">
              <Button>تسجيل</Button>
            </Link>
          </div>

          {/* Home Icon */}
          <div className='icon-home'>
            <Link to="/">
              <HomeIcon style={{ fontSize: '60px', color: "#003366" }} />
            </Link>
          </div>
        </header>

        {/* MENU ICON */}
        <div>
          <MenuIcon className='menue-icon' onClick={handleMenuClick} />
        </div>

        <div className="father-button">
          {contentButtons(handleMenuClick)}
        </div>
      </div>

      {/* Dropdown menu */}
      <div>
        {showButtons && <div className='drop-down'>{contentButtons(handleMenuClick)}</div>}
      </div>
    </>
  );
}

export default Header;

// أضفنا useEffect لمراقبة حالة showButtons، فإذا كانت القائمة مفتوحة سيتم إخفاء شريط التمرير (overflow: hidden).
// عند إغلاق القائمة أو إلغاء المكون، يتم إعادة تفعيل التمرير تلقائيًا.
// يمكنك الآن تجربة الكود وستلاحظ أن شريط التمرير سيختفي عند فتح القائمة المنسدلة ويعود عند إغلاقها.


// useEffect(() => {
//   // هنا تضع الكود الذي تريد تنفيذه عند حدوث التأثير
  
//   return () => {
//     // هنا تضع كود التنظيف الذي يُنفذ عندما يُلغى التأثير أو يتم إعادة تشغيله
//   };
// }, [dependency1, dependency2]); // مصفوفة التبعيات
