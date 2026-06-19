import { useEffect, useMemo, useRef, useState } from "react";

const copy = {
  zh: {
    nav: {
      home: "首页",
      works: "作品",
      about: "关于我",
      resume: "简历",
      contact: "联系",
    },
    hero: {
      role: "用户体验与交互设计师",
      intro:
        "我是徐少柏，一名关注视觉表达、交互体验与产品逻辑的用户体验设计师。",
      line: "DESIGN FOR PEOPLE / SOLVE REAL PROBLEMS",
      pass: "A PASS TO EXPLORE EXPERIENCE",
      start: "开始查看作品",
      startEn: "Start Visit",
      from: "Baoding",
      note: "设计源于观察，体验试于思考",
    },
    works: {
      eyebrow: "EXHIBITS",
      title: "展出内容",
      viewAll: "VIEW ALL",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "聊聊吧",
      desc: "如果你觉得我们可以聊聊，欢迎给我发消息。求职、合作或作品交流都可以轻松开始。",
      copy: "复制",
      copied: "已复制",
      email: "邮箱",
      wechat: "微信",
      phone: "手机号",
      note: "一张看完展后可以带走的联系票",
    },
    about: {
      cardTitle: "关于我",
      cardDesc: "一些关于我如何观察、思考与设计的线索。",
      title: "关于我",
      desc:
        "我关注产品如何被理解、被使用，也关注界面如何在第一眼建立信任与兴趣。希望把复杂问题整理成清晰路径，再用有温度的视觉语言表达出来。",
      photo: "照片位置",
      mapTitle: "设计师能力地图",
      mapDesc: "视觉表达、交互结构、产品判断与叙事呈现之间的组合能力。",
    },
    resume: {
      cardTitle: "在线简历",
      cardDesc: "清晰阅读我的学习路径、项目经历与能力结构。",
      title: "在线简历",
      desc: "偏能力介绍与经历概览，后续可以替换为正式内容并补充 PDF。",
      download: "下载 PDF 简历",
    },
    projectDetail: {
      catalogue: "项目目录",
      close: "返回上一级",
      coverLabel: "PROJECT FILE",
      imagePlaceholder: "项目截图占位",
      sections: [
        {
          id: "overview",
          title: "项目概览",
          text: "这里会放项目背景、目标用户、设计周期、项目范围和最终输出。当前先用占位内容搭好阅读节奏，后续可以替换成真实 case 内容。",
        },
        {
          id: "role",
          title: "我的职责",
          text: "这里会说明你在项目中的角色、负责模块、协作对象和关键贡献，让查看者快速理解你的参与深度。",
        },
        {
          id: "problem",
          title: "核心问题",
          text: "这里会提炼项目中最重要的体验问题、业务问题或用户痛点，体现你发现问题和定义问题的能力。",
        },
        {
          id: "strategy",
          title: "设计策略",
          text: "这里会呈现从问题到方案的推导过程，包括信息架构、用户路径、交互策略和设计原则。",
        },
        {
          id: "solution",
          title: "关键方案",
          text: "这里会展示关键页面、流程、交互细节和视觉系统，是后续放项目截图的主要区域。",
        },
        {
          id: "value",
          title: "项目价值",
          text: "这里会补充项目带来的体验价值、效率提升、用户反馈或可量化结果，帮助作品从视觉走向结果。",
        },
        {
          id: "reflection",
          title: "复盘总结",
          text: "这里会写设计判断、取舍、限制条件和后续优化方向，体现你有逻辑、有反思的设计能力。",
        },
      ],
    },
    back: "返回上一级",
    preparing: "项目内容整理中",
  },
  en: {
    nav: {
      home: "Home",
      works: "Works",
      about: "About",
      resume: "Resume",
      contact: "Contact",
    },
    hero: {
      role: "UX & Interaction Designer",
      intro:
        "I am XU Shaobo, a UX designer focused on visual expression, interaction experience, and product logic.",
      line: "DESIGN FOR PEOPLE / SOLVE REAL PROBLEMS",
      pass: "A PASS TO EXPLORE EXPERIENCE",
      start: "Start Visit",
      startEn: "Portfolio",
      from: "Baoding",
      note: "Observation shapes design. Thinking tests experience.",
    },
    works: {
      eyebrow: "EXHIBITS",
      title: "Exhibited Contents",
      viewAll: "VIEW ALL",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Let's chat",
      desc: "If it feels worth a conversation, feel free to reach out. I am open to job talks, collaboration, and portfolio conversations.",
      copy: "Copy",
      copied: "Copied",
      email: "Email",
      wechat: "WeChat",
      phone: "Phone",
      note: "A small contact ticket to take away",
    },
    about: {
      cardTitle: "About Me",
      cardDesc: "How I observe, think, and design.",
      title: "About Me",
      desc:
        "I care about how products are understood and used, and how interfaces build trust and curiosity at first glance. I turn complex problems into clear paths, then express them through calm and tactile visuals.",
      photo: "Photo Slot",
      mapTitle: "Designer Capability Map",
      mapDesc:
        "A practical mix of visual expression, interaction structure, product judgement, and storytelling.",
    },
    resume: {
      cardTitle: "Resume",
      cardDesc: "A readable overview of education, projects, internships, and awards.",
      title: "Online Resume",
      desc: "A concise capability and experience overview. Formal content and PDF can be added later.",
      download: "Download PDF",
    },
    projectDetail: {
      catalogue: "Catalogue",
      close: "Back",
      coverLabel: "PROJECT FILE",
      imagePlaceholder: "Project image placeholder",
      sections: [
        {
          id: "overview",
          title: "Project Overview",
          text: "This section will cover background, users, timeline, scope, and deliverables. It currently holds the reading rhythm for the final case content.",
        },
        {
          id: "role",
          title: "My Role",
          text: "This section will describe your responsibilities, ownership, collaborators, and key contributions.",
        },
        {
          id: "problem",
          title: "Core Problem",
          text: "This section will extract the main user, product, or business problem and show your ability to define the brief.",
        },
        {
          id: "strategy",
          title: "Design Strategy",
          text: "This section will show how you moved from problem to design direction through structure, flows, and principles.",
        },
        {
          id: "solution",
          title: "Key Solution",
          text: "This section will present key screens, interaction details, and visual systems with later project screenshots.",
        },
        {
          id: "value",
          title: "Project Value",
          text: "This section will include experience value, efficiency gains, feedback, or measurable results.",
        },
        {
          id: "reflection",
          title: "Reflection",
          text: "This section will include judgement, tradeoffs, constraints, and next steps.",
        },
      ],
    },
    back: "Back",
    preparing: "Content in progress",
  },
};

