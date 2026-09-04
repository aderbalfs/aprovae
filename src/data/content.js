export const heroDias = [
  { label: 'S', h: '2h', bg: '#EEF1FF', fg: '#0014ED', delay: '.6s' },
  { label: 'T', h: '3h', bg: '#DDE3FF', fg: '#0014ED', delay: '.66s' },
  { label: 'Q', h: '2h', bg: '#EEF1FF', fg: '#0014ED', delay: '.72s' },
  { label: 'Q', h: '4h', bg: '#0014ED', fg: '#FFFFFF', delay: '.78s' },
  { label: 'S', h: '1h', bg: '#F2F4FB', fg: '#5E6D93', delay: '.84s' },
  { label: 'S', h: '5h', bg: '#000366', fg: '#FFFFFF', delay: '.9s' },
  { label: 'D', h: '—', bg: '#F7F8FC', fg: '#5E6D93', delay: '.96s' },
];

export const caminhoRuim = [
  { n: '01', t: 'Sem planejamento' },
  { n: '02', t: 'Dispersão entre disciplinas' },
  { n: '03', t: 'Inconsistência na rotina' },
  { n: '04', t: 'Dificuldade para medir evolução' },
];

export const caminhoBom = [
  { n: '01', t: 'Planejamento' },
  { n: '02', t: 'Rotina' },
  { n: '03', t: 'Acompanhamento' },
  { n: '04', t: 'Evolução' },
];

// Ordem escolhida para intercalar base (Índigo/Navy) e apoio (Violeta/Âmbar),
// sem duas cores de apoio lado a lado.
export const publicos = [
  {
    titulo: 'Concurseiros',
    desc: 'Gerencie seus editais, revisões e ciclos sem planilhas complexas.',
    foto: '/pessoas/modelo1.png',
    alt: 'Concurseiro sorridente segurando livros de estudo, com mochila.',
    cor: '#0014ED',
  },
  {
    titulo: 'Universitários',
    desc: 'Controle matérias, horários e revisões para se destacar nas provas.',
    foto: '/pessoas/modelo3.png',
    alt: 'Universitária sorridente segurando cadernos de estudo.',
    cor: '#7C3AED',
  },
  {
    titulo: 'Residentes',
    desc: 'Organize programas intensivos de estudo e revisões.',
    foto: '/pessoas/residente-final.png',
    alt: 'Médico residente de jaleco, máscara e estetoscópio.',
    cor: '#000366',
  },
  {
    titulo: 'Vestibulandos',
    desc: 'Foque no que importa e tenha uma visão clara da sua evolução.',
    foto: '/pessoas/vestibulanda-final.png',
    alt: 'Vestibulanda sorridente segurando cadernos de estudo.',
    cor: '#B45309',
  },
];

export const planoChips = [
  { label: 'Disciplinas', valor: '8 ativas' },
  { label: 'Meta semanal', valor: '22h' },
  { label: 'Revisões', valor: '12 agendadas' },
  { label: 'Ciclo atual', valor: 'Semana 6' },
];

export const barras = [
  { altura: '38%', cor: '#C9D2FA', delay: '0s' },
  { altura: '52%', cor: '#C9D2FA', delay: '.05s' },
  { altura: '44%', cor: '#C9D2FA', delay: '.1s' },
  { altura: '66%', cor: '#8496F5', delay: '.15s' },
  { altura: '58%', cor: '#8496F5', delay: '.2s' },
  { altura: '78%', cor: '#0014ED', delay: '.25s' },
  { altura: '88%', cor: '#0014ED', delay: '.3s' },
  { altura: '100%', cor: '#000366', delay: '.35s' },
];

export const ligas = [
  { nome: 'Bronze I', arquivo: '/ligas/bronze-1.svg' },
  { nome: 'Bronze II', arquivo: '/ligas/bronze-2.svg' },
  { nome: 'Bronze III', arquivo: '/ligas/bronze-3.svg' },
  { nome: 'Prata I', arquivo: '/ligas/prata-1.svg' },
  { nome: 'Prata II', arquivo: '/ligas/prata-2.svg' },
  { nome: 'Prata III', arquivo: '/ligas/prata-3.svg' },
  { nome: 'Ouro I', arquivo: '/ligas/ouro-1.svg' },
  { nome: 'Ouro II', arquivo: '/ligas/ouro-2.svg' },
  { nome: 'Ouro III', arquivo: '/ligas/ouro-3.svg' },
  { nome: 'Diamante', arquivo: '/ligas/diamante.svg' },
  { nome: 'Lenda', arquivo: '/ligas/lenda.svg' },
];

