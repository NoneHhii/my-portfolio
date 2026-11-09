import portraitPhoto from '../assets/portrait-clean.png'

export interface TechSkill {
  id: string
  name: string
  category: 'language' | 'framework' | 'tool'
  tagline: string
  level: number
  accent: 'cerulean' | 'magenta'
}

export interface ProjectItem {
  id: string
  title: string
  subtitle: string
  category: 'web-motion' | 'mobile' | 'fullstack'
  description: string
  tech: string[]
  repoUrl: string
  featured?: boolean
  visualType: 'wave' | 'orbit' | 'nodes' | 'grid' | 'pulse' | 'matrix'
  year: string
}

export const PROFILE = {
  handle: 'Jiikayss',
  githubUser: 'NoneHhii',
  fullName: 'Thiên Khoa',
  portrait: portraitPhoto,
  roles: [
    'Creative Motion Developer',
    'Software Engineering Student',
    'Interactive UI Craftsman',
    'React & Flutter Builder',
  ],
  heroGreeting: 'XIN CHÀO, MÌNH LÀ',
  heroSummary:
    'Một nhà phát triển trẻ đam mê thổi hồn vào giao diện số bằng những chuyển động tinh tế và giàu cảm xúc, kết hợp tư duy Kỹ thuật Phần mềm vững chắc để tạo ra trải nghiệm Web & Mobile độc bản.',
  university: {
    name: 'Trường Đại học Công nghiệp (IUH)',
    major: 'Kỹ thuật Phần mềm (Software Engineering)',
    period: '2023 — Hiện tại',
    description:
      'Rèn luyện nền tảng cấu trúc dữ liệu, kiến trúc phần mềm, lập trình hướng đối tượng và phát triển ứng dụng đa nền tảng.',
  },
  philosophy: {
    headline: 'Ưu tiên sự Tự Do & Đổi Mới Sáng Tạo trong từng dòng code.',
    manifesto:
      'Mình tin rằng sản phẩm công nghệ xuất sắc nhất chỉ ra đời khi người kỹ sư có không gian tự do thử nghiệm, dám phá vỡ khuôn mẫu giao diện rập khuôn và liên tục đổi mới sáng tạo. Với mình, animation không phải lớp trang trí bề nổi — mà là ngôn ngữ giao tiếp trực giác giữa sản phẩm và cảm xúc người dùng.',
    pillars: [
      {
        code: '01 // AUTONOMY',
        title: 'Tự Do Tư Duy',
        desc: 'Chủ động tìm kiếm góc tiếp cận mới mẻ, không bó buộc trong các khuôn mẫu có sẵn để mỗi dự án đều mang bản sắc riêng.',
      },
      {
        code: '02 // INNOVATION',
        title: 'Đổi Mới Sáng Tạo',
        desc: 'Liên tục thử nghiệm hiệu ứng tương tác, bố cục chuyển động và micro-interactions nhằm nâng tầm trải nghiệm người dùng.',
      },
      {
        code: '03 // CRAFTSMANSHIP',
        title: 'Chuyển Động Có Hồn',
        desc: 'Chăm chút từng chuyển động mượt mà, tự nhiên trên cả Web (React) lẫn Mobile (Flutter), kết hợp hài hòa giữa kỹ thuật và nghệ thuật.',
      },
    ],
  },
  contacts: {
    email: 'thienkhoatgddqng@gmail.com',
    github: 'https://github.com/NoneHhii',
    githubLabel: 'github.com/NoneHhii',
    facebook: 'https://www.facebook.com/thienkhoa.trantrinh.7',
    facebookLabel: 'fb.com/thienkhoa.trantrinh.7',
    phone: '0375 143 083',
    phoneRaw: '0375143083',
  },
}

