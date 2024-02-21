export default defineEventHandler(() => [
    {
        plan: 'Start',
        price: '€250',
        channels: ['Email'],
        popular: false,
        features: [
            'Channel: Email',
            'Incl. 5,000+ contacts',
            'Two-way integration with your ATS',
            'Unlimited apps',
            'Unlimited flows',
            'Unlimited actions per contact',
            'Email-only support'
        ],
    },
    {
        plan: 'Grow',
        price: '€500',
        channels: ['Email', 'WhatsApp'],
        popular: true,
        features: [
            "Channels: Email, WhatsApp",
            "Incl. 12,500+ contacts",
            "Two-way integration with your ATS",
            "Unlimited apps",
            "Unlimited flows",
            "Unlimited actions per contact",
            "Surveys",
            "Reports",
            "Email and chat support"
        ],
    },
    {
        plan: 'Scale',
        price: '€1000',
        channels: ['Email', 'WhatsApp', 'Web'],
        popular: false,
        features: [
            "Incl. 50,000+ contacts",
            "Two-way integration with your ATS",
            "Unlimited apps",
            "Unlimited flows",
            "Unlimited actions per contact",
            "Surveys",
            "Reports",
            "Web scraping",
            "Scoring & tagging",
            "Custom apps",
            "Priority support via email, video call and chat"
        ],
    }
])
