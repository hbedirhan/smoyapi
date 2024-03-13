const language = {
    nav: {
        tr: {
            home: 'Anasayfa',
            project: 'Projeler',
            eng_service: 'Mühendislik Hizmetlerimiz',
            menu_item0: 'Bina Durum Tespit',
            menu_item1: 'Deprem Analiz Rapor',
            menu_item2: 'Güçlendirme Projesi',
            about: 'Hakkımızda',
            contact_us: 'Bize Ulaşın',
            lang: 'TR',
            turkish: 'Türkçe',
            english: 'İngilizce',

        },
        en: {
            home: 'Home',
            project: 'Projects',
            eng_service: 'Engineering services',
            menu_item0: 'Building Condition Assessment',
            menu_item1: 'Earthquake Analysis Report',
            menu_item2: 'Strengthening Project',
            about: 'About Us',
            contact_us: 'Contact Us',
            lang: 'EN',
            turkish: 'Turkish',
            english: 'English',

        },
    },

    form: {
        tr: {
            homepage: 'Anasayfaya Dön',
            earthquake: 'Deprem Analiz Rapor',
            building: 'Bina Durum Tespit',
            strength: 'Güçlendirme Projesi',
            building_text: 'Bina durum tespiti için aşağıdaki bilgileri doldurun biz size ulaşalım.',
            earthquake_text: 'Deprem analiz raporu için aşağıdaki bilgileri doldurun biz size ulaşalım.',
            strength_text: 'Güçlendirme projesi için aşağıdaki bilgileri doldurun biz size ulaşalım.',
            title: 'İlerlemenin Gücü, SMO YAPI İle Bir Adım Önde',
            send: 'Gönder',

        },
        en: {
            homepage: 'Return to Homepage',
            earthquake: 'Earthquake Analysis Report',
            building: 'Building Condition Assessment',
            strength: 'Strengthening Project',
            building_text: 'Fill in the information below for building condition assessment, and we will contact you.',
            earthquake_text: 'Please fill in the following information for the earthquake analysis report, and we will reach out to you.',
            strength_text: 'Please fill in the following information for the strengthening project, and we will reach out to you.',
            title: 'The Power of Progress, One Step Ahead with SMO YAPI',
            send: 'Send',

        }
    },
    footer: {
        tr: {
            smoyapi: '© 2024 smoyapi.com | Tüm Hakları Saklıdır.',
        },
        en: {
            smoyapi: '© 2024 smoyapi.com | All Rights Reserved.', 
        },

    }
};

const selectLangTR = () => {
    document.documentElement.lang = 'tr';
    document.querySelector('.home').innerHTML = language.nav.tr.home;
    document.querySelector('.home-mobile').innerHTML = language.nav.tr.home;
    document.querySelector('.project').innerHTML = language.nav.tr.project;
    document.querySelector('.project-mobile').innerHTML = language.nav.tr.project;
    document.querySelector('.eng-service').innerHTML = language.nav.tr.eng_service;
    document.querySelector('.eng-service-mobile').innerHTML = language.nav.tr.eng_service;
    document.querySelector('#menu-item-0').innerHTML = language.nav.tr.menu_item0;
    document.querySelector('#menu-item-1').innerHTML = language.nav.tr.menu_item1;
    document.querySelector('#menu-item-2').innerHTML = language.nav.tr.menu_item2;
    document.querySelector('.about').innerHTML = language.nav.tr.about;
    document.querySelector('.about-mobile').innerHTML = language.nav.tr.about;
    document.querySelector('.contact').innerHTML = language.nav.tr.contact_us;
    document.querySelector('.contact-mobile').innerHTML = language.nav.tr.contact_us;
    document.querySelector('.lang').innerHTML = language.nav.tr.lang;
    document.querySelector('.lang-mobile').innerHTML = language.nav.tr.lang;
    document.querySelector('.turkish').innerHTML = language.nav.tr.turkish;
    document.querySelector('.turkish-mobile').innerHTML = language.nav.tr.turkish;
    document.querySelector('.english').innerHTML = language.nav.tr.english;
    document.querySelector('.english-mobile').innerHTML = language.nav.tr.english;




    document.querySelector('.smoyapi').innerHTML = language.footer.tr.smoyapi;

};

const selectLangEN = () => {
    document.documentElement.lang = 'en';
    document.querySelector('.home').innerHTML = language.nav.en.home;
    document.querySelector('.home-mobile').innerHTML = language.nav.en.home;
    document.querySelector('.project').innerHTML = language.nav.en.project;
    document.querySelector('.project-mobile').innerHTML = language.nav.en.project;
    document.querySelector('.eng-service').innerHTML = language.nav.en.eng_service;
    document.querySelector('.eng-service-mobile').innerHTML = language.nav.en.eng_service;
    document.querySelector('#menu-item-0').innerHTML = language.nav.en.menu_item0;
    document.querySelector('#menu-item-1').innerHTML = language.nav.en.menu_item1;
    document.querySelector('#menu-item-2').innerHTML = language.nav.en.menu_item2;
    document.querySelector('.about').innerHTML = language.nav.en.about;
    document.querySelector('.about-mobile').innerHTML = language.nav.en.about;
    document.querySelector('.contact').innerHTML = language.nav.en.contact_us;
    document.querySelector('.contact-mobile').innerHTML = language.nav.en.contact_us;
    document.querySelector('.lang').innerHTML = language.nav.en.lang;
    document.querySelector('.lang-mobile').innerHTML = language.nav.en.lang;
    document.querySelector('.turkish').innerHTML = language.nav.en.turkish;
    document.querySelector('.turkish-mobile').innerHTML = language.nav.en.turkish;
    document.querySelector('.english').innerHTML = language.nav.en.english;
    document.querySelector('.english-mobile').innerHTML = language.nav.en.english;




    document.querySelector('.smoyapi').innerHTML = language.footer.en.smoyapi;
};