export const TECH_SKILLS: TechSkill[] = [
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'language',
    tagline: 'Type-safe architecture & scalable UI state',
    level: 90,
    accent: 'cerulean',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'language',
    tagline: 'ESNext, Interactive Canvas & Web Animation',
    level: 92,
    accent: 'magenta',
  },
  {
    id: 'dart',
    name: 'Dart',
    category: 'language',
    tagline: 'Reactive streams & fluid mobile logic',
    level: 86,
    accent: 'cerulean',
  },
  {
    id: 'cpp',
    name: 'C++',
    category: 'language',
    tagline: 'Algorithms, data structures & core logic',
    level: 80,
    accent: 'cerulean',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'language',
    tagline: 'OOP principles & RESTful enterprise backend',
    level: 82,
    accent: 'magenta',
  },
  {
    id: 'react',
    name: 'React / React Native',
    category: 'framework',
    tagline: 'Interactive component systems, Web & Cross-platform UI',
    level: 93,
    accent: 'cerulean',
  },
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'framework',
    tagline: 'Custom painter, fluid mobile transitions & native feel',
    level: 88,
    accent: 'cerulean',
  },
  {
    id: 'motion',
    name: 'Motion & Interactive UI',
    category: 'framework',
    tagline: 'Spring dynamics, scroll choreography & micro-interactions',
    level: 95,
    accent: 'magenta',
  },
  {
    id: 'nodejs',
    name: 'Node.js / REST API',
    category: 'framework',
    tagline: 'Realtime backend services & fullstack integration',
    level: 84,
    accent: 'cerulean',
  },
  {
    id: 'git',
    name: 'Git & GitHub',
    category: 'tool',
    tagline: 'Version control, branching workflows & collaboration',
    level: 90,
    accent: 'magenta',
  },
  {
    id: 'vite',
    name: 'Vite & Modern CSS',
    category: 'tool',
    tagline: 'Lightning bundling, custom keyframes & glassmorphism',
    level: 91,
    accent: 'cerulean',
  },
  {
    id: 'aseprite',
    name: 'Aseprite & Tiled',
    category: 'tool',
    tagline: 'Sprite animation & interactive 2D scene design',
    level: 85,
    accent: 'magenta',
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    id: 'minna-festival',
    title: 'Minna Festival',
    subtitle: 'Interactive Event & Motion Storytelling',
    category: 'web-motion',
    description:
      'Trải nghiệm web lễ hội giàu tính thị giác với chuyển cảnh cuộn mượt mà, hiệu ứng hover tương tác động và bố cục phá cách tôn vinh không khí sự kiện.',
    tech: ['TypeScript', 'React', 'Motion UI', 'Modern CSS'],
    repoUrl: 'https://github.com/NoneHhii/minna-festival',
    featured: true,
    visualType: 'wave',
    year: '2026',
  },
  {
    id: 'preskool',
    title: 'PreSkool Ecosystem',
    subtitle: 'Fullstack Education Management Platform',
    category: 'fullstack',
    description:
      'Hệ thống quản lý học đường toàn diện tách biệt kiến trúc Frontend & Backend (PreSkool & PreSkool-BE), tối ưu luồng dữ liệu lớn với giao diện dashboard trực quan.',
    tech: ['TypeScript', 'React', 'Node.js', 'REST API'],
    repoUrl: 'https://github.com/NoneHhii/PreSkool',
    featured: true,
    visualType: 'grid',
    year: '2026',
  },
  {
    id: 'travelog',
    title: 'Travelog Mobile',
    subtitle: 'Cross-Platform Travel Journal & Discovery',
    category: 'mobile',
    description:
      'Ứng dụng di động lưu giữ hành trình khám phá và chia sẻ khoảnh khắc du lịch, tập trung vào cử chỉ vuốt chạm tự nhiên và đồng bộ dữ liệu đám mây.',
    tech: ['TypeScript', 'React Native', 'Node.js', 'Mobile UI'],
    repoUrl: 'https://github.com/NoneHhii/Travelog_app',
    featured: true,
    visualType: 'orbit',
    year: '2025',
  },
  {
    id: 'meomeoshop',
    title: 'MeomeoShop',
    subtitle: 'Interactive Modern E-Commerce Experience',
    category: 'web-motion',
    description:
      'Cửa hàng thương mại điện tử hiện đại kết hợp micro-animations tinh tế ở từng thao tác giỏ hàng, bộ lọc sản phẩm tức thời và hiệu năng phản hồi cao.',
    tech: ['TypeScript', 'React', 'Micro-interactions', 'Vite'],
    repoUrl: 'https://github.com/NoneHhii/meomeoshop',
    visualType: 'pulse',
    year: '2026',
  },
  {
    id: 'chatbox-suite',
    title: 'Chatbox Realtime Suite',
    subtitle: 'Multi-Platform Messaging (Web + App + BE)',
    category: 'fullstack',
    description:
      'Hệ sinh thái nhắn tin thời gian thực đồng bộ xuyên suốt giữa nền tảng Web, ứng dụng di động và máy chủ xử lý luồng sự kiện tức thì.',
    tech: ['TypeScript', 'JavaScript', 'React', 'Realtime API'],
    repoUrl: 'https://github.com/NoneHhii/chatbox-app',
    visualType: 'nodes',
    year: '2025',
  },
  {
    id: 'vidimi-bughunter',
    title: 'Vidimi & Bug Hunter',
    subtitle: 'Creative Media & Interactive Logic Lab',
    category: 'web-motion',
    description:
      'Tổ hợp dự án thử nghiệm tương tác đa phương tiện (Vidimi) và gamification săn lỗi phần mềm (Bug Hunter) thể hiện tinh thần tự do sáng tạo.',
    tech: ['TypeScript', 'Canvas / Animation', 'Creative Dev'],
    repoUrl: 'https://github.com/NoneHhii/vidimi',
    visualType: 'matrix',
    year: '2026',
  },
]
