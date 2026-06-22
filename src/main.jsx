import React, { useEffect, useId, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowLeft, ArrowUpRight, Copy, Globe, Lightbulb, Mail, MessageCircle, Moon, Phone, Sun } from 'lucide-react';
import './styles.css';

const copy = {
  zh: {
    nav: ['作品', '关于', '简历', '联系'],
    heroName: '徐少柏 / Xushaobo',
    heroIntro:
      'Hi，我是徐少柏，一名拥有交互设计背景的产品体验设计师，擅长结合产品思维、vibe coding工作流与高保真原型，将复杂需求快速转化为清晰、可落地的交互体验。',
    heroCta: '查看我的作品',
    scroll: 'SCROLL',
    selected: 'Selected',
    workTitle: 'PROJECTS',
    workHint: '点击卡片查看项目',
    role: 'PRODUCT / UX DESIGNER',
    resumeBack: '返回首页',
    resumeTitle: '简历',
    resumeTag: 'PRODUCT / UX DESIGNER',
    resumeSummary:
      '我是一名关注产品体验、交互结构与界面表达的设计师，擅长将产品思维、vibe coding 工作流与高保真原型结合起来，把复杂需求转化为清晰、可落地的设计方案。',
    resumeProfile: [
      { label: '姓名', value: '徐少柏 / Xushaobo' },
      { label: '方向', value: '用户体验设计 / UIUX 设计' },
      { label: '目标', value: '互联网产品公司' },
      { label: '联系方式', value: '3121353738@qq.com / 15930186021' },
    ],
    resumeSections: [
      {
        title: '核心能力',
        items: [
          '从产品目标与用户路径出发，梳理复杂需求并完成信息结构与交互方案设计。',
          '能结合高保真原型与 vibe coding 工作流，快速验证概念、推进协作与设计落地。',
          '关注 C 端体验感知与 B 端效率场景，在视觉表达与可用性之间找到平衡。',
        ],
      },
      {
        title: '项目经历',
        items: [
          '不夜星球社交 APP 产品体验设计优化：围绕用户核心路径，优化产品结构与社交互动细节。',
          '文件生成后台工具系统设计：从业务流程出发，重构信息架构、操作流程与关键页面体验。',
          '网站视觉优化改版设计：强化信息层级与视觉一致性，提升品牌展示与用户感知。',
        ],
      },
      {
        title: '技能与工具',
        items: [
          '产品思维、用户体验设计、界面设计、信息架构、交互原型。',
          'Figma、原型演示、设计系统梳理、视觉规范整理。',
          'ChatGPT、Claude、vibe coding、快速前端验证与体验演示。',
        ],
      },
    ],
    aboutEyebrow: 'ABOUT',
    aboutTitle: '关于我',
    aboutLead:
      '我是徐少柏，一名关注产品体验、交互结构与界面表达的设计师。习惯把产品思维、vibe coding 工作流与高保真原型结合起来，把复杂需求梳理成可落地、可验证的设计方案。',
    aboutMeta: ['交互设计背景', 'B端与C端项目经验', '产品体验设计师'],
    cards: [
      {
        title: '不夜星球社交APP产品体验设计优化',
        subtitle: '围绕用户核心路径，优化产品结构与社交互动细节',
        meta: 'APP / UX / 产品设计',
        image: '/assets/cover-social-app.png',
        href: '/projects/social-app',
      },
      {
        title: '文件生成后台工具系统设计',
        subtitle: '从业务流程出发，重构信息架构与操作流程',
        meta: 'B端系统 / UX / 界面设计',
        image: '/assets/cover-backend-tool.png',
        href: '/projects/file-tool',
      },
      {
        title: '网站视觉优化改版设计',
        subtitle: '强化信息层级与视觉一致性，提升品牌展示和用户感知',
        meta: '网页 / 视觉设计 / UI设计',
        image: '/assets/cover-web-redesign.png',
        href: '/projects/web-redesign',
      },
      {
        title: '作品开发中',
        subtitle: '更多项目正在整理与完善，保持更新',
        meta: 'More works / 敬请期待',
        image: '/assets/cover-wip.png',
        href: '/projects/in-progress',
        muted: true,
      },
    ],
    contactTitle: '期待与你合作',
    contactLead: '如果你正在寻找一名关注体验、结构与落地细节的 UIUX 设计师，我们可以聊聊。',
    contactItems: [
      { label: 'Email', value: '3121353738@qq.com', href: 'mailto:3121353738@qq.com' },
      { label: 'WeChat', value: '15930186021', href: '#' },
      { label: 'Phone', value: '15930186021', href: 'tel:15930186021' },
    ],
    copyAction: '复制',
    marquee: 'LET US BUILD SOMETHING GREAT TOGETHER',
  },
  en: {
    nav: ['Work', 'About', 'Resume', 'Contact'],
    heroName: 'Xu Shaobo / Xushaobo',
    heroIntro:
      'Designing user experiences and interfaces for internet products, with attention to user needs, product structure, and every interaction detail.',
    heroCta: 'View selected work',
    scroll: 'SCROLL',
    selected: 'Selected',
    workTitle: 'PROJECTS',
    workHint: 'Click cards to view case studies',
    role: 'PRODUCT / UX DESIGNER',
    resumeBack: 'Back to home',
    resumeTitle: 'Resume',
    resumeTag: 'PRODUCT / UX DESIGNER',
    resumeSummary:
      'I am a product experience designer focused on interaction structure, interface craft, and clear product thinking. I like combining vibe coding workflows with high-fidelity prototyping to turn complex requirements into concrete, testable solutions.',
    resumeProfile: [
      { label: 'Name', value: 'Xu Shaobo / Xushaobo' },
      { label: 'Focus', value: 'Product Experience Design / UIUX Design' },
      { label: 'Target', value: 'Internet product companies' },
      { label: 'Contact', value: '3121353738@qq.com / 15930186021' },
    ],
    resumeSections: [
      {
        title: 'Core Strengths',
        items: [
          'Translate complex product goals and user paths into clear structures, flows, and interface solutions.',
          'Use high-fidelity prototyping and vibe coding workflows to validate ideas quickly and support collaboration.',
          'Balance emotional clarity for consumer products with efficiency and structure for B2B tools.',
        ],
      },
      {
        title: 'Project Highlights',
        items: [
          'Sleepless Planet social app optimization: refined core user journeys, product structure, and social interaction details.',
          'File generation back-office tool system: rebuilt information architecture, workflows, and operational efficiency.',
          'Website visual redesign: improved hierarchy, consistency, and brand perception across key pages.',
        ],
      },
      {
        title: 'Skills & Tools',
        items: [
          'Product thinking, UX design, UI design, information architecture, and interaction prototyping.',
          'Figma, high-fidelity prototyping, design-system organization, and visual guideline building.',
          'ChatGPT, Claude, vibe coding, rapid front-end validation, and interactive concept testing.',
        ],
      },
    ],
    aboutEyebrow: 'ABOUT',
    aboutTitle: 'About Me',
    aboutLead:
      'I am Xu Shaobo, a product experience designer focused on product thinking, interaction structure, and interface craft. I like combining vibe coding workflows with high-fidelity prototyping to turn complex requirements into clear, testable design solutions.',
    aboutMeta: ['Interaction design background', 'B2B and consumer product experience', 'Product UX designer'],
    cards: [
      {
        title: 'Sleepless Planet Social App Experience Optimization',
        subtitle: 'Optimizing core user paths, product structure, and social interaction details.',
        meta: 'App / UX / Product Design',
        image: '/assets/cover-social-app.png',
        href: '/projects/social-app',
      },
      {
        title: 'File Generation Back-office Tool System Design',
        subtitle: 'Restructuring information architecture and workflows from business processes.',
        meta: 'B2B System / UX / UI Design',
        image: '/assets/cover-backend-tool.png',
        href: '/projects/file-tool',
      },
      {
        title: 'Website Visual Optimization Redesign',
        subtitle: 'Improving information hierarchy, visual consistency, and brand perception.',
        meta: 'Website / Visual Design / UI',
        image: '/assets/cover-web-redesign.png',
        href: '/projects/web-redesign',
      },
      {
        title: 'Works in Development',
        subtitle: 'More projects are being organized and refined for publication.',
        meta: 'More works / Coming soon',
        image: '/assets/cover-wip.png',
        href: '/projects/in-progress',
        muted: true,
      },
    ],
    contactTitle: 'Let us collaborate',
    contactLead:
      'If you are looking for a UIUX designer who cares about experience, structure, and implementation details, let us talk.',
    contactItems: [
      { label: 'Email', value: '3121353738@qq.com', href: 'mailto:3121353738@qq.com' },
      { label: 'WeChat', value: '15930186021', href: '#' },
      { label: 'Phone', value: '15930186021', href: 'tel:15930186021' },
    ],
    copyAction: 'Copy',
    marquee: 'LET US BUILD SOMETHING GREAT TOGETHER',
  },
};