const projectCases = [
  {
    id: "social-app",
    number: "01",
    tone: "sage",
    tilt: -2.1,
    image: "/assets/cover-social.png",
    zh: {
      label: "C 端社交 APP",
      title: "兴趣社交产品体验重构",
      desc: "围绕发现、判断、互动、承接链路，优化用户从兴趣到关系建立的体验。",
    },
    en: {
      label: "Consumer Social App",
      title: "Interest Social Experience Redesign",
      desc: "Redesigning the path from discovery to judgement, interaction, and relationship building.",
    },
  },
  {
    id: "bside-product",
    number: "02",
    tone: "butter",
    tilt: 1.8,
    image: "/assets/cover-bside.png",
    zh: {
      label: "B 端产品",
      title: "业务系统体验设计",
      desc: "以任务效率和信息层级为核心，梳理业务流程、操作路径与关键页面。",
    },
    en: {
      label: "B2B Product",
      title: "Business System Experience Design",
      desc: "Clarifying workflows, task paths, and page hierarchy for operational efficiency.",
    },
  },
  {
    id: "website-redesign",
    number: "03",
    tone: "rose",
    tilt: -1.7,
    image: "/assets/cover-redesign.png",
    zh: {
      label: "网站改版",
      title: "视觉改版与页面叙事",
      desc: "通过版式、视觉节奏和信息组织，提升网站第一眼的识别度和审美表达。",
    },
    en: {
      label: "Website Redesign",
      title: "Visual Redesign & Page Narrative",
      desc: "Improving first impression and visual storytelling through layout and information rhythm.",
    },
  },
  {
    id: "coming-soon",
    number: "04",
    tone: "sky",
    tilt: 2.3,
    image: "/assets/cover-coming-soon.png",
    zh: {
      label: "即将上线",
      title: "更多项目整理中",
      desc: "更多关于 AI、交互与服务体验的项目正在准备中。",
    },
    en: {
      label: "Coming Soon",
      title: "More Projects in Progress",
      desc: "More projects around AI, interaction, and service experience are being prepared.",
    },
  },
];

