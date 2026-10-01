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
    summary: '负责妙思智投的AIGC投放链路和漏斗增长，围绕策略覆盖、开关打开、生产供给、素材利用与素材效果推进生成能力落地。',
    work: ['分行业AIGC策略覆盖：基于线索行业特性、智投链路和AIGC策略视角，打通各创意形式的自动化策略分配—生产—入库—投出链路，建设合作SOP，将线索场景从仅有1个策略扩展到4个行业全覆盖。', '供给利用漏斗诊断：策略上线后逐步开白，验证是否满足预期；搭建项目供给率、供给时效和端到端漏斗看板，按场景×品类排查素材供给不足、素材利用不充分等问题，并拉通各方共同排查和解决问题，保证素材投出。', '视频策略建设：基于爆款素材结构与原片多模态解析（口播转写、画面文字识别、场景理解），提取商品卖点、使用场景及创意钩子，经商品事实校验后，结合输入字段与视频Prompt建设AI前贴，拼接原片长剪短，形成商品粒度通用裂变策略，并推动客户圈选、灰度验证及行业推广。', '分层质量评测与迭代：参与搭建“AI前贴—成片”评测标准并组织内部、行业多方评测；以基础视听质量、商品事实准确性及合规性为硬门槛，前贴评估钩子、品类适配、叙事逻辑，成片评估剪辑衔接、语义与动作完整性、广告目的清晰度；基于Badcase分层归因，迭代字段输入、视频画面Prompt、时间轴与语义衔接规则。'],
    metrics: ['线索场景从1个策略扩展到4个行业全覆盖', '原声混剪覆盖率100%', '开启率达到25%', '日耗从1w提升至10w', '新策略评测推动素材可用率达到95%的可上线标准'],
  },
  {
    id: 'surveyx',
    company: '上海算法创新研究院 SurveyX',
    role: 'AI产品实习生',
    period: '2025.03–2025.7',
    focus: 'AI文献综述Agent、AI应用效率工具',
    summary: '围绕AI长文本生成场景重构半白盒链路，通过用户介入、漏斗分析与生成策略优化提升结果可控性。',
    work: ['产品链路白盒化：收集50+用户原声反馈，针对纯黑盒版本生成时长过长、结果不可控等问题，将原有“一键生成”拆分为“输入标题→关键词生成→大纲生成→联网检索文献→最终生成”链路。', '数据埋点与漏斗分析：搭建全链路埋点体系，监控生成耗时、大纲修改率、重生成率等指标；通过漏斗分析定位用户核心流失节点，集中在“联网搜索文献选中”与“最终生成等待时间过长”阶段，推动“联网文献筛选”与“生成状态展示”等交互优化。', '生成质量评估：邀请10+博士生进行质量评估，从内容质量（覆盖率、逻辑连贯性、相关性等）和引用质量（引用准确率、可溯源性）维度评估生成效果，产品侧结合重生成率与生成等待时长验证半白盒链路的优化效果。'],
    metrics: ['收集50+用户原声反馈', '用户完整体验率提升30%', '日活增加到300+', '邀请10+博士生参与质量评估', '问卷反馈说明用户满意度提升28%'],
  },
  {
    id: 'sjtu-ai-companion',
    company: '上海交通大学溥渊未来学院',
    role: 'AI产品&UX实习生',
    period: '2024.06–2024.10',
    focus: 'AI语音情绪陪伴Agent',
    summary: '围绕情绪识别、佛学知识检索、多轮回复与风险控制搭建“用户输入—意图判断—知识匹配—情绪安抚—回复生成”的Agent链路。',
    work: ['语音交互设计：调研语音情绪识别技术，构建3种不同情绪的标注体系，为情绪—语义不一致时的AI情绪识别能力设计提供参考；联合心理咨询师整理100+条常见问题并归纳10+核心痛点，设计Web端原型及用户测试方案，支持语音与文本输入的对话体验。', '数据与RAG策略：构建多源数据体系，包括1.2k佛教知识语料与800条《六祖坛经》结构化问答，作为RAG检索知识库；构建Embedding+相似度阈值过滤检索策略，同时整理200条角色设定数据，用于模型微调与人设约束。', 'Agent决策流程：设计对话决策链路（意图识别、知识检索、情绪安抚、回复生成和风险控制），根据一般咨询、负面情绪及高风险表达配置差异化回复策略，提升对话稳定性和安全性。', '效果评估：设计准确率、BLEU、一致性等多维评估指标，完成模型效果验证。'],
    metrics: ['佛学知识准确率79%', '角色一致性89%'],
  },
  {
    id: 'yuewen',
    company: '阅文集团 AIGC攻坚组——星海智创',
    role: 'AI产品实习生',
    period: '2023.09–2024.01',
    focus: 'AIGC文案视频创作商业化平台',
    summary: '为推文KOL从0到1搭建推文视频创作平台，并参与网文场景AIGC效果评估。',
    work: ['创作链路设计：聚焦AI漫剪与爆款反推场景，设计并推动上线“书籍输入→角色抽取→脚本生成→自动分镜→AIGC生图/视频生成→人工干预导出”等核心功能，并接入违禁和风控检测预审功能，生成适用于各投放平台的素材。', '模型测评迭代：搭建网文场景AIGC评测体系，图像侧关注可用率、人物一致性和整体美观度，文本侧评估爆款开头的钩子质量和正文脚本的情节完整性；协同算法完成基础模型选型和20+LoRA评测迭代。', '商业效果优化：基于用户采纳率等行为指标和投放转化数据，对高低效素材进行归因，围绕脚本钩子、人物一致性、素材质量进行效果复盘，反向优化脚本生成与出图策略，提升KOL图片采纳率。'],
    metrics: ['日活100+', '总注册人数2000+', '累计推进20+模型版本优化', '文生图可用率提升30%', '生图效率提升80%', '文生文不可用率降至1%', '用户转化率提升至16%'],
  },
];