const projectPageContent = {
  'social-app': {
    zh: {
      eyebrow: 'C 端社交产品 / 产品体验设计',
      title: '不夜星球社交 APP 产品体验设计优化',
      intro:
        '围绕社交产品的核心使用路径，对首页浏览、关系建立、内容互动与留存体验进行重新梳理。当前先完整复刻案例页结构，后续再逐步替换为真实项目过程与成果。',
      cta: '查看完整原型',
      tags: ['UI/UX', '用户体验', '社交产品', '前端原型'],
      summary: [
        { label: '角色', value: '产品体验设计' },
        { label: '周期', value: '待补充' },
        { label: '技能 / 工具', value: 'Figma / 原型 / 前端验证' },
      ],
      sections: [
        {
          title: '项目概览',
          text:
            '不夜星球是一款以兴趣破冰与轻社交连接为核心的 C 端产品。项目的目标，是让用户在浏览、表达与建立连接的过程中更快进入状态，而不是在复杂入口和冗长路径里消耗耐心。',
          noteLabel: '项目目标',
          noteText: '将“看见内容”顺畅过渡到“发起互动”和“建立连接”，让新用户更容易完成第一次有效互动。',
          bullets: ['项目背景待补充', '目标用户待补充', '业务目标待补充'],
        },
        {
          title: '我的角色',
          text:
            '在这个项目中，我主要负责产品体验梳理、交互方案设计、关键页面高保真输出，以及用前端原型辅助方案验证与沟通。',
          noteLabel: '职责范围',
          noteText: '负责体验诊断、流程重构、页面策略与核心界面呈现，后续可继续补充与产品、开发的协作方式。',
          bullets: ['体验问题梳理', '交互方案设计', '高保真界面输出'],
        },
        {
          title: '用户研究',
          text:
            '这一部分后续用于补充用户访谈、行为观察、竞品参考或数据分析。目前先保留与参考站相同的结构，用于承接研究洞察。',
          noteLabel: '研究方式',
          noteText: '可补充访谈、可用性走查、路径分析与埋点观察等内容。',
          bullets: ['研究对象待补充', '研究方法待补充', '关键结论待补充'],
        },
        {
          title: '设计洞察',
          text:
            '基于前期观察，这一页适合提炼为几个影响体验效率和情绪感受的核心问题，例如路径分散、反馈模糊、互动入口不聚焦，以及新用户不知道下一步该做什么。',
          noteLabel: '核心洞察',
          noteText: '用户需要的不是更多信息，而是更清晰的下一步动作提示与更自然的关系建立路径。',
          bullets: ['关键痛点待补充', '行为模式待补充', '设计切入点待补充'],
        },
        {
          title: '设计策略',
          text:
            '这里后续会放信息结构重组、互动策略、页面层级与视觉节奏的设计思路。当前作为项目详情页骨架，先保留完整章节顺序与展示位。',
          noteLabel: '策略方向',
          noteText: '聚焦“更快理解、更愿互动、更容易连接”三件事，把复杂路径收束成少数关键决策点。',
          bullets: ['结构优化待补充', '交互策略待补充', '视觉语言待补充'],
        },
        {
          title: '最终方案',
          text:
            '最终方案部分适合展示首页、内容流、个人主页、关系建立与互动反馈等关键界面，并串起用户从浏览到建立连接的完整路径。',
          noteLabel: '展示内容',
          noteText: '后续可补充首页改版、卡片设计、互动弹层、个人主页与消息路径等高保真页面。',
          bullets: ['关键界面待补充', '前后对比待补充', '页面说明待补充'],
        },
        {
          title: '可用性测试',
          text:
            '这里用于承接方案验证过程，例如原型走查、关键任务测试、用户反馈和迭代修改记录，帮助案例页形成闭环。',
          noteLabel: '验证方式',
          noteText: '建议后续补充关键任务测试、点击路径验证与定性反馈。',
          bullets: ['测试目标待补充', '测试反馈待补充', '迭代结果待补充'],
        },
        {
          title: '项目反思',
          text:
            '最后一部分用于沉淀你在这个项目中关于产品节奏、社交行为、体验细节与跨团队协作的理解，也方便后续加入结果数据。',
          noteLabel: '复盘方向',
          noteText: '可以从设计价值、沟通方式、节奏控制和后续优化空间几个方向补充。',
          bullets: ['结果数据待补充', '团队协作待补充', '复盘总结待补充'],
        },
      ],
    },
    en: {
      eyebrow: 'Consumer Social / Product Experience Design',
      title: 'Sleepless Planet Social App Experience Optimization',
      intro:
        'This page sets up a complete case-study framework first. Real project background, screens, rationale, and outcomes can be filled in later.',
      summary: [
        { label: 'Type', value: 'Consumer social app' },
        { label: 'Role', value: 'Product experience / Interaction design' },
        { label: 'Timeline', value: 'TBD' },
        { label: 'Partners', value: 'Product / Engineering / Operations' },
      ],
      sections: [
        { title: 'Overview', text: 'Use this section for project background, target users, and business goals.', bullets: ['Background TBD', 'Users TBD', 'Goals TBD'] },
        { title: 'Challenges', text: 'A good place to explain friction points and why the product flow needed redesign.', bullets: ['Pain points TBD', 'Constraints TBD', 'Design angle TBD'] },
        { title: 'Process', text: 'Reserve this block for journey analysis, information architecture, flows, and high-fidelity screens.', bullets: ['Journey analysis', 'Interaction strategy', 'UI refinement'] },
        { title: 'Outcome', text: 'This section can later hold launch results, feedback, and reflections.', bullets: ['Impact TBD', 'Feedback TBD', 'Reflection TBD'] },
      ],
    },
  },
  'file-tool': {
    zh: {
      eyebrow: 'B 端系统 / 工具体验设计',
      title: '文件生成后台工具系统设计',
      intro:
        '围绕文件生成这一高频业务场景，对后台工具的信息架构、任务流程与关键页面进行重构。当前先完整复刻案例页结构，后续再逐步填入真实业务背景和方案细节。',
      cta: '查看完整原型',
      tags: ['B端系统', '工具设计', '体验优化', '流程重构'],
      summary: [
        { label: '角色', value: 'UIUX 设计师' },
        { label: '周期', value: '待补充' },
        { label: '技能 / 工具', value: 'Figma / 业务梳理 / 流程设计' },
      ],
      sections: [
        {
          title: '项目概览',
          text: '这是一个服务于内部业务执行的后台工具，目标是把文件生成流程从零散操作整合成稳定、清晰、可追踪的任务路径。',
          noteLabel: '项目目标',
          noteText: '让复杂的生成任务变得更容易理解、更容易执行，并减少重复沟通成本。',
          bullets: ['业务背景待补充', '使用角色待补充', '系统目标待补充'],
        },
        {
          title: '我的角色',
          text: '我在项目中负责需求理解、使用路径梳理、信息架构重组、页面交互设计和关键界面视觉输出。',
          noteLabel: '职责范围',
          noteText: '后续可在这里补充你如何与业务、产品和研发协同推进。',
          bullets: ['需求拆解', '信息架构设计', '页面交互输出'],
        },
        {
          title: '用户研究',
          text: '这部分适合后续补充业务方访谈、内部角色观察、流程回溯以及原系统使用反馈，帮助案例页解释为什么要做这次重构。',
          noteLabel: '研究方式',
          noteText: '可以放角色访谈、流程走查、协作链路梳理与异常场景分析。',
          bullets: ['研究对象待补充', '使用反馈待补充', '结论待补充'],
        },
        {
          title: '设计洞察',
          text: '这一节用于承接“信息难找、状态不清、步骤冗长、反馈不及时”等问题，概括影响效率的关键因素。',
          noteLabel: '核心洞察',
          noteText: '后台工具的核心不是“页面多”，而是让用户清楚当前状态、下一步动作和结果反馈。',
          bullets: ['流程断点待补充', '效率问题待补充', '协作问题待补充'],
        },
        {
          title: '设计策略',
          text: '这里适合说明你如何通过任务拆分、模块重组、状态设计和表单策略来重构整个生成流程。',
          noteLabel: '策略方向',
          noteText: '优先建立清晰的任务结构、状态反馈和结果确认机制。',
          bullets: ['信息架构优化', '操作流重构', '状态设计待补充'],
        },
        {
          title: '最终方案',
          text: '最终方案部分可放任务列表、配置页、批量处理页、结果页与异常反馈页，形成完整的系统案例展示。',
          noteLabel: '展示内容',
          noteText: '后续可补充列表页、配置页、结果页以及协作流程关键界面。',
          bullets: ['关键页面待补充', '前后对比待补充', '模块说明待补充'],
        },
        {
          title: '可用性测试',
          text: '这里用于说明方案是否经过角色验证、内部走查或任务测试，以及测试后进行了哪些改动。',
          noteLabel: '验证方式',
          noteText: '可继续补充关键任务测试、内部试用和异常流程验证。',
          bullets: ['验证目标待补充', '测试结论待补充', '修改内容待补充'],
        },
        {
          title: '项目反思',
          text: '最后一节可以放设计交付、上线价值、跨团队协作经验，以及你对 B 端效率设计的进一步思考。',
          noteLabel: '复盘方向',
          noteText: '适合沉淀方法论、沟通模式和系统设计经验。',
          bullets: ['项目价值待补充', '协作复盘待补充', '经验总结待补充'],
        },
      ],
    },
    en: {
      eyebrow: 'B2B Tool / System UX Design',
      title: 'File Generation Back-office Tool System Design',
      intro:
        'This page establishes a reusable structure for later business-flow breakdowns, IA redesign, and key interface showcases.',
      summary: [
        { label: 'Type', value: 'B2B back-office tool' },
        { label: 'Role', value: 'UIUX designer' },
        { label: 'Timeline', value: 'TBD' },
        { label: 'Partners', value: 'Business / Product / Engineering' },
      ],
      sections: [
        { title: 'Overview', text: 'For business context, user roles, and system goals.', bullets: ['Context TBD', 'Roles TBD', 'Goals TBD'] },
        { title: 'Current Problems', text: 'Use this to explain workflow inefficiencies and structural issues in the old system.', bullets: ['Flow gaps TBD', 'Efficiency issues TBD', 'Collaboration issues TBD'] },
        { title: 'Design Solution', text: 'A place for IA updates, module redesign, and task-flow improvements.', bullets: ['IA redesign', 'Flow restructure', 'Key screen design'] },
        { title: 'Delivery & Value', text: 'Later this can include deliverables, standards, and impact.', bullets: ['Deliverables TBD', 'Guidelines TBD', 'Impact TBD'] },
      ],
    },
  },
  'web-redesign': {
    zh: {
      eyebrow: '网页改版 / 视觉优化设计',
      title: '网站视觉优化改版设计',
      intro:
        '以品牌表达与浏览效率为目标，对网站视觉语言、信息层级和关键页面进行重新梳理。当前先按参考站复刻详情页结构，后续再补充真实设计过程与改版成果。',
      cta: '查看完整原型',
      tags: ['网页改版', '视觉设计', '品牌体验', '信息层级'],
      summary: [
        { label: '角色', value: 'UI 设计 / 体验优化' },
        { label: '周期', value: '待补充' },
        { label: '技能 / 工具', value: 'Figma / 视觉规范 / 设计系统' },
      ],
      sections: [
        {
          title: '项目概览',
          text: '这是一个围绕品牌展示与信息效率展开的网页改版项目，重点在于建立更一致的视觉表达与更清晰的浏览节奏。',
          noteLabel: '项目目标',
          noteText: '让用户更快理解品牌、看到重点内容，并在页面浏览中获得更稳定的感知体验。',
          bullets: ['品牌背景待补充', '页面范围待补充', '改版目标待补充'],
        },
        {
          title: '我的角色',
          text: '我主要负责原站问题梳理、信息层级规划、视觉方向定义、关键界面设计与页面规范输出。',
          noteLabel: '职责范围',
          noteText: '可以继续补充与品牌方、产品方或开发方的协作方式。',
          bullets: ['信息层级梳理', '视觉方向定义', '关键页面设计'],
        },
        {
          title: '用户研究',
          text: '如果后续项目有用户反馈、浏览数据或竞品观察，这一节可以承接改版前的认知问题和浏览摩擦。',
          noteLabel: '研究方式',
          noteText: '可补充页面热区观察、品牌侧反馈、竞品对比与内容走查。',
          bullets: ['研究方式待补充', '问题发现待补充', '结论待补充'],
        },
        {
          title: '设计洞察',
          text: '这一节适合提炼原网站在信息噪音、模块优先级、视觉统一性和内容可读性上的问题。',
          noteLabel: '核心洞察',
          noteText: '视觉改版不只是换风格，更重要的是让内容结构和品牌表达彼此支撑。',
          bullets: ['视觉问题待补充', '结构问题待补充', '品牌问题待补充'],
        },
        {
          title: '设计策略',
          text: '这里可用于说明版式逻辑、配色、字体层级、组件体系和页面节奏如何被重新定义。',
          noteLabel: '策略方向',
          noteText: '通过统一组件语言和更清晰的层级关系，让页面更有秩序感和品牌辨识度。',
          bullets: ['视觉方向待补充', '信息层级待补充', '组件语言待补充'],
        },
        {
          title: '最终方案',
          text: '最终方案部分适合展示首页、模块重构、品牌区块、详情页或专题页等关键页面设计。',
          noteLabel: '展示内容',
          noteText: '后续可放首页改版、内容区块、导航系统与页面前后对比图。',
          bullets: ['首页方案待补充', '关键模块待补充', '前后对比待补充'],
        },
        {
          title: '可用性测试',
          text: '这里用于放改版后的浏览反馈、可读性验证、团队走查或客户确认过程。',
          noteLabel: '验证方式',
          noteText: '可以从浏览效率、阅读节奏和品牌感知几个角度补充验证结果。',
          bullets: ['验证方式待补充', '反馈待补充', '迭代待补充'],
        },
        {
          title: '项目反思',
          text: '最后一节用于总结改版项目中关于品牌、表达与网页体验之间平衡关系的理解。',
          noteLabel: '复盘方向',
          noteText: '适合沉淀你在网页改版、视觉统一和内容表达上的方法论。',
          bullets: ['结果待补充', '团队反馈待补充', '复盘总结待补充'],
        },
      ],
    },
    en: {
      eyebrow: 'Website Redesign / Visual Optimization',
      title: 'Website Visual Optimization Redesign',
      intro:
        'This page sets up the case-study layout first, leaving room for before/after comparisons, visual strategy, and final page showcases.',
      summary: [
        { label: 'Type', value: 'Website redesign' },
        { label: 'Role', value: 'UI design / Experience optimization' },
        { label: 'Timeline', value: 'TBD' },
        { label: 'Partners', value: 'Brand / Product / Engineering' },
      ],
      sections: [
        { title: 'Overview', text: 'Use this for brand context, site goals, and scope.', bullets: ['Brand context TBD', 'Page scope TBD', 'Goals TBD'] },
        { title: 'Design Strategy', text: 'A place for visual direction, hierarchy, and component language.', bullets: ['Visual direction TBD', 'Hierarchy TBD', 'Component language TBD'] },
        { title: 'Key Pages', text: 'Later this can hold homepage, key module, and before/after comparisons.', bullets: ['Homepage showcase', 'Key modules', 'Before/after TBD'] },
        { title: 'Takeaways', text: 'Use this area for outcomes and reflections.', bullets: ['Impact TBD', 'Feedback TBD', 'Reflection TBD'] },
      ],
    },
  },
  'in-progress': {
    zh: {
      eyebrow: '更多作品 / 整理中',
      title: '作品整理中',
      intro: '这个页面保留为后续新增项目的占位框架，等真实内容整理完成后可以继续扩展。',
      summary: [
        { label: '状态', value: '整理中' },
        { label: '内容', value: '更多项目案例' },
        { label: '更新', value: '持续补充' },
        { label: '备注', value: '敬请期待' },
      ],
      sections: [
        { title: '内容规划', text: '后续会在这里继续补充新的项目案例。', bullets: ['项目一待补充', '项目二待补充', '项目三待补充'] },
      ],
    },
    en: {
      eyebrow: 'More Works / In Progress',
      title: 'Works in Progress',
      intro: 'This page stays as a placeholder for future case studies.',
      summary: [
        { label: 'Status', value: 'In progress' },
        { label: 'Content', value: 'More case studies' },
        { label: 'Update', value: 'Ongoing' },
        { label: 'Note', value: 'Coming soon' },
      ],
      sections: [{ title: 'Planning', text: 'New case studies can be added here later.', bullets: ['Case study TBD', 'Case study TBD', 'Case study TBD'] }],
    },
  },
};

