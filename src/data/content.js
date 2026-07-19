export const content = {
  en: {
    lang: "en",
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Min Myat Aung",
      role: "Full-Stack Developer / AI-Driven Software Engineer",
      tagline:
        "I build web applications, secure APIs, and cloud-connected systems — and use AI-assisted tools to move fast without cutting corners.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Get in Touch",
      location: "Bangkok, Thailand",
    },
    about: {
      title: "About Me",
      kicker: "Summary",
      paragraphs: [
        "I'm an adaptable full-stack developer with hands-on experience building web applications, secure APIs, cloud-connected systems, and automation-oriented integrations.",
        "I work comfortably across JavaScript, Node.js, React, Python, .NET, MongoDB, SQL, AWS, Docker, and Google Cloud, and I pick up new tools quickly when a project calls for it.",
        "I use AI-assisted development tools — Claude Code, Gemini, ChatGPT Codex 5.5, and GitHub Copilot — for research, code generation, debugging, and rapid prototyping, without losing sight of maintainability and security.",
      ],
      stats: [
        { value: "4+", label: "Selected Projects" },
        { value: "2", label: "Industry / Research Roles" },
        { value: "N3", label: "Japanese (N2 pending)" },
        { value: "850", label: "TOEIC Score" },
      ],
    },
    skills: {
      title: "Skills & Tools",
      kicker: "What I work with",
      groups: [
        {
          name: "Web & Backend",
          items: ["JavaScript", "Node.js", "React", "HTML/CSS", ".NET", ".NET Core", "REST APIs"],
        },
        {
          name: "Data & Cloud",
          items: ["MongoDB", "SQL", "Neo4j", "Linux", "Google Cloud", "AWS"],
        },
        {
          name: "Tools & Delivery",
          items: ["Git", "GitHub", "Docker", "Sourcetree", "Bash/Shell", "Agile Workflows"],
        },
        {
          name: "AI & Automation",
          items: ["Claude Code", "Gemini", "ChatGPT Codex 5.5", "GitHub Copilot", "API Integration"],
        },
      ],
    },
    experience: {
      title: "Experience",
      kicker: "Where I've worked",
      items: [
        {
          role: "Application Development Intern",
          org: "2C2P Thailand",
          orgSub: "FinTech / Payment Gateway",
          period: "Jun 2025 – Jul 2025",
          points: [
            "Designed and implemented a secure file-transfer workflow that receives client files and stores them on on-premises SFTP and AWS S3.",
            "Used AWS Secrets Manager for credential management and applied compression and archiving techniques to improve security and operational efficiency.",
            "Collaborated on system architecture and documented reusable design patterns for maintainable development.",
            "Developed scalable APIs for Know Your Customer (KYC) processes and a centralized master-data service supporting multiple countries.",
          ],
        },
        {
          role: "Research Assistant",
          org: "King Mongkut's University of Technology Thonburi",
          orgSub: "AI / NLP Research",
          period: "Jan 2025 – Jun 2026",
          points: [
            "Researched event-extraction techniques and reviewed literature on identifying crisis events in narrative-rich news articles using LLMs.",
            "Cleaned and curated crawled Burmese news data to improve consistency, annotation quality, and reliability of the ground-truth dataset.",
            "Used AI-assisted development to generate and validate batch-processing results through LLMs (Google Gemini, Gemma 3, Gemma 4).",
            "Implemented a multi-event extraction approach that captures multiple co-occurring crisis types from a single article.",
          ],
        },
      ],
    },
    projects: {
      title: "Selected Projects",
      kicker: "Things I've built",
      items: [
        {
          name: "StallMate",
          role: "Backend Developer",
          description:
            "A Node.js and MongoDB platform that lets Thai stall owners publish menus and lets foreign customers view translated English content via the Azure Translation API. Integrated Stripe payments, cash-order support, and Google OAuth authentication, and organized delivery using Agile across three sprints.",
          tags: ["Node.js", "MongoDB", "Stripe", "Google OAuth", "Azure Translation API"],
          github: "https://github.com/minmyataung54/StallMate",
        },
        {
          name: "End-to-End Pipeline for LLM-Based Information Extraction",
          role: "Research & Backend",
          description:
            "Integrated a data pipeline from source (web crawling) to end user (dashboard) using GCP Cloud Run jobs and services, and Cloud Build with Cloud Storage — alongside a custom classifier model and an admin dashboard for human verification. Researched low-resource-language (Myanmar) information extraction using Gemini, Gemma, Aya, Cohere, and SEA-LION.",
          tags: ["GCP Cloud Run", "Cloud Build", "LLMs", "Python"],
          github: "https://github.com/AungKhantThaw47/CPE_Final_Project",
        },
        {
          name: "VR Hand Sign Recognition",
          role: "ML / Unity Developer",
          description:
            "Built a Unity scene to collect hand-bone data using Meta Oculus hand tracking, preprocessed the data with K-means clustering for ML training, and implemented a Unity scene that detects hand signs in VR from the trained model.",
          tags: ["Unity", "Meta Oculus", "K-means", "Machine Learning"],
          github: "https://github.com/AungKhantThaw47/OculusHand",
        },
        {
          name: "Interactive Web Game",
          role: "Frontend Developer",
          description:
            "Developed a responsive browser-based game using React and Tailwind CSS, working with a UI/UX team and GitHub-based collaboration to deliver a user-friendly interface.",
          tags: ["React", "Tailwind CSS", "GitHub"],
        },
        {
          name: "Location-Based Campus Map Prototype",
          role: "Backend Developer",
          description:
            "Built a Node.js and Neo4j web application that calculates the shortest route between a user's current location and destination, with an optimized Cypher query deployed as a backend API in Express.js.",
          tags: ["Node.js", "Neo4j", "Express.js", "Cypher"],
        },
      ],
    },
    education: {
      title: "Education & Languages",
      kicker: "Background",
      school: "King Mongkut's University of Technology Thonburi",
      degree: "B.Eng. in Computer Engineering",
      period: "2022 – 2026",
      languagesTitle: "Languages",
      languages: [
        { name: "English", detail: "Business English — TOEIC 850" },
        { name: "Japanese", detail: "Intermediate — JLPT N3 passed, JLPT N2 taken (result pending)" },
      ],
    },
    contact: {
      title: "Let's Connect",
      kicker: "Get in touch",
      text: "I'm open to full-stack, backend, and AI-driven engineering opportunities. Feel free to reach out.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      footerNote: "Built with React, Tailwind CSS, and Framer Motion.",
    },
  },

  ja: {
    lang: "ja",
    nav: {
      about: "自己紹介",
      skills: "スキル",
      experience: "職歴",
      projects: "プロジェクト",
      education: "学歴・語学",
      contact: "お問い合わせ",
    },
    hero: {
      greeting: "はじめまして、",
      name: "Min Myat Aung",
      role: "フルスタックエンジニア ／ AI活用ソフトウェアエンジニア",
      tagline:
        "Webアプリケーション、セキュアなAPI、クラウド連携システムの構築を得意としています。AIツールを活用し、品質を落とさずスピーディーに開発します。",
      ctaPrimary: "プロジェクトを見る",
      ctaSecondary: "お問い合わせ",
      location: "タイ・バンコク",
    },
    about: {
      title: "自己紹介",
      kicker: "サマリー",
      paragraphs: [
        "Webアプリケーション、セキュアなAPI、クラウド連携システム、自動化統合の構築経験を持つ、適応力のあるフルスタック開発者です。",
        "JavaScript、Node.js、React、Python、.NET、MongoDB、SQL、AWS、Docker、Google Cloudなどを幅広く扱い、必要に応じて新しい技術も素早く習得します。",
        "Claude Code、Gemini、ChatGPT Codex 5.5、GitHub Copilotといった生成AIツールを、調査・コード生成・デバッグ・プロトタイピングに活用しつつ、保守性とセキュリティを重視した開発を心がけています。",
      ],
      stats: [
        { value: "4+", label: "主要プロジェクト" },
        { value: "2", label: "実務・研究経験" },
        { value: "N3", label: "日本語能力(N2結果待ち)" },
        { value: "850", label: "TOEICスコア" },
      ],
    },
    skills: {
      title: "スキル・使用技術",
      kicker: "得意分野",
      groups: [
        {
          name: "Web・バックエンド",
          items: ["JavaScript", "Node.js", "React", "HTML/CSS", ".NET", ".NET Core", "REST API"],
        },
        {
          name: "データ・クラウド",
          items: ["MongoDB", "SQL", "Neo4j", "AWS S3", "AWS Secrets Manager", "Linux", "Google Cloud", "AWS"],
        },
        {
          name: "ツール・開発フロー",
          items: ["Git", "GitHub", "Docker", "Sourcetree", "Bash/Shell", "アジャイル開発"],
        },
        {
          name: "AI活用",
          items: ["Claude Code", "Gemini", "ChatGPT Codex 5.5", "GitHub Copilot", "API連携"],
        },
      ],
    },
    experience: {
      title: "職歴",
      kicker: "経験してきた仕事",
      items: [
        {
          role: "アプリケーション開発インターン",
          org: "2C2P Thailand",
          orgSub: "フィンテック・決済ゲートウェイ",
          period: "2025年6月 – 2025年7月",
          points: [
            "クライアントファイルを受信し、オンプレミスSFTPおよびAWS S3に保存するセキュアなファイル転送ワークフローを設計・実装。",
            "AWS Secrets Managerによる認証情報管理と、圧縮・アーカイブ処理によるセキュリティおよび運用効率の向上に貢献。",
            "システムアーキテクチャの検討に参加し、再利用可能な設計パターンをドキュメント化。",
            "KYC(本人確認)向けAPIおよび複数国対応の集中型マスターデータサービスを開発。",
          ],
        },
        {
          role: "リサーチアシスタント",
          org: "キングモンクット工科大学トンブリー校",
          orgSub: "AI・自然言語処理研究",
          period: "2025年1月 – 2026年6月",
          points: [
            "物語性の高いニュース記事からLLMを用いて危機事象を抽出する手法を研究し、関連文献をレビュー。",
            "クロールしたビルマ語ニュースデータをクリーニングし、正解データの一貫性・アノテーション品質・信頼性を改善。",
            "AIを活用し、LLM(Google Gemini、Gemma 3、Gemma 4)によるバッチ処理結果の生成・検証を実施。",
            "1つの記事内で複数の危機事象が同時に発生するケースに対応する、マルチイベント抽出手法を実装。",
          ],
        },
      ],
    },
    projects: {
      title: "主なプロジェクト",
      kicker: "これまでの制作物",
      items: [
        {
          name: "StallMate",
          role: "バックエンド開発",
          description:
            "Node.jsとMongoDBを用いたプラットフォームを構築。タイの屋台オーナーがメニューを公開でき、外国人客はAzure Translation APIによる英訳を閲覧可能。Stripe決済・現金注文対応・Google OAuth認証を統合し、3スプリントにわたりアジャイル開発でチームの進行を管理。",
          tags: ["Node.js", "MongoDB", "Stripe", "Google OAuth", "Azure Translation API"],
          github: "https://github.com/minmyataung54/StallMate",
        },
        {
          name: "LLMベース情報抽出のエンドツーエンドパイプライン",
          role: "研究・バックエンド開発",
          description:
            "Webクロールから管理者ダッシュボードまでのデータパイプラインを、GCP Cloud Run(ジョブ・サービス)、Cloud Build、Cloud Storageで構築。カスタム分類モデルと人手検証用の管理ダッシュボードを実装し、低資源言語(ミャンマー語)の情報抽出をGemini、Gemma、Aya、Cohere、SEA-LIONで研究・評価。",
          tags: ["GCP Cloud Run", "Cloud Build", "LLM", "Python"],
          github: "https://github.com/AungKhantThaw47/CPE_Final_Project",
        },
        {
          name: "VRハンドサイン認識",
          role: "ML・Unity開発",
          description:
            "Meta Oculusのハンドトラッキングで手のボーンデータを収集するUnityシーンを実装。K-meansクラスタリングでデータを前処理し、学習済みモデルを用いてVR空間内でハンドサインを検出するシーンを実装。",
          tags: ["Unity", "Meta Oculus", "K-means", "機械学習"],
          github: "https://github.com/AungKhantThaw47/OculusHand",
        },
        {
          name: "インタラクティブWebゲーム",
          role: "フロントエンド開発",
          description:
            "ReactとTailwind CSSを用いたレスポンシブなブラウザゲームを開発。UI/UXチームと連携し、GitHubベースの共同作業でユーザーフレンドリーなインターフェースを実現。",
          tags: ["React", "Tailwind CSS", "GitHub"],
        },
        {
          name: "位置情報キャンパスマップ プロトタイプ",
          role: "バックエンド開発",
          description:
            "Node.jsとNeo4jを用いたWebアプリケーションを構築し、現在地から目的地までの最短経路を算出。最適化したCypherクエリを、Express.js上のバックエンドAPIとしてデプロイ。",
          tags: ["Node.js", "Neo4j", "Express.js", "Cypher"],
        },
      ],
    },
    education: {
      title: "学歴・語学",
      kicker: "バックグラウンド",
      school: "キングモンクット工科大学トンブリー校",
      degree: "工学部 コンピュータ工学科 学士",
      period: "2022年 – 2026年",
      languagesTitle: "語学力",
      languages: [
        { name: "英語", detail: "ビジネスレベル — TOEIC 850点" },
        { name: "日本語", detail: "中級 — JLPT N3合格、JLPT N2受験(結果待ち)" },
      ],
    },
    contact: {
      title: "お問い合わせ",
      kicker: "連絡先",
      text: "フルスタック・バックエンド・AI活用エンジニアとしての機会を探しています。お気軽にご連絡ください。",
      emailLabel: "メール",
      phoneLabel: "電話番号",
      footerNote: "React、Tailwind CSS、Framer Motionで制作。",
    },
  },
};

export const profile = {
  name: "Min Myat Aung",
  email: "minmyataung20@gmail.com",
  phone: "+66 812 634 737",
  linkedin: "https://linkedin.com/in/minmyataung",
  github: "https://github.com/minmyataung54",
};
