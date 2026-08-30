export type Media = { src: string; alt: string; caption?: string };
export type LinkItem = { label: string; href: string; kind?: 'external' | 'video' | 'github' };

export const site = {
  name: '糜愉',
  englishName: 'MI YU',
  role: 'AI商业化产品方向',
  email: '673867736@qq.com',
  phone: '18752971270',
  resume: '/downloads/mi-yu-resume.pdf',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Experience', href: '/experience/' },
    { label: 'AI Projects', href: '/ai-projects/' },
    { label: 'Portfolio', href: '/portfolio/' },
    { label: 'About', href: '/about/' },
    { label: 'Contact', href: '/contact/' },
  ],
};

export const experiences = [
  {
    id: 'tencent',
    company: '腾讯 CDG 创意AIGC产品',
    role: 'AI策略产品实习生',
    period: '2026.6–至今',
    focus: '广告策略中台、AIGC能力接入智投',
    summary: '围绕策略覆盖、开关开启、供给保障、素材利用四段漏斗推进AIGC消耗提升。',
    work: ['参与广告策略中台与智投AIGC能力接入。', '参与新链路五层指标体系设计，包括北极星、产品力、过程监控、链路健康与价值验证。'],
    metrics: ['线索覆盖4个行业', '原声混剪覆盖率100%', '九图覆盖率：健康85%、房家53%、教育69%', '开启率达到20%', '日耗从1w到9w', '新策略评测推动可用率达到95%的可上线标准'],
  },
  {
    id: 'surveyx',
    company: '上海算法创新研究院 SurveyX',
    role: 'AI产品实习生',
    period: '2025.03–2025.7',
    focus: 'AI文献综述Agent、AI应用效率工具',
    summary: '将纯黑盒“一键生成”拆分为可介入、可评估的半白盒链路。',
    work: ['拆分标题、关键词、大纲、联网检索与最终生成链路。', '建立全链路埋点和漏斗分析，并组织生成质量评估。'],
    metrics: ['收集50+用户原声反馈', '用户完整体验率提升30%', '日活增加到300+', '邀请10+博士生参与质量评估', '问卷反馈说明用户满意度提升28%'],
  },
  {
    id: 'yuewen',
    company: '阅文集团 AIGC攻坚组——星海智创',
    role: 'AI产品实习生',
    period: '2023.09–2024.01',
    focus: 'AIGC文案视频创作商业化平台',
    summary: '为推文KOL从0到1搭建推文视频创作平台，并参与网文场景AIGC效果评估。',
    work: ['设计书籍输入、角色抽取、脚本生成、自动分镜、AIGC生图或视频、人工干预导出与风控预审链路。', '搭建网文场景AIGC效果评估体系。'],
    metrics: ['日活100+', '总注册人数2000+', '累计推进20+模型版本优化', '文生图可用率提升30%', '生图效率提升80%', '文生文不可用率降至1%', '用户转化率提升至16%'],
  },
];

export const education = [
  { school: '帝国理工学院', degree: 'Design Engineering（设计工程）', period: '2025.9–至今', note: '材料注明预计2026.12毕业、27届' },
  { school: '同济大学', degree: '建筑学', period: '2020.09–2025.6', note: 'GPA 4.63/5（91.3/100）' },
];

export type Project = {
  slug: string;
  title: string;
  kind: 'ai' | 'portfolio';
  categories: string[];
  period?: string;
  role?: string;
  teamNote?: string;
  summary: string;
  problem: string;
  contributions: string[];
  outcomes?: string[];
  cover?: Media;
  gallery?: Media[];
  links?: LinkItem[];
  placeholder?: string;
};

