// src/components/Content.js
import React from 'react';

import '../App.css'; // استيراد ملف CSS

import DALL·E from "../images/DALL·E.webp"





import Stack from '@mui/material/Stack';




export default function Content() {
  return (
    <div className="content">
      <div className="content-box" >
        <div >

          {/* قسم الصورة الخلفية */}
          <div
            className="content-imgHeader"
            style={{
              backgroundImage: `url(${DALL·E})`,
              zIndex:"-1",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              color: "white", // لون النص
              textAlign: "center",
              padding: "20px",
              position: "absolut",
              left: "0px",
              top: "50px",
              zIndex: "-1",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // إضافة شفافية للخلفية لزيادة الوضوح
            
            }}
          >
       <h1>  .طريقك نحو السلام الداخلي يبدأ من هنا   </h1>
     
          
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                fontSize: "1.2rem",
                backgroundColor: "#007bff",
                border: "none",
                borderRadius: "5px",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => console.log("Explore Services")}
            >
              استكشاف الخدمات
            </button>
          </div>
          {/* قسم الصورة الخلفية */}


<div className='content-body'>
  {/* INFO SECTION */}
<div className="info-section">
  <div className="info-card vision-card">
    <h2 style={{fontSize:"30px"}}>رؤيتنا</h2>
    <p style={{fontSize:"26px"}}>هذا الموقع مخصص لتقديم الدعم النفسي الشامل والسهل الوصول. هدفنا هو تحسين جودة الحياة النفسية للجميع من خلال موارد موثوقة واستشارات مستقبلية مع متخصصين في المجال.</p>
  </div>
  <div className="info-card founder-card">
    <h2 style={{fontSize:"30px"}} >عن مؤسس الموقع</h2>
    <p style={{fontSize:"26px"}} >
    <span  className="site-name">ALLO DOCTEUR</span> نسعى إلى توفير منصة تساهم في تحسين الصحة النفسية لجميع الأفراد.حاليًا نعمل على تطوير الموقع وتوسيعه، حيث نتطلع إلى التعاون مع أطباء ومتخصصين نفسيين لتقديم أفضل خدمة ممكنة للمستخدمين.
  </p>
  </div>
</div>
{/* INFO SECTION */}

{/* FAQ Section */}
<div className="faq-section" style={{ direction: 'rtl', textAlign: 'right' }}>
  <h2>الأسئلة الشائعة</h2>
  <div className="faq-item">
    <h5 className="faq-question">ما هي خدمات الموقع؟</h5>
    <p className="faq-answer">نقدم استشارات نفسية، موارد تعليمية، ودعم متخصص لتحسين الصحة النفسية.</p>
  </div>
  <div className="faq-item">
    <h5 className="faq-question">كيف يمكنني التسجيل في الموقع؟</h5>
    <p className="faq-answer">يمكنك التسجيل عبر النقر على زر "تسجيل" في أعلى الصفحة وإدخال معلوماتك.</p>
  </div>
  <div className="faq-item">
    <h5 className="faq-question">هل يمكنني استشارة طبيب نفسي عبر الموقع؟</h5>
    <p className="faq-answer">نعم، يمكنك حجز استشارة مع أطباء نفسيين متخصصين عبر الموقع.</p>
  </div>
</div>

{/* FAQ Section */}


{/* مقالات و نصائح */}
<div className="articles-tips-section">
      <h2>مقالات ونصائح</h2>

      <div className="articles-section">
        <h3>المقالات</h3>
        <div className="content-grid articles-grid">
          <div className="article">
            <h4>مقالة 1: أهمية التأمل في تحسين الصحة النفسية</h4>
            <p>التأمل هو ممارسة تساعد في تهدئة العقل وتحسين التركيز. من خلال تخصيص بضع دقائق يوميًا للتأمل، يمكنك تقليل التوتر وتعزيز الشعور بالهدوء.</p>
            <button>اقرأ المزيد</button>
          </div>
          <div className="article">
            <h4>مقالة 2: كيفية إدارة الضغوط اليومية</h4>
            <p>إدارة الضغوط يمكن أن تكون تحديًا كبيرًا، ولكن هناك استراتيجيات يمكن أن تساعد في تقليل تأثير الضغوط اليومية على صحتك العقلية. تعرف على تقنيات فعالة لإدارة الضغوط.</p>
            <button>اقرأ المزيد</button>
          </div>
        </div>
        {/* <!-- Button for more articles --> */}
    <div className="more-articles" style={{direction:"rtl"}}>
      <button className="view-more">مزيد من المقالات <span className="arrow">&#x2190;</span></button>
    </div>
      </div>

      <div className="tips-section">
        <h3>النصائح</h3>

        <div className="content-grid tips-grid">
          <div className="tip">
            <h4>نصيحة 1: أهمية التواصل مع الأصدقاء</h4>
            <p>التواصل مع الأصدقاء والعائلة يمكن أن يكون له تأثير إيجابي كبير على صحتك النفسية. حاول قضاء وقت مع الأشخاص الذين يدعمونك ويشجعونك.</p>
            <button>اقرأ المزيد</button>
          </div>
          <div className="tip">
            <h4>نصيحة 2: وضع أهداف صغيرة لتحقيق النجاح</h4>
            <p>تحديد أهداف صغيرة وقابلة للتحقيق يمكن أن يساعد في زيادة الشعور بالإنجاز والثقة بالنفس. ابدأ بتحديد أهداف قصيرة الأمد واستخدمها كخطوات للوصول إلى أهداف أكبر.</p>
            <button>اقرأ المزيد</button>
          </div>
         
        </div>
         {/* <!-- Button for more tips --> */}
    <div className="more-tips" style={{direction:"rtl"}}>
      <button className="view-more">  مزيد من النصائح <span className="arrow">&#x2190;</span></button>
    </div>
      </div>
    </div>
{/* مقالات و نصائح */}



          

          <div className="respons" >
          <h2 className="section-title">استكشف الاضطرابات النفسية الشائعة</h2>
            <div>
              <Stack className='stack' spacing={2} style={{ border: "none" }}>
                <div className='stack-item'>
                  <h2>النهام العصابي - Bulimia Nervosa</h2>
                  <h3>يعد النهام العصابي، او ما يسمى البوليميا، او الشره احد انواع اضطرابات الاكل الذي يستهلك فيها المصابون كميات كبيرة من الطعام في فترات زمنية قصيرة، فيما يسمى بنوبة النهم (Binge attack)، ثم يلجأون إلى..</h3>
                  <p>للمزيد »</p>
                </div>
                <div className='stack-item'>
                  <h2>القلق - Anxiety</h2>
                  <h3>من الطبيعي أن يشعر الإنسان بالقلق أو بالفزع من حين إلى آخر، أما إذا كان الإحساس بالقلق يتكرر في أوقات متقاربة دون أي سبب حقيقي إلى درجة أنه يعيق مجرى الحياة اليومي الطبيعي، فالمرجح أن هذا الإنسان يعاني..</h3>
                  <p>للمزيد »</p>
                </div>
                <div className='stack-item'>
                  <h2>الاكتئاب - Depression</h2>
                  <h3>الاكتئاب هو اضطراب مزاجي يؤثر على كيفية شعور الفرد وتفكيره وتصرفه. يمكن أن يؤدي الاكتئاب إلى مشكلات عاطفية وجسدية وقد يؤثر على القدرة على العمل أو ممارسة الأنشطة اليومية.</h3>
                  <p>للمزيد »</p>
                </div>
              </Stack>
            </div>
          </div>

         
  </div>

        </div>
      </div>
    </div>
  );
}