function Loader() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);
  const stickers = [
    { label: 'PORTFOLIO', tone: 'cream' },
    { label: 'UI / UX', tone: 'peach' },
    { label: 'CASE STUDY', tone: 'paper' },
    { label: 'XUSHAOBO', tone: 'ink' },
  ];
  const status =
    count < 28
      ? 'Booting interface assets'
      : count < 56
        ? 'Loading interaction modules'
        : count < 84
          ? 'Rendering visual systems'
          : 'Entering portfolio world';

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCount((value) => {
        if (value >= 100) {
          window.clearInterval(timer);
          window.setTimeout(() => setHidden(true), 420);
          return 100;
        }
        return Math.min(100, value + 4);
      });
    }, 48);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className={`loader ${hidden ? 'loader-hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader-noise" aria-hidden="true" />
      <div className="loader-stage">
        <div className="loader-stickers" aria-hidden="true">
          {stickers.map((sticker, index) => (
            <span
              key={sticker.label}
              className={`loader-sticker loader-sticker-${sticker.tone} ${count >= index * 18 + 8 ? 'is-visible' : ''}`}
            >
              {sticker.label}
            </span>
          ))}
        </div>
        <div className="loader-panel">
          <p className="loader-kicker">LOADING THE PORTFOLIO</p>
          <strong>{count}%</strong>
          <div className="loader-bar" aria-hidden="true">
            <i style={{ width: `${count}%` }} />
          </div>
          <p className="loader-status">{status}</p>
        </div>
      </div>
    </div>
  );
}

function Header({ lang, setLang, t, theme, setTheme }) {
  const pathname = window.location.pathname;
  const onDetailPage = pathname.startsWith('/about') || pathname.startsWith('/resume') || pathname.startsWith('/projects/');
  const navTargets = onDetailPage ? ['/#work', '/about', '/resume', '/#contact'] : ['#work', '/about', '/resume', '#contact'];
  const homeTarget = onDetailPage ? '/' : '#top';

  return (
    <header className="site-header" aria-label="Primary navigation">
      <a className="brand" href={homeTarget} aria-label="Xushaobo home">
        Xushaobo
      </a>
      <nav className="nav-links">
        {t.nav.map((item, index) => (
          <a key={item} href={navTargets[index]}>
            {item}
          </a>
        ))}
      </nav>
      <button
        className="theme-toggle"
        type="button"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      >
        {theme === 'light' ? <Moon size={15} strokeWidth={1.9} /> : <Sun size={15} strokeWidth={1.9} />}
      </button>
      <button
        className="language-toggle"
        type="button"
        onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
        aria-label="Switch language"
      >
        <span className={lang === 'zh' ? 'active' : ''}>中</span>
        <span aria-hidden="true">|</span>
        <span className={lang === 'en' ? 'active' : ''}>EN</span>
      </button>
    </header>
  );
}

function CharacterTitle({ text }) {
  return (
    <span className="character-title" aria-label={text}>
      {text.split('').map((char, index) => (
        <span key={`${char}-${index}`} style={{ '--delay': `${index * 24}ms` }}>
          {char === ' ' ? '\u00a0' : char}
        </span>
      ))}
    </span>
  );
}

function DetailBackLink({ href = '/', label = '返回首页', className = 'detail-back' }) {
  return (
    <a className={className} href={href}>
      <ArrowLeft size={16} strokeWidth={1.8} />
      <span>{label}</span>
    </a>
  );
}

function CircularBadge({ label, onMouseEnter, onMouseMove, onMouseLeave, onClick, isPressed = false }) {
  const repeated = `${label} + UX + UIUX + DESIGNER + `;
  const badgePathId = useId();

  return (
    <div
      className="circle-badge"
      aria-label={label}
      role="button"
      tabIndex={0}
      aria-pressed={isPressed}
      onMouseEnter={onMouseEnter}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          onClick?.();
        }
      }}
    >
      <svg viewBox="0 0 120 120" role="img" aria-hidden="true">
        <defs>
          <path id={badgePathId} d="M60 60 m -42 0 a 42 42 0 1 1 84 0 a 42 42 0 1 1 -84 0" />
        </defs>
        <text>
          <textPath href={`#${badgePathId}`}>{repeated}</textPath>
        </text>
      </svg>
      <Globe size={32} strokeWidth={1.8} />
    </div>
  );
}

