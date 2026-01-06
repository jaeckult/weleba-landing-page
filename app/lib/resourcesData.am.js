// Templates Data
export const templatesHeader = {
    tag: 'ንድፎች እና የፍተሻ ዝርዝሮች (Templates & Checklists)',
    title: 'ለዘመናዊ ሆቴሎች የሚሆን የአሠራር ብቃት',
    description: 'የሆቴል ስራዎ ውጤታማ እንዲሆን የሚያግዙ ዝግጁ የሥራ መመሪያዎችን፣ የፍተሻ ዝርዝሮችን እና አሠራሮችን እዚህ ያግኙ።'
};

export const templatesList = [
    {
        title: 'የሆቴል ጽዳት እና ቁጥጥር ዝርዝር',
        description: 'እያንዳንዱ ክፍል ከፍተኛ የጥራት ደረጃን እንዲያሟላ የሚያረጋግጥ የተሟላ የጽዳት እና የፍተሻ ዝርዝር።',
        category: 'ሥራዎች',
        image: '/templates/housekeeping.jpg',
        href: '/templates/housekeeping-checklist',
        type: 'የፍተሻ ዝርዝር'
    },
    {
        title: 'የፍሮንት ዴስክ የሥራ ርክክብ ንድፍ',
        description: 'በሥራ ፈረቃዎች መካከል ያለውን ግንኙነት ለማሻሻል የሚያስችል ደረጃውን የጠበቀ የርክክብ ሂደት።',
        category: 'ሥራዎች',
        image: '/templates/front-desk.jpg',
        href: '/templates/shift-handover',
        type: 'ንድፍ'
    },
    {
        title: 'ሆቴል ከመከፈቱ በፊት የሚደረግ የዝግጅት መመሪያ',
        description: 'አዲስ ሆቴል በተሳካ ሁኔታ ለመክፈት የሚረዱ የ12 ወራት ዝርዝር የዝግጅት እርከኖች።',
        category: 'አስተዳደር',
        image: '/templates/pre-opening.jpg',
        href: '/templates/pre-opening-guide',
        type: 'መመሪያ'
    },
    {
        title: 'የገቢ አስተዳደር ኦዲት ዝርዝር',
        description: 'የዋጋ አወጣጥ ስልትዎ ከፍተኛ ውጤት እያመጣ መሆኑን ለማረጋገጥ የሚረዳ ወርሃዊ የፍተሻ ዝርዝር።',
        category: 'ገቢ',
        image: '/templates/revenue-audit.jpg',
        href: '/templates/revenue-audit',
        type: 'የፍተሻ ዝርዝር'
    },
    {
        title: 'የእንግዳ ቅሬታ መፍቻ ቅጽ',
        description: 'ሰራተኞች የእንግዳ ቅሬታዎችን በሙያዊ ብቃት እንዲፈቱ እና እንዲመዘግቡ የሚያስችል መሳሪያ።',
        category: 'የእንግዳ ተሞክሮ',
        image: '/templates/complaint-form.jpg',
        href: '/templates/complaint-form',
        type: 'ቅጽ'
    },
    {
        title: 'የሆቴሎች ዲጂታል ማርኬቲንግ ኦዲት',
        description: 'በይነመረብ ላይ ያለዎትን መገኘት በመገምገም የቀጥታ ቦታ ማስያዝ እድሎችን ይለዩ።',
        category: 'ማርኬቲንግ',
        image: '/templates/marketing-audit.jpg',
        href: '/templates/marketing-audit',
        type: 'ኦዲት'
    }
];

// Webinars Data
export const webinarsHeader = {
    tag: 'ቪዲዮ ትምህርቶች (Webinars)',
    title: 'የመስተንግዶ መረጃዎች ከኢንዱስትሪ ባለሙያዎች',
    description: 'የሆቴል አስተዳደር የወደፊት ዕጣ ፈንታን የሚወስኑ አዝማሚያዎችን እና ስልቶችን ከባለሙያዎቻችን ጋር ይወያዩ።'
};

