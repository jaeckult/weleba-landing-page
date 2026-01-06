export const itHeroContent = {
    tag: 'ለIT ማናጀሮች (IT Managers)',
    title: 'የኢንተርፕራይዝ ደረጃ የሆቴል ቴክኖሎጂ መሠረተ ልማት',
    description: 'weleba የIT ማናጀሮች ሊተማመኑበት የሚችሉትን አስተማማኝ፣ ደህንነቱ የተጠበቀ እና ሊያድግ የሚችል መድረክ ያቀርባል። በደመና (cloud) ላይ የተመሠረተ በ99.95% ዝግጁነት።',
    cta: 'ማሳያ ያስይዙ',
    videoPoster: '/images/posters/it-hero.png',
    videoSrc: '/hero-video.mp4', // Placeholder
};

export const itAdvantages = {
    title: 'ለዘመናዊ መስተንግዶ የተገነባ መሠረተ ልማት',
    subtitle: 'ዜሮ የሰርቨር ጥገና + ከፍተኛ ዝግጁነት + በቀላሉ የሚተሳሰር መዋቅር',
    features: [
        {
            title: 'የተቀናጀ የደመና መድረክ',
            description: 'ለአጠቃላይ ንብረትዎ አንድ ጊዜ ብቻ የሚደረግ መግቢያ (Single sign-on)። ማዕከላዊ የተጠቃሚዎች አስተዳደር እና አውቶማቲክ የመረጃ መጠባበቂያ።',
            icon: 'Globe',
        },
        {
            title: 'API-ተኮር መዋቅር',
            description: 'ዘመናዊ RESTful APIs እና ወቅታዊ webhooks በመጠቀም በሁሉም ስርዓቶችዎ መካከል የመረጃ ልውውጥን ያቀላጥፋል።',
            icon: 'Share2',
        },
        {
            title: '99.95% ዝግጁነት ዋስትና',
            description: 'ስራዎ ሳይቋረጥ እንዲቀጥል የሚያስችሉ ድርብ ስርዓቶች እና አስተማማኝ መሠረተ ልማት።',
            icon: 'ShieldCheck',
        },
    ],
};

export const itPlatform = {
    tag: 'ቴክኒካዊ መሠረት',
    title: 'ደህንነቱ የተጠበቀ እና ሊያድግ የሚችል የIT አስተዳደር',
    features: [
        {
            title: 'ኢንተርፕራይዝ ደህንነት',
            description: 'የPCI DSS እና የGDPR ደንቦችን የጠበቀ። በየጊዜው በባለሙያዎች የሚመረመር እና አስተማማኝ ደህንነት ያለው።',
            icon: 'Lock',
            className: 'bg-[#eeede8] col-span-1 md:col-span-4 lg:col-span-4 min-h-[350px]'
        },
        {
            title: 'አውቶማቲክ የማደግ አቅም',
            description: 'እንደ ፍላጎቱ በራሱ የሚጨምር እና የሚቀንስ መሠረተ ልማት፤ ይህም በጥድፊያ ሰዓትም ቢሆን ፈጣን አፈጻጸም እንዲኖር ያደርጋል።',
            icon: 'Zap',
            className: 'bg-[#dce6f2] col-span-1 md:col-span-8 lg:col-span-8 min-h-[350px]'
        },
        {
            title: 'የአደጋ ጊዜ መረጃ መልሶ ማግኛ',
            description: 'የመረጃ ቅጂዎችን በየጊዜው በማዘጋጀት በአደጋ ጊዜ በትንሽ ደቂቃዎች ውስጥ ስራን ለማስቀጠል የሚያስችል አሠራር።',
            icon: 'Clock',
            className: 'bg-[#eeede8] col-span-1 md:col-span-6 lg:col-span-6 min-h-[350px]'
        },
        {
            title: 'የብዙ ንብረቶች ቁጥጥር',
            description: 'ሁሉንም ሆቴሎችዎን በአንድ ቦታ የሚቆጣጠሩበት ማዕከላዊ ዳሽቦርድ እና ወጥ የሆነ አሠራር።',
            icon: 'LayoutDashboard',
            className: 'bg-[#f4f1ea] col-span-1 md:col-span-6 lg:col-span-6 min-h-[350px]'
        }
    ],
    cta: {
        title: 'የሆቴልዎን IT መሠረተ ልማት በሚገባ በሚሠራ ዘመናዊ መድረክ ለመተካት ዝግጁ ነዎት?',
        buttonText: 'ማሳያ ያስይዙ',
        icon: 'Layers',
        className: 'bg-[#dce6f2] col-span-1 md:col-span-12 lg:col-span-12 min-h-[300px]'
    }
};

export const itIntegrations = {
    title: 'የራስዎን የቴክኖሎጂ ስነ-ምህዳር ይገንቡ',
    description: 'የእኛ ዘመናዊ የAPI ስነ-ምህዳር ሌሎች ስርዓቶችን በቀላሉ እና በአስተማማኝ ሁኔታ ለማስተሳሰር ይረዳል።',
    image: '/HOTELS/image.png', // IT integrations
    lists: [
        'ዝርዝር የAPI መረጃዎች (Documentation)',
        'ወቅታዊ የWebhook ድጋፍ',
        'ለመሞከሪያ የሚሆኑ የSandbox አካባቢዎች'
    ],
    imageLeft: true,
};

export const itFaqs = [
    {
        category: 'ደህንነት',
        question: 'weleba ምን አይነት የደህንነት ማረጋገጫዎች አሉት?',
        answer: 'የPCI DSS፣ የGDPR እና ሌሎች ዓለም አቀፍ የደህንነት ደንቦችን እናሟላለን። ሁሉም መረጃዎች ሚስጥራዊነታቸው የተጠበቀ (encrypted) ናቸው።',
    },
    {
        category: 'ሽግግር',
        question: 'የመረጃ ሽግግር እና ትስስር እንዴት ይከናወናል?',
        answer: 'የእኛ ቴክኒካዊ ቡድን ካለዎት ስርዓት ወደ weleba የተሟላ የመረጃ ሽግግር ስራ ሳይቋረጥ እንዲከናወን ያደርጋል።',
    },
    {
        category: 'ዝግጁነት',
        question: 'የስርዓቱ ዝግጁነት እና የአደጋ ጊዜ አሠራር እንዴት ነው?',
        answer: 'የ99.95% ዝግጁነት ዋስትና እንሰጣለን። የአደጋ ጊዜ መረጃ መልሶ ማግኛችን በየወሩ የሚሞከር እና አስተማማኝ ነው።',
    },
    {
        category: 'API',
        question: 'የAPI ስነ-ምህዳሩ ለተጨማሪ ትስስር እንዴት ይረዳል?',
        answer: 'ዝርዝር መረጃዎችን (documentation)፣ webhooks እና መሞከሪያዎችን (sandboxes) ከቴክኒካዊ ድጋፍ ጋር እናቀርባለን።',
    },
    {
        category: 'እድገት',
        question: 'በጥድፊያ ሰዓት ስርዓቱ በራሱ ማደግ ይችላል?',
        answer: 'አዎ፣ በደመና ላይ ያለው መሠረተ ልማታችን እንደ ፍላጎቱ አቅሙን በራሱ ይጨምራል፤ ይህም አፈጻጸሙ ሳይቀንስ ስራው እንዲቀጥል ያደርጋል።',
    },
];
