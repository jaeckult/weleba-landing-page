export const bbHeroContent = {
    tag: 'ቤድ ኤንድ ብሬክ ፋስት (Bed & Breakfast)',
    title: 'ከሶፍትዌር ጋር ከመታገል ይልቅ ለእንግዶችዎ ትኩረት ይስጡ',
    description: 'ለመጠቀም በጣም ቀላል የሆነ የተሟላ የቤድ ኤንድ ብሬክ ፋስት አስተዳደር ሶፍትዌር። ቦታ ማስያዣዎችን፣ እንግዶችን እና የሽያጭ ቻናሎችን በአንድ ቀላል መድረክ ያስተዳድሩ።',
    cta: 'ማሳያ ያስይዙ',
    videoPoster: '/images/posters/bb-hero.png',
    videoSrc: '/hero-video.mp4', // Placeholder
};

export const bbAdvantages = {
    title: 'ለአነስተኛ ንብረቶች የተሰሩ ትልልቅ አቅሞች',
    subtitle: '99.95% ዝግጁነት ዋስትና + አስተማማኝ እና ደህንነቱ የተጠበቀ + ለመማር ቀላል',
    features: [
        {
            title: '99.95% ዝግጁነት ዋስትና',
            description: 'የቦታ ማስያዣ ሞተርዎ ሁልጊዜ ዝግጁ ነው፤ እያንዳንዱን የቦታ ማስያዣ እድል ሳይዘናጋ ይቀበላል።',
            icon: 'Zap',
        },
        {
            title: 'አስተማማኝ እና ደህንነቱ የተጠበቀ',
            description: 'ምንም አይነት ጥገና አያስፈልግም። መረጃዎችዎ በባንክ ደረጃ ደህንነት እና በዓለም አቀፍ ደረጃዎች ይጠበቃሉ።',
            icon: 'ShieldCheck',
        },
        {
            title: 'ለመማር ቀላል',
            description: 'ስርዓቱን በጥቂት ሰዓታት ውስጥ ይለምዱታል። በማንኛውም ጊዜ በማንኛውም ቦታ ሆነው ንብረትዎን ያስተዳድሩ።',
            icon: 'Smartphone',
        },
    ],
};

export const bbPlatform = {
    tag: 'የB&B መፍትሄዎች',
    title: 'ለባለቤቶች ተብሎ የተሰራ የአስተዳደር ሶፍትዌር',
    features: [
        {
            title: 'ቀላል የB&B PMS',
            description: 'ቦታ ማስያዣዎችን፣ ክፍያዎችን እና የጽዳት ስራዎችን የሚከታተሉበት ዳሽቦርድ። የእንግዳ ምርጫዎችን ይመዝግቡ።',
            icon: 'LayoutDashboard',
            className: 'bg-[#eeede8] col-span-1 md:col-span-4 lg:col-span-4 min-h-[350px]'
        },
        {
            title: 'ያለ ኮሚሽን ቦታ ማስያዝ',
            description: 'ቀጥታ ቦታ ማስያዣዎችን በመቀበል በደላሎች ላይ የሚወጣውን ኮሚሽን እስከ 40% ይቀንሱ።',
            icon: 'CircleDollarSign',
            className: 'bg-[#dce6f2] col-span-1 md:col-span-8 lg:col-span-8 min-h-[350px]'
        },
        {
            title: 'የቻናሎች ትስስር',
            description: 'ከAirbnb እና ከBooking.com ጋር ይገናኙ። በእውነተኛ ጊዜ ትስስር ደርብ ቦታ ማስያዝን ያስቀሩ።',
            icon: 'Share2',
            className: 'bg-[#eeede8] col-span-1 md:col-span-6 lg:col-span-6 min-h-[350px]'
        },
        {
            title: 'የእንግዳ ግንኙነት',
            description: 'የእንኳን ደህና መጡ መልእክቶችን፣ ቁርስ ነክ መረጃዎችን እና የልደት መልእክቶችን በራስ-ሰር ይላኩ።',
            icon: 'MessageSquare',
            className: 'bg-[#f4f1ea] col-span-1 md:col-span-6 lg:col-span-6 min-h-[350px]'
        }
    ],
    cta: {
        title: 'በቢሮ ስራ ላይ የሚያጠፉትን ጊዜ በመቀነስ ለእንግዶችዎ ተጨማሪ ትኩረት ለመስጠት ዝግጁ ነዎት?',
        buttonText: 'ማሳያ ያስይዙ',
        icon: 'Coffee',
        className: 'bg-[#dce6f2] col-span-1 md:col-span-12 lg:col-span-12 min-h-[300px]'
    }
};

export const bbPersonalTouch = {
    title: 'ልዩ አገልግሎትን በራስ-ሰር ያግኙ',
    description: 'የእንግዶችን ፍላጎት፣ የምግብ ምርጫ እና ልዩ ጥያቄዎችን በመመዝገብ እያንዳንዱ ቆይታ የማይረሳ እንዲሆን ያድርጉ።',
    image: '/bb-personal-touch.png', // Placeholder
    lists: [
        'ዝርዝር የእንግዳ መረጃ',
        'ሊስተካከሉ የሚችሉ የኢሜይል ንድፎች',
        'አውቶማቲክ ልዩ መልእክቶች'
    ],
    imageLeft: true,
};

export const bbFaqs = [
    {
        category: 'ተስማሚነት',
        question: 'weleba ለB&B እና ለኢን (Inns) ምን የተለየ አገልግሎት ይሰጣል?',
        answer: 'የB&B ባለቤቶች ብዙ ስራዎችን በአንዴ እንደሚሰሩ እንረዳለን። የእኛ መድረክ ያለ ብዙ ውስብስብነት ቦታ ማስያዝን እና ክፍያዎችን ያቀላጥፋል።',
    },
    {
        category: 'ቻናሎች',
        question: 'የቻናል ማኔጀሩ ልዩነቱ ምንድነው?',
        answer: 'ከAirbnb ጨምሮ ከ300 በላይ ከሚሆኑ ቻናሎች ጋር በእውነተኛ ጊዜ ይገናኛል፤ ይህም ደርብ ቦታ ማስያዝን (overbooking) ያስቀራል።',
    },
    {
        category: 'ገቢ',
        question: 'የቦታ ማስያዣ ሞተሩ ኮሚሽን ለመቆጠብ እንዴት ይረዳል?',
        answer: 'በቀጥታ ከድረ-ገጽዎ ጋር በመገናኘት ቀጥታ ቦታ ማስያዝን ከ25-40% ይጨምራል፤ ይህም ለደላሎች የሚከፈለውን ኮሚሽን ያስቀራል።',
    },
    {
        category: 'ሰራተኞች',
        question: 'PMS ለአነስተኛ B&B ምን ጥቅም አለው?',
        answer: 'እንደ ክፍያ እና የቻናል ቁጥጥር ያሉ አሰልቺ ስራዎችን በራስ-ሰር በመስራት ባለቤቶች ለእንግዶቻቸው ትኩረት እንዲሰጡ ያስችላቸዋል።',
    },
    {
        category: 'አወቃቀር',
        question: 'የአስተዳደር ሶፍትዌር ለአነስተኛ ንብረት ማቀናጀት ይከብዳል?',
        answer: 'አይከብድም። አብዛኛዎቹ በደመና (cloud) ላይ የሚሰሩ እና ለመጠቀም ቀላል ናቸው፤ ቡድናችንም በዝግጅት ወቅት ያግዝዎታል።',
    },
];