export const webinarsList = [
    {
        title: 'ዝቅተኛ የጎብኝዎች ፍሰት በሚኖርበት ጊዜ ገቢን ማሳደግ',
        description: 'በቀዝቃዛ ወራት የክፍል መያዝ ሁኔታን እና ገቢን ለመጠበቅ የሚረዱ የተረጋገጡ ስልቶች።',
        category: 'ገቢ',
        date: 'ጥቅምት 14 ቀን 2018',
        image: '/images/webinars/revenue-management.png',
        href: '/knowledge-base'
    },
    {
        title: 'ኤአይ (AI) በእንግዳ ግንኙነት ላይ የሚያመጣው ለውጥ',
        description: 'የኤአይ የድምፅ ረዳቶች እና ቻትቦቶች የእንግዳ ጉዞን እና የፍሮንት ዴስክ ስራን እንዴት እንደሚለውጡ።',
        category: 'ቴክኖሎጂ',
        date: 'ነሐሴ 07 ቀን 2017',
        image: '/images/webinars/guest-experience.png',
        href: '/knowledge-base'
    },
    {
        title: 'ቀጥታ ቦታ ማስያዝ፡ በ 2026 ደላሎችን ማሸነፍ',
        description: 'የኮሚሽን ወጪን ለመቀነስ እና ታማኝ የቀጥታ ደንበኞችን ለማፍራት የሚረዱ ስልቶች።',
        category: 'ስርጭት',
        date: 'ሐምሌ 30 ቀን 2017',
        image: '/images/webinars/operations.png',
        href: '/knowledge-base'
    },
    {
        title: 'የሰራተኞች የሥራ ልምምድን በweleba ማቀላጠፍ',
        description: 'የሥራ ወጥነትን በሚጠብቁበት ጊዜ የስልጠና ጊዜን በ50% እንዴት መቀነስ እንደሚቻል።',
        category: 'ምርት',
        date: 'ሐምሌ 12 ቀን 2017',
        image: '/images/webinars/revenue-management.png',
        href: '/knowledge-base'
    }
];

// Calculators Data
export const calculatorsHeader = {
    tag: 'የአስተዳደር መሳሪያዎች',
    title: 'የሆቴልዎን አፈጻጸም የሚያሻሽሉ ማስሊያዎች',
    description: 'የእድገት አቅምዎን ለመመልከት እና ዋና ዋና የሆቴል አፈጻጸም መለኪያዎችን በፍጥነት ለማስላት የእኛን ነጻ መሳሪያዎች ይጠቀሙ።'
};

export const calculatorsList = [
    {
        title: 'RevPAR እና ADR ማስሊያ',
        description: 'የፋይናንስ ሁኔታዎን ለመከታተል የክፍል ገቢዎን እና አማካይ የዕለት ተዕለት ዋጋዎን በፍጥነት ያሰሉ።',
        category: 'ፋይናንስ',
        image: '/calculators/revpar.jpg',
        href: '/calculators/revpar'
    },
    {
        title: 'የኮሚሽን ቁጠባ ግምት',
        description: '10% የሚሆነውን የደላላ ሽያጭ ወደ ቀጥተኛ ሽያጭ በመቀየር በዓመት ምን ያህል ማዳን እንደሚችሉ ይመልከቱ።',
        category: 'ገቢ',
        image: '/calculators/savings.jpg',
        href: '/calculators/commission-savings'
    },
    {
        title: 'የሰራተኞች ምርታማነት ROI መሳሪያ',
        description: 'አሰልቺ የሆኑ የሆቴል ስራዎችን በራስ-ሰር በመስራት የሚያገኙትን የሰው ኃይል ወጪ ቁጠባ ያሰሉ።',
        category: 'ውጤታማነት',
        image: '/calculators/roi.jpg',
        href: '/calculators/staff-productivity'
    },
    {
        title: 'የክፍል መያዝ ትንበያ መሳሪያ',
        description: 'ቀደምት መረጃዎችን እና የወቅቱን ሁኔታ በማየት የወደፊት የክፍል መያዝ ሁኔታን የሚገምቱበት ቀላል መንገድ።',
        category: 'ሥራዎች',
        image: '/calculators/forecast.jpg',
        href: '/calculators/occupancy-forecast'
    }
];

