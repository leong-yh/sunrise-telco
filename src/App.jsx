import React, { useState } from 'react';
import { 
  Sun, 
  BarChart3, 
  Megaphone, 
  MousePointerClick, 
  CheckCircle2, 
  Menu, 
  X, 
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Video,
  Target,
  MessageCircle,
  Lock,
  Globe
} from 'lucide-react';

const translations = {
  en: {
    nav: { services: "Services", about: "About Us", work: "Our Work", proposal: "Get a Proposal" },
    hero: {
      badge: "Strictly One Client Per Industry",
      title1: "We Scale Service Brands With",
      title2: "High-Performance Meta Ads",
      desc: "Stop burning your budget on generic campaigns. We combine scroll-stopping creatives, precise Meta targeting, and proven WhatsApp closing flows to turn clicks into high-paying clients.",
      cta1: "Claim Your Industry",
      cta2: "See Our 3-Step Process"
    },
    stats: [
      { value: "100%", label: "Exclusive Partnerships" },
      { value: "3x", label: "Average Lead Volume" },
      { value: "40%", label: "Lower Cost Per Result" },
      { value: "85%", label: "WhatsApp Close Rate" }
    ],
    servicesSection: {
      badge: "Our 3-Pillar System",
      title: "Everything you need to scale on Meta.",
      desc: "We handle the entire acquisition funnel for service businesses—from the first impression to the final closed deal on WhatsApp.",
      items: [
        { title: "Performance Creatives", description: "We design high-converting images and short-form Reels engineered to stop the scroll and attract your exact right audience." },
        { title: "Meta Campaign Management", description: "Expert media buying focused on efficiency. We scale your campaigns and optimize targeting without burning your cost per result." },
        { title: "WhatsApp Closing Flow", description: "Generating leads isn't enough. We build and assist with proven WhatsApp closing flows to turn your service leads into paying customers." }
      ]
    },
    workSection: {
      badge: "Our Clients",
      title: "Brands We've Scaled",
      desc: "We partner with ambitious service businesses to dominate their respective industries. Here are the numbers that matter.",
      clients: [
        { name: "MerSlim", logo: "/logo.jpg", tag: "Health & Wellness", m1: "+315%", m1Label: "Lead Volume", m2: "4.5x", m2Label: "ROAS" },
        { name: "MKA Cabinet Concept", logo: "/logo .jpeg", tag: "Home & Interior", m1: "-42%", m1Label: "Cost Per Lead", m2: "More", m2Label: "Precise Quality Leads" },
        { name: "Genesis Academy", logo: "/Genesis Academy logo ( transparent background) 1.jpg", tag: "Education", m1: "5x", m1Label: "WhatsApp Replies", m2: "-50%", m2Label: "Cost Per Lead" },
        { name: "Le Classic", logo: "/Le Classic Logo-Vertical WhiteBG.jpg", tag: "Premium Salon", m1: "+280%", m1Label: "Bookings", m2: "5.2x", m2Label: "ROAS" },
        { name: "Black Hair Expert", logo: "/BHE Logo PNG.png", tag: "Hair Care", m1: "+33%", m1Label: "Closing Rate", m2: "3x", m2Label: "Revenue Growth" }
      ]
    },
    about: {
      badge: "The Golden Rule",
      title: "One Industry.\nOne Client. No Exceptions.",
      desc: "We absolutely hate the \"copy and paste\" agency model. We refuse to run the same ads for you that we run for your competitor. When you partner with us, we lock out your industry. Your success is our sole focus.",
      list: [
        "Exclusive partnership in your exact niche",
        "No recycled templates or copy-paste ads",
        "Custom creatives tailored to your exact service",
        "We become an extension of your closing team"
      ]
    },
    contact: {
      title: "Ready to scale your business?",
      desc: "Book a free strategy call with our team. We'll audit your current marketing efforts and show you exactly how we can help you grow.",
      email: "Email Us",
      whatsapp: "WhatsApp Us",
      waBtn: "Chat on WhatsApp",
      visit: "Visit Us",
      fName: "First Name",
      lName: "Last Name",
      workEmail: "Work Email",
      budget: "Monthly Marketing Budget",
      budgetOpts: ["Under RM 5,000", "RM 5,000 - RM 10,000", "RM 10,000 - RM 25,000", "RM 25,000+"],
      help: "How can we help?",
      helpPlaceholder: "Tell us about your goals...",
      btnIdle: "Get My Free Proposal",
      btnSubmitting: "Sending...",
      btnSuccess: "Message Sent!"
    },
    footer: {
      desc: "A performance marketing agency exclusively dedicated to scaling service brands on Meta, without the copy-and-paste strategies.",
      contact: "Contact",
      fb: "Facebook Page",
      company: "Company",
      rule: "The Golden Rule",
      process: "Our Process",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service"
    }
  },
  zh: {
    nav: { services: "核心服务", about: "关于我们", work: "成功案例", proposal: "获取专属方案" },
    hero: {
      badge: "严格遵守同行业唯一客户原则",
      title1: "通过高转化Meta广告",
      title2: "助力服务型企业规模化增长",
      desc: "停止在无效广告上浪费预算。我们结合吸睛的创意、精准的受众定位以及经过验证的WhatsApp成交话术，将点击转化为高客单价客户。",
      cta1: "抢占您的行业名额",
      cta2: "查看我们的三步流程"
    },
    stats: [
      { value: "100%", label: "独家行业合作" },
      { value: "3x", label: "平均线索量提升" },
      { value: "40%", label: "降低单次获客成本" },
      { value: "85%", label: "WhatsApp 成交率" }
    ],
    servicesSection: {
      badge: "三大核心体系",
      title: "在Meta平台上实现规模化增长的必备要素。",
      desc: "我们为您处理整个客户获取漏斗——从首次曝光到最终在WhatsApp上完成交易。",
      items: [
        { title: "高转化创意设计", description: "我们设计高转化的图片和短视频Reels，旨在吸引精准目标受众的注意力，让他们停止滑动屏幕。" },
        { title: "Meta广告投放管理", description: "专注于投资回报率的专家级媒体购买。我们在不增加单次转化成本的情况下，扩大广告规模并优化受众定位。" },
        { title: "WhatsApp成交漏斗", description: "仅仅获取线索是不够的。我们建立并协助提供经过验证的WhatsApp成交话术，将服务线索转化为付费客户。" }
      ]
    },
    workSection: {
      badge: "合作品牌",
      title: "我们的成功案例与数据",
      desc: "我们与各行业优秀的服务型企业合作，用真实的数据打破增长瓶颈。",
      clients: [
        { name: "MerSlim", logo: "/logo.jpg", tag: "健康与瘦身", m1: "+315%", m1Label: "线索量暴涨", m2: "4.5x", m2Label: "广告回报率(ROAS)" },
        { name: "MKA Cabinet Concept", logo: "/logo .jpeg", tag: "室内与定制橱柜", m1: "-42%", m1Label: "单次获客成本", m2: "更精准", m2Label: "高质量线索" },
        { name: "Genesis Academy", logo: "/Genesis Academy logo ( transparent background) 1.jpg", tag: "教育与培训", m1: "5x", m1Label: "WhatsApp回复率", m2: "-50%", m2Label: "单次获客成本" },
        { name: "Le Classic", logo: "/Le Classic Logo-Vertical WhiteBG.jpg", tag: "高端美发沙龙", m1: "+280%", m1Label: "预约客流量", m2: "5.2x", m2Label: "广告回报率(ROAS)" },
        { name: "Black Hair Expert", logo: "/BHE Logo PNG.png", tag: "头皮与脱发理疗", m1: "+33%", m1Label: "成交率提升", m2: "3x", m2Label: "总营业额增长" }
      ]
    },
    about: {
      badge: "黄金法则",
      title: "一个行业。\n一个客户。绝无例外。",
      desc: "我们极其反感“复制粘贴”的代运营模式。我们拒绝为您和您的竞争对手投放相同的广告。当您与我们合作时，我们将锁定您的行业。您的成功是我们唯一的关注点。",
      list: [
        "在您精准细分市场的独家合作",
        "拒绝套用模板或复制粘贴广告",
        "为您量身定制专属的广告创意",
        "我们成为您销售团队的延伸"
      ]
    },
    contact: {
      title: "准备好扩大您的业务规模了吗？",
      desc: "预约与我们团队的免费策略咨询。我们将审核您目前的营销工作，并确切展示我们如何帮助您实现业务增长。",
      email: "发送邮件",
      whatsapp: "WhatsApp 联系",
      waBtn: "点击发送 WhatsApp",
      visit: "访问我们",
      fName: "名字",
      lName: "姓氏",
      workEmail: "工作邮箱",
      budget: "每月营销预算",
      budgetOpts: ["RM 5,000 以下", "RM 5,000 - RM 10,000", "RM 10,000 - RM 25,000", "RM 25,000+"],
      help: "我们能帮到您什么？",
      helpPlaceholder: "告诉我们您的目标...",
      btnIdle: "获取免费专属方案",
      btnSubmitting: "发送中...",
      btnSuccess: "发送成功！"
    },
    footer: {
      desc: "一家专注于在Meta上扩展服务型品牌的效果营销机构，坚决向复制粘贴策略说不。",
      contact: "联系我们",
      fb: "Facebook 主页",
      company: "公司信息",
      rule: "黄金法则",
      process: "我们的流程",
      rights: "保留所有权利。",
      privacy: "隐私政策",
      terms: "服务条款"
    }
  }
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');
  
  // Language State
  const [lang, setLang] = useState('en');
  const t = translations[lang];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const services = [
    { ...t.servicesSection.items[0], icon: <Video className="w-6 h-6 text-rose-700" /> },
    { ...t.servicesSection.items[1], icon: <Target className="w-6 h-6 text-rose-700" /> },
    { ...t.servicesSection.items[2], icon: <MessageCircle className="w-6 h-6 text-rose-700" /> }
  ];

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.jpeg" alt="Sunrise Telco" className="h-10 md:h-12 w-auto object-contain mix-blend-multiply" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-stone-600 hover:text-rose-700 font-medium transition-colors">{t.nav.services}</a>
              <a href="#about" className="text-stone-600 hover:text-rose-700 font-medium transition-colors">{t.nav.about}</a>
              <a href="#work" className="text-stone-600 hover:text-rose-700 font-medium transition-colors">{t.nav.work}</a>
              <a href="#contact" className="bg-rose-700 text-white px-6 py-2.5 rounded-full font-medium hover:bg-rose-800 transition-all shadow-lg shadow-rose-200">
                {t.nav.proposal}
              </a>
              <button 
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="flex items-center gap-1.5 text-stone-600 hover:text-rose-700 font-medium ml-4 border-l border-stone-300 pl-6 transition-colors"
              >
                <Globe className="w-4 h-4" /> {lang === 'en' ? '中文' : 'EN'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button 
                onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
                className="flex items-center gap-1.5 text-stone-600 font-medium"
              >
                <Globe className="w-4 h-4" /> {lang === 'en' ? '中' : 'EN'}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-stone-600 hover:text-stone-900 focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-stone-200 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-stone-600 hover:text-rose-700 hover:bg-stone-50 rounded-md font-medium">{t.nav.services}</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-stone-600 hover:text-rose-700 hover:bg-stone-50 rounded-md font-medium">{t.nav.about}</a>
              <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-stone-600 hover:text-rose-700 hover:bg-stone-50 rounded-md font-medium">{t.nav.work}</a>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 mt-4 text-center bg-rose-700 text-white rounded-md font-medium">{t.nav.proposal}</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-stone-50 to-stone-50 opacity-70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-100 text-rose-800 font-medium text-sm mb-8">
              <Lock className="w-4 h-4" />
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-stone-900 mb-8 leading-tight">
              {t.hero.title1} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-orange-500">
                {t.hero.title2}
              </span>
            </h1>
            <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {t.hero.desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-rose-700 hover:bg-rose-800 text-white rounded-full font-semibold text-lg transition-all shadow-xl shadow-rose-200 flex items-center justify-center gap-2">
                {t.hero.cta1} <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#work" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-stone-50 text-stone-700 border border-stone-200 rounded-full font-semibold text-lg transition-all flex items-center justify-center">
                {t.hero.cta2}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-rose-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            {t.stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-rose-200 font-medium text-sm md:text-base uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-rose-700 font-semibold tracking-wide uppercase mb-3">{t.servicesSection.badge}</h2>
            <h3 className="text-4xl font-bold text-stone-900 mb-6">{t.servicesSection.title}</h3>
            <p className="text-lg text-stone-600">{t.servicesSection.desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-stone-50 rounded-2xl p-8 border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">{service.title}</h4>
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-rose-700 font-semibold tracking-wide uppercase mb-3">{t.about.badge}</h2>
              <h3 className="text-4xl font-bold text-stone-900 mb-6 leading-tight whitespace-pre-line">{t.about.title}</h3>
              <p className="text-lg text-stone-600 mb-8">
                {t.about.desc}
              </p>
              
              <div className="space-y-4">
                {t.about.list.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                    <span className="text-stone-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-rose-700 rounded-3xl translate-x-4 translate-y-4 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Exclusive Strategy Meeting" 
                className="rounded-3xl relative z-10 w-full object-cover shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Work / Case Studies Section */}
      <section id="work" className="py-24 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-rose-700 font-semibold tracking-wide uppercase mb-3">{t.workSection.badge}</h2>
            <h3 className="text-4xl font-bold text-stone-900 mb-6">{t.workSection.title}</h3>
            <p className="text-lg text-stone-600">{t.workSection.desc}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.workSection.clients.map((client, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg shadow-stone-200/50 border border-stone-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col">
                
                {/* Logo Area */}
                <div className="h-24 flex items-center justify-center mb-6">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-[80%] object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                
                {/* Industry Tag */}
                <div className="text-center mb-8">
                  <span className="text-xs font-bold bg-rose-50 text-rose-700 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {client.tag}
                  </span>
                </div>
                
                {/* Metrics Area */}
                <div className="grid grid-cols-2 gap-4 border-t border-stone-100 pt-6 mt-auto">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-1">{client.m1}</div>
                    <div className="text-xs md:text-sm text-stone-500 font-medium">{client.m1Label}</div>
                  </div>
                  <div className="text-center border-l border-stone-100">
                    <div className="text-2xl md:text-3xl font-extrabold text-stone-900 mb-1">{client.m2}</div>
                    <div className="text-xs md:text-sm text-stone-500 font-medium">{client.m2Label}</div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.contact.title}</h2>
                <p className="text-stone-300 text-lg mb-10">
                  {t.contact.desc}
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-stone-800 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-rose-400" />
                    </div>
                    <div>
                      <div className="text-stone-400 text-sm">{t.contact.email}</div>
                      <div className="font-medium text-lg">leong@sunrisetelco.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-stone-800 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-rose-400" />
                    </div>
                    <div>
                      <div className="text-stone-400 text-sm">{t.contact.whatsapp}</div>
                      <div className="font-medium text-lg">+60 11-2626 4139</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-stone-800 p-3 rounded-full">
                      <MapPin className="w-6 h-6 text-rose-400" />
                    </div>
                    <div>
                      <div className="text-stone-400 text-sm">{t.contact.visit}</div>
                      <div className="font-medium text-base">22-1, Jln Radin Bagus 3,<br/>Bandar Baru Sri Petaling,<br/>57000 Kuala Lumpur</div>
                    </div>
                  </div>
                  
                  <div className="pt-6">
                    <a href="https://wa.me/601126264139" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1ebd57] text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-[#25D366]/20">
                      <MessageCircle className="w-6 h-6" /> {t.contact.waBtn}
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-stone-50 p-12 lg:p-16">
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.fName}</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-700 focus:border-rose-700 outline-none transition-all" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.lName}</label>
                      <input required type="text" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-700 focus:border-rose-700 outline-none transition-all" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.workEmail}</label>
                    <input required type="email" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-700 focus:border-rose-700 outline-none transition-all" placeholder="john@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.budget}</label>
                    <select className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-700 focus:border-rose-700 outline-none transition-all bg-white">
                      {t.contact.budgetOpts.map((opt, i) => (
                        <option key={i}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">{t.contact.help}</label>
                    <textarea required rows="4" className="w-full px-4 py-3 rounded-lg border border-stone-200 focus:ring-2 focus:ring-rose-700 focus:border-rose-700 outline-none transition-all resize-none" placeholder={t.contact.helpPlaceholder}></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit" 
                    className="w-full bg-rose-700 hover:bg-rose-800 text-white font-semibold py-4 rounded-lg transition-all shadow-lg shadow-rose-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {formStatus === 'idle' && t.contact.btnIdle}
                    {formStatus === 'submitting' && t.contact.btnSubmitting}
                    {formStatus === 'success' && <><CheckCircle2 className="w-5 h-5"/> {t.contact.btnSuccess}</>}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="inline-block mb-6 bg-white p-3 rounded-xl">
                <img src="/logo.jpeg" alt="Sunrise Telco" className="h-10 md:h-12 w-auto object-contain" />
              </div>
              <p className="mb-4 max-w-sm">{t.footer.desc}</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.contact}</h4>
              <ul className="space-y-2">
                <li><a href="https://www.facebook.com/mybossleong" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">{t.footer.fb}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">{t.nav.proposal}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.footer.company}</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="hover:text-white transition-colors">{t.footer.rule}</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">{t.footer.process}</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div>&copy; {new Date().getFullYear()} Sunrise Telco. {t.footer.rights}</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}