const resumeSections = [
  {
    zhTitle: "关于我",
    enTitle: "About",
    zhText:
      "用户体验与交互设计方向，关注视觉表现、体验结构、产品逻辑和清晰叙事。",
    enText:
      "UX and interaction design direction, with focus on visual expression, experience structure, product logic, and clear storytelling.",
  },
  {
    zhTitle: "教育经历",
    enTitle: "Education",
    zhText: "教育经历内容整理中，后续可替换为学校、专业、时间与核心课程。",
    enText:
      "Education details are in progress and can be replaced with school, major, timeline, and courses.",
  },
  {
    zhTitle: "项目经历",
    enTitle: "Projects",
    zhText: "C 端社交 APP、B 端产品、网站视觉改版为当前主要项目。",
    enText:
      "Current key projects include a consumer social app, a B2B product, and a website redesign.",
  },
  {
    zhTitle: "实习经历",
    enTitle: "Internship",
    zhText: "实习经历内容整理中，后续可补充岗位、职责、成果和协作方式。",
    enText:
      "Internship details are in progress and can include role, responsibilities, outcomes, and collaboration.",
  },
  {
    zhTitle: "获奖经历",
    enTitle: "Awards",
    zhText: "获奖经历内容整理中，后续可补充奖项、时间、项目与说明。",
    enText:
      "Award details are in progress and can include award name, time, project, and notes.",
  },
];

function useHashRoute() {
  const getRoute = () => window.location.hash.replace(/^#/, "") || "/";
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return route;
}

function useRevealOnScroll(route) {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!nodes.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px 18% 0px", threshold: 0.05 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [route]);
}

function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const updateActive = () => {
      const anchor = Math.min(220, window.innerHeight * 0.22);
      const current =
        sectionIds
          .map((id) => {
            const node = document.getElementById(id);
            if (!node) return null;
            return { id, top: node.getBoundingClientRect().top };
          })
          .filter(Boolean)
          .reduce((active, item) => {
            if (item.top <= anchor) return item;
            return active;
          }, null)?.id || sectionIds[0];

      setActiveId(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [sectionIds]);

  return [activeId, setActiveId];
}

function App() {
  const route = useHashRoute();
  const [language, setLanguage] = useState("zh");
  const [loaded, setLoaded] = useState(false);
  const [routeChanging, setRouteChanging] = useState(false);
  const t = copy[language];

  useRevealOnScroll(route);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoaded(true), 80);
    return () => window.clearTimeout(timer);
  }, []);

  const go = (target) => {
    setRouteChanging(true);
    window.setTimeout(() => {
      window.location.hash = target === "/" ? "#/" : `#${target}`;
      window.scrollTo({ top: 0, behavior: "auto" });
      window.setTimeout(() => setRouteChanging(false), 300);
    }, 120);
  };

  const goHomeSection = (sectionId) => {
    const scrollToSection = () => {
      const node = document.getElementById(sectionId);
      if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    if (route !== "/") {
      setRouteChanging(true);
      window.location.hash = "#/";
      window.setTimeout(() => {
        scrollToSection();
        setRouteChanging(false);
      }, 260);
    } else {
      scrollToSection();
    }
  };

  const page = useMemo(() => {
    if (route.startsWith("/project/")) {
      const id = route.split("/").pop();
      const project = projectCases.find((item) => item.id === id);
      return (
        <ProjectPage
          language={language}
          project={project}
          t={t}
          goHomeSection={goHomeSection}
        />
      );
    }

    if (route === "/about") {
      return <AboutPage language={language} t={t} go={go} />;
    }

    if (route === "/resume") {
      return <ResumePage language={language} t={t} go={go} />;
    }

    return (
      <HomePage
        language={language}
        t={t}
        go={go}
        goHomeSection={goHomeSection}
      />
    );
  }, [route, language, t]);

  return (
    <div
      className={`site-shell ${loaded ? "is-loaded" : ""} ${
        routeChanging ? "is-route-changing" : ""
      } ${route.startsWith("/project/") ? "is-project-open" : ""}`}
    >
      <Topbar
        language={language}
        setLanguage={setLanguage}
        t={t}
        go={go}
        goHomeSection={goHomeSection}
        activeRoute={route}
      />
      <main>{page}</main>
    </div>
  );
}

