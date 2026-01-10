export const labels = {
    navigation: {
        products: 'ምርቶች',
        solutions: 'መፍትሄዎች',
        resources: 'ግብዓቶች',
        pricing: 'ዋጋ',
        caseStudies: 'የደንበኞች ታሪክ',
        company: 'ድርጅት',
        categories: {
            operations: 'ስራዎች',
            marketing: 'ሽያጭ እና ግብይት',
            revenue: 'ገቢ እና ፋይናንስ',
            guest: 'የደንበኛ ተሞክሮ',
            byProperty: 'በንግድ ዓይነት',
            byRole: 'በስራ ድርሻ',
            resourceType: 'የግብዓት ዓይነት',
            featuredArticles: 'ተለይተው የቀረቡ ጽሑፎች',
            marketingDistribution: 'ሽያጭ እና ስርጭት',
            revenueFinance: 'ገቢ እና ፋይናንስ',
            guestExperience: 'የደንበኛ ተሞክሮ',
            featured: 'ተለይቶ የቀረበ',
        }
    },
    blog: {
        newUpdate: 'አዲስ ዝመና፦',
        readPost: 'ክንውኑን ያንብቡ',
    },
    buttons: {
        bookDemo: 'ማሳያ ያስይዙ',
        getStarted: 'ይጀምሩ',
        getFreeDemo: 'የነጻ ማሳያ ያግኙ',
        subscribe: 'ይመዝገቡ',
        readAllStories: 'ሁሉንም ታሪኮች ያንብቡ',
    },
    common: {
        allRightsReserved: 'መብቱ በህግ የተጠበቀ ነው።',
        trustText: 'በዓለም ዙሪያ በሚገኙ ታዋቂ ንግዶች የታመነ',
        customerStory: 'የደንበኛ ታሪክ',
    },
    legal: {
        privacyPolicy: 'የግላዊነት ፖሊሲ',
        termsOfService: 'የአገልግሎት ውል',
    }
};