export const projects: Project[] = [
  {
    slug: 'pathly', title: 'Pathly', kind: 'ai', categories: ['agent', 'rag'], period: '2026.6–8', role: '项目设计与实现',
    summary: '基于知识图谱与Multi-Agent的个性化学习平台。',
    problem: '帮助不同先验知识水平的学习者，将宽泛目标转化为可靠、可执行的学习路径。',
    contributions: ['设计Planning与Content多Agent协作流程。', '将学习规划拆分为目标理解、知识点匹配、先修路径搜索和时间分配。', '融合知识图谱、原文检索与用户画像。', '建立“数据质量—模型输出—产品体验”三层评测框架，并完成对照、消融与用户测试设计。'],
    outcomes: ['材料写明生成质量提高约20%。', '用户测试材料记录10名参与者。'],
    cover: { src: '/media/pathly/Pathly_系统架构_p06.jpg', alt: 'Pathly系统架构图' },
    gallery: [
      { src: '/media/pathly/Pathly_系统架构_p06.jpg', alt: 'Pathly知识图谱和多Agent系统架构' },
      { src: '/media/pathly/Pathly_服务蓝图_p11.jpg', alt: 'Pathly服务蓝图' },
      { src: '/media/pathly/Pathly_前端界面_p15.jpg', alt: 'Pathly前端界面页面图' },
      { src: '/media/pathly/Pathly_评估框架_p17.jpg', alt: 'Pathly评估框架' },
      { src: '/media/pathly/Pathly_用户测试_p23.jpg', alt: 'Pathly用户测试材料' },
    ],
  },
  {
    slug: 'ai-schengen-assistant', title: 'AI申根签小助手', kind: 'ai', categories: ['agent', 'live'], period: '2026.4', role: '产品设计',
    summary: '已上线网页的申根签行程规划助手。',
    problem: '帮助用户生成、校验、编辑并下载符合申根签规则的行程单。',
    contributions: ['设计行程骨架生成、真实机酒填充、二次编辑与最终行程单下载的Agent混合架构。', '使用规则校验识别主申国家、城市顺序、停留天数和路线合理性问题。', '建立正反例约束、字段级规则与Token管理的Prompt Engineering方法。', '围绕完整性、规则符合率和可执行性建立质量指标，并进行边界测试和抽样人评。'],
    cover: undefined,
    placeholder: 'AI申根签网页截图待补',
    links: [{ label: '打开已上线网页', href: 'https://aischengenvisaassistant-n4lmagbd2mkzu77ixyktbt.streamlit.app/', kind: 'external' }],
  },
  {
    slug: 'smart-clothing-advisor', title: 'Smart Clothing Advisor', kind: 'ai', categories: ['agent', 'iot'], period: '2025.12', role: '课程项目作者',
    summary: '天气感知的IoT穿衣决策系统。',
    problem: '结合环境感知与服装状态，为伦敦多变天气下的穿衣选择提供即时建议。',
    contributions: ['整合计算机视觉、环境传感与可执行实体反馈。', '设计服装状态与实时天气结合的穿衣决策系统。'],
    cover: { src: '/media/smart-clothing/Smart_Clothing_Advisor_系统与识别_p04.jpg', alt: 'Smart Clothing Advisor系统与服装识别页面图' },
    gallery: [
      { src: '/media/smart-clothing/Smart_Clothing_Advisor_摘要_p02.jpg', alt: 'Smart Clothing Advisor项目摘要' },
      { src: '/media/smart-clothing/Smart_Clothing_Advisor_系统与识别_p04.jpg', alt: 'Smart Clothing Advisor系统与识别方案' },
      { src: '/media/smart-clothing/Smart_Clothing_Advisor_原型实现_p06.jpg', alt: 'Smart Clothing Advisor原型实现' },
    ],
    links: [
      { label: '查看GitHub', href: 'https://github.com/myriddle1101-boop/Smart-Clothing-Advisor_Yu-Mi-CID-06056007', kind: 'github' },
      { label: '查看课程视频', href: 'https://www.youtube.com/watch?v=USV_8SZ_MFg', kind: 'video' },
    ],
  },
  {
    slug: 'seed-the-sun', title: 'Seed the Sun', kind: 'portfolio', categories: ['interaction', 'service'],
    summary: '以晴天收集、雨天使用阳光体验为主题的可穿戴设备、应用与互动体验。',
    problem: '鼓励人们在晴天晒太阳，并缓解雨天低落。',
    contributions: ['完成用户研究、竞品与市场分析。', '探索硬件与应用、蓝牙连接、遮阳伞或雨具体验、用户流程和技术原型。'],
    cover: { src: '/media/seed/Seed_the_Sun_项目封面_p03.jpg', alt: 'Seed the Sun项目封面' },
    gallery: [{ src: '/media/seed/Seed_the_Sun_用户流程_p08.jpg', alt: 'Seed the Sun用户流程' }, { src: '/media/seed/Seed_the_Sun_技术实现_p09.jpg', alt: 'Seed the Sun技术实现' }],
  },
  {
    slug: 'para-gaze', title: 'Para Gaze', kind: 'portfolio', categories: ['interaction'], period: '2023',
    summary: '围绕“男性凝视”与观看关系的互动装置。',
    problem: '通过凝视触发灯光与蜡中人物的显现或融化，引导参与者思考观看者与被观看者。',
    contributions: ['完成理论与案例研究、传感器原型、蜡材料实验和装置结果呈现。'],
    cover: { src: '/media/para/Para_Gaze_项目封面_p11.jpg', alt: 'Para Gaze项目封面' },
    gallery: [{ src: '/media/para/Para_Gaze_原型过程_p14.jpg', alt: 'Para Gaze原型过程' }, { src: '/media/para/Para_Gaze_成果展示_p16.jpg', alt: 'Para Gaze成果展示' }],
    links: [{ label: '查看演示视频', href: 'https://youtu.be/ruDh5Cf1JFg', kind: 'video' }],
  },
  {
    slug: 'cocoon', title: 'Cocoon', kind: 'portfolio', categories: ['interaction', 'service'],
    summary: '面向整形决策“冷静期”的交互产品与可穿戴原型。',
    problem: '通过疼痛模拟与长期过程模拟辅助用户面对外貌焦虑和整形决策。',
    contributions: ['完成用户故事、市场研究、用户旅程、利益相关者图与产品构思。', '探索面部/恢复期AR模拟、疼痛模拟装置和高低保真应用流程。'],
    cover: { src: '/media/cocoon/Cocoon_项目封面_p17.jpg', alt: 'Cocoon项目封面' },
    gallery: [{ src: '/media/cocoon/Cocoon_用户旅程_p19.jpg', alt: 'Cocoon用户旅程' }, { src: '/media/cocoon/Cocoon_最终成果_p22.jpg', alt: 'Cocoon最终成果' }],
  },
  {
    slug: 'ash-lifecycle', title: 'Ash LifeCycle: Samsara of Incense', kind: 'portfolio', categories: ['service'],
    summary: '将焚香产生的香灰转化为花盆、砖或其他产品的可持续产品与服务设计。',
    problem: '把香灰收集、材料转化、药草种植、制香与纪念品串成循环。',
    contributions: ['完成香与香灰研究、机会分析、利益相关者、材料实验、设备结构、服务蓝图与商业画布。'],
    cover: { src: '/media/ash/Ash_LifeCycle_项目封面_p23.jpg', alt: 'Ash LifeCycle项目封面' },
    gallery: [{ src: '/media/ash/Ash_LifeCycle_材料实验_p27.jpg', alt: 'Ash LifeCycle材料实验' }, { src: '/media/ash/Ash_LifeCycle_系统方案_p29.jpg', alt: 'Ash LifeCycle系统方案' }],
  },
  {
    slug: 'stree-plus-scape', title: 'Stree(+)scape', kind: 'portfolio', categories: ['space', 'service'],
    summary: '以“+”形单元和可旋转布局构建早市与夜市的城市空间与服务设计。',
    problem: '在城市经济低迷与大城市疏离感背景下，为居民提供更温暖的购物和社交体验。',
    contributions: ['完成场地与人群分析、用户痛点、利益相关者、总体概念、工作坊、服务蓝图和旋转结构技术探索。'],
    cover: { src: '/media/stree/Stree_Plus_Scape_项目封面_p31.jpg', alt: 'Stree(+)scape项目封面' },
    gallery: [{ src: '/media/stree/Stree_Plus_Scape_概念发展_p34.jpg', alt: 'Stree(+)scape概念发展' }, { src: '/media/stree/Stree_Plus_Scape_场景展示_p37.jpg', alt: 'Stree(+)scape场景展示' }],
  },
  {
    slug: 'ouroute', title: 'OURoute', kind: 'portfolio', categories: ['service'], role: '组长', teamNote: '多人团队完成的安全出行产品/服务项目。',
    summary: '以“Walk together, move with confidence”为主题的安全出行产品与服务项目。',
    problem: '围绕学生夜间独自出行的安全感与陪伴需求探索服务方案。',
    contributions: ['以组长身份参与团队项目。', '项目材料呈现产品旅程、价值主张、竞争定位及服务功能。'],
    cover: { src: '/media/ouroute/OURoute_项目与团队_p01.jpg', alt: 'OURoute项目与团队信息' },
    gallery: [{ src: '/media/ouroute/OURoute_价值主张_p09.jpg', alt: 'OURoute价值主张' }, { src: '/media/ouroute/OURoute_产品旅程_p10.jpg', alt: 'OURoute产品旅程' }, { src: '/media/ouroute/OURoute_服务功能_p17.jpg', alt: 'OURoute服务功能' }],
  },
  {
    slug: 'other-works', title: '其他建筑与AIGC作品', kind: 'portfolio', categories: ['space', 'aigc'],
    summary: '作品集中的建筑设计与AIGC项目图集。',
    problem: '页面未清晰列出具体建筑项目名称、地点、职责和年份。',
    contributions: ['以来源作品集页面作为图集展示，不补写未确认背景。'],
    cover: { src: '/media/other/建筑作品选页_p39.jpg', alt: '建筑作品选页' },
    gallery: [{ src: '/media/other/AIGC作品选页_p40.jpg', alt: 'AIGC作品选页' }],
    links: [{ label: '建筑作品视频', href: 'https://youtu.be/NXC_HNw27Ak', kind: 'video' }, { label: 'AIGC作品视频', href: 'https://youtu.be/vbaYTBOoA5M', kind: 'video' }],
  },
];

export const aiProjects = projects.filter((project) => project.kind === 'ai');
export const portfolioProjects = projects.filter((project) => project.kind === 'portfolio');
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const skills = ['AIGC生成链路', 'Prompt设计', 'RAG构建', 'Agent流程编排', '指标体系', '漏斗分析', '效果评估', '跨团队协作'];
export const tools = ['Photoshop', 'Rhino', 'SketchUp', 'Stable Diffusion', 'InDesign', 'Arduino', 'Illustrator', 'Enscape'];
export const interests = ['绘画', '摄影', '古筝', '吉他'];
