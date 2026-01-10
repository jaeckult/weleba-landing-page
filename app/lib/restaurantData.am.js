export const motelHeroContent = {
    tag: 'ምግብ ቤቶች (Restaurants)',
    title: 'ለምግብ ቤቶች ተብሎ የተሰራ ቀላል እና ጠንካራ የአስተዳደር ሶፍትዌር',
    description: 'weleba ገቢዎን እንዲያሳድጉ እና ስራዎን እንዲያቀላሉ ይረዳዎታል። ንግዳቸውን በትርፋማነት ለማስተዳደር welebaን የሚተማመኑ በሺዎች የሚቆጠሩ የምግብ ቤት ባለቤቶችን ይቀላቀሉ።',
    cta: 'ማሳያ ያስይዙ',
    videoPoster: '/videos/motels-poster.jpg', // Placeholder
    videoSrc: '/hero-video.mp4', // Placeholder
};

export const motelAdvantages = {
    title: 'በዓለም ዙሪያ በሺዎች የሚቆጠሩ ሬስቶራንቶችን እያገለገልን ነው',
    subtitle: '99.95% ዝግጁነት ዋስትና + አስተማማኝ እና ደህንነቱ የተጠበቀ + ለመማር ቀላል',
    features: [
        {
            title: '99.95% ዝግጁነት ዋስትና',
            description: 'የቦታ ማስያዣ ሞተርዎ ሁልጊዜ ክፍት ነው፤ እያንዳንዱን የቦታ ማስያዣ እድል ሳይዘናጋ ይቀበላል።',
            icon: 'Zap',
        },
        {
            title: 'አስተማማኝ እና ደህንነቱ የተጠበቀ',
            description: 'ምንም አይነት ጥገና አያስፈልግም። መረጃዎችዎ በባንክ ደረጃ ደህንነት እና በዓለም አቀፍ ደረጃዎች ይጠበቃሉ።',
            icon: 'ShieldCheck',
        },
        {
            title: 'ለመማር ቀላል',
            description: 'ስርዓቱን በጥቂት ሰዓታት ውስጥ ይለምዱታል። በማንኛውም ጊዜ በማንኛውም ቦታ ሆነው ሬስቶራንትዎን ያስተዳድሩ።',
            icon: 'Smartphone',
        },
    ],
};

export const motelPlatform = {
    tag: 'አስፈላጊ መሳሪያዎች',
    title: 'አስፈላጊ የሬስቶራንት አስተዳደር መሳሪያዎች',
    features: [
        {
            title: 'ቅድሚያ ለሞባይል የሚሰጥ POS',
            description: 'እያንዳንዱን የሬስቶራንት ስራዎን በአንድ ቀላል እና ምቹ ስርዓት ያስተዳድሩ።',
            icon: 'LayoutDashboard',
            className: 'bg-[#eeede8] col-span-1 md:col-span-4 lg:col-span-4 min-h-[350px]'
        },
        {
            title: 'ያለ ኮሚሽን ቦታ ማስያዝ',
            description: 'ቀጥታ ትዕዛዞችን በመቀበል በሶስተኛ ወገን መተግበሪያዎች ላይ ያለውን ጥገኝነት ይቀንሱ።',
            icon: 'CircleDollarSign',
            className: 'bg-[#dce6f2] col-span-1 md:col-span-8 lg:col-span-8 min-h-[350px]'
        },
        {
            title: 'የተቀናጁ ቻናሎች',
            description: 'ከታዋቂ የትዕዛዝ መተግበሪያዎች ጋር በራስ-ሰር ይገናኙ። ሜኑዎችን በአንዴ ያዘምኑ።',
            icon: 'Share2',
            className: 'bg-[#eeede8] col-span-1 md:col-span-6 lg:col-span-6 min-h-[350px]'
        },
        {
            title: 'በኤአይ የሚመራ ኮንሲየር',
            description: 'ደንበኞችን በማስተናገድ ቢዚ በሆኑበት ጊዜ ጥያቄዎችን የሚመልስ ቨርችዋል ረዳት።',
            icon: 'Bot',
            className: 'bg-[#f4f1ea] col-span-1 md:col-span-6 lg:col-span-6 min-h-[350px]'
        }
    ],
    cta: {
        title: 'ሬስቶራንትዎን ለማዘመን እና ቀጥታ ትዕዛዞችን ለመጨመር ዝግጁ ነዎት?',
        buttonText: 'ማሳያ ያስይዙ',
        icon: 'Hotel',
        className: 'bg-[#dce6f2] col-span-1 md:col-span-12 lg:col-span-12 min-h-[300px]'
    }
};

export const motelCommunication = {
    title: 'ለደንበኞች የሚላኩ መልእክቶች',
    description: 'ከትዕዛዝ ማረጋገጫ እስከ ግምገማ መጠየቂያ ድረስ ያሉ ግንኙነቶችን በራስ-ሰር ያከናውኑ።',
    image: '/HOTELS/image copy 2.png', // Motel communication
    lists: [
        'የእንኳን ደህና መጡ ኢሜይሎች',
        'የቆይታ ማጠቃለያ እና ግምገማ መጠየቂያ',
        'የቀጥታ መልእክት መለዋወጫ'
    ],
    imageLeft: true,
};

export const motelFaqs = [
    {
        category: 'ትምህርት',
        question: 'weleba ለመማር አስቸጋሪ ነው?',
        answer: 'አይደለም። ለመጠቀም በጣም ቀላል እንዲሆን ተደርጎ የተሰራ ነው፤ አብዛኛዎቹ ተጠቃሚዎች በጥቂት ሰዓታት ውስጥ ይለምዱታል።',
    },
    {
        category: 'ቻናሎች',
        question: 'ከምግብ ማመላለሻ መተግበሪያዎች ጋር ያለንን ግንኙነት መቀጠል እንችላለን?',
        answer: 'በእርግጥ። weleba ከዋና ዋና አቅራቢዎች ጋር ይሰራል።',
    },
    {
        category: 'ሃርድዌር',
        question: 'አሁን ካለን ኮምፒውተሮች ጋር ይሰራል?',
        answer: 'weleba በደመና (cloud) ላይ የሚሰራ በመሆኑ የኢንተርኔት ግንኙነት ባለው በማንኛውም መሳሪያ ላይ ይሰራል፤ ልዩ ሃርድዌር አያስፈልገውም።',
    },
    {
        category: 'ገቢ',
        question: 'weleba በሶስተኛ ወገን መተግበሪያዎች ላይ ያለንን ጥገኝነት ለመቀነስ ይረዳል?',
        answer: 'አዎ። የእኛ ቀጥታ የትዕዛዝ መሳሪያዎች ከደንበኞች ጋር ቀጥተኛ ግንኙነት እንዲፈጥሩ ይረዳዎታል።',
    },
    {
        category: 'ጠቅላላ',
        question: 'ለሬስቶራንቶች ምርጡ ሶፍትዌር የትኛው ነው?',
        answer: 'weleba ቀላልነትን እና ጠንካራ አሠራርን በማጣመር ለሬስቶራንቶች ተመራጭ መፍትሄ ይሰጣል።',
    },
];