export const education = [
  { school: '帝国理工学院', degree: 'Design Engineering（设计工程）', period: '2025.9–至今', note: '预计2026.11毕业、27届', courses: '核心课程：机器学习、人机交互、情境设计、人工智能研究方法、计算机视觉、设计工程实践' },
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
    slug: 'pathly', title: 'Pathly', kind: 'ai', categories: ['agent'], period: '2026.6–8', role: '项目设计与实现',
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
    slug: 'ai-schengen-assistant', title: 'AI申根签小助手', kind: 'ai', categories: ['agent'], period: '2026.4', role: '产品设计',
    summary: '已上线网页的申根签行程规划助手。',
    problem: '帮助用户生成、校验、编辑并下载符合申根签规则的行程单。',
    contributions: ['设计行程骨架生成、真实机酒填充、二次编辑与最终行程单下载的Agent混合架构。', '使用规则校验识别主申国家、城市顺序、停留天数和路线合理性问题。', '建立正反例约束、字段级规则与Token管理的Prompt Engineering方法。', '围绕完整性、规则符合率和可执行性建立质量指标，并进行边界测试和抽样人评。'],
    cover: undefined,
    placeholder: 'AI申根签网页截图待补',
    links: [{ label: '打开已上线网页', href: 'https://aischengenvisaassistant-n4lmagbd2mkzu77ixyktbt.streamlit.app/', kind: 'external' }],
  },
  {
    slug: 'smart-clothing-advisor', title: 'Smart Clothing Advisor', kind: 'ai', categories: ['hardware'], period: '2025.12', role: '课程项目作者',
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
    slug: 'potmate', title: 'PotMate', kind: 'ai', categories: ['hardware'], role: '产品与控制系统设计',
    summary: '面向老年人的电机驱动智能锅具辅助装置。',
    problem: '针对腕力下降及倾倒锅具时的安全风险，设计可拆卸式电动辅助把手，在辅助用户的同时保留其自主控制。',
    contributions: ['结合用户研究定义竖直握持、腕部支撑、通用夹具、电动倾倒和三按键交互方案。', '基于不同锅具重量及夹持高度开展扭矩测试，完成电机选型、传动与可伸缩棘轮夹具设计。', '负责ESP32 Super Mini控制代码，使用PWM驱动H桥控制器，接入霍尔编码器并设置倾斜角度安全限位。', '完成三轮夹具及主体结构迭代、3D打印和不同负载下的转速、位置控制与夹持效果测试。'],
    cover: undefined,
    placeholder: 'PotMate项目图片待补',
    links: [{ label: '查看项目视频', href: 'https://youtu.be/0_tj8SUu33g', kind: 'video' }],
  },
  {
    slug: 'shuzhi-yingjian', title: '数智营建', kind: 'ai', categories: ['hardware'], period: '2024', role: '灯光组长',
    summary: '校政合作交互式木构空间与感知灯光系统。',
    problem: '响应乡村振兴与文旅发展需求，参与打造10万元级交互式杉木公共空间，将调研、空间设计、灯光交互、实地建造和活动运营整合为闭环方案。',
    contributions: ['深入基地开展实地考察，结合当地文化、生态条件与文旅需求参与空间及服务方案设计。', '统筹方案深化、物料采购、灯带加工、构件匹配、现场安装及联调进度，推动项目高标准落地。', '基于ESP32、局域网、超声波传感器及可编程灯带搭建交互系统，实现灯带、立柱与木构件的映射及联动。', '围绕政府、施工、材料及活动资源运营空间，结合数字化内容传播获得2万+曝光，推动相关文旅参与人数增长3倍。'],
    cover: undefined,
    placeholder: '数智营建项目图片待补',
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
    slug: 'architecture-works', title: '建筑项目', kind: 'portfolio', categories: ['space'],
    summary: '作品集中的建筑设计项目图集。',
    problem: '展示已确认的建筑设计作品图像，不补写未确认的项目背景。',
    contributions: ['以来源作品集页面作为建筑项目图集展示。'],
    cover: { src: '/media/other/建筑作品选页_p39.jpg', alt: '建筑项目作品选页' },
    links: [{ label: '建筑作品视频', href: 'https://youtu.be/NXC_HNw27Ak', kind: 'video' }],
  },
  {
    slug: 'aigc-works', title: 'AIGC作品', kind: 'portfolio', categories: ['aigc'],
    summary: '作品集中的AIGC项目图集。',
    problem: '展示已确认的AIGC作品图像，不补写未确认的项目背景。',
    contributions: ['以来源作品集页面作为AIGC作品图集展示。'],
    cover: { src: '/media/other/AIGC作品选页_p40.jpg', alt: 'AIGC作品选页' },
    links: [{ label: 'AIGC作品视频', href: 'https://youtu.be/vbaYTBOoA5M', kind: 'video' }],
  },
];

export const aiProjects = projects.filter((project) => project.kind === 'ai');
export const portfolioProjects = projects.filter((project) => project.kind === 'portfolio');
export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const skills = ['AIGC生成链路', 'Prompt设计', 'RAG构建', 'Agent流程编排', '指标体系', '漏斗分析', '效果评估', '跨团队协作'];
export const tools = ['Photoshop', 'Rhino', 'SketchUp', 'Stable Diffusion', 'InDesign', 'Arduino', 'Illustrator', 'Enscape'];
export const interests = ['绘画', '摄影', '古筝', '吉他'];
