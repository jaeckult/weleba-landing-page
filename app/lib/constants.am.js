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
            marketing: 'ግብይት',
            revenue: 'ገቢ',
            guest: 'እንግዳ',
            byProperty: 'በንብረት ዓይነት',
            byRole: 'በስራ ድርሻ',
            resourceType: 'የግብዓት ዓይነት',
            featuredArticles: 'ተለይተው የቀረቡ ጽሑፎች',
            marketingDistribution: 'ግብይት እና ስርጭት',
            revenueFinance: 'ገቢ እና ፋይናንስ',
            guestExperience: 'የእንግዳ ተሞክሮ',
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
        trustText: 'በዓለም ዙሪያ በሚገኙ ታዋቂ ሆቴሎች የታመነ',
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
                title: 'PMS',
                description: 'ለሆቴል ስራዎች በሙሉ የሚያገለግል የተዋሃደ መድረክ።',
                href: '/property-management',
            },
        ],
        marketing: [
            {
                title: 'የቦታ ማስያዣ ሞተር',
                description: 'ቀላል እና ያለ ኮሚሽን ቀጥታ ቦታ ማስያዣ።',
                href: '/booking-engine',
            },
            {
                title: 'የቻናል ማኔጀር',
                description: 'በመቶዎች በሚቆጠሩ መንገዶች ላይ ክፍሎችን እና ዋጋን ያመሳስሉ።',
                href: '/channel-manager',
            },
            {
                title: 'የሆቴል ሜታሰርች',
                description: 'በመፈለጊያ ሞተሮች ላይ የሆቴልዎን ታይነት ያሳድጉ።',
                href: '/hotel-metasearch',
                badge: 'አዲስ',
            },
            {
                title: 'የሆቴል ድረ-ገጽ ግንቢ',
                description: 'ማራኪ ድረ-ገጾችን ለመፍጠር እገዛ ያግኙ።',
                href: '/hotel-website-builder',
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
                description: 'ደህንነቱ የተጠበቀ እና አውቶሜትድ የክፍያ ሂደት።',
                href: '/weleba-payments',
                badge: 'ተሻሽሏል',
            },
        ],
        guest: [

            {
                title: 'የእንግዳ ግንኙነት',
                description: 'በእንግዳው ጉዞ ሁሉ ግላዊ መልዕክቶችን በራስ-ሰር ይላኩ።',
                href: '/guest-engagement-software',
            },
            {
                title: 'የእንግዳ መተግበሪያ',
                description: 'ዲጂታል ቁልፍ እና የሞባይል ቼክ-ኢን አገልግሎት።',
                href: '/hotel-guest-app',
            },
        ],
    },
    solutions: {
        byProperty: [
            { title: 'ገለልተኛ ሆቴሎች', description: 'ለነጠላ ንብረቶች የተዘጋጁ መፍትሄዎች።', href: '/independent-hotels-software' },
            { title: 'የሆቴል ቡድኖች', description: 'ለበርካታ ቦታዎች የሚሆን ሊያድግ የሚችል መድረክ።', href: '/pms-hotel-groups' },
            { title: 'ሞቴሎች', description: 'ለፈጣን የእንግዳ ማረፊያዎች ውጤታማ መፍትሄዎች።', href: '/motel' },
            { title: 'ሪዞርቶች', description: 'ለሪዞርት ንብረቶች የተሟላ የአስተዳደር መድረክ።', href: '/resorts-pms-software' },
            { title: 'ቤተሰባዊ ሆቴሎች', description: 'ለጥቃቅን ንብረቶች ቀላል የአስተዳደር መፍትሄ።', href: '/bed-breakfast-software' },
            { title: 'ፓርኮች', description: 'ለፓርክ እና ካምፕ አገልግሎቶች የአስተዳደር መሳሪያዎች።', href: '/parks' },
        ],
        byRole: [
            { title: 'ስራ አስኪያጆች', description: 'ስልታዊ ቁጥጥር እና የመረጃ መሳሪያዎች።', href: '/general-managers' },
            { title: 'የፊት ጠረጴዛ አስተዳዳሪዎች', description: 'የእለት ተእለት ስራዎች እና የእንግዳ አገልግሎት መፍትሄዎች።', href: '/front-desk-managers' },
            { title: 'የገቢ አስተዳዳሪዎች', description: 'የዋጋ ማመቻቸት እና የፋይናንስ አፈጻጸም መሳሪያዎች።', href: '/revenue-managers' },
            { title: 'አይቲ (IT) አስተዳዳሪዎች', description: 'የቴክኒክ መድረክ አስተዳዳሪ እና የስርዓት ግንኙነት።', href: '/it-managers' },
        ],
    },
    resources: [
        { title: 'ብሎጎች', description: 'የንብረትዎን አፈጻጸም ለማሻሻል የባለሙያ ግንዛቤዎች።', href: '/blog' },
        { title: 'ዜና', description: 'በቅርብ የሆቴል ኢንዱስትሪ አዝማሚያዎች ቀዳሚ ይሁኑ።', href: '/news' },
        { title: 'ቴምፕሌቶች', description: 'ለስራ የሚያገለግሉ ቁሳቁሶችን እና ቅጾችን ያውርዱ።', href: '/templates' },
        { title: 'ዌቢናሮች', description: 'ለተሻለ የሆቴል አስተዳደር ልዩ ውይይቶችን ይከታተሉ።', href: '/webinar' },
        { title: 'ካልኩሌተሮች', description: 'ትርፋማነትዎን እና የገቢ አቅምዎን ወዲያውኑ ያሰሉ።', href: '/calculators' },
        { title: 'ኢ-መጽሐፍት እና መመሪያዎች', description: 'ለሆቴል ንግድ እድገት የተሟሉ ስልቶች።', href: '/ebooks' },
    ],
    company: [
        { title: 'ስለ እኛ', description: 'ከweleba ቴክኖሎጂ ጀርባ ያሉ የዘርፉ ባለሙያዎች።', href: '/about-us' },
        { title: 'ስራዎች', description: 'የእኛን የቴክኖሎጂ ባለሙያዎች ቡድን ይቀላቀሉ።', href: '/careers' },
    ],
};

