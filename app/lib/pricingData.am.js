export const pricingHeroContent = {
    tag: 'የሆቴል አስተዳደር ሶፍትዌር',
    title: 'ለ<span className="text-[#0066FF]">እድገት</span> የሚሆን ኢንቨስትመንት',
    description: 'እንደ ንብረትዎ መጠን እና ፍላጎት የተበጁ ተለዋዋጭ አማራጮች። ለሆቴልዎ የግል ዋጋ ዛሬ ያግኙ።',
    benefits: [
        'ሁሉንም በአንድ የያዘ መድረክ',
        'ያልተገደበ ድጋፍ',
        'ምንም የተደበቀ ክፍያ የለም'
    ]
};

export const pricingFormContent = {
    success: {
        title: 'መልእክት ተልኳል!',
        message: "ስለ ፍላጎትዎ እናመሰግናለን! ቡድናችን በቅርቡ የግል ዋጋ ይዞ ያነጋግርዎታል።",
        buttonText: 'ሌላ መልእክት ይላኩ'
    },
    fields: {
        firstName: { label: 'ስም', placeholder: 'ዮሐንስ' },
        lastName: { label: 'የአባት ስም', placeholder: 'ተሰማ' },
        email: { label: 'የሥራ ኢሜይል', placeholder: 'john@hotel.com' },
        property: { label: 'የሆቴል ስም', placeholder: 'ታላቁ ሪዞርት' },
        rooms: {
            label: 'የክፍሎች ብዛት',
            placeholder: 'መጠን ይምረጡ...',
            options: [
                { value: '<25', label: 'ከ25 በታች' },
                { value: '25-50', label: '25 - 50' },
                { value: '51-100', label: '51 - 100' },
                { value: '101-250', label: '101 - 250' },
                { value: '250+', label: '250+' }
            ]
        },
        message: { label: 'እንዴት ልንረዳዎ እንችላለን?', placeholder: 'ስለ ፍላጎቶችዎ ይንገሩን...' }
    },
    submitButton: 'ዋጋ ያግኙ',
    privacyNote: "ይህንን ቅጽ በማስገባት በግላዊነት ፖሊሲያችን ተስማምተዋል። የእርስዎን ውሂብ በጥንቃቄ እንይዛለን።"
};

export const pricingPageContent = {
    trustedBy: 'በዓለም ዙሪያ በሚገኙ ታዋቂ ሆቴሎች የታመነ',
    cta: {
        title: 'የንብረትዎን አሰራር ለመለወጥ ተዘጋጅተዋል?',
        subtitle: 'ቅልጥፍናን እና ገቢን ለመጨመር weleba የሚጠቀሙ በሺዎች የሚቆጠሩ ሆቴሎችን ይቀላቀሉ።',
        buttonText: 'አሁኑኑ ይጀምሩ'
    }
};
