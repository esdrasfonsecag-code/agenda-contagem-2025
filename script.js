document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Coordenadores e cursos (dados fornecidos) ---------- */
  const coordinators = [
    {
      nome: "ANA PAULA DOS SANTOS GOMES",
      email: "ana.paula1@animaeducacao.com.br",
      cursos: [
        "Nutrição",
        "Nutrição (Semipresencial) 30/70",
        "Psicologia"
      ]
    },
    {
      nome: "CAMILLA AYALA FELISBERTO SILVA",
      email: "camilla.felisberto@animaeducacao.com.br",
      cursos: [
        "Análise e Desenvolvimento de Sistemas",
        "Análise e Desenvolvimento de Sistemas (Semipresencial) 30/70",
        "Ciência da Computação (Semipresencial) 30/70",
        "Ciências da Computação",
        "Direito",
        "Sistemas de Informação",
        "Sistemas de Informação (Semipresencial) 30/70"
      ]
    },
    {
      nome: "CRISTINA CARVALHO DE MELO",
      email: "cristina.melo@animaeducacao.com.br",
      cursos: [
        "Administração / Administração (Semipresencial) 30/70",
        "Ciências Contábeis / Ciências Contábeis (Semipresencial) 30/70",
        "Ciências Econômicas / Ciências Econômicas (Semipresencial) 30/70",
        "Comércio Exterior",
        "Educação física / Educação Física (Semipresencial) 30/70",
        "Gestão Comercial",
        "Gestão Comercial (Semipresencial) 30/70",
        "Gestão da Inovação e Empreendedorismo Digital",
        "Gestão da Produção Industrial",
        "Gestão da Qualidade",
        "Gestão da Qualidade (Semipresencial) 30/70",
        "Gestão da Tecnologia da Informação / Gestão da Tecnologia da Informação (Semipresencial) 30/70",
        "Gestão de Processos e Projetos Ágeis",
        "Gestão de Recursos Humanos / Gestão de Recursos Humanos (Semipresencial) 30/70",
        "Gestão Financeira / Gestão Financeira (Semipresencial) 30/70",
        "Gestão Pública (Semipresencial) 30/70",
        "Governança Corporativa e Consultoria de Negócios",
        "Investimento e formação de Traders",
        "Logística / Logística (Semipresencial) 30/70",
        "Marketing / Marketing (Semipresencial) 30/70",
        "Marketing Digital",
        "Negócios Imobiliários",
        "Processos Gerenciais / Processos Gerenciais (Semipresencial) 30/70"
      ]
    },
    {
      nome: "DANIEL PORTELA DIAS MACHADO",
      email: "daniel.portela@animaeducacao.com.br",
      cursos: [
        "Medicina Veterinária",
        "Engenharia Civil",
        "Engenharia Civil (Semipresencial) 30/70",
        "Engenharia da Computação",
        "Engenharia de Controle e Automação",
        "Engenharia de Produção",
        "Engenharia de Produção (Semipresencial) 30/70",
        "Engenharia de Software",
        "Engenharia Elétrica",
        "Engenharia Elétrica (Semipresencial) 30/70",
        "Engenharia Mecânica",
        "Engenharia Mecânica (Semipresencial) 30/70",
        "Jornalismo",
        "Publicidade e Propaganda"
      ]
    },
    {
      nome: "ELISA CARVALHO DE SIQUEIRA",
      email: "elisa.siqueira@animaeducacao.com.br",
      cursos: [
        "Odontologia",
        "Design de Interiores",
        "Design Gráfico",
        "Design Gráfico (Semipresencial) 30/70"
      ]
    },
    {
      nome: "ELIZABETH RODRIGUES BRITO IBRAHIM",
      email: "elizabeth.ibrahim@animaeducacao.com.br",
      cursos: [
        "Arquitetura e Urbanismo",
        "Farmácia",
        "Farmácia (Semipresencial) 30/70",
        "História",
        "Pedagogia",
        "Pedagogia (Semipresencial) 30/70"
      ]
    },
    {
      nome: "MARCOS FERREIRA BENEDITO",
      email: "marcos.benedito@animaeducacao.com.br",
      cursos: [
        "Enfermagem",
        "Jornalismo",
        "Publicidade e Propaganda"
      ]
    }
  ];

  /* ---------- Schedule (escala por dia - segundo seus dados) ---------- */
  const schedule = [
    [ // segunda
      "Marcos Ferreira Benedito — 08:00 às 12:00",
      "Ana Paula dos Santos Gomes — 08:30 às 12:30",
      "Cristina Carvalho de Melo — 11:40 às 13:40",
      "Camilla Ayala Felisberto Silva — 13:00 às 17:00",
      "Ana Paula dos Santos Gomes — 13:00 às 15:00",
      "Elizabeth Rodrigues Brito Ibrahim — 14:00 às 17:00",
      "Cristina Carvalho de Melo — 15:00 às 19:00",
      "Elisa Carvalho de Siqueira — 14:00 às 21:00",
      "Marcos Ferreira Benedito — 16:00 às 21:00"
    ],
    [ // terça
      "Elizabeth Rodrigues Brito Ibrahim — 13:00 às 17:00",
      "Ana Amelia Fonseca Viana Cruz — 08:30 às 12:30",
      "Ana Amelia Fonseca Viana Cruz — 13:30 às 17:30",
      "Ana Paula dos Santos Gomes — 14:30 às 19:00",
      "Marcos Ferreira Benedito — 14:00 às 18:00",
      "Camilla Ayala Felisberto Silva — 15:00 às 19:00",
      "Elisa Carvalho de Siqueira — 14:00 às 19:00",
      "Daniel Portela Dias Machado — 15:00 às 19:00",
      "Cristina Carvalho de Melo — 15:00 às 20:30"
    ],
    [ // quarta
      "Elisa Carvalho de Siqueira — 08:00 às 13:00",
      "Marcos Ferreira Benedito — 17:00 às 21:00",
      "Elizabeth Rodrigues Brito Ibrahim — 17:00 às 21:00"
    ],
    [ // quinta
      "Daniel Portela Dias Machado — 08:00 às 12:00",
      "Camilla Ayala Felisberto Silva — 13:00 às 17:00",
      "Daniel Portela Dias Machado — 15:00 às 21:00",
      "Ana Amelia Fonseca Viana Cruz — 13:00 às 21:00",
      "Elizabeth Rodrigues Brito Ibrahim — 13:00 às 17:00",
      "Ana Paula dos Santos Gomes — 15:30 às 21:00"
    ],
    [ // sexta
      "Camilla Ayala Felisberto Silva — 09:00 às 13:00",
      "Cristina Carvalho de Melo — 14:30 às 19:00",
      "Marcos Ferreira Benedito — 17:00 às 19:00",
      "Elizabeth Rodrigues Brito Ibrahim — 17:00 às 21:00"
    ]
  ];

  /* ---------- utility: render clock/date ---------- */
  const nowEl = document.getElementById("now");
  function tick() {
    const d = new Date();
    nowEl.textContent = d.toLocaleString("pt-BR", { weekday:"long", day:"2-digit", month:"2-digit", year:"numeric", hour:"2-digit", minute:"2-digit", second:"2-digit" });
  }
  setInterval(tick, 1000);
  tick();

  /* ---------- render schedule for selected day ---------- */
  const scheduleList = document.getElementById("scheduleList");
  function renderSchedule(dayIndex = 0) {
    scheduleList.innerHTML = "";
    const arr = schedule[dayIndex] || [];
    if (arr.length === 0) {
      scheduleList.innerHTML = "<div class='schedule-item'><div class='item-info'><div class='item-name'>(sem entradas)</div></div></div>";
      return;
    }
    arr.forEach(text => {
      const item = document.createElement("div");
      item.className = "schedule-item";
      const [namePart, timePart] = (text.includes(" — ") ? text.split(" — ") : [text, ""]);
      item.innerHTML = `
        <div class="item-info">
          <div class="item-name">${namePart}</div>
          <div class="item-time">${timePart}</div>
        </div>
        <div>
          <button class="coord-email-btn" title="Enviar email para ${namePart}"></button>
        </div>
      `;
      // find matching coordinator email (safe lookup)
      const coord = coordinators.find(c => namePart.toUpperCase().includes(c.nome.split(" ")[0]) || c.nome === namePart);
      const emailBtn = item.querySelector(".coord-email-btn");
      if (coord) {
        emailBtn.addEventListener("click", ()=> window.location.href = `mailto:${coord.email}`);
      } else {
        emailBtn.disabled = true;
        emailBtn.style.opacity = "0.35";
      }
      scheduleList.appendChild(item);
    });
  }

  /* ---------- render coordinators grid ---------- */
  const grid = document.getElementById("coordinatorGrid");
  function renderCoordinators() {
    grid.innerHTML = "";
    coordinators.forEach(c => {
      const node = document.createElement("article");
      node.className = "coord";
      node.innerHTML = `
        <div class="coord-head">
          <div>
            <div class="coord-name">${c.nome}</div>
            <div style="font-size:13px; opacity:.85;">${c.email}</div>
          </div>
          <button class="coord-email-btn" title="Enviar e-mail para ${c.nome}"></button>
        </div>
        <ul class="courses">
          ${c.cursos.map(cc => `<li>${cc}</li>`).join("")}
        </ul>
      `;
      node.querySelector(".coord-email-btn").addEventListener("click", ()=> window.location.href = `mailto:${c.email}`);
      grid.appendChild(node);
    });
  }
  renderCoordinators();

  /* ---------- day switching logic ---------- */
  const dayBtns = Array.from(document.querySelectorAll(".day-btn"));
  let currentDay = 0;
  function setActiveDay(i){
    currentDay = i;
    dayBtns.forEach((b, idx) => b.classList.toggle("active", idx===i));
    renderSchedule(i);
  }
  dayBtns.forEach((b, idx) => b.addEventListener("click", ()=> setActiveDay(idx)));

  document.getElementById("prevDay").addEventListener("click", ()=> {
    setActiveDay((currentDay - 1 + 5) % 5);
  });
  document.getElementById("nextDay").addEventListener("click", ()=> {
    setActiveDay((currentDay + 1) % 5);
  });

  // start with Monday (index 0)
  setActiveDay(0);

  /* ---------- small: add svg icon to all .coord-email-btn elements ---------- */
  function attachEmailIcons(){
    const allBtns = document.querySelectorAll(".coord-email-btn, .coord-email-btn, .coord-email-btn");
    allBtns.forEach(b=>{
      if(b.dataset.iconAttached) return;
      b.dataset.iconAttached = "1";
      // inline SVG: stylized envelope / "M-like" colored patch
      b.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#00eaff" />
            <stop offset="0.5" stop-color="#9b4dff" />
            <stop offset="1" stop-color="#00ff9e" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="4" rx="2" ry="2" width="21" height="14" fill="none" stroke="url(#g1)" stroke-width="1.6"/>
        <path d="M2 6 L12 13 L22 6" fill="none" stroke="url(#g1)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`;
    });
  }
  attachEmailIcons();

});
