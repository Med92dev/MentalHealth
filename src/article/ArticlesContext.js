// import React, { createContext, useState, useEffect } from 'react';

// // إنشاء السياق
// export const ArticlesContext = createContext();

// // مزود السياق
// export const ArticlesProvider = ({ children }) => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const apiKey = 'd8c4e687b5db4a56a21b74018418e7d7'; // استبدل YOUR_API_KEY بمفتاح الـ API الخاص بك
//     const fetchArticles = async () => {
//       try {
//         const response = await fetch(`https://newsapi.org/v2/everything?q=mental%20health&language=ar&apiKey=${apiKey}`);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         // تنسيق البيانات
//         const formattedData = data.articles.map(article => ({
//           id: article.source.id + article.publishedAt, // يمكن تحسين هذه الطريقة لتوليد ID فريد
//           title: article.title,
//           body: article.description,
//           image: article.urlToImage
//         }));
//         setArticles(formattedData);
//         console.log("Articles fetched: ", formattedData); // طباعة المقالات للتحقق
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <ArticlesContext.Provider value={{ articles, loading, error }}>
//       {children}
//     </ArticlesContext.Provider>
//   );
// };
