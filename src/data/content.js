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
      resumeQA: "Chat with My Portfolio",
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
        { value: "2", label: "Professional Roles" },
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
          stack: ["C#", ".NET", "REST APIs", "AWS S3", "AWS Secrets Manager", "SFTP"],
        },
        {
          role: "Software Engineer",
          org: "KMUTT",
          orgSub: "AI / NLP Development",
          period: "Jan 2025 – Jun 2026",
          points: [
            "Built Python crawlers to collect articles from online news sites, cleaned and normalized the article metadata, and stored the processed data in Google Cloud Storage.",
            "Built a text classification model to determine whether each article was about a crisis.",
            "Used the Gemini 3 API to extract key information from articles classified as crisis-related and turn it into structured event records.",
            "Contributed to a React and Next.js dashboard that displays the extracted data using TypeScript, JavaScript, and Leaflet.js map views. Provisioned the infrastructure with Terraform and deployed the pipeline to Cloud Run with Cloud Build CI/CD.",
          ],
          stack: ["Python", "Gemini 3 API", "TypeScript", "JavaScript", "Terraform", "Cloud Run", "Cloud Build", "Cloud Storage", "Next.js", "Leaflet.js"],
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
          role: "Software Engineer at KMUTT",
          description:
            "Built an end-to-end pipeline that crawls online news, cleans article metadata, and stores the processed data in Google Cloud Storage. A custom classifier identifies crisis-related articles, and the Gemini 3 API extracts key details for a TypeScript and JavaScript dashboard. The pipeline runs on Cloud Run with Cloud Build.",
          tags: ["GCP Cloud Run", "Cloud Build", "Gemini 3 API", "Python", "TypeScript"],
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
        { name: "Myanmar (Burmese)", detail: "Native" },
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
      resumeQA: "経歴について質問する",
    },
    hero: {
      greeting: "はじめまして。",
      name: "Min Myat Aung",
      role: "フルスタック・AI活用・インフラ開発",
      tagline:
        "WebアプリケーションやセキュアなAPI、クラウドと連携するシステムを開発しています。AIツールも活用し、品質と開発効率の両立を心がけています。",
      ctaPrimary: "プロジェクトを見る",
      ctaSecondary: "お問い合わせ",
      location: "タイ・バンコク",
    },
    about: {
      title: "自己紹介",
      kicker: "経歴の概要",
      paragraphs: [
        "フルスタックエンジニアとして、WebアプリケーションやセキュアなAPIの開発、クラウド連携や自動化の仕組みづくりに携わってきました。",
        "JavaScript、Node.js、React、Python、.NET、MongoDB、SQL、AWS、Docker、Google Cloudなどを使用してきました。案件に応じて、新しい技術も学びながら取り入れています。",
        "Claude Code、Gemini、OpenAI Codex 5.5、GitHub Copilotといった生成AIツールを、調査・コード生成・デバッグ・プロトタイピングに活用しつつ、保守性とセキュリティを重視した開発を心がけています。",
      ],
      stats: [
        { value: "4+", label: "主要プロジェクト" },
        { value: "2", label: "実務経験" },
        { value: "N2", label: "JLPT" },
        { value: "850", label: "TOEICスコア" },
      ],
    },
    skills: {
      title: "スキル・使用技術",
      kicker: "開発で使用する主な技術",
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
      kicker: "担当業務と開発実績",
      items: [
        {
          role: "アプリケーション開発インターン",
          org: "2C2P Thailand",
          orgSub: "フィンテック・決済ゲートウェイ",
          period: "2025年6月〜7月",
          points: [
            "お客様から受け取ったファイルをオンプレミスのSFTPサーバーとAWS S3の両方に安全に保存する転送サービスを開発しました。",
            "SFTPとS3の認証情報をAWS Secrets Managerで管理しました。ファイルの圧縮とアーカイブ処理を組み込み、保存と転送にかかる負荷を抑えました。",
            "利用規模の拡大に対応できる本人確認（KYC）用のREST APIと、複数の国で使うマスターデータを一元管理するサービスを開発しました。",
            "システム構成の検討に参加しました。サービス間で設計に一貫性を持たせ、保守しやすくするため、共通で使える設計パターンを文書にまとめました。",
          ],
          stack: ["C#", ".NET", "REST API", "AWS S3", "AWS Secrets Manager", "SFTP"],
        },
        {
          role: "ソフトウェアエンジニア",
          org: "KMUTT",
          orgSub: "AI・自然言語処理開発",
          period: "2025年1月〜2026年6月",
          points: [
            "Pythonでニュースサイトの記事を収集するクローラーを開発しました。収集した記事のメタデータを整理・正規化し、処理済みのデータをGoogle Cloud Storageに保存しました。",
            "記事の内容から、危機事象に関するニュースかどうかを判定するテキスト分類モデルを構築しました。",
            "危機事象に関連すると判定された記事から、Gemini 3 APIで必要な情報を抽出し、構造化データに変換しました。",
            "抽出結果を表示するReact・Next.jsのダッシュボード開発に参加し、TypeScriptとJavaScriptを用いた画面やLeaflet.jsによる地図表示に取り組みました。インフラはTerraformで構成し、Cloud BuildのCI/CDでパイプラインをCloud Runにデプロイしました。",
          ],
          stack: ["Python", "Gemini 3 API", "TypeScript", "JavaScript", "Terraform", "Cloud Run", "Cloud Build", "Cloud Storage", "Next.js", "Leaflet.js"],
        },
      ],
    },
    projects: {
      title: "主なプロジェクト",
      kicker: "開発事例",
      items: [
        {
          name: "StallMate",
          role: "バックエンド開発",
          description:
            "Node.jsとMongoDBを使い、タイの屋台がメニューを公開できるサービスを開発しました。利用者はAzure Translation APIで英訳したメニューを閲覧できます。Stripe決済や現金払いでの注文、Google OAuth認証を組み込み、3回のスプリントを通じてチーム開発を進めました。",
          tags: ["Node.js", "MongoDB", "Stripe", "Google OAuth", "Azure Translation API"],
          github: "https://github.com/minmyataung54/StallMate",
        },
        {
          name: "ニュース記事の収集・分類・情報抽出パイプライン",
          role: "KMUTTのソフトウェアエンジニア",
          description:
            "ニュース記事の収集から、メタデータの整理、Google Cloud Storageへの保存までを行うパイプラインを構築しました。分類モデルで危機事象に関する記事を選び、Gemini 3 APIで抽出した情報をTypeScriptとJavaScriptで開発したダッシュボードに表示します。Cloud Buildを使ってCloud Runにデプロイしました。",
          tags: ["GCP Cloud Run", "Cloud Build", "Gemini 3 API", "Python", "TypeScript"],
          github: "https://github.com/AungKhantThaw47/CPE_Final_Project",
        },
        {
          name: "VRハンドサイン認識",
          role: "ML・Unity開発",
          description:
            "Meta Oculusのハンドトラッキング機能を使い、手の骨格データを収集するシーンをUnityで実装しました。K-means法で学習データを前処理し、学習済みモデルで手の形を認識できるVRシーンを作成しました。",
          tags: ["Unity", "Meta Oculus", "K-means", "機械学習"],
          github: "https://github.com/AungKhantThaw47/OculusHand",
        },
        {
          name: "インタラクティブWebゲーム",
          role: "フロントエンド開発",
          description:
            "ReactとTailwind CSSを使い、画面の大きさに合わせて表示が変わるブラウザゲームを開発しました。UI/UXチームと連携し、GitHubで変更を共有しながら、操作しやすい画面を実装しました。",
          tags: ["React", "Tailwind CSS", "GitHub"],
        },
        {
          name: "現在地から案内するキャンパスマップ（試作）",
          role: "バックエンド開発",
          description:
            "Node.jsとNeo4jを使い、現在地から目的地までの最短経路を検索できるWebアプリを開発しました。経路検索用のCypherクエリを最適化し、Express.jsのAPIとして公開しました。",
          tags: ["Node.js", "Neo4j", "Express.js", "Cypher"],
        },
      ],
    },
    education: {
      title: "学歴・語学",
      kicker: "専攻と語学資格",
      school: "キングモンクット工科大学トンブリー校",
      degree: "学士（工学）・専攻：コンピュータ工学",
      period: "2022年〜2026年",
      languagesTitle: "語学力",
      languages: [
        { name: "英語", detail: "ビジネスレベル（TOEIC 850点）" },
        { name: "日本語", detail: "ビジネスレベル（日本語能力試験 N2）" },
        { name: "ミャンマー語（ビルマ語）", detail: "母語" },
      ],
    },
    contact: {
      title: "お問い合わせ",
      kicker: "連絡先",
      text: "フルスタック開発やバックエンド開発、AIを活用した開発に携われる仕事を探しております。ご関心をお持ちいただけましたら、お気軽にご連絡ください。",
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