export const vitrine = [
  {
    kicker: 'Seu painel de estudos',
    titulo: 'Toda a sua rotina, organizada em uma única tela.',
    desc: 'O painel inicial reúne o que você mais precisa ver todos os dias: ritmo de estudo, metas de questões, planejamento do dia e revisões pendentes — sem precisar caçar essas informações em lugares diferentes.',
    ctaLabel: 'Ver todas as funcionalidades',
    ctaHref: '#funcionalidades',
    imagem: '/screenshots/dashboard-inicio.jpeg',
    alt: 'Painel inicial da plataforma Aprova Aê mostrando ritmo de estudo, metas de questões, planejamento do dia e revisões pendentes.',
    url: 'app.aprovae.com.br',
  },
];

export const galeria = [
  {
    titulo: 'Cronômetro de estudo',
    desc: 'Registre o tempo estudado por matéria e assunto. O tempo é contado pelo servidor, então fechar a aba não interrompe nada.',
    imagem: '/screenshots/cronometro.jpeg',
    alt: 'Tela do cronômetro de estudo do Aprova Aê, com modo contínuo e Pomodoro.',
  },
  {
    titulo: 'Registro de estudo',
    desc: 'Não estudou com o cronômetro ligado? Registre manualmente matéria, tempo e observações em poucos segundos.',
    imagem: '/screenshots/registro-estudo.jpeg',
    alt: 'Tela de registro manual de estudo do Aprova Aê, com matéria, tempo e histórico recente.',
  },
  {
    titulo: 'Desempenho',
    desc: 'Acompanhe sua evolução em horas e questões, com taxa de acerto por matéria e alertas de disciplinas críticas.',
    imagem: '/screenshots/desempenho.jpeg',
    alt: 'Tela de desempenho do Aprova Aê mostrando questões e taxa de acerto por matéria.',
  },
  {
    titulo: 'Hábitos',
    desc: 'Construa uma rotina consistente fora dos estudos e ganhe XP por hábitos oficiais cumpridos todos os dias.',
    imagem: '/screenshots/habitos.jpeg',
    alt: 'Tela de hábitos do Aprova Aê com sequência de check-ins diários.',
  },
  {
    titulo: 'Conquistas',
    desc: 'Acompanhe sua progressão em cada frente de estudo, do primeiro marco ao Diamante.',
    imagem: '/screenshots/conquistas.jpeg',
    alt: 'Tela de conquistas do Aprova Aê com progresso em horas, questões e sequência.',
  },
];

// Espectro reutilizado do bloco "Para quem é" — mesmas 6 cores, usado sempre que
// itens lado a lado (não sequenciais) precisam de identidade visual própria.
export const espectro = [
  { cor: '#0E7490', fundo: '#E3F2F4' },
  { cor: '#7C3AED', fundo: '#F1EBFE' },
  { cor: '#DB2777', fundo: '#FCE8F1' },
  { cor: '#B45309', fundo: '#FBF0DF' },
  { cor: '#0284C7', fundo: '#E2F2FC' },
  { cor: '#C2410C', fundo: '#FBECE3' },
];

export const recursos = [
  { titulo: 'Metas e rotina', desc: 'Defina metas de horas e conteúdo e veja se a semana fechou como você planejou.' },
  { titulo: 'Controle de questões', desc: 'Registre acertos e erros por disciplina e descubra onde vale investir mais tempo.' },
  { titulo: 'Revisões', desc: 'Nada do que você estudou fica solto: revisões entram no seu calendário automaticamente.' },
  { titulo: 'Histórico e progresso', desc: 'Um registro contínuo da sua preparação para você enxergar a evolução ao longo dos meses.' },
];

export const passos = [
  { n: '01', titulo: 'Defina seu objetivo', desc: 'Escolha o que você está se preparando para conquistar.' },
  { n: '02', titulo: 'Organize sua rotina', desc: 'Estruture seus estudos de acordo com sua disponibilidade e objetivo.' },
  { n: '03', titulo: 'Estude e acompanhe', desc: 'Registre sua evolução e acompanhe seu desempenho.' },
  { n: '04', titulo: 'Ajuste e avance', desc: 'Entenda sua evolução e continue avançando rumo à prova.' },
];

