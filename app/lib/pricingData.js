export const pricingHeroContent = {
    tag: 'Pricing',
    title: 'Request Your \n<span className="text-[#0066FF]">Personalized Quote</span>',
    description: "Our pricing scales with your property's size and needs. Tell us a bit about your hotel, and we'll build a tailored package that helps you save time and grow revenue.",
    benefits: [
        'All-in-one platform for property management',
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
        firstName: { label: 'First Name', placeholder: 'John' },
        lastName: { label: 'Last Name', placeholder: 'Doe' },
        email: { label: 'Work Email', placeholder: 'john@hotel.com' },
        property: { label: 'Property Name', placeholder: 'Blue Ocean Resort' },
        rooms: {
            label: 'Number of Rooms',
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
    trustedBy: 'Trusted by leading hotels worldwide',
    cta: {
        title: 'Ready to transform your property operations?',
        subtitle: 'Join thousands of hotels that use weleba to increase efficiency and revenue.',
        buttonText: 'Get Started Now'
    }
};