// Navigation Data
export const navigation = {
    products: {
        operations: [
            {
                title: 'የስራ አስተዳደር',
                description: 'ለንግድ ስራዎች በሙሉ የሚያገለግል የተዋሀደ መድረክ።',
                href: '/operations-management',
            },
            {
                title: 'የቻናል ማኔጀር',
                description: 'ክምችትን ያስተዳድሩ እና በሁሉም የሽያጭ ቻናሎች ላይ ያመሳስሉ።',
                href: '/channel-manager',
            },
        ],
        marketing: [
            {
                title: 'የሽያጭ መድረክ',
                description: 'ቀላል እና ያለ ኮሚሽን ቀጥታ ሽያጭ።',
                href: '/booking-engine',
            },
            {
                title: 'የድረ-ገጽ ግንቢ',
                description: 'ማራኪ ድረ-ገጾችን ለመፍጠር እገዛ ያግኙ።',
                href: '/website-builder',
            },
        ],
        revenue: [
            {
                title: 'የገቢ አስተዳደር',
                description: 'በኤአይ (AI) የሚመራ የዋጋ ማስተካከያ።',
                href: '/revenue-management',
            },
            {
                title: 'ክፍያዎች',
                description: 'ደግሞትዎን የሚያስችሉ የክፍያ ሂደቶች።',
                href: '/weleba-payments',
                badge: 'ተሻሽሏል',
            },
        ],
        guest: [
            {
                title: 'የደንበኛ ግንዩኔት',
                description: 'በደንበኛው ጉዞ ሁሉ ግላዊ መልዕክቶችን በራስ-ሰር ይላኩ።',
                href: '/customer-engagement-software',
            },
            {
                title: 'የደንበኛ መተግበሪያ',
                description: 'ለደንበኞች የሚሆን የሞባይል መተግበሪያ።',
                href: '/customer-app',
            },
            {
                title: 'የኤአይ ኤጀንት',
                description: '24/7 በኤአይ የሚሰራ የደንበኛ አገልግሎት።',
                href: '/customer-ai-agent',
                badge: 'አዲስ',
            },
        ],
    },
    solutions: {
        byProperty: [
            { title: 'የአገልግሎት ንግዶች', description: 'ለሳሎኖች፣ ስፓዎች እና አማካሪዎች የሚሆኑ መፍትሄዎች።', href: '/service-business-software' },
            { title: 'የችርቻሮ መደብሮች', description: 'ለሱቆች የሚሆን የሽያጭ እና ክምችት አስተዳደር።', href: '/retail-software' },
            { title: 'ኢ-ኮሜርስ', description: 'የመስመር ላይ መደብሮችን ለማስተዳደር የሚረዱ መሳሪያዎች።', href: '/ecommerce-management' },
            { title: 'ሆቴሎች እና ሪዞርቶች', description: 'የተሟላ የሆስፒታሊቲ አስተዳደር።', href: '/hotels-software' },
            { title: 'ምግብ ቤቶች', description: 'የምግብ ቤት አስተዳደር እና የትዕዛዝ ስርዓቶች።', href: '/restaurant-management' },
            { title: 'ብዙ-ቦታ', description: 'ለሰንሰለት ንግዶች የሚሆን ሊያድግ የሚችል መድረክ።', href: '/multi-location-management' },
        ],
        byRole: [
            { title: 'ስራ አስኪያጆች', description: 'ስልታዊ ቁጥር እና የመረጃ መሳሪያዎች።', href: '/general-managers' },
            { title: 'የስራ ሂደት አስተዳዳሪዎች', description: 'የእለት ተእለት ስራዎች እና የደንበኛ አገልግሎት መፍትሄዎች።', href: '/front-desk-managers' },
            { title: 'የገቢ አስተዳዳሪዎች', description: 'የዋጋ ማመቻተት እና የፋይናንስ አፈቃጸም መሳሪያዎች።', href: '/revenue-managers' },
            { title: 'አይቲ (IT) አስተዳዳሪዎች', description: 'የቴክኒክ መድረክ አስተዳዳሪ እና የስርዓት ግንዩኔት።', href: '/it-managers' },
        ],
    },
    resources: [
        { title: 'ብሎጎች', description: 'የድርጅትዎን አፈጻጸም ለማሻሻል የባለሙያ ግንዛቤዎች።', href: '/blog' },
        { title: 'ዜና', description: 'በቅርብ የንግድ እና የቴክኖሎጂ አዝማሚያዎች ቀዳሚ ይሁኑ።', href: '/news' },
        { title: 'ቴምፕሌቶች', description: 'ለስራ የሚያገለግሉ ቁሳቁሶችን እና ቅጾችን ያውርዱ።', href: '/templates' },
        { title: 'ዌቢናሮች', description: 'ለተሻለ የንግድ አስተዳደር ልዩ ውይይቶችን ይከታተሉ።', href: '/webinar' },
        { title: 'ካልኩሌተሮች', description: 'ትርፋማነትዎን እና የገቢ አቅምዎን ወዲያውኑ ያሰሉ።', href: '/calculators' },
        { title: 'ኢ-መጽሐፍት እና መመሪያዎች', description: 'ለንግድ እድገት የተሟሉ ስልቶች።', href: '/ebooks' },
    ],
    company: [
        { title: 'ስለ እኛ', description: 'ከweleba ቴክኖሎጂ ጀርባ ያሉ የዘርፉ ባለሙያዎች።', href: '/about-us' },
        { title: 'ስራዎች', description: 'የእኛን የቴክኖሎጂ ባለሙያዎች ቡድን ይቀላቀሉ።', href: '/careers' },
    ],
};

// Hero Section
export const heroContent = {
    announcement: {
        text: 'innQuest ስሙን ወደ ወለባ ቀይሯል - የንግድ አስተዳደር፣ የቀለለ።',
        href: '/about-us',
    },
    title: 'ትክክለኛ ስራዎን በሚደግፍ መልኩ የተሰራ የተሟላ የአስተዳደር መድረክ',
    subtitle: 'ወለባ ቡድንዎ በጣም አስፈላጊ በሆኑ ነገሮች ላይ እንዲያተኩር ያስችላል፤ የኛ ዘመናዊ መሳሪያዎች ደግሞ ገቢዎን እና የስራ ቅልጥፍናዎን በሆቴሎች፣ በኢ-ኮሜርስ፣ በችርቻሮ እና ሌሎች ላይ ለማሳደግ ከጀርባ ይሰሩልዎታል።',
    cta: {
        primary: { text: 'ማሳያ ያስይዙ', href: '/book-a-demo' },
        secondary: { text: 'ዋጋን ይመልከቱ', href: '/pricing' },
    },
};

