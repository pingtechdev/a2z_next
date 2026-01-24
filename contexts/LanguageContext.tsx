'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.solutions': 'Business Solutions',
    'nav.gallery': 'Gallery',
    'nav.about': 'About Us',
    'nav.track': 'Track Order',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Hero
    'hero.badge': 'Trusted by Top Online Shops in Lebanon Since 2016',
    'hero.title': 'Trusted by Top Online Shops in Lebanon Since 2016',
    'hero.subtitle': 'Since 2016',
    'hero.description': 'Reliable, efficient, and built for Lebanon\'s Challenges—our delivery services help your business grow with confidence.',
    'hero.cta': 'Start Delivering With Us',
    'hero.login': 'Login',
    'hero.becomePartner': 'Start Delivering With Us',
    'hero.whoWeAre': 'Who We Are',
    'hero.learnMore': 'Learn More',
    'hero.stat1': 'Support',
    'hero.stat2': 'Deliveries',
    'hero.stat3': 'On Time',
    'hero.professional': 'Professional',
    'hero.mainTitle': 'Same-Day & Next-Day Delivery',
    'hero.servicesButton': 'Our Services',

    // Hero Slides
    'hero.slide1.title': 'Trusted by Top Online Shops in Lebanon Since 2016',
    'hero.slide1.description': 'Reliable, efficient, and built for Lebanon Challenges—our delivery services help your business grow with confidence.',
    'hero.slide2.title': 'Trusted by Top Online Shops in Lebanon Since 2016',
    'hero.slide2.description': 'Reliable, efficient, and built for Lebanon Challenges—our delivery services help your business grow with confidence.',
    'hero.slide3.title': 'Trusted by Top Online Shops in Lebanon Since 2016',
    'hero.slide3.description': 'Reliable, efficient, and built for Lebanon Challenges—our delivery services help your business grow with confidence.',
    'hero.slide4.title': 'Trusted by Top Online Shops in Lebanon Since 2016',
    'hero.slide4.description': 'Reliable, efficient, and built for Lebanon Challenges—our delivery services help your business grow with confidence.',
    'hero.slide5.title': 'Trusted by Top Online Shops in Lebanon Since 2016',
    'hero.slide5.description': 'Reliable, efficient, and built for Lebanon Challenges—our delivery services help your business grow with confidence.',

    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Fast and secure delivery across Lebanon with real-time tracking and Cash on Delivery (COD) options.',
    'services.local.title': 'Local Delivery',
    'services.local.desc': 'Fast, secure local deliveries across Lebanon — perfect for shops and businesses needing same-city service.',
    'services.shipping.title': 'Same-Day & Next-Day Delivery',
    'services.shipping.desc': 'Choose same-day for urgent orders or next-day for cost-effective speed — reliable time slots and proof of delivery.',
    'services.packaging.title': 'Packaging Solutions',
    'services.packaging.desc': 'Custom packaging to protect fragile and high-value items — bulk and branded packaging options available.',
    'services.fulfillment.title': 'Fulfillment & Warehousing',
    'services.fulfillment.desc': 'End-to-end fulfillment: pick, pack and ship from our secure warehouse so you can scale without logistics headaches.',
    'services.pickup.title': 'Branding Service',
    'services.pickup.desc': 'Build your brand from scratch — logo design, social media setup, and starter post templates to help you sell more.',
    'services.cod.title': 'Cash On Delivery (COD) Service',
    'services.cod.desc': 'Secure COD collections with transparent reporting and fast remittances to your account.',

    // Business Solutions
    'solutions.title': 'Our Business Solutions',
    'solutions.subtitle': 'Tailored delivery and fulfillment packages based on your business needs.',
    'solutions.custom.title': 'Custom Logistics Plans',
    'solutions.custom.desc': 'Tailored delivery and fulfillment packages based on your business needs and order volume.',
    'solutions.integration.title': 'E-commerce Integration',
    'solutions.integration.desc': 'Smooth syncing with your online store, POS, or order management system.',
    'solutions.support.title': 'Business Support & Reporting',
    'solutions.support.desc': 'Dedicated account management, monthly reports, and growth consultation to help optimize your logistics.',

    // Gallery
    'gallery.title': 'Gallery',
    'gallery.subtitle': 'Take a look at our operations and facilities',

    // About
    'about.title': 'About Us',
    'about.hero': 'Delivering with Purpose — Since 2016',
    'about.intro': 'A2Z Delivery Services was born out of a simple need: reliable, fast, and professional delivery for businesses in Lebanon. Founded in 2016, we started with a clear goal — to support local shops and online businesses by providing dependable logistics, even during the toughest times.',
    'about.growth': 'What began as a small operation in Beirut has grown into a trusted delivery and fulfillment partner for hundreds of businesses across the country. From online stores and home-based businesses to large-scale retailers, A2Z has become a name businesses count on — especially when others can\'t deliver.',
    'about.commitment': 'Despite economic challenges, fuel shortages, and even war, we kept moving — because we believe that consistency and commitment are the foundation of trust.',
    'about.who.title': 'Who We Are',
    'about.who.desc': 'We are a Lebanese logistics company with a professional team and a mission to simplify the way businesses deliver, store, and manage their products. Our strength lies in our flexibility, our speed, and our ability to adapt — even in crisis.',
    'about.who.serve': 'We proudly serve clients in Beirut, Mount Lebanon, the North, and beyond — offering tailored delivery, packaging, and fulfillment solutions designed to scale with your business.',
    'about.what.title': 'What We Do',
    'about.what.desc': 'At A2Z, we offer complete logistics solutions under one roof:',
    'about.what.delivery': 'Local Delivery – Fast, secure, and tracked delivery across Lebanon.',
    'about.what.packaging': 'Packaging Services – Professional, branded, and secure packaging options.',
    'about.what.fulfillment': 'Fulfillment Services – Full order handling: storage, pick, pack, and ship.',
    'about.what.cod': 'Cash on Delivery (COD) – Reliable collection and transparent reporting.',
    'about.what.integration': 'Business Integration – Custom plans, dedicated support, and real-time syncing with your systems.',
    'about.mission.title': 'Our Mission',
    'about.mission.desc': 'To empower businesses of all sizes with fast, reliable, and scalable logistics services that support growth, enhance customer satisfaction, and stand strong in any situation.',
    'about.vision.title': 'Our Vision',
    'about.vision.desc': 'To become Lebanon\'s most trusted and resilient logistics partner — known for innovation, integrity, and unwavering commitment to quality service, no matter the challenge.',
    'about.why.title': 'Why Choose A2Z?',
    'about.why.1': 'Operating since 2016 with proven expertise',
    'about.why.2': 'Delivery that continues even during conflict or crisis',
    'about.why.3': 'Dedicated team focused on service, speed, and support',
    'about.why.4': 'Trusted by leading online shops and SMEs',
    'about.why.5': 'Flexible solutions tailored to your business model',
    'about.cta': 'Let\'s grow your business together.',
    'about.contact': 'Get in touch to learn how A2Z can handle your logistics from A to Z.',

    // Track
    'track.title': 'Track Your Order',
    'track.subtitle': 'Enter your tracking number to check the latest status.',
    'track.placeholder': 'Enter tracking number',
    'track.button': 'Track',
    'track.how.title': 'How to track your order:',
    'track.how.step1': 'Enter your tracking number in the field above',
    'track.how.step2': 'Click the "Track" button',
    'track.how.step3': 'View real-time updates on your delivery status',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We\'re here to help with all your delivery needs',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.location': 'Salim Salam Highway, Al Hajj Building, Ground Floor',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.namePlaceholder': 'Full Name',
    'contact.form.emailPlaceholder': 'name@example.com',
    'contact.form.phonePlaceholder': '+961000000',
    'contact.form.messagePlaceholder': 'Tell us about your delivery needs...',
    'contact.info.title': 'Contact Information',
    'contact.info.subtitle': 'Have questions? We\'re here to help! Reach out to us through any of the following channels.',
    'contact.info.email': 'Email',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday - Saturday: 8:00 AM - 6:00 PM',
    'contact.hours.sunday': 'Sunday: Closed',

    // Why Us
    'whyus.title': 'Why Choose',
    'whyus.subtitle': 'We\'re not just a delivery company – we\'re your trusted partner in logistics. Our commitment to excellence and customer satisfaction sets us apart from the competition.',
    'whyus.reliability': '100% Reliability',
    'whyus.reliability.desc': 'We guarantee on-time delivery with our proven track record and commitment to excellence.',
    'whyus.pricing': 'Competitive Pricing',
    'whyus.pricing.desc': 'Get the best value for your money with transparent pricing and no hidden fees.',
    'whyus.team': 'Professional Team',
    'whyus.team.desc': 'Our experienced couriers are trained to handle your packages with care and professionalism.',
    'whyus.award': 'Award Winning',
    'whyus.award.desc': 'Recognized as the leading delivery service provider with multiple industry awards.',
    'whyus.stat1': 'Happy Customers',
    'whyus.stat2': 'Cities Covered',
    'whyus.stat3': 'Customer Support',
    'whyus.stat4': 'Success Rate',

    // Footer
    'footer.tagline': 'Your trusted delivery partner since 2016',
    'footer.rights': 'All rights reserved.',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.services': 'الخدمات',
    'nav.solutions': 'حلول الأعمال',
    'nav.gallery': 'المعرض',
    'nav.about': 'من نحن',
    'nav.track': 'تتبع الطلب',
    'nav.contact': 'اتصل بنا',
    'nav.getStarted': 'ابدأ الآن',

    // Hero
    'hero.badge': 'موثوق به من قبل الشركات في جميع أنحاء لبنان',
    'hero.title': 'التوصيل بهدف',
    'hero.subtitle': 'منذ عام 2016',
    'hero.description': 'خدمات توصيل سريعة وموثوقة للشركات في لبنان. نحن نقدم خدمات لوجستية موثوقة، حتى في أصعب الأوقات.',
    'hero.cta': 'ابدأ الآن',
    'hero.login': 'تسجيل الدخول',
    'hero.becomePartner': 'كن شريكاً',
    'hero.whoWeAre': 'من نحن',
    'hero.learnMore': 'اعرف المزيد',
    'hero.stat1': 'الدعم',
    'hero.stat2': 'التوصيلات',
    'hero.stat3': 'في الوقت المحدد',
    'hero.professional': 'احترافي',
    'hero.mainTitle': 'التوصيل في نفس اليوم واليوم التالي',
    'hero.servicesButton': 'خدماتنا',

    // Hero Slides
    'hero.slide1.title': 'توصيل سريع وموثوق',
    'hero.slide1.description': 'شريكك الموثوق للتوصيل في نفس اليوم واليوم التالي في جميع أنحاء لبنان',
    'hero.slide2.title': 'خدمات لوجستية احترافية',
    'hero.slide2.description': 'حلول تنفيذ كاملة من التخزين إلى التوصيل',
    'hero.slide3.title': 'حلول الأعمال',
    'hero.slide3.description': 'خطط لوجستية مخصصة مصممة خصيصًا لاحتياجات عملك',
    'hero.slide4.title': 'موثوق به منذ عام 2016',
    'hero.slide4.description': 'نخدم الشركات بتميز من خلال كل تحدٍ',
    'hero.slide5.title': 'تقديم التميز',
    'hero.slide5.description': 'نجاحك هو مهمتنا - خدمة موثوقة في كل مرة',

    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'توصيل سريع وآمن في جميع أنحاء لبنان مع تتبع في الوقت الفعلي وخيارات الدفع عند الاستلام.',
    'services.local.title': 'التوصيل المحلي',
    'services.local.desc': 'توصيل سريع وآمن في جميع أنحاء لبنان مع تتبع في الوقت الفعلي وخيارات الدفع عند الاستلام.',
    'services.shipping.title': 'الشحن في نفس اليوم واليوم التالي',
    'services.shipping.desc': 'سرعات توصيل مرنة لتتناسب مع توقعات عملك وعملائك.',
    'services.packaging.title': 'التغليف الاحترافي',
    'services.packaging.desc': 'تغليف مخصص ومقاوم للعبث وصديق للبيئة لحماية منتجاتك وتعزيز صورة علامتك التجارية.',
    'services.fulfillment.title': 'التنفيذ والتخزين',
    'services.fulfillment.desc': 'معالجة كاملة للطلبات: التخزين والاختيار والتعبئة والشحن - مثالي للمتاجر عبر الإنترنت.',
    'services.pickup.title': 'الاستلام المجدول',
    'services.pickup.desc': 'استلام يومي أو عند الطلب مصمم خصيصًا لساعات متجرك أو حجم طلباتك.',
    'services.cod.title': 'تحصيل وتسوية الدفع عند الاستلام',
    'services.cod.desc': 'تحصيل نقدي موثوق من العملاء مع تسويات منتظمة وتقارير مالية.',

    // Business Solutions
    'solutions.title': 'حلول الأعمال لدينا',
    'solutions.subtitle': 'حزم توصيل وتنفيذ مخصصة بناءً على احتياجات عملك.',
    'solutions.custom.title': 'خطط لوجستية مخصصة',
    'solutions.custom.desc': 'حزم توصيل وتنفيذ مخصصة بناءً على احتياجات عملك وحجم طلباتك.',
    'solutions.integration.title': 'التكامل مع التجارة الإلكترونية',
    'solutions.integration.desc': 'مزامنة سلسة مع متجرك عبر الإنترنت أو نقاط البيع أو نظام إدارة الطلبات.',
    'solutions.support.title': 'دعم الأعمال والتقارير',
    'solutions.support.desc': 'إدارة حسابات مخصصة وتقارير شهرية واستشارات نمو للمساعدة في تحسين الخدمات اللوجستية الخاصة بك.',

    // Gallery
    'gallery.title': 'المعرض',
    'gallery.subtitle': 'ألق نظرة على عملياتنا ومرافقنا',

    // About
    'about.title': 'من نحن',
    'about.hero': 'التوصيل بهدف - منذ عام 2016',
    'about.intro': 'ولدت خدمات التوصيل A2Z من حاجة بسيطة: توصيل موثوق وسريع واحترافي للشركات في لبنان. تأسست في عام 2016، بدأنا بهدف واضح - دعم المتاجر المحلية والشركات عبر الإنترنت من خلال توفير خدمات لوجستية موثوقة، حتى في أصعب الأوقات.',
    'about.growth': 'ما بدأ كعملية صغيرة في بيروت نما ليصبح شريكًا موثوقًا للتوصيل والتنفيذ لمئات الشركات في جميع أنحاء البلاد. من المتاجر عبر الإنترنت والشركات المنزلية إلى تجار التجزئة على نطاق واسع، أصبحت A2Z اسمًا تعتمد عليه الشركات - خاصة عندما لا يستطيع الآخرون التوصيل.',
    'about.commitment': 'على الرغم من التحديات الاقتصادية ونقص الوقود وحتى الحرب، واصلنا التحرك - لأننا نؤمن بأن الاتساق والالتزام هما أساس الثقة.',
    'about.who.title': 'من نحن',
    'about.who.desc': 'نحن شركة لوجستية لبنانية مع فريق محترف ومهمة لتبسيط الطريقة التي تقوم بها الشركات بتوصيل وتخزين وإدارة منتجاتها. تكمن قوتنا في مرونتنا وسرعتنا وقدرتنا على التكيف - حتى في الأزمات.',
    'about.who.serve': 'نحن نخدم بفخر العملاء في بيروت وجبل لبنان والشمال وما بعده - نقدم حلول توصيل وتغليف وتنفيذ مخصصة مصممة للتوسع مع عملك.',
    'about.what.title': 'ماذا نفعل',
    'about.what.desc': 'في A2Z، نقدم حلول لوجستية كاملة تحت سقف واحد:',
    'about.what.delivery': 'التوصيل المحلي - توصيل سريع وآمن ومتتبع في جميع أنحاء لبنان.',
    'about.what.packaging': 'خدمات التغليف - خيارات تغليف احترافية وذات علامة تجارية وآمنة.',
    'about.what.fulfillment': 'خدمات التنفيذ - معالجة كاملة للطلبات: التخزين والاختيار والتعبئة والشحن.',
    'about.what.cod': 'الدفع عند الاستلام - تحصيل موثوق وتقارير شفافة.',
    'about.what.integration': 'التكامل التجاري - خطط مخصصة ودعم مخصص ومزامنة في الوقت الفعلي مع أنظمتك.',
    'about.mission.title': 'مهمتنا',
    'about.mission.desc': 'تمكين الشركات من جميع الأحجام بخدمات لوجستية سريعة وموثوقة وقابلة للتوسع تدعم النمو وتعزز رضا العملاء وتقف قوية في أي موقف.',
    'about.vision.title': 'رؤيتنا',
    'about.vision.desc': 'أن نصبح الشريك اللوجستي الأكثر ثقة ومرونة في لبنان - معروفين بالابتكار والنزاهة والالتزام الثابت بخدمة الجودة، بغض النظر عن التحدي.',
    'about.why.title': 'لماذا تختار A2Z؟',
    'about.why.1': 'العمل منذ عام 2016 مع خبرة مثبتة',
    'about.why.2': 'التوصيل الذي يستمر حتى أثناء النزاع أو الأزمة',
    'about.why.3': 'فريق مخصص يركز على الخدمة والسرعة والدعم',
    'about.why.4': 'موثوق به من قبل المتاجر الرائدة عبر الإنترنت والشركات الصغيرة والمتوسطة',
    'about.why.5': 'حلول مرنة مصممة خصيصًا لنموذج عملك',
    'about.cta': 'دعونا ننمي عملك معًا.',
    'about.contact': 'تواصل معنا لمعرفة كيف يمكن لـ A2Z التعامل مع الخدمات اللوجستية الخاصة بك من الألف إلى الياء.',

    // Track
    'track.title': 'تتبع طلبك',
    'track.subtitle': 'أدخل رقم التتبع للتحقق من أحدث حالة.',
    'track.placeholder': 'أدخل رقم التتبع',
    'track.button': 'تتبع',
    'track.how.title': 'كيفية تتبع طلبك:',
    'track.how.step1': 'أدخل رقم التتبع في الحقل أعلاه',
    'track.how.step2': 'انقر فوق زر "تتبع"',
    'track.how.step3': 'عرض التحديثات في الوقت الفعلي على حالة التسليم الخاصة بك',

    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'نحن هنا للمساعدة في جميع احتياجات التوصيل الخاصة بك',
    'contact.phone': 'الهاتف',
    'contact.address': 'العنوان',
    'contact.location': 'أوتوستراد سليم سلام، مبنى الحاج، الطابق الأرضي',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'contact.form.namePlaceholder': 'أحمد محمد',
    'contact.form.emailPlaceholder': 'ahmad@example.com',
    'contact.form.phonePlaceholder': '+961 00 000 000',
    'contact.form.messagePlaceholder': 'أخبرنا عن احتياجات التوصيل الخاصة بك...',
    'contact.info.title': 'معلومات الاتصال',
    'contact.info.subtitle': 'هل لديك أسئلة؟ نحن هنا للمساعدة! تواصل معنا من خلال أي من القنوات التالية.',
    'contact.info.email': 'البريد الإلكتروني',
    'contact.hours.title': 'ساعات العمل',
    'contact.hours.weekdays': 'الاثنين - السبت: 8:00 صباحًا - 6:00 مساءً',
    'contact.hours.sunday': 'الأحد: مغلق',

    // Why Us
    'whyus.title': 'لماذا تختار',
    'whyus.subtitle': 'نحن لسنا مجرد شركة توصيل - نحن شريكك الموثوق في الخدمات اللوجستية. التزامنا بالتميز ورضا العملاء يميزنا عن المنافسة.',
    'whyus.reliability': '٪100 موثوقية',
    'whyus.reliability.desc': 'نضمن التسليم في الوقت المحدد مع سجلنا الحافل والتزامنا بالتميز.',
    'whyus.pricing': 'أسعار تنافسية',
    'whyus.pricing.desc': 'احصل على أفضل قيمة مقابل أموالك مع تسعير شفاف وبدون رسوم خفية.',
    'whyus.team': 'فريق محترف',
    'whyus.team.desc': 'يتم تدريب السعاة ذوي الخبرة لدينا على التعامل مع الطرود الخاصة بك بعناية واحترافية.',
    'whyus.award': 'حائز على جوائز',
    'whyus.award.desc': 'معترف به كمزود خدمة التوصيل الرائد مع جوائز صناعية متعددة.',
    'whyus.stat1': 'عملاء سعداء',
    'whyus.stat2': 'المدن المغطاة',
    'whyus.stat3': 'دعم العملاء',
    'whyus.stat4': 'معدل النجاح',

    // Footer
    'footer.tagline': 'شريكك الموثوق للتوصيل منذ عام 2016',
    'footer.rights': 'جميع الحقوق محفوظة.',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
