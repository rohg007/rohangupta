export const content = {
    meta: {
        title: "Rohan Gupta | Mobile SDK & Platform Engineer",
        description:
            "Building reliable, high-performance mobile SDKs and platform systems at scale.",
    },

    hero: {
        name: "Rohan Gupta",
        role: "Mobile / Platform Engineer",
        monogram: "rohg007",
        intro:
            "I work on the infrastructure mobile apps rely on — performance, reliability, and systems that quietly scale.",
    },

    work: [
        {
            id: "devrev",
            period: "2024 – Present",
            company: "DevRev",
            logo: "/themed_logos_pack/devrev_ink.png",
            role: "Mobile SDK Lead",
            description:
                "Owning cross-platform mobile SDKs and platform systems used at large enterprise scale.",
            highlights: [
                "Led a team of 8 - 12 engineers to build and maintain cross-platform mobile SDKs used by tens of millions of end users a month",
                "Led architecture and reliability of cross-platform mobile SDKs used by tens of millions of end users",
                "Designed secure session capture and data transport with end-to-end encryption",
                "Co-built ingestion pipelines reducing infrastructure costs by ~90%",
                "Improved SDK performance and stability across constrained mobile environments",
                "Handled high-severity production issues impacting enterprise customers",
            ],
            tags: ["Kotlin", "Swift", "React Native", "Expo", "gRPC", "GoLang"],
            impact: [
                "Tens of millions of users supported",
                "~90% reduction in ingestion costs",
                "Significant improvement in SDK stability and performance",
            ],
        },

        {
            id: "fi",
            period: "2022 – 2024",
            company: "Fi (Epifi)",
            logo: "/themed_logos_pack/fi_ink.png",
            role: "Senior Software Engineer",
            description:
                "Worked on large-scale consumer payments and UPI systems in a high-traffic fintech app.",
            highlights: [
                "Shipped core UPI and payments features used by hundreds of thousands of daily users",
                "Improved QR scan and app startup performance through targeted optimizations",
                "Built and integrated backend RPCs supporting payments and feature rollout",
                "Improved release reliability by separating simulation and production code paths",
            ],
            tags: ["Android", "Kotlin", "GoLang", "gRPC", "Kotlin Multiplatform"],
            impact: [
                "Hundreds of thousands of DAUs supported",
                "~4× improvement in critical performance paths",
                "Reduced production issues during release cycles",
            ],
        },

        {
            id: "huddle01",
            period: "2021 – 2022",
            company: "Huddle01",
            logo: "/themed_logos_pack/huddle_ink.png",
            role: "Software Engineer",
            description:
                "Built real-time communication systems and SDK components in an early-stage WebRTC startup.",
            highlights: [
                "Developed high-performance Android SDK components using JNI and Mediasoup",
                "Worked on real-time video pipelines and WebRTC constraints",
                "Improved call latency and stability in peer-to-peer environments",
            ],
            tags: ["WebRTC", "JNI", "C++", "TypeScript", "JAVA"],
            impact: [
                "Lower latency and improved reliability for real-time calls",
                "Hands-on experience with production real-time systems",
            ],
        },
    ],

    impact: [
        {
            label: "Users Reached",
            value: "100M+",
            description: "Across mobile SDKs and consumer applications",
        },
        {
            label: "Cost Efficiency",
            value: "~90%",
            description: "Reduction through redesigned ingestion pipelines",
        },
        {
            label: "Performance Gains",
            value: "4×",
            description: "Improvements in latency-critical mobile paths",
        },
        {
            label: "Production Stability",
            value: "High",
            description: "Reduced regressions and critical issues",
        },
    ],

    projects: [
        {
            title: "FinTwin — Personal Finance Companion (Concept)",
            year: "2024",
            description:
                "A design and system-architecture exploration for an AI-driven personal finance companion focused on behavioral insights rather than recommendations.",
            metrics: ["Product concept", "System architecture", "Wireframes"],
            impact: "Explored product constraints, data flows, and privacy considerations in building user-facing financial systems.",
            link: "https://drive.google.com/file/d/1vuDre_hkEsb-xIrTyBZ7wwPiYC_6xPoC/view?usp=sharing",
        },
        {
            title: "MTech Thesis — Vehicle Re-Identification",
            year: "2022",
            description:
                "Designed a deep learning system to re-identify vehicles across sparse city-wide CCTV networks and estimate temporal movement.",
            metrics: ["69.6% geo-position accuracy", "4.81s MAD in temporal estimation"],
            impact:
                "Demonstrated applied computer vision under real-world constraints and noisy data.",
            link: "https://drive.google.com/file/d/1oSOG8CF9BevgljPTNOAfajU_nYnCQgqR/view",
        },
        {
            title: "DiseaseX — Outbreak Reporting & Identification System",
            year: "2020",
            description:
                "An end-to-end system for reporting, visualizing, and identifying disease outbreaks using geospatial signals.",
            metrics: ["100+ geofenced regions", "Smart India Hackathon finalist"],
            impact:
                "Led a 6-member team to national-level hackathon finals; designed a scalable architecture spanning mobile, web, and ML components.",
            link: "https://github.com/rohg007/KB198_PARKSH",
        },
    ],

    writings: [
        {
            title: "Hackerrank DP: Sherlock and Cost",
            category: "tech",
            description: "Solution explanation for hackerrank question Sherlock and Cost using dynamic programming.",
            date: "Apr 2021",
            url: "https://rohangupta-3817.medium.com/hackerrank-dp-sherlock-and-cost-4ae16c02d160"
        },
        {
            title: "Forming Weird Communities",
            category: "culture",
            description: "A reflective essay on human behavior and community dynamics.",
            date: "Jan 2021",
            url: "https://rohangupta-3817.medium.com/forming-weird-communities-b3ccd4fbd2ce"
        },
        {
            title: "You Don’t Know Anything",
            category: "life",
            description: "A reflective piece on knowledge, uncertainty, and assumptions.",
            date: "Jul 2018",
            url: "https://literarycommitteeblog.wordpress.com/2018/07/09/you-dont-know-anything/"
        },
        {
            title: "Where the Mind Is Without Fear — 117 Years Down the Line",
            category: "literary",
            description: "A reflective meditation on freedom and identity inspired by Tagore’s poem.",
            date: "Nov 2017",
            url: "https://literarycommitteeblog.wordpress.com/2017/11/19/where-the-mind-is-without-fear-117-years-down-the-line/"
        },
    ] as Array<{
        title: string;
        category?: string;
        description: string;
        date?: string;
        url: string;
    }>,

    contact: {
        email: "gupta.rohan@live.com",
        linkedin: "https://linkedin.com/in/rohg007",
        github: "https://github.com/rohg007",
        resume: "/resume.pdf",
        authorPhoto: "/portrait.jpg", // Add your portrait image to public folder
    },
} as const;

export type Content = typeof content;