// Why Choose Section
export const whyChooseContent = {
    title: 'ንግዶች ለምን ወለባን የአስተዳደር ሶፍትዌራቸው አድርገው ይመርጣሉ?',
    features: [
        {
            title: 'ገቢን ለማሳደግ ይረዳል',
            description: 'የእኛ የተቀናጁ መፍትሄዎች ያለ ኮሚሽን ቀጥታ ሽያጭ፣ በኤአይ (AI) በሚመሩ የዋጋ ስልቶች እና በራስ-ሰር በሚሰሩ የስራ ሂደቶች አማካኝነት ገቢን እስከ 35% ለማሳደግ ይረዳሉ።',
            icon: 'TrendingUp',
        },
        {
            title: 'በባለሙያዎች ለንግዶች የተሰራ',
            description: 'በዓመታት የንግድ አስተዳደር ሶፍትዌር ልምዳችን መሰረት፣ ወለባ በተለያዩ ኢንዱስትሪዎች ውስጥ ያሉትን የእርስዎን ተግዳሮቶች ይረዳል።',
            icon: 'Users',
        },
        {
            title: 'ሁሉንም በአንድ የያዘ መድረክ',
            description: 'ንግድዎን ለማስኬድ የሚያስፈልጉዎትን ነገሮች በሙሉ በአንድ መድረክ ያገናኛል፤ ስራዎችን፣ ሽያጭን፣ ክምችትን፣ ክፍያዎችን እና የደንበኛ አስተዳደርን።',
            icon: 'Layers',
        },
        {
            title: 'ለመማር ቀላል',
            description: 'ስርዓታችን ለአጠቃቀም ቀላል በመሆኑ ሰራተኞች ስራውን በጥቂት ሰዓታት ውስጥ ማለምድ ይችላሉ።',
            icon: 'Zap',
        },
        {
            title: 'በማንኛውም ቦታ፣ በማንኛውም ጊዜ ተደራሽ',
            description: 'የአስተዳደር ስርዓትዎን በማንኛውም መሳሪያ በማንኛውም ቦታ ሆነው በደህንነት ይጠቀሙ። ሁሉም ማሻሻያዎች እና መጠባበቂያዎች በራስ-ሰር ይከናወናሉ።',
            icon: 'Globe',
        },
    ],
};

// Daily Operations Section
export const dailyOperationsContent = {
    title: 'የእለት ተእለት ስራዎች እና የደንበኛ ተሞክሮ አስተዳደር',
    subtitle: 'ልዩ የደንበኛ ተሞክሮ እየሰጡ የእለት ተእለት ስራዎን የሚያቀላጥፉ አስፈላጊ መሳሪያዎች።',
    features: [
        {
            title: 'የስራ አስተዳደር',
            description: 'የንግድ ስራዎችን ያቀላጥፉ፣ ትዕዛዞችን ያስተዳድሩ እና የስራ ሂደቶችን ያሻሽሉ።',
            href: '/operations-management',
            icon: 'LayoutDashboard',
        },
        {
            title: 'ክፍያዎች',
            description: 'ያለ ምንም ችግር ለደንበኞች ክፍያ የሚፈጽሙበት ደህንነቱ የተጠበቀ ሂደት።',
            href: '/weleba-payments',
            icon: 'CreditCard',
        },
        {
            title: 'የደንበኛ መተግበሪያ',
            description: 'ለትዕዛዞች እና ለሌሎች ጥያቄዎች የሚሆን የሞባይል መተግበሪያ።',
            href: '/mobile-app',
            icon: 'Smartphone',
        },
    ],
};

// Revenue Intelligence Section
export const revenueIntelligenceContent = {
    title: 'የኤአይ የገቢ መረጃ እና የንግድ ታይነት',
    subtitle: 'የገቢ አቅምዎን ለማሳደግ እና በመስመር ላይ ታይነትዎን ለማስፋት የሚረዱ ጠንካራ መሳሪያዎች።',
    features: [
        {
            title: 'የሽያጭ መድረክ',
            description: 'ቀጥታ ሽያጮችን የሚያስችል ምቹ መድረክ።',
            href: '/sales-platform',
            icon: 'Calendar',
        },
        {
            title: 'የብዙ-ቻናል ማኔጀር',
            description: 'ገቢዎን ለማሳደግ ክምችትን በሁሉም የሽያጭ ቻናሎች ላይ ያመሳስሉ።',
            href: '/channel-manager',
            icon: 'Share2',
        },
        {
            title: 'የገቢ መረጃ',
            description: 'ፍላጎትን እና ገበያን በመከታተል ዋጋዎን በእውነተኛ ጊዜ የሚያስተካክል ብልህ መሳሪያ።',
            href: '/revenue-management',
            icon: 'LineChart',
        },
        {
            title: 'የድረ-ገጽ ግንቢ',
            description: 'ደንበኞችን የሚስቡ እና ወደ ሽያጭ የሚቀይሩ ማራኪ ድረ-ገጾችን ይፍጠሩ።',
            href: '/website-builder',
            icon: 'Globe',
        },
    ],
};

