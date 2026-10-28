/*
 * Roleport 求职资源正式数据
 * 只放已经人工审核通过、且官方链接确认过的资源。
 * 新增资源请先在 research/resource-candidates 审核，再复制到这里。
 *
 * language: zh | en | bilingual
 * region: cn | global | remote
 * category: general | tech | web3 | remote | freelance | community | resume | learning
 * secondaryCategories: 可选，用于记录平台的附加属性；分类筛选也会命中所选项。
 */
window.ROLEPORT_RESOURCES = [
  {
    "id": "boss-zhipin",
    "name": "BOSS直聘",
    "domain": "zhipin.com",
    "url": "https://www.zhipin.com/",
    "category": "general",
    "language": "zh",
    "region": "cn",
    "letter": "B",
    "tone": "green",
    "desc": {
      "zh": "中文综合招聘平台，支持直接与招聘方沟通，可搜索 Web3 相关岗位。",
      "en": "Chinese job platform with direct recruiter messaging and searchable Web3 roles."
    }
  },
  {
    "id": "liepin",
    "name": "猎聘",
    "domain": "liepin.com",
    "url": "https://www.liepin.com/",
    "category": "general",
    "language": "zh",
    "region": "cn",
    "letter": "L",
    "tone": "blue",
    "desc": {
      "zh": "面向中高端人才和互联网岗位的中文招聘平台。",
      "en": "Chinese recruitment platform focused on mid-to-senior and internet roles."
    }
  },
  {
    "id": "nowcoder",
    "name": "牛客网",
    "domain": "nowcoder.com",
    "url": "https://www.nowcoder.com/",
    "category": "tech",
    "language": "zh",
    "region": "cn",
    "letter": "N",
    "tone": "orange",
    "desc": {
      "zh": "技术求职社区，提供岗位、面经、题库和内推信息。",
      "en": "Chinese tech career community with jobs, interview notes, tests, and referrals."
    },
    "secondaryCategories": [
      "community"
    ]
  },
  {
    "id": "shixiseng",
    "name": "实习僧",
    "domain": "shixiseng.com",
    "url": "https://www.shixiseng.com/",
    "category": "general",
    "language": "zh",
    "region": "cn",
    "letter": "S",
    "tone": "green",
    "desc": {
      "zh": "面向大学生实习和校招的中文求职平台。",
      "en": "Chinese platform for internships and graduate hiring."
    }
  },
  {
    "id": "eleduck",
    "name": "电鸭社区",
    "domain": "eleduck.com",
    "url": "https://eleduck.com/",
    "category": "community",
    "language": "zh",
    "region": "cn",
    "letter": "D",
    "tone": "yellow",
    "desc": {
      "zh": "面向中文用户的远程工作和自由职业社区。",
      "en": "Chinese remote-work and freelance community."
    },
    "secondaryCategories": [
      "remote"
    ]
  },
  {
    "id": "dejob",
    "name": "DeJob",
    "domain": "dejob.ai",
    "url": "https://dejob.ai/job",
    "category": "web3",
    "language": "bilingual",
    "region": "remote",
    "letter": "D",
    "tone": "blue",
    "desc": {
      "zh": "中文友好的 Web3 与远程岗位招聘平台。",
      "en": "Chinese-friendly job platform focused on Web3 and remote roles."
    },
    "secondaryCategories": [
      "remote"
    ]
  },
  {
    "id": "learnblockchain-jobs",
    "name": "登链社区招聘",
    "domain": "learnblockchain.cn",
    "url": "https://learnblockchain.cn/jobs/",
    "category": "web3",
    "language": "zh",
    "region": "cn",
    "letter": "链",
    "tone": "violet",
    "desc": {
      "zh": "中文区块链社区招聘板块，同时提供技术文章、课程和面试资料。",
      "en": "Chinese blockchain community job board with articles, courses, and interview resources."
    },
    "secondaryCategories": [
      "learning"
    ]
  },
  {
    "id": "cryptocurrencyjobs",
    "name": "Cryptocurrency Jobs",
    "domain": "cryptocurrencyjobs.co",
    "url": "https://cryptocurrencyjobs.co/",
    "category": "web3",
    "language": "en",
    "region": "global",
    "letter": "C",
    "tone": "orange",
    "desc": {
      "zh": "专注加密货币和区块链岗位的英文招聘平台。",
      "en": "English job board focused on cryptocurrency and blockchain roles."
    }
  },
  {
    "id": "linkedin-jobs",
    "name": "LinkedIn Jobs",
    "domain": "linkedin.com/jobs",
    "url": "https://www.linkedin.com/jobs/",
    "category": "general",
    "language": "en",
    "region": "global",
    "letter": "in",
    "tone": "blue",
    "desc": {
      "zh": "全球职位搜索与职业社交平台。",
      "en": "Global job search and professional networking platform."
    }
  },
  {
    "id": "indeed",
    "name": "Indeed",
    "domain": "indeed.com",
    "url": "https://www.indeed.com/",
    "category": "general",
    "language": "en",
    "region": "global",
    "letter": "I",
    "tone": "orange",
    "desc": {
      "zh": "覆盖多个地区和行业的综合招聘平台。",
      "en": "A broad job board covering many industries and regions."
    }
  },
  {
    "id": "glassdoor",
    "name": "Glassdoor",
    "domain": "glassdoor.com",
    "url": "https://www.glassdoor.com/",
    "category": "general",
    "language": "en",
    "region": "global",
    "letter": "G",
    "tone": "green",
    "desc": {
      "zh": "搜索职位并查看公司评价与薪资信息。",
      "en": "Search jobs and research companies, reviews, and salary data."
    }
  },
  {
    "id": "wellfound",
    "name": "Wellfound",
    "domain": "wellfound.com",
    "url": "https://wellfound.com/",
    "category": "tech",
    "language": "en",
    "region": "global",
    "letter": "W",
    "tone": "violet",
    "desc": {
      "zh": "面向初创公司与科技人才的招聘平台。",
      "en": "A hiring platform focused on startups and technology talent."
    }
  },
  {
    "id": "levels-fyi",
    "name": "Levels.fyi",
    "domain": "levels.fyi",
    "url": "https://www.levels.fyi/",
    "category": "tech",
    "language": "en",
    "region": "global",
    "letter": "L",
    "tone": "blue",
    "desc": {
      "zh": "查看科技公司职级与薪资对比。",
      "en": "Compare technology company levels and compensation."
    }
  },
  {
    "id": "dice",
    "name": "Dice",
    "domain": "dice.com",
    "url": "https://www.dice.com/",
    "category": "tech",
    "language": "en",
    "region": "global",
    "letter": "D",
    "tone": "orange",
    "desc": {
      "zh": "聚焦技术岗位与科技行业机会。",
      "en": "A job board focused on technology roles and careers."
    }
  },
  {
    "id": "web3-career",
    "name": "Web3.career",
    "domain": "web3.career",
    "url": "https://web3.career/",
    "category": "web3",
    "language": "en",
    "region": "global",
    "letter": "3",
    "tone": "violet",
    "desc": {
      "zh": "Web3 与加密行业职位聚合平台。",
      "en": "A job board for Web3 and crypto industry roles."
    }
  },
  {
    "id": "cryptojobslist",
    "name": "CryptoJobsList",
    "domain": "cryptojobslist.com",
    "url": "https://cryptojobslist.com/",
    "category": "web3",
    "language": "en",
    "region": "global",
    "letter": "C",
    "tone": "yellow",
    "desc": {
      "zh": "区块链与加密领域职位信息。",
      "en": "Blockchain and cryptocurrency job listings."
    },
    "secondaryCategories": [
      "remote"
    ]
  },
  {
    "id": "remote3",
    "name": "Remote3",
    "domain": "remote3.co",
    "url": "https://remote3.co/",
    "category": "web3",
    "language": "en",
    "region": "global",
    "letter": "R",
    "tone": "green",
    "desc": {
      "zh": "Web3 远程岗位与人才社区。",
      "en": "Remote Web3 jobs and a talent community."
    },
    "secondaryCategories": [
      "remote"
    ]
  },
  {
    "id": "remote-ok",
    "name": "Remote OK",
    "domain": "remoteok.com",
    "url": "https://remoteok.com/",
    "category": "remote",
    "language": "en",
    "region": "global",
    "letter": "R",
    "tone": "green",
    "desc": {
      "zh": "远程技术岗位与团队招聘信息。",
      "en": "Remote technology jobs and hiring information."
    }
  },
  {
    "id": "we-work-remotely",
    "name": "We Work Remotely",
    "domain": "weworkremotely.com",
    "url": "https://weworkremotely.com/",
    "category": "remote",
    "language": "en",
    "region": "global",
    "letter": "W",
    "tone": "blue",
    "desc": {
      "zh": "覆盖多个职能的远程工作平台。",
      "en": "A large remote work board across multiple functions."
    }
  },
  {
    "id": "remotive",
    "name": "Remotive",
    "domain": "remotive.com",
    "url": "https://remotive.com/",
    "category": "remote",
    "language": "en",
    "region": "global",
    "letter": "R",
    "tone": "orange",
    "desc": {
      "zh": "精选远程岗位与远程工作资源。",
      "en": "Curated remote jobs and remote work resources."
    }
  },
  {
    "id": "upwork",
    "name": "Upwork",
    "domain": "upwork.com",
    "url": "https://www.upwork.com/",
    "category": "freelance",
    "language": "en",
    "region": "global",
    "letter": "U",
    "tone": "green",
    "desc": {
      "zh": "自由职业项目与远程合作机会。",
      "en": "Freelance projects and remote collaboration opportunities."
    }
  },
  {
    "id": "fiverr",
    "name": "Fiverr",
    "domain": "fiverr.com",
    "url": "https://www.fiverr.com/",
    "category": "freelance",
    "language": "en",
    "region": "global",
    "letter": "F",
    "tone": "violet",
    "desc": {
      "zh": "发布与购买技能服务的自由职业平台。",
      "en": "A marketplace for freelance services and skills."
    }
  },
  {
    "id": "superteam-earn",
    "name": "Superteam Earn",
    "domain": "earn.superteam.fun",
    "url": "https://earn.superteam.fun/",
    "category": "freelance",
    "language": "en",
    "region": "global",
    "letter": "S",
    "tone": "yellow",
    "desc": {
      "zh": "Web3 生态的赏金任务与项目机会。",
      "en": "Bounties and project opportunities across Web3 ecosystems."
    },
    "secondaryCategories": [
      "web3"
    ]
  },
  {
    "id": "resume-worded",
    "name": "Resume Worded",
    "domain": "resumeworded.com",
    "url": "https://resumeworded.com/",
    "category": "resume",
    "language": "en",
    "region": "global",
    "letter": "R",
    "tone": "blue",
    "desc": {
      "zh": "简历评分与求职材料优化建议。",
      "en": "Resume scoring and job application feedback."
    }
  },
  {
    "id": "interview-warmup",
    "name": "Interview Warmup",
    "domain": "grow.google",
    "url": "https://grow.google/certificates/interview-warmup/",
    "category": "resume",
    "language": "en",
    "region": "global",
    "letter": "I",
    "tone": "green",
    "desc": {
      "zh": "Google 提供的模拟面试练习工具。",
      "en": "A practice tool for job interviews from Google."
    }
  },
  {
    "id": "the-muse",
    "name": "The Muse",
    "domain": "themuse.com",
    "url": "https://www.themuse.com/",
    "category": "resume",
    "language": "en",
    "region": "global",
    "letter": "M",
    "tone": "orange",
    "desc": {
      "zh": "职业建议、公司信息与面试资源。",
      "en": "Career advice, company research, and interview resources."
    }
  },
  {
    "id": "freecodecamp",
    "name": "freeCodeCamp",
    "domain": "freecodecamp.org",
    "url": "https://www.freecodecamp.org/",
    "category": "learning",
    "language": "en",
    "region": "global",
    "letter": "F",
    "tone": "orange",
    "desc": {
      "zh": "免费编程课程与项目实践。",
      "en": "Free coding curriculum and project-based practice."
    }
  },
  {
    "id": "coursera",
    "name": "Coursera",
    "domain": "coursera.org",
    "url": "https://www.coursera.org/",
    "category": "learning",
    "language": "en",
    "region": "global",
    "letter": "C",
    "tone": "blue",
    "desc": {
      "zh": "大学与企业提供的在线课程平台。",
      "en": "Online courses from universities and companies."
    }
  },
  {
    "id": "mdn-web-docs",
    "name": "MDN Web Docs",
    "domain": "developer.mozilla.org",
    "url": "https://developer.mozilla.org/",
    "category": "learning",
    "language": "en",
    "region": "global",
    "letter": "M",
    "tone": "violet",
    "desc": {
      "zh": "Web 开发文档与学习资料。",
      "en": "Web development documentation and learning materials."
    }
  },
  {
    "id": "tt3labs",
    "name": "TT3 Labs",
    "domain": "tt3labs.com",
    "url": "https://tt3labs.com/search",
    "category": "web3",
    "language": "bilingual",
    "region": "remote",
    "letter": "T",
    "tone": "green",
    "desc": {
      "zh": "聚焦 AI、Web3 和 FinTech 的远程岗位搜索平台。",
      "en": "Remote job search focused on AI, Web3, and FinTech."
    },
    "secondaryCategories": [
      "remote"
    ]
  },
  {
    "id": "job3",
    "name": "Job3",
    "domain": "job3.co",
    "url": "https://job3.co/",
    "category": "web3",
    "language": "en",
    "region": "global",
    "letter": "J",
    "tone": "blue",
    "desc": {
      "zh": "Web3 与加密货币岗位平台，提供区块链职位搜索。",
      "en": "Web3 and crypto careers job board."
    }
  },
  {
    "id": "cryptojobs-com",
    "name": "Crypto Jobs",
    "domain": "cryptojobs.com",
    "url": "https://cryptojobs.com/",
    "category": "web3",
    "language": "en",
    "region": "global",
    "letter": "C",
    "tone": "orange",
    "desc": {
      "zh": "海外加密行业综合求职平台。",
      "en": "International crypto industry job board."
    }
  },
  {
    "id": "sailonchain",
    "name": "SailOnchain",
    "domain": "sailonchain.com",
    "url": "https://sailonchain.com/",
    "category": "web3",
    "language": "en",
    "region": "global",
    "letter": "S",
    "tone": "violet",
    "desc": {
      "zh": "Web3 与区块链岗位聚合平台。",
      "en": "Web3 and blockchain jobs aggregator."
    }
  },
  {
    "id": "web3-club-github",
    "name": "Web3 招聘平台汇总",
    "domain": "github.com",
    "url": "https://github.com/WorkWorkLabs/Web3-Recruitment-Platform",
    "category": "community",
    "language": "bilingual",
    "region": "global",
    "letter": "W",
    "tone": "green",
    "desc": {
      "zh": "整理中文 Web3 招聘平台、频道和求职入口的开源仓库。",
      "en": "Open-source directory of Chinese Web3 job platforms and channels."
    },
    "secondaryCategories": [
      "web3"
    ]
  },
  {
    "id": "rebase-hire",
    "name": "Rebase Who Is Hiring",
    "domain": "hire.rebase.network",
    "url": "https://hire.rebase.network/",
    "category": "web3",
    "language": "zh",
    "region": "cn",
    "letter": "R",
    "tone": "blue",
    "desc": {
      "zh": "中文 Web3 技术社区招聘板。",
      "en": "Chinese Web3 community job board."
    },
    "secondaryCategories": [
      "community"
    ]
  },
  {
    "id": "tintin-job-board",
    "name": "TinTin Job Board",
    "domain": "github.com",
    "url": "https://github.com/OurTinTinLand/TinTin-Job-Board",
    "category": "web3",
    "language": "bilingual",
    "region": "cn",
    "letter": "T",
    "tone": "yellow",
    "desc": {
      "zh": "TinTinLand 社区维护的 Web3 招聘板。",
      "en": "Web3 job board maintained by the TinTinLand community."
    },
    "secondaryCategories": [
      "community"
    ]
  },
  {
    "id": "blockjob-x",
    "name": "Block Job",
    "domain": "x.com",
    "url": "https://x.com/blockjob2022",
    "category": "community",
    "language": "zh",
    "region": "remote",
    "letter": "B",
    "tone": "yellow",
    "desc": {
      "zh": "Web3 社区求职账号，发布技术和运营岗位信息。",
      "en": "Web3 community account for technical and operations jobs."
    },
    "secondaryCategories": [
      "web3"
    ]
  },
  {
    "id": "foya-tg",
    "name": "远程工作与远程技术岗位",
    "domain": "t.me",
    "url": "https://t.me/foya0002",
    "category": "community",
    "language": "zh",
    "region": "remote",
    "letter": "远",
    "tone": "green",
    "desc": {
      "zh": "中文远程工作和技术岗位 Telegram 频道。",
      "en": "Chinese remote-work and technology jobs Telegram channel."
    },
    "secondaryCategories": [
      "remote"
    ]
  },
  {
    "id": "web3fun-tg",
    "name": "Web3Fun 招聘求职",
    "domain": "t.me",
    "url": "https://t.me/web3Fun_Jobs",
    "category": "community",
    "language": "zh",
    "region": "remote",
    "letter": "W",
    "tone": "orange",
    "desc": {
      "zh": "Web3 招聘与求职信息搬运 Telegram 频道。",
      "en": "Web3 jobs and recruiting Telegram channel."
    },
    "secondaryCategories": [
      "web3"
    ]
  },
  {
    "id": "web3jobs-ari-tg",
    "name": "web3星辰汇",
    "domain": "t.me",
    "url": "https://t.me/web3jobs_Ari",
    "category": "community",
    "language": "zh",
    "region": "remote",
    "letter": "星",
    "tone": "violet",
    "desc": {
      "zh": "交易所相关 Web3 招聘求职 Telegram 频道。",
      "en": "Web3 and exchange jobs Telegram channel."
    },
    "secondaryCategories": [
      "web3"
    ]
  },
  {
    "id": "dejob-official-tg",
    "name": "DeJob 官方频道",
    "domain": "t.me",
    "url": "https://t.me/DeJob_official",
    "category": "community",
    "language": "bilingual",
    "region": "remote",
    "letter": "D",
    "tone": "blue",
    "desc": {
      "zh": "DeJob 官方 Web3 招聘与求职 Telegram 频道。",
      "en": "Official DeJob Web3 jobs Telegram channel."
    },
    "secondaryCategories": [
      "web3",
      "remote"
    ]
  },
  {
    "id": "ysight-tg",
    "name": "YSight Talent",
    "domain": "t.me",
    "url": "https://t.me/YSight_Talent_web3_cn",
    "category": "community",
    "language": "bilingual",
    "region": "remote",
    "letter": "Y",
    "tone": "green",
    "desc": {
      "zh": "中文 Web3 招聘与求职 Telegram 社群。",
      "en": "Chinese bilingual Web3 jobs Telegram community."
    },
    "secondaryCategories": [
      "web3"
    ]
  },
  {
    "id": "dailyapehr-tg",
    "name": "DailyApeHR",
    "domain": "t.me",
    "url": "https://t.me/dailyapehr",
    "category": "community",
    "language": "bilingual",
    "region": "remote",
    "letter": "D",
    "tone": "orange",
    "desc": {
      "zh": "Web3 急招岗位 Telegram 社群。",
      "en": "Web3 urgent-hiring Telegram community."
    },
    "secondaryCategories": [
      "web3"
    ]
  },
  {
    "id": "metajob-tg",
    "name": "MetaJob Announcement",
    "domain": "t.me",
    "url": "https://t.me/MetaJob_Announcement",
    "category": "community",
    "language": "bilingual",
    "region": "remote",
    "letter": "M",
    "tone": "violet",
    "desc": {
      "zh": "多赛道 Web3 招聘信息 Telegram 频道。",
      "en": "Multi-sector Web3 jobs Telegram channel."
    },
    "secondaryCategories": [
      "web3",
      "remote"
    ]
  }
];
