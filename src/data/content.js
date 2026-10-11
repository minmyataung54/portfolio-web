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
      role: "Full-Stack Developer / AI-Driven Software Engineer / Infra Engineer",
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
        "I use AI-assisted development tools — Claude Code, Gemini, OpenAI Codex 5.5, and GitHub Copilot — for research, code generation, debugging, and rapid prototyping, without losing sight of maintainability and security.",
      ],
      stats: [
        { value: "4+", label: "Selected Projects" },
        { value: "2", label: "Industry / Research Roles" },
        { value: "N2", label: "JLPT" },
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
          items: ["Claude Code", "Gemini", "OpenAI Codex 5.5", "GitHub Copilot", "API Integration"],
        },
        {
          name: "Currently Learning",
          learning: true,
          items: ["Java", "PHP (Laravel)"],
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
            "Built a secure file-transfer service that ingests client files and writes them to both on-premises SFTP servers and AWS S3 buckets.",
            "Managed SFTP and S3 credentials through AWS Secrets Manager instead of application config, and applied compression and archiving to files to reduce storage and transfer overhead.",
            "Developed scalable REST APIs for KYC (Know Your Customer) verification and a centralized master-data service supporting multiple countries.",
            "Took part in system architecture discussions and documented reusable design patterns to keep services consistent and maintainable.",
          ],
          stack: ["REST APIs", "AWS S3", "AWS Secrets Manager", "SFTP"],
        },
        {
          role: "Software Engineer",
          org: "KMUTT",
          orgSub: "AI / NLP Development",
          period: "Jan 2025 – Jun 2026",
          points: [
            "Wrote Python crawlers that collect articles from online news sources, then clean and normalize body text and metadata into a consistent schema stored in Google Cloud Storage.",
            "Trained a text-classification model that filters crisis-related articles, so only relevant content is passed to the LLM extraction stage.",
            "Evaluated and integrated LLMs (Google Gemini, Gemma 3, Gemma 4, Cohere Aya) to turn unstructured news text into structured crisis-event records.",
            "Provisioned the infrastructure as code with Terraform and ran the pipeline on Cloud Run Jobs/Services with CI/CD via Cloud Build; contributed to a React / Next.js dashboard with Leaflet.js map views of the results.",
          ],
          stack: ["Python", "LLMs", "Terraform", "Cloud Run", "Cloud Build", "Cloud Storage", "Next.js", "Leaflet.js"],
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
        { name: "Japanese", detail: "Business Japanese — JLPT N2" },
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
      role: "フルスタックエンジニア ／ AI活用ソフトウェアエンジニア ／ インフラエンジニア",
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
        "Claude Code、Gemini、OpenAI Codex 5.5、GitHub Copilotといった生成AIツールを、調査・コード生成・デバッグ・プロトタイピングに活用しつつ、保守性とセキュリティを重視した開発を心がけています。",
      ],
      stats: [
        { value: "4+", label: "主要プロジェクト" },
        { value: "2", label: "実務・研究経験" },
        { value: "N2", label: "JLPT" },
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
          items: ["MongoDB", "SQL", "Neo4j", "Linux", "Google Cloud", "AWS"],
        },
        {
          name: "ツール・開発フロー",
          items: ["Git", "GitHub", "Docker", "Sourcetree", "Bash/Shell", "アジャイル開発"],
        },
        {
          name: "AI活用",
          items: ["Claude Code", "Gemini", "OpenAI Codex 5.5", "GitHub Copilot", "API連携"],
        },
        {
          name: "現在学習中",
          learning: true,
          items: ["Java", "PHP (Laravel)"],
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
            "クライアントファイルを受信し、オンプレミスのSFTPサーバーとAWS S3バケットの両方へ書き込むセキュアなファイル転送サービスを構築。",
            "SFTP・S3の認証情報をアプリケーション設定ではなくAWS Secrets Managerで管理し、ファイルの圧縮・アーカイブ処理によりストレージおよび転送のオーバーヘッドを削減。",
            "KYC(本人確認)向けのスケーラブルなREST APIと、複数国に対応する集中型マスターデータサービスを開発。",
            "システムアーキテクチャの検討に参加し、サービスの一貫性と保守性を保つための再利用可能な設計パターンをドキュメント化。",
          ],
          stack: ["REST API", "AWS S3", "AWS Secrets Manager", "SFTP"],
        },
        {
          role: "ソフトウェアエンジニア",
          org: "KMUTT",
          orgSub: "AI・自然言語処理開発",
          period: "2025年1月 – 2026年6月",
          points: [
            "オンラインニュースソースから記事を収集するPythonクローラーを開発し、本文とメタデータをクリーニング・正規化して統一スキーマでGoogle Cloud Storageに保存。",
            "危機関連記事を判別するテキスト分類モデルを学習させ、該当する記事のみをLLM抽出処理へ渡すフィルタリングを実装。",
            "Google Gemini、Gemma 3、Gemma 4、Cohere AyaなどのLLMを評価・統合し、非構造化のニューステキストを構造化された危機事象データへ変換。",
            "TerraformでインフラをIaC化し、Cloud Run(ジョブ・サービス)上でパイプラインを稼働、Cloud BuildでCI/CDを構築。React/Next.jsとLeaflet.jsによる地図表示ダッシュボードの開発にも貢献。",
          ],
          stack: ["Python", "LLM", "Terraform", "Cloud Run", "Cloud Build", "Cloud Storage", "Next.js", "Leaflet.js"],
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
            "データソース(Webクロール)からエンドユーザー(ダッシュボード)までのデータパイプラインを、GCP Cloud Run(ジョブ・サービス)、Cloud Build、Cloud Storageで統合。あわせてカスタム分類モデルと人手検証用の管理ダッシュボードを実装し、低資源言語(ミャンマー語)の情報抽出をGemini、Gemma、Aya、Cohere、SEA-LIONで研究・評価。",
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
        { name: "日本語", detail: "ビジネスレベル — JLPT N2" },
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
  linkedin: "https://www.linkedin.com/in/min-myat-aung-74a84b17a/",
  github: "https://github.com/minmyataung54",
};