// Business Types Section
export const propertyTypesContent = {
    title: 'ለእያንዳንዱ የንግድ አይነት የሚሆን የአስተዳደር ሶፍትዌር',
    types: [
        { title: 'ሆቴሎች እና ሪዞርቶች', href: '/hotels-software', icon: 'Building2' },
        { title: 'ኢ-ኮሜርስ', href: '/ecommerce-management', icon: 'ShoppingCart' },
        { title: 'የችርቻሮ መደብሮች', href: '/retail-software', icon: 'Store' },
        { title: 'ምግብ ቤቶች', href: '/restaurant-management', icon: 'UtensilsCrossed' },
        { title: 'የአገልግሎት ንግዶች', href: '/service-business-software', icon: 'Briefcase' },
        { title: 'ብዙ-ቦታ', href: '/multi-location-management', icon: 'Buildings' },
    ],
};

// Customer Stories Section
export const customerStoriesContent = {
    title: 'ደንበኞቻችን ስለ እኛ የሚመሰክሩት',
    stories: [
        {
            title: 'ሀሪሰን የቢዝነስ ማዕከል ለ25 ዓመታት ከወለባ ጋር በመሆን ስራውን እንዴት እንዳቀላጠፈ',
            name: 'ስቴሲ ዳድሰን',
            role: 'ስራ አስኪያጅ',
            videoId: 'CE1FbxwX0po',
        },
        {
            title: 'ኑቮ ኢንተርፕራይዝ (NUVO Enterprise) የደንበኛ ተሞክሮውን ለማሳደግ ወለባ ሲስተምን እንዴት እንደተጠቀመ',
            name: 'ያምላክ ነጋሽ',
            role: 'የኑቮ ኢንተርፕራይዝ ስራ አስኪያጅ',
            videoId: '21iGVj1UGq8',
        },
        {
            title: 'ዉድ ሪቨር ኢን (Wood River Inn) ከወለባ ጋር ስራውን በልበ ሙሉነት እንዴት እየመራ እንደሆነ',
            name: 'ራያን ኤሊሰን',
            role: 'የዉድ ሪቨር ኢን ባለቤት',
            videoId: 'Wo-D4it48lI',
        },
        {
            title: 'ሲቦርድ ግሩፕ (Seaboard Group) በወለባ ሁሉንም ድርጅቶች በማስተዳደር ስራውን በተቀላጠፈ ሁኔታ ያካሂዳል',
            name: 'አሌክስ ሙር',
            role: 'የሲቦርድ ግሩፕ ፕሬዝዳንት እና ዋና ስራ አስፈፃሚ',
            videoId: 'ioXFopWwXG4',
        },
    ],
};

// Integrations Section
export const integrationsContent = {
    title: 'ፍጹም የቴክኖሎጂ ስብስብዎን ይፍጠሩ',
    subtitle: 'ወለባን ከ100 በላይ ከሚሆኑ እንደ የክፍያ ፕሮሰሰሮች፣ የሽያጭ ነጥቦች፣ የሂሳብ አያያዝ መሳሪያዎች እና የሽያጭ ቻናሎች ጋር ያገናኙ።',
    cta: { text: 'የገበያ ቦታውን ይጎብኙ', href: '/marketplace' },
    logos: [
        'Shopify', 'WooCommerce', 'Amazon', 'Stripe', 'PayPal', 'Square',
        'QuickBooks', 'Xero', 'Mailchimp', 'Zapier', 'Slack', 'HubSpot',
    ],
};

export const getStartedContent = {
    tag: 'ወለባን ይለማመዱ',
    title: 'በሶስት ቀላል ደረጃዎች በወለባ ይጀምሩ',
    steps: [
        {
            number: '01',
            title: 'ከወለባ ባለሙያ ጋር የ30 ደቂቃ ጥሪ ያድርጉ።',
        },
        {
            number: '02',
            title: 'ወለባ ለእርስዎ ምን ሊያደርግ እንደሚችል የሚያሳይ የግል ማሳያ ይመልከቱ።',
        },
        {
            number: '03',
            title: 'በባለሙያዎቻችን ድጋፍ በፍጥነት ስራ ይጀምሩ እና ገቢ ማግኘት ይጀምሩ።',
        },
    ]
};