// Hero Section
export const heroContent = {
    announcement: {
        text: 'innQuest ስሙን ወደ ወለባ ቀይሯል - ሆስፒታሊቲ፣ የቀለለ።',
        href: '/hospitality-simplified',
    },
    title: 'ትክክለኛ ስራዎን በሚደግፍ መልኩ የተሰራ የተሟላ የሆስፒታሊቲ መድረክ',
    subtitle: 'ወለባ ቡድንዎ ልዩ የእንግዳ ተሞክሮ በመፍጠር ላይ እንዲያተኩር ነጻ ያደርገዋል፤ የኛ ዘመናዊ መሳሪያዎች ደግሞ ገቢዎን እና የስራ ቅልጥፍናዎን ለማሳደግ ከጀርባ ይሰሩልዎታል።',
    cta: {
        primary: { text: 'ማሳያ ያስይዙ', href: '/book-a-demo' },
        secondary: { text: 'ዋጋን ይመልከቱ', href: '/pricing' },
    },
};

// Why Choose Section
export const whyChooseContent = {
    title: 'የሆቴል ባለቤቶች ለምን ወለባን የአስተዳደር ሶፍትዌራቸው አድርገው ይመርጣሉ?',
    features: [
        {
            title: 'ገቢን ለማሳደግ ይረዳል',
            description: 'የእኛ የተቀናጁ መፍትሄዎች ያለ ኮሚሽን ቀጥታ ቦታ ማስያዝ እና በኤአይ (AI) በሚመሩ የዋጋ ስልቶች አማካኝነት የRevPAR ገቢን እስከ 35% ለማሳደግ ይረዳሉ።',
            icon: 'TrendingUp',
        },
        {
            title: 'በሆቴል ባለሙያዎች ለሆቴል ባለሙያዎች የተሰራ',
            description: 'በ30+ ዓመታት የሆስፒታሊቲ ሶፍትዌር ልምዳችን መሰረት፣ ወለባ የእርስዎን ተግዳሮቶች ይረዳል።',
            icon: 'Users',
        },
        {
            title: 'ሁሉንም በአንድ የያዘ መድረክ',
            description: 'ሆቴልዎን ለማስኬድ የሚያስፈልጉዎትን ነገሮች በሙሉ በአንድ መድረክ ያገናኛል።',
            icon: 'Layers',
        },
        {
            title: 'ለመማር ቀላል',
            description: 'ስርዓታችን ለአጠቃቀም ቀላል በመሆኑ ሰራተኞች ስራውን በጥቂት ሰዓታት ውስጥ ማለምድ ይችላሉ።',
            icon: 'Zap',
        },
        {
            title: 'በማንኛውም ቦታ፣ በማንኛውም ጊዜ ተደራሽ',
            description: 'የአስተዳደር ስርዓትዎን በማንኛውም መሳሪያ በማንኛውም ቦታ ሆነው በደህንነት ይጠቀሙ።',
            icon: 'Globe',
        },
    ],
};

