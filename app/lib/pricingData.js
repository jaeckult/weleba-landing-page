export const pricingHeroContent = {
    tag: 'Pricing',
    title: 'Request Your \n<span className="text-[#0066FF]">Personalized Quote</span>',
    description: "Our pricing scales with your organization's size and needs. Tell us a bit about your business, and we'll build a tailored package that helps you save time and grow revenue.",
    benefits: [
        'All-in-one platform for business management',
        '97% client retention rate',
        '24/7 world-class support',
        'Seamless integrations with top tools'
    ]
};

export const pricingFormContent = {
    success: {
        title: 'Message Sent!',
        message: "Thank you for reaching out. One of our experts will contact you shortly with a personalized quote.",
        buttonText: 'Send another message'
    },
    fields: {
        firstName: { label: 'First Name', placeholder: 'Fuad' },
        lastName: { label: 'Last Name', placeholder: 'Abdu' },
        email: { label: 'Work Email', placeholder: 'fuad@business.com' },
        property: { label: 'Business Name', placeholder: 'Elite Enterprise' },
        rooms: {
            label: 'Business Scale (Units/Rooms)',
            placeholder: 'Select range...',
            options: [
                { value: '<25', label: 'Less than 25' },
                { value: '25-50', label: '25 - 50' },
                { value: '51-100', label: '51 - 100' },
                { value: '101-250', label: '101 - 250' },
                { value: '250+', label: '250+' }
            ]
        },
        message: { label: 'How can we help?', placeholder: 'Tell us about your requirements...' }
    },
    submitButton: 'Get My Quote',
    privacyNote: "By submitting this form, you agree to our Privacy Policy. We'll handle your data with care."
};

export const pricingPageContent = {
    trustedBy: 'Trusted by leading organizations worldwide',
    cta: {
        title: 'Ready to transform your business operations?',
        subtitle: 'Join thousands of businesses that use weleba to increase efficiency and revenue.',
        buttonText: 'Get Started Now'
    }
};