// Support Section
export const supportContent = {
    title: '24/7 ባለሙያ ድጋፍ በፈለጉት ጊዜ',
    features: [
        {
            title: 'የኢንዱስትሪ ባለሙያ ድጋፍ ሰጪዎች',
            description: 'የእኛ ቡድን በተለያዩ ኢንዱስትሪዎች ላይ ሰፊ ልምድ ስላለው የንግድ ፈተናዎችዎን ይረዳል::',
            icon: 'HeadphonesIcon',
        },
        {
            title: 'በርካታ የድጋፍ መንገዶች',
            description: 'በቻት፣ በስልክ፣ በኢሜል ወይም በድረ-ገጻችን የእውቀት መሰረት እርዳታ ያግኙ::',
            icon: 'MessageCircle',
        },
    ],
    steps: [
        { number: '01', title: 'ከወለባ ባለሙያ ጋር የ30 ደቂቃ ጥሪ ያድርጉ::' },
        { number: '02', title: 'ወለባ ለእርስዎ ምን ሊያደርግ እንደሚችል የሚያሳይ የግል ማሳያ ይመልከቱ::' },
        { number: '03', title: 'በባለሙያዎቻችን ድጋፍ በፍጥነት ስራ ይጀምሩ እና ገቢ ማግኘት ይጀምሩ::' },
    ],
};

// FAQ Section
export const faqContent = {
    title: 'ስለ ወለባ ለሚነሱ ጥያቄዎችዎ መልሶች',
    categories: [
        {
            id: 'features',
            name: 'ባህሪያት',
            items: [
                {
                    question: 'ወለባ ከሌሎች የአስተዳደር ስርዓቶች በምን ይለያል?',
                    answer: 'ወለባ የተገነባው ለተለያዩ የንግድ ዘርፎች ነው፤ ሆቴሎች፣ ኢ-ኮሜርስ፣ ችርቻሮ እና የአገልግሎት ንግዶችን ጨምሮ። እኛ ስራዎችን በማቅለል እና የአስተዳደር ሸክምን በማስቀረት ላይ እናተኩራለን:: የእኛ የተቀናጀ መድረክ የአሰራር አስተዳደርን፣ ሽያጭን እና ክፍያዎችን በአንድ ላይ ያመጣል::',
                },
                {
                    question: 'ወለባ አሁን ካለን የቴክኖሎጂ ስብስብ ጋር መገናኘት ይችላል?',
                    answer: 'አዎ፣ ወለባ ከ100 በላይ ከሆኑ የሶስተኛ ወገን ስርዓቶች ጋር ይገናኛል:: ይህም የክፍያ ማቀነባበሪያዎችን፣ የሂሳብ ሶፍትዌሮችን እና የግብይት መሳሪያዎችን ይጨምራል::',
                },
                {
                    question: 'ወለባ በኤአይ የሚሰሩ ባህሪያት አሉት?',
                    answer: 'አዎ፣ ወለባ ኤአይ ቴክኖሎጂን በብዙ ቦታዎች ይጠቀማል፦ የገቢ መረጃ ዋጋን በራስ-ሰር ያስተካክላል::',
                },
            ]
        },
        {
            id: 'setup',
            name: 'አቀዳጅ',
            items: [
                {
                    question: 'ከአሁኑ ስርዓታችን ወደ ወለባ መቀየር ምን ያህል አስቸጋሪ ነው?',
                    answer: 'ወደ ወለባ የሚደረገው ሽግግር ቀላል እና ቀልጣፋ ነው:: የእኛ የአተገባበር ቡድን የመረጃ ሽግግርን (የሽያጭ ታሪክ፣ የደንበኛ መገለጫዎች) ያስተናግዳል::',
                },
                {
                    question: 'አተገባበሩ ምን ያህል ጊዜ ይወስዳል?',
                    answer: 'አብዛኛዎቹ ንግዶች በ 3-5 የስራ ቀናት ውስጥ ሙሉ በሙሉ ስራ መጀመር ይችላሉ:: ለትላልቅ ድርጅቶች ከ1-2 ሳምንታት ሊወስድ ይችላል::',
                },
                {
                    question: 'ለሰራተኞቻችን ስልጠና ትሰጣላችሁ?',
                    answer: 'አዎ፣ ለእያንዳንዱ የስራ ድርሻ የተዘጋጀ የተሟላ ስልጠና እንሰጣለን:: ሰራተኞች በጥቂት ሰዓታት ውስጥ ስራውን ሊለምዱ ይችላሉ::',
                },
            ]
        },
        {
            id: 'support',
            name: 'ድጋፍ',
            items: [
                {
                    question: 'ከአተገባበር በኋላ ምን ዓይነት ድጋፍ ትሰጣላችሁ?',
                    answer: 'በስልክ፣ በኢሜል እና በቻት 24/7 ቴክኒካዊ ድጋፍ እንሰጣለን:: እንዲሁም የቪዲዮ ትምህርቶችን እና መመሪያዎችን ማግኘት ይችላሉ::',
                },
                {
                    question: 'ድጋፍ በተለያዩ የሰዓት ቀጠናዎች ይገኛል?',
                    answer: 'አዎ፣ የእኛ ዓለም አቀፍ የድጋፍ ቡድን 24/7/365 ይሰራል:: ይህም ሁልጊዜ የቀጥታ ድጋፍ ወኪል ማግኘት እንደሚችሉ ያረጋግጣል::',
                },
                {
                    question: 'ወለባ የንግድ ስራችንን ወቅታዊ ለውጦች ማስተናገድ ይችላል?',
                    answer: 'አዎ፣ ወለባ ለተለያዩ የንግድ ስራዎች ተለዋዋጭ ባህሪ ተደርጎ የተሰራ ነው:: ወቅታዊ ሰራተኞች ስራውን በፍጥነት እንዲለምዱ ይረዳል::',
                },
            ]
        }
    ]
};

