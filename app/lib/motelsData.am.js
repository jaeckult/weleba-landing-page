export const motelHeroContent = {
    tag: 'ሞቴሎች (Motels)',
    title: 'ለሞቴሎች ተብሎ የተሰራ ቀላል እና ጠንካራ የአስተዳደር ሶፍትዌር',
    description: 'weleba ገቢዎን እንዲያሳድጉ እና ስራዎን እንዲያቀላሉ ይረዳዎታል። ንብረታቸውን በትርፋማነት ለማስተዳደር welebaን የሚተማመኑ በሺዎች የሚቆጠሩ የሞቴል ባለቤቶችን ይቀላቀሉ።',
    cta: 'ማሳያ ያስይዙ',
    videoPoster: '/videos/motels-poster.jpg', // Placeholder
    videoSrc: '/hero-video.mp4', // Placeholder
};

export const motelAdvantages = {
    title: 'በዓለም ዙሪያ በሺዎች የሚቆጠሩ ሞቴሎችን እያገለገልን ነው',
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
            description: 'ስርዓቱን በጥቂት ሰዓታት ውስጥ ይለምዱታል። በማንኛውም ጊዜ በማንኛውም ቦታ ሆነው ሞቴልዎን ያስተዳድሩ።',
            icon: 'Smartphone',
        },
    ],
};

export const motelPlatform = {
    tag: 'አስፈላጊ መሳሪያዎች',
    title: 'አስፈላጊ የሞቴል አስተዳደር መሳሪያዎች',
    features: [
        {
            title: 'ቅድሚያ ለሞባይል የሚሰጥ PMS',
            description: 'እያንዳንዱን የሞቴል ስራዎን በአንድ ቀላል እና ምቹ ስርዓት ያስተዳድሩ።',
            icon: 'LayoutDashboard',
            className: 'bg-[#eeede8] col-span-1 md:col-span-4 lg:col-span-4 min-h-[350px]'
        },
        {
            title: 'ያለ ኮሚሽን ቦታ ማስያዝ',
            description: 'ቀጥታ ቦታ ማስያዣዎችን በመቀበል በደላሎች ላይ ያለውን ጥገኝነት ይቀንሱ።',
            icon: 'CircleDollarSign',
            className: 'bg-[#dce6f2] col-span-1 md:col-span-8 lg:col-span-8 min-h-[350px]'
        },
        {
            title: 'የተቀናጁ ቻናሎች',
            description: 'ከ300 በላይ ከሚሆኑ ቻናሎች ጋር በራስ-ሰር ይገናኙ። ዋጋዎችን በአንዴ ያዘምኑ።',
            icon: 'Share2',
            className: 'bg-[#eeede8] col-span-1 md:col-span-6 lg:col-span-6 min-h-[350px]'
        },
        {
            title: 'በኤአይ የሚመራ ኮንሲየር',
            description: 'እንግዶችን በማስተናገድ ቢዚ በሆኑበት ጊዜ ጥያቄዎችን የሚመልስ ቨርችዋል ረዳት።',
            icon: 'Bot',
            className: 'bg-[#f4f1ea] col-span-1 md:col-span-6 lg:col-span-6 min-h-[350px]'
        }
    ],
    cta: {
        title: 'ሞቴልዎን ለማዘመን እና ቀጥታ ቦታ ማስያዝን ለመጨመር ዝግጁ ነዎት?',
        buttonText: 'ማሳያ ያስይዙ',
        icon: 'Hotel',
        className: 'bg-[#dce6f2] col-span-1 md:col-span-12 lg:col-span-12 min-h-[300px]'
    }
};

export const motelCommunication = {
    title: 'ለእንግዶች የሚላኩ መልእክቶች',
    description: 'ከቦታ ማስያዣ ማረጋገጫ እስከ ግምገማ መጠየቂያ ድረስ ያሉ ግንኙነቶችን በራስ-ሰር ያከናውኑ።',
    image: '/motel-communication.png', // Placeholder
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
        question: 'ከደላሎች (OTAs) ጋር ያለንን ግንኙነት መቀጠል እንችላለን?',
        answer: 'በእርግጥ። weleba ከ300 በላይ ከሚሆኑ እንደ Booking.com እና Expedia ካሉ ደላሎች ጋር ይሰራል።',
    },
    {
        category: 'ሃርድዌር',
        question: 'አሁን ካለን ኮምፒውተሮች ጋር ይሰራል?',
        answer: 'weleba በደመና (cloud) ላይ የሚሰራ በመሆኑ የኢንተርኔት ግንኙነት ባለው በማንኛውም መሳሪያ ላይ ይሰራል፤ ልዩ ሃርድዌር አያስፈልገውም።',
    },
    {
        category: 'ገቢ',
        question: 'weleba በደላሎች ላይ ያለንን ጥገኝነት ለመቀነስ ይረዳል?',
        answer: 'አዎ። የእኛ ቀጥታ የቦታ ማስያዣ መሳሪያዎች ከእንግዶች ጋር ቀጥተኛ ግንኙነት እንዲፈጥሩ ይረዳዎታል።',
    },
    {
        category: 'ጠቅላላ',
        question: 'ለሞቴሎች ምርጡ ሶፍትዌር የትኛው ነው?',
        answer: 'weleba ቀላልነትን እና ጠንካራ አሠራርን በማጣመር ለሞቴሎች ተመራጭ መፍትሄ ይሰጣል።',
    },
];
