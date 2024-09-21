

// import React from 'react';
// import './newsFeed.css';
// import Footer from "../main-interface/Footer"
// import psychotherapy from '../images/psychotherapy.jpg'; // تأكد من وجود الصورة في هذا المسار
// import stress from '../images/stress.jpg'; // تأكد من وجود الصورة في هذا المسار
// import nutrition from '../images/nutrition.jpg'; // تأكد من وجود الصورة في هذا المسار
// import art from '../images/art.jpg';
// import exercise from '../images/exercise.jpg';
// import  meditation from '../images/meditation.jpg';

// function NewsFeed() {
//   const newsItems = [
//     {
//       title: "أحدث دراسة حول العلاج النفسي",
//       summary: "دراسة جديدة توضح فعالية تقنيات العلاج النفسي في تحسين الصحة العقلية.",
//       imageUrl: psychotherapy,
//       link: "/articles/latest-study"
//     },
//     {
//       title: "ورشة عمل قادمة عن إدارة التوتر",
//       summary: "انضم إلينا في ورشة عمل عملية حول استراتيجيات إدارة التوتر.",
//       imageUrl: stress ,
//       link: "/events/workshop-stress-management"
//     },
//     {
//         title: "ندوة تعليمية عن تأثير التغذية على الصحة النفسية",
//         summary: "ندوة ستتناول كيف يمكن أن تؤثر التغذية على الحالة النفسية وكيفية تحسينها.",
//         imageUrl: nutrition,
//         link: "/events/nutrition-mental-health"
//       },
//       {
//         title: "مقال جديد: كيف يمكن للعلاج بالفن تحسين رفاهيتك",
//         summary: "مقال يشرح كيفية استخدام العلاج بالفن كأداة لتحسين الحالة النفسية.",
//         imageUrl: art,
//         link: "/articles/art-therapy"
//       },
//       {
//         title: "بحث حول تأثير التمارين الرياضية على القلق والاكتئاب",
//         summary: "استعراض بحثي حول كيف يمكن للتمارين الرياضية أن تؤثر على مستويات القلق والاكتئاب.",
//         imageUrl: exercise,
//         link: "/articles/exercise-anxiety-depression"
//       },
//       {
//         title: "ورشة عمل حول استراتيجيات التأمل واليقظة",
//         summary: "تعلم استراتيجيات التأمل واليقظة لتحسين الرفاهية النفسية.",
//         imageUrl:meditation,
//         link: "/events/meditation-workshop"
//       }
//     // أضف المزيد من العناصر هنا
//   ];

//   return (

//     <>
//     <div className="news-feed">
//       <h2>آخر المستجدات</h2>
//       <div className="news-items">
//         {newsItems.map((item, index) => (
//           <div key={index} className="news-card">
//             <img src={item.imageUrl} alt={item.title} />
//             <div className="news-content">
//               <h3>{item.title}</h3>
//               <p>{item.summary}</p>
//               <a href={item.link} className="read-more">اقرأ المزيد</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default NewsFeed;

import React from 'react';
import './newsFeed.css';
import Footer from "../main-interface/Footer";
import psychotherapy from '../images/psychotherapy.jpg';
import stress from '../images/stress.jpg';
import nutrition from '../images/nutrition.jpg';
import art from '../images/art.jpg';
import exercise from '../images/exercise.jpg';
import meditation from '../images/meditation.jpg';

function NewsFeed() {
  const newsItems = [
    {
      title: "أحدث دراسة حول العلاج النفسي",
      summary: "دراسة جديدة توضح فعالية تقنيات العلاج النفسي في تحسين الصحة العقلية.",
      imageUrl: psychotherapy,
      link: "/articles/latest-study"
    },
    {
      title: "ورشة عمل قادمة عن إدارة التوتر",
      summary: "انضم إلينا في ورشة عمل عملية حول استراتيجيات إدارة التوتر.",
      imageUrl: stress,
      link: "/events/workshop-stress-management"
    },
    {
      title: "ندوة تعليمية عن تأثير التغذية على الصحة النفسية",
      summary: "ندوة ستتناول كيف يمكن أن تؤثر التغذية على الحالة النفسية وكيفية تحسينها.",
      imageUrl: nutrition,
      link: "/events/nutrition-mental-health"
    },
    {
      title: "مقال جديد: كيف يمكن للعلاج بالفن تحسين رفاهيتك",
      summary: "مقال يشرح كيفية استخدام العلاج بالفن كأداة لتحسين الحالة النفسية.",
      imageUrl: art,
      link: "/articles/art-therapy"
    },
    {
      title: "بحث حول تأثير التمارين الرياضية على القلق والاكتئاب",
      summary: "استعراض بحثي حول كيف يمكن للتمارين الرياضية أن تؤثر على مستويات القلق والاكتئاب.",
      imageUrl: exercise,
      link: "/articles/exercise-anxiety-depression"
    },
    {
      title: "ورشة عمل حول استراتيجيات التأمل واليقظة",
      summary: "تعلم استراتيجيات التأمل واليقظة لتحسين الرفاهية النفسية.",
      imageUrl: meditation,
      link: "/events/meditation-workshop"
    }
  ];

  const urgentNews = [
    {
      title: "الأخبار العاجلة",
      summary: "صدور تقرير جديد عن تأثير الجائحة على الصحة النفسية.",
      link: "/news/pandemic-impact"
    }
  ];

  const expertRecommendations = [
    {
      title: "توصية من خبراء",
      summary: "تناول الفواكه والخضروات يوميًا يمكن أن يحسن مزاجك.",
      link: "/recommendations/daily-fruits-vegetables"
    }
  ];

  const upcomingEvents = [
    {
      title: "مواعيد الفعاليات القادمة",
      summary: "لا تفوت ندوة الصحة النفسية هذا الشهر!",
      link: "/events/upcoming-mental-health-seminar"
    }
  ];

  return (
    <>
      <div className="news-feed">
        <h2>آخر المستجدات</h2>
        <div className="news-items">
          {newsItems.map((item, index) => (
            <div key={index} className="news-card">
              <img src={item.imageUrl} alt={item.title} />
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a href={item.link} className="read-more">اقرأ المزيد</a>
              </div>
            </div>
          ))}
        </div>

        <div className="urgent-news">
          <h3>الأخبار العاجلة</h3>
          {urgentNews.map((item, index) => (
            <div key={index} className="urgent-news-item">
              <p>{item.summary}</p>
              <a href={item.link} className="read-more">اقرأ المزيد</a>
            </div>
          ))}
        </div>

        <div className="expert-recommendations">
          <h3>توصيات الخبراء</h3>
          {expertRecommendations.map((item, index) => (
            <div key={index} className="expert-recommendation-item">
              <p>{item.summary}</p>
              <a href={item.link} className="read-more">اقرأ المزيد</a>
            </div>
          ))}
        </div>

        <div className="upcoming-events">
          <h3>مواعيد الفعاليات القادمة</h3>
          {upcomingEvents.map((item, index) => (
            <div key={index} className="upcoming-event-item">
              <p>{item.summary}</p>
              <a href={item.link} className="read-more">اقرأ المزيد</a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NewsFeed;