// Daily Operations Section
export const dailyOperationsContent = {
    title: 'የእለት ተእለት ስራዎች እና የእንግዳ ተሞክሮ አስተዳደር',
    subtitle: 'ልዩ የእንግዳ ተሞክሮ እየሰጡ የእለት ተእለት ስራዎን የሚያቀላጥፉ አስፈላጊ መሳሪያዎች።',
    features: [
        {
            title: 'PMS',
            description: 'የንብረት ስራዎችን ያቀላጥፉ፣ ቦታ ማስያዣዎችን ያስተዳድሩ እና የስራ ሂደቶችን ያሻሽሉ።',
            href: '/property-management',
            icon: 'LayoutDashboard',
        },

        {
            title: 'ክፍያዎች',
            description: 'ያለ ምንም ችግር ለእንግዶች ክፍያ የሚፈጽሙበት ደህንነቱ የተጠበቀ ሂደት።',
            href: '/weleba-payments',
            icon: 'CreditCard',
        },
        {
            title: 'የእንግዳ መተግበሪያ',
            description: 'ለቦታ ማስያዝ እና ለሌሎች ጥያቄዎች የሚሆን የሞባይል መተግበሪያ።',
            href: '/hotel-guest-app',
            icon: 'Smartphone',
        },
    ],
};

// Revenue Intelligence Section
export const revenueIntelligenceContent = {
    title: 'የኤአይ የገቢ መረጃ እና የሆቴል ታይነት',
    subtitle: 'የገቢ አቅምዎን ለማሳደግ እና በመስመር ላይ ታይነትዎን ለማስፋት የሚረዱ ጠንካራ መሳሪያዎች።',
    features: [
        {
            title: 'የቦታ ማስያዣ ሞተር',
            description: 'በድረ-ገጽዎ ላይ ቀጥታ ቦታ ማስያዣዎችን የሚያስችል ምቹ መድረክ።',
            href: '/booking-engine',
            icon: 'Calendar',
        },
        {
            title: 'የቻናል ማኔጀር',
            description: 'ትርፋማነትዎን ለማሳደግ ክፍሎችን በተለያዩ የደላላ መንገዶች ላይ ያመሳስሉ።',
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
            title: 'የሆቴል ድረ-ገጽ ግንቢ',
            description: 'እንግዶችን የሚስቡ እና ወደ ደንበኝነት የሚቀይሩ ማራኪ ድረ-ገጾችን ይፍጠሩ።',
            href: '/hotel-website-builder',
            icon: 'Globe',
        },
    ],
};