// eBooks Data
export const ebooksHeader = {
    tag: 'ኢ-መጽሐፍት እና ጥናቶች',
    title: 'ለመስተንግዶ ስኬት የሚሆኑ ዝርዝር ስልቶች',
    description: 'የገቢ አስተዳደርን፣ የእንግዳ ተሞክሮን እና የሆቴል ቴክኖሎጂን ለመቆጣጠር በዝርዝር የተዘጋጁ መመሪያዎችን ያውርዱ።'
};

export const ebooksList = [
    {
        title: 'ለዘመናዊ ሆቴሎች የሚሆን የገቢ አስተዳደር መመሪያ',
        description: 'ስለ ተለዋዋጭ ዋጋ አወጣጥ፣ የሽያጭ ቻናሎች እና የADR ማመቻቸት የሚመረምር ባለ 50 ገጽ መጽሐፍ።',
        category: 'ገቢ',
        date: 'ህዳር 2018',
        image: '/ebooks/revenue-guide.jpg',
        href: '/ebooks/revenue-management-guide'
    },
    {
        title: 'ንክኪ አልባ መስተንግዶ፡ አዲሱ መስፈርት',
        description: 'የሞባይል ቼክ-ኢን እና ዲጂታል ቁልፎች ለገለልተኛ ሆቴሎች ለምን የግድ አስፈላጊ እንደሆኑ።',
        category: 'ቴክኖሎጂ',
        date: 'ጥቅምት 2018',
        image: '/ebooks/contactless.jpg',
        href: '/ebooks/contactless-hospitality'
    },
    {
        title: 'የሆቴል ግሩፕዎን ማሳደግ፡ የብዙ ንብረቶች መመሪያ',
        description: 'ለማዕከላዊ አስተዳደር፣ ለሪፖርት እና ለሥራ ወጥነት የሚሆኑ የአሠራር እርከኖች።',
        category: 'አስተዳደር',
        date: 'ነሐሴ 2017',
        image: '/ebooks/multi-property.jpg',
        href: '/ebooks/multi-property-playbook'
    }
];

// Alternatives Data
export const alternativesHeader = {
    tag: 'ንጽጽር',
    title: 'ወደ ቀላልነት ይሸጋገሩ። ወደ weleba ይሸጋገሩ።',
    description: 'weleba ከሌሎች የሆቴል አስተዳደር ስርዓቶች ጋር እንዴት እንደሚወዳደር ይመልከቱ። በሺዎች የሚቆጠሩ የሆቴል ባለሙያዎች ለምን ወደ እኛ እንደሚመጡ ይወቁ።'
};

export const alternativesList = [
    {
        title: 'weleba ከ Cloudbeds ጋር',
        description: 'ለአጠቃቀም ቀላልነትን፣ ዋጋን እና የተቀናጁ ባህሪያትን በተመለከተ የተደረገ ዝርዝር ንጽጽር።',
        category: 'ንጽጽር',
        comparisonLogos: ['weleba', 'Cloudbeds'],
        image: '/alternatives/cloudbeds.jpg',
        href: '/alternative/weleba-vs-cloudbeds'
    },
    {
        title: 'weleba ከ Mews ጋር',
        description: 'የእንግዳ ጉዞን፣ አውቶማቲክ አሠራሮችን እና የትግበራ ጊዜን መሠረት ያደረገ ንጽጽር።',
        category: 'ንጽጽር',
        comparisonLogos: ['weleba', 'Mews'],
        image: '/alternatives/mews.jpg',
        href: '/alternative/weleba-vs-mews'
    },
    {
        title: 'weleba ከ Little Hotelier ጋር',
        description: 'እያደጉ ያሉ B&Bዎች እና ሆቴሎች ለምን የweleba የላቁ መሳሪያዎችን እንደሚመርጡ።',
        category: 'ንጽጽር',
        comparisonLogos: ['weleba', 'Little Hotelier'],
        image: '/alternatives/little-hotelier.jpg',
        href: '/alternative/weleba-vs-little-hotelier'
    },
    {
        title: 'weleba ከ Opera ጋር',
        description: 'በደመና ላይ የሚሰራ PMS ከቆዩ ስርዓቶች (legacy systems) ያለውን ብልጫ ይመልከቱ።',
        category: 'ንጽጽር',
        comparisonLogos: ['weleba', 'Opera'],
        image: '/alternatives/opera.jpg',
        href: '/alternative/weleba-vs-opera'
    }
];
