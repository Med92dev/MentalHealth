// import React, { useContext } from 'react';
// import { ArticlesContext } from '../article/ArticlesContext'; // تأكد من المسار الصحيح
// import "./article.css";
// import Footer from "../main-interface/Footer"; // تأكد من أن مسار Footer صحيح

// const Articles = () => {
//   const { articles, loading, error } = useContext(ArticlesContext); // الحصول على المقالات من السياق

//   if (loading) {
//     return <p>Loading articles...</p>; // عرض رسالة تحميل أثناء جلب البيانات
//   }

//   if (error) {
//     return <p>Error: {error}</p>; // عرض رسالة خطأ عند الفشل في جلب البيانات
//   }

//   return (
//     <>
//       <div className="article">
//          {/* إضافة محرك البحث */}
//          <script async src="https://cse.google.com/cse.js?cx=YOUR_CSE_ID"></script>
//         <div className="gcse-search"></div>
//         <h1>مقالات الصحة النفسية</h1>
//         <div className="container-articles">
//           {articles.length > 0 ? (
//             articles.map((a, index) => (
//               <div className="list-article" key={a.id}>
//                 <h2>{a.title}</h2>
//                 {a.image && <img src={a.image} alt={a.title} style={{ width: '250px' }} />}
//                 <p>{a.body}</p>
//                 <div style={{ display: 'flex' }}>
//                   <button>المزيد</button>
//                 </div>
//                 {/* إضافة الخط الفاصل فقط إذا لم تكن المقالة الأخيرة */}
//                 {index < articles.length - 1 && <hr />}
//               </div>
//             ))
//           ) : (
//             <p>No articles found.</p> // في حال لم يتم جلب أي مقالات
//           )}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Articles;





import './article.css';
import Footer from '../main-interface/Footer';

const Articles = () => {


  return (
    <>
      <div className="article">
      

        {/* محتوى المقالات هنا */}
        <h1>مقالات الصحة النفسية</h1>

        {/* إضافة الـ Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Articles;