// Property Types Section
export const propertyTypesContent = {
    title: 'ለእያንዳንዱ የንብረት አይነት የሚሆን የሆቴል አስተዳደር ሶፍትዌር',
    types: [
        { title: 'ገለልተኛ ሆቴሎች', href: '/independent-hotels-software', icon: 'Building2' },
        { title: 'የሆቴል ቡድኖች', href: '/pms-hotel-groups', icon: 'Buildings' },
        { title: 'ቤተሰባዊ ሆቴሎች', href: '/bed-breakfast-software', icon: 'Home' },
        { title: 'ፓርኮች', href: '/parks', icon: 'Trees' },
        { title: 'ሪዞርቶች', href: '/resorts-pms-software', icon: 'Palmtree' },
        { title: 'ሞቴሎች', href: '/motel', icon: 'Hotel' },
    ],
};

// Customer Stories Section
export const customerStoriesContent = {
    title: 'ደንበኞቻችን ስለ እኛ የሚመሰክሩት',
    stories: [
        {
            title: 'ሀሪሰን ሆል ሆቴል ለ25 ዓመታት ከወለባ ጋር በመሆን ስራውን እንዴት እንዳቀላጠፈ',
            name: 'ስቴሲ ዳድሰን',
            role: 'ስራ አስኪያጅ',
            videoId: 'CE1FbxwX0po',
        },
        {
            title: 'ኑቮ ስዊትስ (NUVO Suites) የእንግዳ ተሞክሮውን ለማሳደግ ወለባ PMSን እንዴት እንደተጠቀመ',
            name: 'ያምላክ ነጋሽ',
            role: 'የኑቮ ስዊትስ ስራ አስኪያጅ',
            videoId: '21iGVj1UGq8',
        },
        {
            title: 'ዉድ ሪቨር ኢን (Wood River Inn) ከወለባ ጋር ስራውን በልበ ሙሉነት እንዴት እየመራ እንደሆነ',
            name: 'ራያን ኤሊሰን',
            role: 'የዉድ ሪቨር ኢን ባለቤት',
            videoId: 'Wo-D4it48lI',
        },
        {
            title: 'ሲቦርድ ሆቴሎች (Seaboard Hotels) በወለባ ሁሉንም ንብረቶች በማስተዳደር ስራውን በተቀላጠፈ ሁኔታ ያካሂዳል',
            name: 'አሌክስ ሙር',
            role: 'የሲቦርድ ሆቴሎች ፕሬዝዳንት እና ዋና ስራ አስፈፃሚ',
            videoId: 'ioXFopWwXG4',
        },
    ],
};

