(() => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Theme toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const setTheme = (isLight) => {
    if (isLight) {
      document.body.classList.add('light');
      if (themeIcon) themeIcon.textContent = '🌙';
    } else {
      document.body.classList.remove('light');
      if (themeIcon) themeIcon.textContent = '☀️';
    }
    try {
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    } catch (_) {}
  };

  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'light' || saved === 'dark') return saved === 'light';
    } catch (_) {}
    // Default to dark
    return false;
  };

  const initTheme = () => {
    const initialTheme = getInitialTheme();
    setTheme(initialTheme);
  };

  const bindThemeToggle = () => {
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const isLight = document.body.classList.contains('light');
        setTheme(!isLight);
      });
    }
  };

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTheme();
      bindThemeToggle();
    });
  } else {
    initTheme();
    bindThemeToggle();
  }

  // i18n
  const translations = {
    pt: {
      nav_service: 'Serviço',
      nav_stack: 'Stack',
      nav_systems: 'Sistemas',
      nav_process: 'Processo',
      nav_contact: 'Contato',
      cta_talk: 'Falar comigo',

      hero_badge: 'Full Stack Software Engineer',
      hero_title: 'Sistemas complexos em <span class="grad">Node.js</span> com JavaScript, MySQL, React e Bootstrap',
      hero_lead: 'Sou engenheiro de software focado em arquitetura backend usando Node.js e bancos relacionais. Tenho experiência construindo sistemas escaláveis, APIs REST, autenticação, segurança e deploy em cloud.',
      hero_btn_systems: 'Ver sistemas publicados',
      hero_btn_help: 'Como eu ajudo',
      hero_exp: 'Experiência profissional: Inova Comunicações Inteligentes (Software Engineer, desde 2018)',

      recruiter_summary: 'Resumo para recrutadores',
      ready_interview: 'Pronto para entrevista',
      k_focus: 'Foco',
      v_focus: 'Arquitetura backend (Node.js)',
      k_db: 'Banco',
      v_db: 'MySQL (modelagem e performance)',
      k_delivery: 'Entrega',
      v_delivery: 'MVP → evolução contínua',
      k_quality: 'Qualidade',
      v_quality: 'Segurança, performance e produção',

      deliver_title: 'O que eu entrego',
      deliver_sub: 'Aplicações completas e escaláveis, com uma base sólida para evoluir.',
      card_backend_title: 'Backend Node.js',
      card_backend_desc: 'APIs, regras de negócio, integrações e persistência de dados.',
      card_front_title: 'Front-end React',
      card_front_desc: 'Interfaces rápidas, responsivas e focadas em produtividade.',
      card_dash_title: 'Painéis e dashboards',
      card_dash_desc: 'Listagens, filtros, relatórios, permissões e fluxos completos.',
      card_deploy_title: 'Deploy e evolução',
      card_deploy_desc: 'Publicação, monitoramento básico e roadmap de melhorias.',

      stack_title: 'Stack principal',
      stack_sub: 'Ferramentas que uso para construir sistemas complexos com velocidade e consistência.',

      faq_title: 'O que recrutadores costumam perguntar',
      faq_q1: 'Você pega sistemas do zero ou manutenção?',
      faq_a1: 'Ambos. Consigo estruturar um MVP bem rápido e também entrar em código existente para corrigir, refatorar e evoluir sem quebrar o que já funciona.',
      faq_q2: 'Como você garante qualidade e previsibilidade?',
      faq_a2: 'Alinhamento de escopo, entregas pequenas, revisão de código, padronização e (quando faz sentido) testes e logs para evitar regressões.',
      faq_q3: 'Você tem exemplos reais no ar?',
      faq_a3: 'Sim. Logo abaixo estão dois sistemas publicados para avaliar UI, fluxo e robustez.',

      summary_title: 'Professional Summary',
      summary_body: 'Software Engineer focado em arquitetura backend com Node.js e bancos relacionais. Experiência construindo sistemas web escaláveis, APIs REST, autenticação e deploy em cloud. Forte base em otimização de performance, práticas de segurança e aplicações prontas para produção.',
      core_skills_title: 'Core Skills',
      exp_title: 'Professional Experience',
      exp_company: 'Inova Comunicações Inteligentes — Software Engineer (2018 → atual)',
      exp_b1: 'Desenvolvimento de sistemas com Node.js e MySQL.',
      exp_b2: 'Autenticação segura e controle de acesso por perfis (RBAC).',
      exp_b3: 'Dashboards e módulos de relatórios.',
      exp_b4: 'Otimização de consultas SQL e indexação.',

      cases_title: 'Sistemas publicados',
      cases_sub: 'Links reais para avaliação. Se quiser, eu posso disponibilizar credenciais de demonstração.',
      case1_desc: 'Sistema web com autenticação e fluxo de gestão.',
      case2_desc: 'Aplicação para operações e controle com login.',
      open_system: 'Abrir sistema',
      cases_note: 'Se algum link estiver indisponível no momento (manutenção do host), me avise que eu envio um vídeo curto de navegação ou subo uma demo alternativa.',

      process_title: 'Como eu trabalho',
      process_sub: 'Um processo simples para reduzir risco e acelerar entrega.',
      education: 'Formação: Bacharelado em Ciência da Computação — UNICEUB',
      p1_title: 'Diagnóstico rápido',
      p1_desc: 'Entender objetivo, usuários e regras de negócio.',
      p2_title: 'Plano de entrega',
      p2_desc: 'Fatiar por valor (MVP e próximas versões).',
      p3_title: 'Implementação',
      p3_desc: 'Front + back, validações, segurança (bcrypt/sessões/CSRF) e qualidade de código.',
      p4_title: 'Deploy e acompanhamento',
      p4_desc: 'Publicação (Railway/Netlify), CI/CD e ajustes com base em feedback real.',

      contact_title: 'Vamos conversar',
      contact_sub: 'Se você é recrutador(a) ou líder técnico(a), posso te passar mais detalhes do meu histórico, disponibilidade e contexto dos projetos.',
      contact_note: 'E-mail e LinkedIn acima para contato rápido.',
      refs_title: 'Referências profissionais'
    },
    en: {
      nav_service: 'Services',
      nav_stack: 'Stack',
      nav_systems: 'Projects',
      nav_process: 'Process',
      nav_contact: 'Contact',
      cta_talk: 'Contact me',

      hero_badge: 'Full Stack Software Engineer',
      hero_title: 'Complex systems in <span class="grad">Node.js</span> with JavaScript, MySQL, React and Bootstrap',
      hero_lead: 'I am a software engineer focused on backend architecture using Node.js and relational databases. I build scalable web systems, REST APIs, authentication, security and cloud deployments.',
      hero_btn_systems: 'View live systems',
      hero_btn_help: 'How I help',
      hero_exp: 'Professional experience: Inova Comunicações Inteligentes (Software Engineer, since 2018)',

      recruiter_summary: 'Recruiter summary',
      ready_interview: 'Interview-ready',
      k_focus: 'Focus',
      v_focus: 'Backend architecture (Node.js)',
      k_db: 'Database',
      v_db: 'MySQL (modeling and performance)',
      k_delivery: 'Delivery',
      v_delivery: 'MVP → continuous evolution',
      k_quality: 'Quality',
      v_quality: 'Security, performance and production',

      deliver_title: 'What I deliver',
      deliver_sub: 'Complete, scalable applications with a solid foundation to evolve.',
      card_backend_title: 'Node.js backend',
      card_backend_desc: 'APIs, business rules, integrations and data persistence.',
      card_front_title: 'React front-end',
      card_front_desc: 'Fast, responsive interfaces focused on productivity.',
      card_dash_title: 'Admin panels & dashboards',
      card_dash_desc: 'Listings, filters, reports, permissions and end-to-end flows.',
      card_deploy_title: 'Deployment & evolution',
      card_deploy_desc: 'Publishing, basic monitoring and an improvement roadmap.',

      stack_title: 'Main stack',
      stack_sub: 'Tools I use to build complex systems with speed and consistency.',

      faq_title: 'Common recruiter questions',
      faq_q1: 'Do you build from scratch or work on maintenance?',
      faq_a1: 'Both. I can structure an MVP quickly and also work on existing codebases to fix, refactor and evolve without breaking what already works.',
      faq_q2: 'How do you ensure quality and predictibility?',
      faq_a2: 'Scope alignment, small deliveries, code review, standardization and (when it makes sense) tests and logs to prevent regressions.',
      faq_q3: 'Do you have real live examples?',
      faq_a3: 'Yes. Below are two live systems to evaluate UI, flow and robustness.',

      summary_title: 'Professional Summary',
      summary_body: 'Software engineer focused on backend architecture using Node.js and relational databases. Experience building scalable web systems, REST APIs, authentication and cloud deployments. Strong background in performance optimization, security practices and production-ready applications.',
      core_skills_title: 'Core Skills',
      exp_title: 'Professional Experience',
      exp_company: 'Inova Comunicações Inteligentes — Software Engineer (2018 → present)',
      exp_b1: 'Designed and developed systems using Node.js and MySQL.',
      exp_b2: 'Implemented secure authentication and role-based access control (RBAC).',
      exp_b3: 'Built dashboards and reporting modules.',
      exp_b4: 'Optimized SQL queries and indexing for performance.',

      cases_title: 'Live systems',
      cases_sub: 'Real links for evaluation. If needed, I can provide demo credentials.',
      case1_desc: 'Web system with authentication and management flow.',
      case2_desc: 'Operations and fleet control application with login.',
      open_system: 'Open system',
      cases_note: 'If any link is temporarily unavailable (host maintenance), I can share a short walkthrough video or provide an alternative demo.',

      process_title: 'How I work',
      process_sub: 'A simple process to reduce risk and speed up delivery.',
      education: 'Education: Bachelor’s Degree in Computer Science — UNICEUB',
      p1_title: 'Quick discovery',
      p1_desc: 'Understand goals, users and business rules.',
      p2_title: 'Delivery plan',
      p2_desc: 'Slice by value (MVP and next versions).',
      p3_title: 'Implementation',
      p3_desc: 'Front + back, validations, security (bcrypt/sessions/CSRF) and code quality.',
      p4_title: 'Deployment & follow-up',
      p4_desc: 'Publishing (Railway/Netlify), CI/CD and improvements based on real feedback.',

      contact_title: "Let's talk",
      contact_sub: 'If you are a recruiter or a tech lead, I can share more details about my background, availability and project context.',
      contact_note: 'Email and LinkedIn above for quick contact.',
      refs_title: 'Professional references'
    }
  };

  const langPtBtn = document.getElementById('lang-pt');
  const langEnBtn = document.getElementById('lang-en');

  const setActiveLangUi = (lang) => {
    if (langPtBtn) langPtBtn.classList.toggle('active', lang === 'pt');
    if (langEnBtn) langEnBtn.classList.toggle('active', lang === 'en');
  };

  const applyLang = (lang) => {
    const dict = translations[lang] || translations.pt;
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const value = dict[key];
      if (typeof value === 'string') el.innerHTML = value;
    });

    setActiveLangUi(lang);
    try {
      localStorage.setItem('lang', lang);
    } catch (_) {
      // ignore
    }
  };

  const getInitialLang = () => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'pt' || saved === 'en') return saved;
    } catch (_) {
      // ignore
    }
    const nav = (navigator.language || '').toLowerCase();
    return nav.startsWith('pt') ? 'pt' : 'en';
  };

  const initialLang = getInitialLang();
  applyLang(initialLang);

  if (langPtBtn) langPtBtn.addEventListener('click', () => applyLang('pt'));
  if (langEnBtn) langEnBtn.addEventListener('click', () => applyLang('en'));
})();
