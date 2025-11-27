document.addEventListener('DOMContentLoaded', () => {

  const agenda = {
    segunda: [
      { nome: "Marcos Ferreira Benedito", hora: "08:00 — 12:00", email: "marcos.benedito@animaeducacao.com.br" },
      { nome: "Ana Paula dos Santos Gomes", hora: "08:30 — 12:30", email: "ana.paula1@animaeducacao.com.br" },
      { nome: "Cristina Carvalho de Melo", hora: "11:40 — 13:40", email: "cristina.melo@animaeducacao.com.br" },
      { nome: "Camilla Ayala Felisberto Silva", hora: "13:00 — 17:00", email: "camilla.felisberto@animaeducacao.com.br" },
      { nome: "Ana Paula dos Santos Gomes", hora: "13:00 — 15:00", email: "ana.paula1@animaeducacao.com.br" },
      { nome: "Elizabeth Rodrigues Brito Ibrahim", hora: "14:00 — 17:00", email: "elizabeth.ibrahim@animaeducacao.com.br" },
      { nome: "Cristina Carvalho de Melo", hora: "15:00 — 19:00", email: "cristina.melo@animaeducacao.com.br" },
      { nome: "Elisa Carvalho de Siqueira", hora: "14:00 — 21:00", email: "elisa.siqueira@animaeducacao.com.br" },
      { nome: "Marcos Ferreira Benedito", hora: "16:00 — 21:00", email: "marcos.benedito@animaeducacao.com.br" }
    ],
    terca: [
      { nome: "Elizabeth Rodrigues Brito Ibrahim", hora: "13:00 — 17:00", email: "elizabeth.ibrahim@animaeducacao.com.br" },
      { nome: "Ana Amelia Fonseca Viana Cruz", hora: "08:30 — 12:30", email: "ana.vicruz@ulife.com.br" },
      { nome: "Ana Amelia Fonseca Viana Cruz", hora: "13:30 — 17:30", email: "ana.vicruz@ulife.com.br" },
      { nome: "Ana Paula dos Santos Gomes", hora: "14:30 — 19:00", email: "ana.paula1@animaeducacao.com.br" },
      { nome: "Marcos Ferreira Benedito", hora: "14:00 — 18:00", email: "marcos.benedito@animaeducacao.com.br" },
      { nome: "Camilla Ayala Felisberto Silva", hora: "15:00 — 19:00", email: "camilla.felisberto@animaeducacao.com.br" },
      { nome: "Elisa Carvalho de Siqueira", hora: "14:00 — 19:00", email: "elisa.siqueira@animaeducacao.com.br" },
      { nome: "Daniel Portela Dias Machado", hora: "15:00 — 19:00", email: "daniel.portela@animaeducacao.com.br" },
      { nome: "Cristina Carvalho de Melo", hora: "15:00 — 20:30", email: "cristina.melo@animaeducacao.com.br" }
    ],
    quarta: [
      { nome: "Elisa Carvalho de Siqueira", hora: "08:00 — 13:00", email: "elisa.siqueira@animaeducacao.com.br" },
      { nome: "Marcos Ferreira Benedito", hora: "17:00 — 21:00", email: "marcos.benedito@animaeducacao.com.br" },
      { nome: "Elizabeth Rodrigues Brito Ibrahim", hora: "17:00 — 21:00", email: "elizabeth.ibrahim@animaeducacao.com.br" }
    ],
    quinta: [
      { nome: "Daniel Portela Dias Machado", hora: "08:00 — 12:00", email: "daniel.portela@animaeducacao.com.br" },
      { nome: "Camilla Ayala Felisberto Silva", hora: "13:00 — 17:00", email: "camilla.felisberto@animaeducacao.com.br" },
      { nome: "Daniel Portela Dias Machado", hora: "15:00 — 21:00", email: "daniel.portela@animaeducacao.com.br" },
      { nome: "Ana Amelia Fonseca Viana Cruz", hora: "13:00 — 21:00", email: "ana.vicruz@ulife.com.br" },
      { nome: "Elizabeth Rodrigues Brito Ibrahim", hora: "13:00 — 17:00", email: "elizabeth.ibrahim@animaeducacao.com.br" },
      { nome: "Ana Paula dos Santos Gomes", hora: "15:30 — 21:00", email: "ana.paula1@animaeducacao.com.br" }
    ],
    sexta: [
      { nome: "Camilla Ayala Felisberto Silva", hora: "09:00 — 13:00", email: "camilla.felisberto@animaeducacao.com.br" },
      { nome: "Daniel Portela Dias Machado", hora: "17:00 — 19:00", email: "daniel.portela@animaeducacao.com.br" },
      { nome: "Cristina Carvalho de Melo", hora: "14:30 — 19:00", email: "cristina.melo@animaeducacao.com.br" },
      { nome: "Marcos Ferreira Benedito", hora: "17:00 — 19:00", email: "marcos.benedito@animaeducacao.com.br" },
      { nome: "Elizabeth Rodrigues Brito Ibrahim", hora: "17:00 — 21:00", email: "elizabeth.ibrahim@animaeducacao.com.br" }
    ]
  };

  const dayKeys = ['segunda','terca','quarta','quinta','sexta'];
  const tbody = document.getElementById('agenda');
  const maxLines = Math.max(...dayKeys.map(k => agenda[k].length));
  let html = '';

  for (let row = 0; row < maxLines; row++) {
    html += '<tr>';
    dayKeys.forEach(key => {
      const item = agenda[key][row];
      if (item) {
        html += `
          <td>
            <div class="cell-card">
              <span class="cell-name">${item.nome}</span>
              <span class="cell-hour">${item.hora}</span>
              <a class="email-btn" href="mailto:${item.email}">📧</a>
            </div>
          </td>`;
      } else {
        html += '<td></td>';
      }
    });
    html += '</tr>';
  }

  tbody.innerHTML = html;

});