export const beneficios = [
  'Mais organização',
  'Mais clareza',
  'Mais consistência',
  'Melhor acompanhamento',
  'Mais controle',
  'Visão da evolução',
  'Menos improviso',
  'Mais estratégia',
];

export const conceito = [
  { t: 'Organização', seta: true },
  { t: 'Constância', seta: true },
  { t: 'Acompanhamento', seta: true },
  { t: 'Evolução', seta: false },
];

export const planoFree = ['1 objetivo ativo', 'Planejamento semanal básico', 'Registro de horas estudadas', 'Estatísticas essenciais'];

export const planoBase = [
  'Objetivos ilimitados',
  'Planejamento completo e ciclos de estudo',
  'Registro de horas e questões',
  'Estatísticas e histórico completos',
];

export const planoPro = [
  'Tudo do plano Base',
  'Controle de questões por disciplina',
  'Revisões automáticas',
  'Acompanhamento de desempenho avançado',
  'Suporte prioritário',
];

// Cores repetem exatamente as dos mesmos públicos em `publicos`, para a mesma
// categoria carregar a mesma cor em qualquer lugar do site.
export const depoimentos = [
  { categoria: 'Concurso Público', objetivo: 'Objetivo: Concurso Público', cor: '#0E7490', fundo: '#E3F2F4' },
  { categoria: 'Medicina', objetivo: 'Objetivo: Medicina', cor: '#DB2777', fundo: '#FCE8F1' },
  { categoria: 'ENEM', objetivo: 'Objetivo: ENEM', cor: '#7C3AED', fundo: '#F1EBFE' },
  { categoria: 'OAB', objetivo: 'Objetivo: OAB', cor: '#B45309', fundo: '#FBF0DF' },
];

export const faqs = [
  ['O que é o Aprova Aê?', 'Uma plataforma para planejar, organizar e acompanhar sua preparação para uma prova ou objetivo, reunindo rotina, metas, desempenho e evolução em um só lugar.'],
  ['Para quem o Aprova Aê foi criado?', 'Para qualquer pessoa que tenha um objetivo de aprovação: concursos, vestibular, ENEM, Medicina, OAB, certificações e provas acadêmicas.'],
  ['Posso utilizar para concursos públicos?', 'Sim. Você define o concurso como objetivo e organiza disciplinas, metas e revisões até a data da prova.'],
  ['Posso utilizar para vestibular e ENEM?', 'Sim. A estrutura de rotina e acompanhamento funciona igualmente bem para preparações de vestibular e ENEM.'],
  ['O Aprova Aê serve para quem estuda para Medicina?', 'Sim. Preparações longas são justamente onde a organização e o acompanhamento fazem mais diferença.'],
  ['Preciso estudar todos os dias?', 'Não. Você monta a rotina de acordo com a sua disponibilidade real, e a plataforma acompanha sua consistência a partir dela.'],
  ['Posso cancelar meu plano?', 'Sim. O cancelamento é feito pela própria plataforma, sem burocracia, e você mantém acesso ao plano gratuito.'],
  ['Existe plano gratuito?', 'Sim. O plano gratuito permite conhecer a plataforma e começar a organizar seus estudos.'],
  ['Posso utilizar pelo celular?', 'Sim. A plataforma é responsiva e funciona no celular, tablet e computador.'],
  ['Como funciona o acompanhamento dos estudos?', 'Você registra horas estudadas e questões resolvidas, e a plataforma transforma esses registros em estatísticas de progresso e desempenho.'],
].map(([q, a]) => ({ q, a }));

export const redes = ['IG', 'YT', 'IN'];

export const footerCols = [
  { titulo: 'Produto', itens: ['Funcionalidades', 'Como funciona', 'Para quem é', 'Planos'] },
  { titulo: 'Suporte', itens: ['Central de ajuda', 'FAQ', 'Falar com o suporte', 'Status'] },
  { titulo: 'Legal', itens: ['Termos de Uso', 'Política de Privacidade', 'Cookies'] },
];

export const navLinks = [
  { href: '#funcionalidades', label: 'Funcionalidades' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#para-quem', label: 'Para quem é' },
  { href: '#planos', label: 'Planos' },
  { href: '#faq', label: 'FAQ' },
];