// Footer Content
export const footerContent = {
    cta: {
        title: 'ወለባን በመጠቀም ስኬታማ የሆኑ በሺዎች የሚቆጠሩ ንግዶችን ይቀላቀሉ',
        subtitle: "የወለባ የተቀናጀ መድረክ ለድርጅትዎ እንዴት እንደሚሰራ ይመልከቱ። ቡድናችን እንደ ፍላጎትዎ የተዘጋጁ ባህሪያትን ያሳየዎታል።",
        buttonText: 'ማሳያ ያስይዙ',
        features: [
            '100% አስተማማኝ እና ደህንነቱ የተጠበቀ',
            'የ360 ዲግሪ የንግድ አስተዳደር',
            'የ24/7 ድጋፍ'
        ]
    },
    subscribe: {
        title: 'ለዜና መጽሄታችን ይመዝገቡ',
        placeholder: 'የኢሜይል አድራሻ ያስገቡ',
        buttonText: 'ይመዝገቡ'
    },
    sections: [
        {
            title: 'ምርቶች',
            links: [
                { text: 'የስራ አስተዳደር', href: '/operations-management' },

                { text: 'የሽያጭ መድረክ', href: '/booking-engine' },
                { text: 'የቻናል ማኔጀር', href: '/channel-manager' },
                { text: 'የገቢ መረጃ', href: '/revenue-management' },
                { text: 'ክፍያዎች', href: '/weleba-payments' },
                { text: 'የደንበኛ መተግበሪያ', href: '/customer-app' },
            ],
        },
        {
            title: 'መፍትሄዎች',
            links: [
                { text: 'ገለልተኛ ድርጅቶች', href: '/service-business-software' },
                { text: 'የንግድ ቡድኖች', href: '/multi-location-management' },
                { text: 'ትናንሽ ንግዶች', href: '/small-business-software' },
                { text: 'ሆቴሎች እና ሪዞርቶች', href: '/hotels-software' },
                { text: 'ምግብ ቤቶች', href: '/restaurant-management' },
                { text: 'ብዙ-ቦታ', href: '/multi-location-management' },
            ],
        },
        {
            title: 'ግብዓቶች',
            links: [
                { text: 'ብሎጎች', href: '/blog' },
                { text: 'ቴምፕሌቶች', href: '/templates' },
                { text: 'ዌቢናሮች', href: '/webinar' },
                { text: 'ካልኩሌተሮች', href: '/calculators' },
                { text: 'ኢ-መጽሐፍት እና መመሪያዎች', href: '/ebooks' },
                { text: 'ተደጋጋሚ ጥያቄዎች', href: '/faqs' },
            ],
        },
        {
            title: 'ድርጅት',
            links: [
                { text: 'ስለ እኛ', href: '/about-us' },
                { text: 'ስራዎች', href: '/careers' },
                { text: 'ድጋፍ', href: '/support' },
                { text: 'የገበያ ቦታ', href: '/marketplace' },
                { text: 'ዋጋ', href: '/pricing' },
            ],
        },
    ]
};