// Integrations Section
export const integrationsContent = {
    title: 'ፍጹም የቴክኖሎጂ ስብስብዎን ይፍጠሩ',
    subtitle: 'ወለባን ከ100 በላይ ከሚሆኑ እንደ በር ቁልፎች፣ የሽያጭ ነጥቦች እና የሂሳብ አያያዝ መሳሪያዎች ጋር ያገናኙ።',
    cta: { text: 'የገበያ ቦታውን ይጎብኙ', href: '/marketplace' },
    logos: [
        'Expedia', 'Booking.com', 'Airbnb', 'TripAdvisor', 'Google', 'Stripe',
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
            title: 'የሆስፒታሊቲ ባለሙያ ድጋፍ ሰጪዎች',
            description: 'የእኛ ቡድን በሆቴል ስራዎች ላይ ሰፊ ልምድ ስላለው የንግድ ፈተናዎችዎን ይረዳል::',
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
                    question: 'ወለባ ከሌሎች የንብረት አስተዳደር ስርዓቶች በምን ይለያል?',
                    answer: 'ወለባ የተገነባው በተለይ ለሆቴሎች ነው:: እኛ ስራዎችን በማቅለል እና የአስተዳደር ሸክምን በማስቀረት ላይ እናተኩራለን:: የእኛ የተቀናጀ መድረክ PMS፣ የቦታ ማስያዣ ሞተር፣ የቻናል ማኔጀር እና ክፍያዎችን በአንድ ላይ ያመጣል::',
                },
                {
                    question: 'ወለባ አሁን ካለን የሆቴል ቴክኖሎጂ ጋር መገናኘት ይችላል?',
                    answer: 'አዎ፣ ወለባ ከ100 በላይ ከሆኑ የሶስተኛ ወገን ስርዓቶች ጋር ይገናኛል:: ይህም የገቢ አስተዳደር መሳሪያዎችን፣ የእንግዳ መገናኛ መድረኮችን እና የሽያጭ ቦታዎችን ይጨምራል::',
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
                    answer: 'ወደ ወለባ የሚደረገው ሽግግር ቀላል እና ቀልጣፋ ነው:: የእኛ የአተገባበር ቡድን የመረጃ ሽግግርን (ቦታ ማስያዣዎች፣ የእንግዳ መገለጫዎች) ያስተናግዳል::',
                },
                {
                    question: 'አተገባበሩ ምን ያህል ጊዜ ይወስዳል?',
                    answer: 'አብዛኛዎቹ ንብረቶች በ 3-5 የስራ ቀናት ውስጥ ሙሉ በሙሉ ስራ መጀመር ይችላሉ:: ለትላልቅ ንብረቶች ከ1-2 ሳምንታት ሊወስድ ይችላል::',
                },
                {
                    question: 'ለሰራተኞቻችን ስልጠና ትሰጣላችሁ?',
                    answer: 'አዎ፣ ለእያንዳንዱ የስራ ድርሻ የተዘጋጀ የተሟላ ስልጠና እንሰጣለን:: የፊት ጠረጴዛ ሰራተኞች በጥቂት ሰዓታት ውስጥ ስራውን ሊለምዱ ይችላሉ::',
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
                    answer: 'አዎ፣ ወለባ ለሆስፒታሊቲ ስራዎች ተለዋዋጭ ባህሪ ተደርጎ የተሰራ ነው:: ወቅታዊ ሰራተኞች ስራውን በፍጥነት እንዲለምዱ ይረዳል::',
                },
            ]
        }
    ]
};

// Footer Content
export const footerContent = {
    cta: {
        title: 'ወለባን በመጠቀም ስኬታማ የሆኑ በሺዎች የሚቆጠሩ ሆቴሎችን ይቀላቀሉ',
        subtitle: "የወለባ የተቀናጀ መድረክ ለንብረትዎ እንዴት እንደሚሰራ ይመልከቱ። ቡድናችን እንደ ፍላጎትዎ የተዘጋጁ ባህሪያትን ያሳየዎታል።",
        buttonText: 'ማሳያ ያስይዙ',
        features: [
            '100% አስተማማኝ እና ደህንነቱ የተጠበቀ',
            'የ360 ዲግሪ የንብረት አስተዳደር',
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
                { text: 'የሆቴል PMS', href: '/property-management' },

                { text: 'የቦታ ማስያዣ ሞተር', href: '/booking-engine' },
                { text: 'የቻናል ማኔጀር', href: '/channel-manager' },
                { text: 'የገቢ መረጃ', href: '/revenue-management' },
                { text: 'ክፍያዎች', href: '/weleba-payments' },
                { text: 'የሆቴል እንግዶች መተግበሪያ', href: '/hotel-guest-app' },
            ],
        },
        {
            title: 'መፍትሄዎች',
            links: [
                { text: 'ገለልተኛ ሆቴሎች', href: '/independent-hotels-software' },
                { text: 'የሆቴል ቡድኖች', href: '/pms-hotel-groups' },
                { text: 'ቤተሰባዊ ሆቴሎች', href: '/bed-breakfast-software' },
                { text: 'ፓርኮች', href: '/parks' },
                { text: 'ሪዞርቶች', href: '/resorts-pms-software' },
                { text: 'ሞቴሎች', href: '/motel' },
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
