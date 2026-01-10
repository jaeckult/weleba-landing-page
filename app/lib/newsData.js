export const newsArticles = [
    {
        id: 1,
        title: 'weleba Showcases Innovation at Addis Business Expo 2026',
        slug: 'weleba-showcases-innovation-addis-business-expo-2026',
        excerpt: 'We were thrilled to connect with hundreds of Ethiopian business owners at the Millennium Hall, demonstrating how weleba simplifies operations for local organizations.',
        content: `
# weleba at Addis Business Expo 2026

The Addis Business Expo at Millennium Hall was a resounding success this year, and weleba was proud to be at the center of it all. As Ethiopia's enterprise sector continues to grow, the need for modern, locally-relevant technology has never been greater.

## Connecting with Local Business Owners

Over the course of three days, our team met with general managers and owners from across the country—from boutique shops in Bole to service providers in Bishoftu and Hawassa. The feedback was unanimous: existing international solutions are often too expensive and complex for the local market, while local solutions sometimes lack the robust features needed to compete globally.

weleba bridges this gap.

## Key Demonstrations

Our booth featured live demos of our most popular features for the Ethiopian market:

### 1. Telebirr Integration
We showed how seamless it is to accept payments directly through Telebirr, a feature that drew significant attention given the platform's ubiquity in Ethiopia.

### 2. Amharic Interface
Seeing a world-class system interface entirely in Amharic was a "game-changer" for many attendees, who cited staff training as a major bottleneck with English-only software.

### 3. Offline-First Capabilities
Recognizing that internet connectivity can be intermittent, we demonstrated how weleba handles temporary outages without disrupting front-desk operations.

## Looking Ahead

We left the expo energized and committed to our mission. We aren't just building software; we're building the digital infrastructure for Ethiopian businesses to thrive. Thank you to everyone who stopped by!
        `,
        date: 'January 2, 2026',
        publishedAt: '2026-01-02',
        readTime: '4 min read',
        category: 'Company News',
        image: '/news/image-1.png',
        featured: true,
        author: {
            name: 'weleba Ethiopia Team',
            role: 'Marketing',
        },
    },
    {
        id: 2,
        title: 'Strategic Partnership with Telebirr to Streamline Hotel Payments',
        slug: 'weleba-partners-telebirr-streamline-payments',
        excerpt: 'We are excited to announce a direct integration with Telebirr, allowing guests to pay for bookings and services instantly using Ethiopia\'s leading mobile money platform.',
        content: `
# weleba x Telebirr: Simplifying Payments for Ethiopian Businesses

In a major move to digitize business payments in Ethiopia, weleba has officially integrated with Telebirr. This strategic partnership removes friction from the customer experience and ensures business owners get paid faster and more securely.

## Why This Matters

Cash has long been king in Ethiopia, but the tide is turning. With millions of Telebirr users, customers expect digital convenience. Previously, accepting mobile money often meant manual transfers and manual reconciliation at the operations desk—a recipe for errors and fraud.

## How It Works

With the new integration:
1.  **Direct Sales Payment:** Customers ordering through your weleba-powered website can select Telebirr at checkout.
2.  **POS Integration:** Staff can push a payment request directly to a customer's phone during registration or checkout.
3.  **Automatic Reconciliation:** Every transaction is automatically recorded in the system. No more end-of-day headaches trying to match SMS alerts with transaction records.

## Empowering a Cashless Future

"This integration is about trust and efficiency," says our Country Manager. "Business owners can trust their financial data, and customers can trust the payment process."

The feature is available immediately for all weleba customers in Ethiopia. Contact support to enable it for your organization today.
        `,
        date: 'December 28, 2025',
        publishedAt: '2025-12-28',
        readTime: '3 min read',
        category: 'Product Updates',
        image: '/news/image-2.png',
        featured: true,
        author: {
            name: 'Product Team',
            role: 'Product Management',
        },
    },
    {
        id: 3,
        title: 'Celebrating 500 Partner Hotels Across Ethiopia',
        slug: 'weleba-reaches-500-hotels-ethiopia',
        excerpt: 'From the historic routes of Lalibela to the bustling avenues of Addis Ababa, 500 properties now run on weleba. Thank you for your trust!',
        content: `
# A Milestone for Ethiopian Business: 500 Businesses Strong

We are incredibly proud to announce that the weleba family in Ethiopia has grown to 500 partner organizations. This milestone is not just a number; it represents 500 businesses that have chosen to modernize their operations and deliver better customer experiences.

## A Journey Across the Country

Our growth reflects the diversity of Ethiopia's business landscape:
*   **Addis Ababa:** Service businesses serving international delegates and diplomats.
*   **Lalibela & Gondar:** Historic enterprises preserving culture while offering modern services.
*   **Bishoftu & Hawassa:** Resorts and centers providing weekend escapes for locals and tourists alike.
*   **Arba Minch:** Eco-lodges serving as gateways to the southern nations.

## What Our Partners Are Saying

> "Before weleba, we managed everything on paper. Now, I can see my business status from my phone while I'm in Addis for meetings." 
> — *Ato Kebede, Owner of an enterprise in Bahir Dar*

## Building for the Next 500

We are just getting started. Our roadmap for the coming year includes even more localized features, including integrations with local suppliers and banks. We remain dedicated to empowering independent Ethiopian businesses to compete on a global stage.

Here's to the next 500!
        `,
        date: 'December 20, 2025',
        publishedAt: '2025-12-20',
        readTime: '3 min read',
        category: 'Company News',
        image: '/news/image-3.png',
        featured: false,
        author: {
            name: 'Yitbarek T.',
            role: 'CEO',
        },
    },
];

export const newsCategories = [
    { name: 'All News', slug: 'all', count: 8 },
    { name: 'Company News', slug: 'Company News', count: 3 },
    { name: 'Product Updates', slug: 'Product Updates', count: 3 },
    { name: 'Partnerships', slug: 'Partnerships', count: 1 },
    { name: 'Industry Insights', slug: 'Industry Insights', count: 1 },
];

export const newsHeroContent = {
    tag: 'News',
    title: 'Stories from<br />Ethiopian<br />Business',
    description: 'Updates from weleba, insights on the Ethiopian market, and stories from our partner businesses.'
};