function Hero({ t }) {
  const [cursorNote, setCursorNote] = useState({ active: false, x: 0, y: 0, text: '', icon: 'none' });
  const [ideaCardOpen, setIdeaCardOpen] = useState(false);
  const showCursorNote = (event, text, icon = 'none') =>
    setCursorNote({ active: true, x: event.clientX, y: event.clientY, text, icon });

  return (
    <section className="hero section-shell" id="top">
      <div className="hero-text">
        <h1>
          <span className="title-line">
            <CharacterTitle text="PRODUCT /" />
          </span>
          <span className="title-line">
            <CharacterTitle text="UX DESIGNER" />
          </span>
        </h1>
        <p className="hero-name">{t.heroName}</p>
        <p className="hero-intro">{t.heroIntro}</p>
        <a className="hero-link" href="#work">
          {t.heroCta}
          <ArrowUpRight size={18} strokeWidth={1.75} />
        </a>
      </div>
      <a
        className="hero-visual"
        href="/about"
        aria-label={t.aboutTitle}
        onMouseEnter={(event) => showCursorNote(event, '点一下试试？')}
        onMouseMove={(event) => showCursorNote(event, '点一下试试？')}
        onMouseLeave={() => setCursorNote((current) => ({ ...current, active: false }))}
      >
        <img src="/assets/hero-illustration.png" alt="" />
      </a>
      <div
        aria-hidden="true"
        className={`hero-cursor-note ${cursorNote.active ? 'is-visible' : ''}`}
        style={{ left: `${cursorNote.x + 18}px`, top: `${cursorNote.y - 18}px` }}
      >
        {cursorNote.icon === 'lightbulb' ? <Lightbulb size={14} strokeWidth={2} /> : null}
        <span>{cursorNote.text}</span>
      </div>
      <CircularBadge
        label="PRODUCT"
        onMouseEnter={(event) => showCursorNote(event, '头脑风暴一下', 'lightbulb')}
        onMouseMove={(event) => showCursorNote(event, '头脑风暴一下', 'lightbulb')}
        onMouseLeave={() => setCursorNote((current) => ({ ...current, active: false }))}
        onClick={() => setIdeaCardOpen((current) => !current)}
        isPressed={ideaCardOpen}
      />
      {ideaCardOpen ? (
        <div className="idea-card-layer" role="presentation" onClick={() => setIdeaCardOpen(false)}>
          <div
            className="idea-card"
            role="dialog"
            aria-modal="false"
            aria-label="想法生成中"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="idea-card-visual" aria-hidden="true">
              <img src="/assets/hero-illustration.png" alt="" />
              <div className="idea-card-laptop">
                <span className="idea-card-screen" />
                <span className="idea-card-base" />
                <span className="idea-card-key key-1" />
                <span className="idea-card-key key-2" />
                <span className="idea-card-key key-3" />
              </div>
            </div>
            <p>想法生成中.....</p>
            <span className="idea-card-close-tip">点任意位置关闭</span>
          </div>
        </div>
      ) : null}
      <a className="scroll-cue" href="#work">
        <ArrowDown size={15} strokeWidth={1.5} />
        <span>{t.scroll}</span>
      </a>
    </section>
  );
}

