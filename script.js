document.addEventListener("DOMContentLoaded", () => {

  // Coordenadores com cursos e emails (dados que você enviou)
  const coordinators = [
    {
      nome: "ANA AMELIA FONSECA VIANA CRUZ",
      email: "ana.vicruz@ulife.com.br",
      cursos: [
        "Biomedicina",
        "Biomedicina (Semipresencial) 30/70",
        "Fisioterapia",
        "Fisioterapia (Semipresencial) 30/70",
        "Estética e Cosmética",
        "Estética e Cosmética (Semipresencial) 30/70"
      ]
    },
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
        "Análise e Desenvolvimento de sistemas",
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
        "Ciências Contábeis/Ciências Contábeis (Semipresencial) 30/70",
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
        "Medicina Veterinária"
      ]
    },
    {
      nome: "ELISA CARVALHO DE SIQUEIRA",
      email: "elisa.siqueira@animaeducacao.com.br",
      cursos: [
        "Odontologia"
      ]
    },
    {
      nome: "ELIZABETH RODRIGUES BRITO IBRAHIM",
      email: "elizabeth.ibrahim@animaeducacao.com.br",
      cursos: [
        "Arquitetura e Urbanismo",
        "Design de Interiores",
        "Design Gráfico",
        "Design Gráfico (Semipresencial) 30/70",
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
    }
  ];

  // Escala por dia (segunda..sexta) — seus dados
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
      "Camilla Ayala Felisberto Silva — 15:00 às 19:00 (rep)",
      "Daniel Portela Dias Machado — 15:00 às 19:00",
      "Elisa Carvalho de Siqueira — 14:00 às 19:00",
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

  // DOM elements
  const nowEl = document.getElementById("now");
  const dayLabel = document.getElementById("dayLabel");
  const scheduleTbody = document.querySelector("#scheduleTable tbody");
  const coordTbody = document.querySelector("#coordinatorTable tbody");
  const dayBtns = Array.from(document.querySelectorAll(".day-btn"));
  const prevBtn = document.getElementById("prevDay");
  const nextBtn = document.getElementById("nextDay");

  // clock
  function tick(){
    const d = new Date();
    nowEl.textContent = d.toLocaleString("pt-BR", { weekday:"long", day:"2-digit", month:"2-digit", year:"numeric", hour:"2-digit", minute:"2-digit", second:"2-digit" });
  }
  setInterval(tick,1000); tick();

  // helper: find coordinator object by partial name match
  function findCoordinatorByName(name){
    if(!name) return null;
    const up = name.toUpperCase().trim();
    return coordinators.find(c => {
      const cname = c.nome.toUpperCase();
      // direct exact match or first+last partials
      if(cname === up) return true;
      // match by last name or first name token
      const tokens = cname.split(" ");
      return tokens.some(t => up.includes(t) || t.includes(up));
    }) || null;
  }

  // render schedule table for given day index (0..4)
  function renderSchedule(dayIndex){
    const labels = ["Segunda","Terça","Quarta","Quinta","Sexta"];
    dayLabel.textContent = labels[dayIndex];
    scheduleTbody.innerHTML = "";

    const rows = schedule[dayIndex] || [];
    if(rows.length === 0){
      const tr = document.createElement("tr");
      tr.innerHTML = `<td colspan="4" style="opacity:.8;padding:18px">Nenhuma entrada cadastrada.</td>`;
      scheduleTbody.appendChild(tr);
      return;
    }

    rows.forEach(text => {
      // split name and time at " — " or " - " occurrence
      let name = text, time = "";
      if(text.includes(" — ")) {
        [name, time] = text.split(" — ").map(s => s.trim());
      } else if(text.includes(" - ")) {
        [name, time] = text.split(" - ").map(s => s.trim());
      } else {
        // try last token time pattern
        const parts = text.split(/\s{2,}/);
        if(parts.length>=2){ name = parts[0]; time = parts.slice(1).join(" - "); }
      }

      const coord = findCoordinatorByName(name) || null;
      const tr = document.createElement("tr");

      const coursesText = coord ? coord.cursos.join(", ") : "(cursos não cadastrados)";
      const emailCell = coord ? `<button class="email-icon-btn" title="Enviar e-mail para ${coord.nome}" aria-label="Enviar e-mail para ${coord.nome}" data-email="${coord.email}">
          <!-- SVG envelope icon -->
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0" stop-color="${'#00eaff'}"/>
                <stop offset="1" stop-color="${'#9b4dff'}"/>
              </linearGradient>
            </defs>
            <rect x="1.5" y="4" width="21" height="14" rx="2" stroke="url(#g)" stroke-width="1.6" fill="none"/>
            <path d="M3 6 L12 12 L21 6" stroke="url(#g)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>` : `<span style="opacity:.6">—</span>`;

      tr.innerHTML = `
        <td><div class="coord-name">${name}</div></td>
        <td><div class="coord-time">${time}</div></td>
        <td style="width:60px; text-align:center;">${emailCell}</td>
        <td class="courses-cell">${coursesText}</td>
      `;

      scheduleTbody.appendChild(tr);
    });

    // attach click handlers for email buttons
    document.querySelectorAll(".email-icon-btn").forEach(btn=>{
      btn.addEventListener("click", ()=> {
        const mail = btn.dataset.email;
        if(mail) window.location.href = `mailto:${mail}`;
      });
    });
  }

  // render coordinators & courses table
  function renderCoordinatorsTable(){
    coordTbody.innerHTML = "";
    coordinators.forEach(c => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><div class="coord-name">${c.nome}</div></td>
        <td>
          <div style="display:flex;align-items:center;gap:8px">
            <div style="opacity:.9">${c.email}</div>
            <button class="email-icon-btn" title="Enviar e-mail para ${c.nome}" data-email="${c.email}" aria-label="Enviar e-mail para ${c.nome}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stop-color="#00eaff"/>
                    <stop offset="1" stop-color="#9b4dff"/>
                  </linearGradient>
                </defs>
                <rect x="1.5" y="4" width="21" height="14" rx="2" stroke="url(#g2)" stroke-width="1.6" fill="none"/>
                <path d="M3 6 L12 12 L21 6" stroke="url(#g2)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
          </div>
        </td>
        <td class="courses-cell">${c.cursos.join(", ")}</td>
      `;
      coordTbody.appendChild(tr);
    });

    document.querySelectorAll("#coordinatorTable .email-icon-btn").forEach(b=>{
      b.addEventListener("click", ()=> window.location.href = `mailto:${b.dataset.email}`);
    });
  }

  // day controls
  let currentDay = 0;
  function setActiveDay(i){
    currentDay = i;
    dayBtns.forEach((b, idx) => b.classList.toggle("active", idx===i));
    renderSchedule(i);
  }
  dayBtns.forEach((b, idx)=> b.addEventListener("click", ()=> setActiveDay(idx)));
  prevBtn.addEventListener("click", ()=> setActiveDay((currentDay - 1 + 5) % 5));
  nextBtn.addEventListener("click", ()=> setActiveDay((currentDay + 1) % 5));

  // initial render
  renderCoordinatorsTable();
  setActiveDay(0);

});