function Topbar({ language, setLanguage, t, go, goHomeSection, activeRoute }) {
  const navItems = [
    { label: t.nav.home, action: () => go("/"), active: activeRoute === "/" },
    { label: t.nav.works, action: () => goHomeSection("works"), active: false },
    { label: t.nav.about, action: () => go("/about"), active: activeRoute === "/about" },
    {
      label: t.nav.resume,
      action: () => go("/resume"),
      active: activeRoute === "/resume",
    },
    { label: t.nav.contact, action: () => goHomeSection("contact"), active: false },
  ];

  return (
    <header className="topbar" aria-label="Primary navigation">
      <button className="brand-lockup" type="button" onClick={() => go("/")}>
        <span>XU SHAOBO</span>
        <i />
        <small>{t.hero.role}</small>
      </button>
      <nav className="site-nav">
        {navItems.map((item) => (
          <button
            type="button"
            className={item.active ? "is-active" : ""}
            key={item.label}
            onClick={item.action}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <button
        className="lang-toggle"
        type="button"
        onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
      >
        <span className={language === "zh" ? "is-active" : ""}>中</span>
        <b>/</b>
        <span className={language === "en" ? "is-active" : ""}>EN</span>
      </button>
    </header>
  );
}

function HomePage({ language, t, go, goHomeSection }) {
  return (
    <>
      <HeroSection language={language} t={t} goHomeSection={goHomeSection} />
      <ExhibitsSection language={language} t={t} go={go} />
      <ContactSection t={t} />
    </>
  );
}

function HeroSection({ language, t, goHomeSection }) {
  const [stubTorn, setStubTorn] = useState(false);

  const startVisit = () => {
    if (!stubTorn) {
      setStubTorn(true);
      window.setTimeout(() => goHomeSection("works"), 1080);
      return;
    }

    goHomeSection("works");
  };

  return (
    <section className="hero-section" id="home">
      <div className={`hero-ticket ${stubTorn ? "is-stub-torn" : ""}`}>
        <div className="under-card" aria-hidden="true">
          <img src="/assets/museum-plan.svg" alt="" />
          <span>{t.hero.note}</span>
        </div>

        <div className="ticket-main">
          <div className="ticket-mark ticket-mark-left">+</div>
          <div className="ticket-mark ticket-mark-bottom">+</div>
          <div className="ticket-topline">
            <span>{t.hero.line}</span>
            <i />
            <span>{t.hero.pass}</span>
          </div>

          <div className="ticket-copy">
            <h1>{language === "zh" ? "徐少柏" : "XU Shaobo"}</h1>
            <p className="role-line">{t.hero.role}</p>
            <p className="intro-line">{t.hero.intro}</p>
          </div>

          <div className="paper-stickers" aria-label="Design tags">
            <span className="sticker sticker-sage">UX DESIGN</span>
            <span className="sticker sticker-mustard">INTERACTION</span>
          </div>

          <div className="ticket-meta">
            <span>
              <small>PASS NO.</small>
              XSB 0526 1140
            </span>
            <span>
              <small>NAME</small>
              XU Shaobo
            </span>
            <span>
              <small>FROM</small>
              {t.hero.from}
            </span>
            <span>
              <small>DATE</small>
              2026 / 06 / 19
            </span>
          </div>
        </div>

        <button
          className="ticket-stub"
          type="button"
          onClick={startVisit}
          aria-pressed={stubTorn}
          aria-label={t.hero.start}
        >
          <span className="stub-ring">WELCOME TO MY PORTFOLIO</span>
          <span className="stub-symbol">▾</span>
          <strong>{t.hero.start}</strong>
          <small>{t.hero.startEn}</small>
          <span className="stub-barcode" aria-hidden="true" />
          <span className="stub-caption">ENJOY THE EXPERIENCE</span>
          <span className="tear-thread" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

function ExhibitsSection({ language, t, go }) {
  const items = [
    {
      id: "about",
      number: "A",
      tone: "mint",
      tilt: -1.5,
      kind: "about",
      layout: "compact",
      title: t.about.cardTitle,
      desc: t.about.cardDesc,
      label: language === "zh" ? "个人介绍" : "Profile",
      action: () => go("/about"),
    },
    {
      id: "resume",
      number: "R",
      tone: "lavender",
      tilt: 1.4,
      kind: "resume",
      layout: "compact",
      title: t.resume.cardTitle,
      desc: t.resume.cardDesc,
      label: language === "zh" ? "阅读简历" : "Resume",
      action: () => go("/resume"),
    },
    ...projectCases.map((project) => ({
      ...project,
      kind: "project",
      layout:
        project.id === "social-app" || project.id === "bside-product"
          ? "feature"
          : "standard",
      title: project[language].title,
      desc: project[language].desc,
      label: project[language].label,
      action: () => go(`/project/${project.id}`),
    })),
  ];

  return (
    <section className="works-section" id="works">
      <div className="section-heading" data-reveal>
        <div>
          <span>{t.works.eyebrow}</span>
          <h2>{t.works.title}</h2>
        </div>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          {t.works.viewAll}
          <i />
        </button>
      </div>

      <div className="exhibit-grid" aria-label={t.works.title}>
        {items.map((item, index) => (
          <ExhibitCard item={item} index={index} key={item.id} />
        ))}
      </div>
    </section>
  );
}

function ExhibitCard({ item, index }) {
  return (
    <button
      className={`exhibit-card tone-${item.tone} card-${item.kind} layout-${item.layout}`}
      style={{ "--tilt": `${item.tilt}deg`, "--delay": `${index * 105}ms` }}
      type="button"
      onClick={item.action}
      data-reveal
    >
      <span className="card-token">{item.label}</span>
      <span className="card-arrow" aria-hidden="true">
        ↗
      </span>

      <CardVisual item={item} />

      <span className="card-copy">
        <strong>{item.title}</strong>
        <small>{item.desc}</small>
      </span>
      <span className="card-number">{item.number}</span>
    </button>
  );
}

function CardVisual({ item }) {
  if (item.kind === "project") {
    return (
      <span className="card-visual image-visual">
        <img src={item.image} alt="" />
      </span>
    );
  }

  if (item.kind === "resume") {
    return (
      <span className="card-visual resume-visual" aria-hidden="true">
        <i />
        <i />
        <i />
        <b />
      </span>
    );
  }

  return (
    <span className="card-visual about-visual" aria-hidden="true">
      <img src="/assets/profile-placeholder.png" alt="" />
      <b />
    </span>
  );
}

function ContactSection({ t }) {
  const [copied, setCopied] = useState("");
  const copyTimer = useRef(null);
  const contacts = [
    { label: t.contact.email, value: "3121353738@qq.com" },
    { label: t.contact.wechat, value: "15930186021" },
    { label: t.contact.phone, value: "15930186021" },
  ];

  const fallbackCopy = (value) => {
    const input = document.createElement("textarea");
    input.value = value;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  };

  const copyValue = async (value) => {
    window.clearTimeout(copyTimer.current);
    setCopied(value);

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
      } else {
        fallbackCopy(value);
      }
    } catch {
      fallbackCopy(value);
    }

    copyTimer.current = window.setTimeout(() => setCopied(""), 1500);
  };

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-card" data-reveal>
        <span className="contact-card-layer" aria-hidden="true" />
        <span className="contact-ticket-code" aria-hidden="true">CONTACT PASS / XSB 1593</span>
        <span className="contact-ticket-stamp" aria-hidden="true">OPEN TO TALK</span>
        <span className="contact-ticket-cut contact-ticket-cut-left" aria-hidden="true" />
        <span className="contact-ticket-cut contact-ticket-cut-right" aria-hidden="true" />
        <div className="contact-intro">
          <span>{t.contact.eyebrow}</span>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.desc}</p>
          <small>{t.contact.note}</small>
        </div>
        <div className="contact-rows">
          {contacts.map((item) => (
            <button
              type="button"
              className="contact-row"
              key={item.label}
              onClick={() => copyValue(item.value)}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <small className={copied === item.value ? "is-copied" : ""} aria-live="polite">
                {copied === item.value ? t.contact.copied : t.contact.copy}
              </small>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackButton({ label, onClick }) {
  return (
    <button className="back-button" type="button" onClick={onClick}>
      <span className="back-mark" aria-hidden="true">←</span>
      <span className="back-copy">{label}</span>
      <small aria-hidden="true">RETURN</small>
    </button>
  );
}

function AboutPage({ language, t, go }) {
  const abilities =
    language === "zh"
      ? ["视觉表现", "交互结构", "产品逻辑", "信息叙事"]
      : ["Visual craft", "Interaction", "Product logic", "Narrative"];

  return (
    <section className="page-shell about-page">
      <BackButton label={t.back} onClick={() => go("/")} />
      <div className="about-hero-page" data-reveal>
        <article className="about-intro-card">
          <span>ABOUT / XU SHAOBO</span>
          <h1>{t.about.title}</h1>
          <p>{t.about.desc}</p>
        </article>
        <aside className="photo-card">
          <img src="/assets/profile-placeholder.png" alt="" />
          <span>{t.about.photo}</span>
        </aside>
      </div>

      <div className="ability-paper" data-reveal>
        <div>
          <span>MAP / 04</span>
          <h2>{t.about.mapTitle}</h2>
          <p>{t.about.mapDesc}</p>
        </div>
        <div className="ability-map">
          {abilities.map((ability, index) => (
            <span style={{ "--delay": `${index * 90}ms` }} key={ability}>
              {ability}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResumePage({ language, t, go }) {
  return (
    <section className="page-shell resume-page">
      <BackButton label={t.back} onClick={() => go("/")} />
      <div className="resume-reading-card" data-reveal>
        <div className="resume-header">
          <span>RESUME / XU SHAOBO</span>
          <h1>{t.resume.title}</h1>
          <p>{t.resume.desc}</p>
          <button type="button">{t.resume.download}</button>
        </div>

        <div className="resume-list">
          {resumeSections.map((section, index) => (
            <article key={section.zhTitle} data-reveal style={{ "--delay": `${index * 90}ms` }}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <div>
                <h2>{language === "zh" ? section.zhTitle : section.enTitle}</h2>
                <p>{language === "zh" ? section.zhText : section.enText}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectPage({ language, project, t, goHomeSection }) {
  const sections = useMemo(() => t.projectDetail.sections, [t]);
  const sectionIds = useMemo(() => sections.map((section) => section.id), [sections]);
  const [observedActiveId] = useActiveSection(sectionIds);
  const [pinnedActiveId, setPinnedActiveId] = useState("");
  const activeId = pinnedActiveId || observedActiveId;

  if (!project) {
    return (
      <section className="page-shell project-page">
        <BackButton label={t.back} onClick={() => goHomeSection("works")} />
        <div className="project-detail-card">
          <h1>{t.preparing}</h1>
        </div>
      </section>
    );
  }

  const data = project[language];
  const isComingSoon = project.id === "coming-soon";
  const developingLabel = language === "zh" ? "开发中" : "In development";

  const scrollToProjectSection = (id) => {
    const node = document.getElementById(id);
    setPinnedActiveId(id);
    if (node) node.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => setPinnedActiveId(""), 1600);
  };

  return (
    <section className="project-archive page-shell">
      <BackButton label={t.projectDetail.close} onClick={() => goHomeSection("works")} />

      <div className={`archive-layout ${isComingSoon ? "archive-layout-soon" : ""}`}>
        {!isComingSoon && (
          <aside className="archive-toc" aria-label={t.projectDetail.catalogue}>
            <span>{t.projectDetail.catalogue}</span>
            <strong>{data.title}</strong>
            <nav>
              {sections.map((section, index) => (
                <button
                  className={activeId === section.id ? "is-active" : ""}
                  key={section.id}
                  type="button"
                  onClick={() => scrollToProjectSection(section.id)}
                >
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  {section.title}
                </button>
              ))}
            </nav>
          </aside>
        )}

        <article className={`archive-document tone-${project.tone} ${isComingSoon ? "archive-document-soon" : ""}`}>
          <header className="archive-cover">
            <div className="archive-cover-copy">
              <span>{t.projectDetail.coverLabel}</span>
              <h1>{data.title}</h1>
              <p>{data.desc}</p>
              <dl>
                <div>
                  <dt>TYPE</dt>
                  <dd>{data.label}</dd>
                </div>
                <div>
                  <dt>NO.</dt>
                  <dd>{project.number}</dd>
                </div>
                <div>
                  <dt>ROLE</dt>
                  <dd>UX / Interaction</dd>
                </div>
              </dl>
            </div>
            <div className={`archive-cover-image ${isComingSoon ? "is-developing" : ""}`}>
              <span>{isComingSoon ? developingLabel : t.projectDetail.imagePlaceholder}</span>
            </div>
          </header>

          {!isComingSoon && (
            <div className="archive-chapters">
              {sections.map((section, index) => (
                <section
                  className="archive-chapter"
                  id={section.id}
                  key={section.id}
                  data-reveal
                  style={{ "--delay": `${index * 70}ms` }}
                >
                  <div className="chapter-heading">
                    <span className="chapter-number">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <small>PROJECT SECTION</small>
                      <h2>{section.title}</h2>
                    </div>
                  </div>
                  <p className="chapter-lede">{section.text}</p>
                  <div className="chapter-image-slot">
                    <span>{t.projectDetail.imagePlaceholder}</span>
                  </div>
                </section>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export { App };