function About({ t }) {
  const photos = ['/assets/about-photo-1.png', '/assets/about-photo-2.png', '/assets/about-photo-3.png'];

  return (
    <section className="about section-shell" id="about">
      <div className="detail-rail">
        <DetailBackLink />
      </div>
      <div className="about-copy">
        <p className="about-eyebrow">{t.aboutEyebrow}</p>
        <h2>{t.aboutTitle}</h2>
        <p className="about-lead">{t.aboutLead}</p>
        <div className="about-meta">
          {t.aboutMeta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
      <div className="about-gallery" aria-hidden="true">
        {photos.map((src, index) => (
          <figure key={src} className={`about-photo about-photo-${index + 1}`}>
            <img src={src} alt="" />
          </figure>
        ))}
      </div>
    </section>
  );
}

function Resume() {
  const resume = copy.zh;

  return (
    <section className="resume-page section-shell" id="resume">
      <div className="resume-rail">
        <DetailBackLink className="resume-back" label={resume.resumeBack} />
      </div>
      <article className="resume-sheet">
        <div className="resume-hero">
          <div>
            <p className="resume-eyebrow">{resume.resumeTag}</p>
            <h1>{resume.resumeTitle}</h1>
            <p className="resume-summary">{resume.resumeSummary}</p>
          </div>
          <div className="resume-profile">
            <a className="resume-download" href="/assets/xushaobo-resume.pdf" download>
              下载 PDF
            </a>
            {resume.resumeProfile.map((item) => (
              <div key={item.label} className="resume-profile-item">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="resume-sections">
          {resume.resumeSections.map((section) => (
            <section key={section.title} className="resume-section-block">
              <h2>{section.title}</h2>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </article>
    </section>
  );
}

function InProgressPage() {
  return (
    <section className="in-progress-page section-shell" id="in-progress">
      <div className="detail-rail">
        <DetailBackLink />
      </div>
      <div className="in-progress-shell">
        <div className="in-progress-copy">
          <p className="in-progress-eyebrow">MORE WORKS / IN PROGRESS</p>
          <h1>作品开发中</h1>
          <p>
            这里会继续补充更多项目案例。当前先放一个默认展示页，用来承接后续的新项目内容与开发进度。
          </p>
          <div className="in-progress-tags">
            <span>项目开发中</span>
            <span>内容持续补充</span>
            <span>默认展示页</span>
          </div>
          <div className="in-progress-status">
            <div>
              <span>当前状态</span>
              <strong>正在开发 / 整理内容</strong>
            </div>
            <div>
              <span>预计更新</span>
              <strong>后续逐步上线</strong>
            </div>
          </div>
        </div>

        <div className="in-progress-visual" aria-hidden="true">
          <div className="in-progress-miner-wrap">
            <img src="/assets/in-progress-miner.png" alt="" className="in-progress-scene" />
          </div>
          <p className="in-progress-caption">项目开发中</p>
        </div>
      </div>
    </section>
  );
}

function ProjectDetail({ t, lang, slug }) {
  const project = projectPageContent[slug]?.[lang] ?? projectPageContent[slug]?.zh;
  const card = t.cards.find((item) => item.href === `/projects/${slug}`);
  const projectSlugs = ['social-app', 'file-tool', 'web-redesign'];
  const currentIndex = projectSlugs.indexOf(slug);
  const nextSlug = currentIndex >= 0 ? projectSlugs[(currentIndex + 1) % projectSlugs.length] : projectSlugs[0];
  const nextCard = t.cards.find((item) => item.href === `/projects/${nextSlug}`);

  if (!project || !card) return null;

  return (
    <section className="project-page section-shell" id="project-detail">
      <div className="detail-rail">
        <DetailBackLink />
      </div>
      <article className="project-shell">
        <div className="project-story">
          <aside className="project-outline-card">
            <p>TABLE OF CONTENTS</p>
            <div className="project-outline">
              {project.sections.map((section, index) => (
                <a key={section.title} href={`#project-section-${index + 1}`}>
                  <span>{String(index + 1).padStart(2, '0')}.</span>
                  <strong>{section.title}</strong>
                </a>
              ))}
            </div>
          </aside>

          <div className="project-content">
            <header className="project-hero">
              <div className="project-copy">
                <div className="project-title-row">
                  <div>
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h1>{project.title}</h1>
                  </div>
                </div>
                <p className="project-intro">{project.intro}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-cover">
                <img src={card.image} alt="" />
              </div>

              <div className="project-summary">
                {project.summary.map((item) => (
                  <div key={item.label} className="project-summary-item">
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
            </header>

            {project.sections.map((section, index) => (
              <section key={section.title} id={`project-section-${index + 1}`} className="project-section-block">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
                {section.noteLabel && section.noteText ? (
                  <div className="project-note">
                    <strong>{section.noteLabel}:</strong>
                    <span>{section.noteText}</span>
                  </div>
                ) : null}
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="project-media-card" aria-hidden="true">
                  <img src={card.image} alt="" />
                </div>
                <div className="project-placeholder-grid" aria-hidden="true">
                  <div className="project-placeholder-card">
                    <span>01</span>
                    <strong>Key Screen Placeholder</strong>
                  </div>
                  <div className="project-placeholder-card">
                    <span>02</span>
                    <strong>Process / Insight Placeholder</strong>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        {nextCard ? (
          <footer className="project-next">
            <a href={nextCard.href}>
              <span>Next Project</span>
              <strong>{nextCard.title}</strong>
              <ArrowUpRight size={18} strokeWidth={1.7} />
            </a>
          </footer>
        ) : null}
      </article>
    </section>
  );
}

function WorkCard({ card, index }) {
  return (
    <a className={`work-card ${card.muted ? 'is-muted' : ''}`} href={card.href}>
      <div className="work-image">
        <img src={card.image} alt="" loading="eager" />
      </div>
      <div className="work-content">
        <div>
          <h3>{card.title}</h3>
          <p>{card.subtitle}</p>
        </div>
        <div className="work-footer">
          <span>{card.meta}</span>
          <ArrowUpRight size={21} strokeWidth={1.6} />
        </div>
      </div>
    </a>
  );
}

function WorkGrid({ t }) {
  return (
    <section className="work section-shell" id="work">
      <div className="section-heading">
        <h2>
          <span>{t.selected}</span>
          {t.workTitle}
        </h2>
        <p>{t.workHint}</p>
      </div>
      <div className="work-grid">
        {t.cards.map((card, index) => (
          <WorkCard key={card.title} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}

function ContactCard({ item, icon: Icon, copyAction }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    await navigator.clipboard.writeText(item.value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <a className="contact-card" href={item.href}>
      <Icon size={26} strokeWidth={1.6} />
      <span>{item.label}</span>
      <strong>{item.value}</strong>
      <button type="button" onClick={handleCopy}>
        <Copy size={14} strokeWidth={1.7} />
        {copied ? 'Copied' : copyAction}
      </button>
    </a>
  );
}

function Contact({ t }) {
  const icons = [Mail, MessageCircle, Phone];
  const marqueeText = useMemo(
    () => Array.from({ length: 8 }, (_, index) => <span key={index}>{t.marquee}</span>),
    [t.marquee],
  );

  return (
    <section className="contact section-shell" id="contact">
      <div className="contact-illustration" aria-hidden="true">
        <Mail size={112} strokeWidth={1.15} />
        <span />
      </div>
      <div className="contact-copy">
        <h2 className="contact-title-effect">
          <CharacterTitle text={t.contactTitle} />
        </h2>
        <p>{t.contactLead}</p>
      </div>
      <div className="contact-list">
        {t.contactItems.map((item, index) => (
          <ContactCard key={item.label} item={item} icon={icons[index]} copyAction={t.copyAction} />
        ))}
      </div>
      <div className="marquee" aria-hidden="true">
        <div>{marqueeText}</div>
        <div>{marqueeText}</div>
      </div>
    </section>
  );
}

function App() {
  const [lang, setLang] = useState('zh');
  const [theme, setTheme] = useState(() => {
    const saved = window.localStorage.getItem('xushaobo-theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });
  const t = copy[lang];
  const pathname = window.location.pathname;
  const isAboutPage = pathname.startsWith('/about');
  const isResumePage = pathname.startsWith('/resume');
  const projectSlug = pathname.startsWith('/projects/') ? pathname.replace('/projects/', '').split('/')[0] : '';
  const isProjectPage = Boolean(projectSlug);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('xushaobo-theme', theme);
  }, [theme]);

  return (
    <>
      <Loader />
      <div className="grid-background" aria-hidden="true" />
      <Header lang={lang} setLang={setLang} t={t} theme={theme} setTheme={setTheme} />
      <main className={isAboutPage || isResumePage || isProjectPage ? 'page-main' : ''}>
        {isAboutPage ? (
          <About t={t} />
        ) : isResumePage ? (
          <Resume />
        ) : projectSlug === 'in-progress' ? (
          <InProgressPage />
        ) : isProjectPage ? (
          <ProjectDetail t={t} lang={lang} slug={projectSlug} />
        ) : (
          <>
            <Hero t={t} />
            <WorkGrid t={t} />
            <Contact t={t} />
          </>
        )}
      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
