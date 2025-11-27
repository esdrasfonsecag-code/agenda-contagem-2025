<!-- script.js -->
<script>
const data = {
"SEGUNDA": [
{ nome: "Carlos", curso: "ADS", horario: "8h - 12h", email: "carlos@faculdade.com" },
{ nome: "Fernanda", curso: "Direito", horario: "14h - 18h", email: "fernanda@faculdade.com" }
],
"TERÇA": [
{ nome: "Gabriel", curso: "Enfermagem", horario: "10h - 16h", email: "gabriel@faculdade.com" }
],
"QUARTA": [],
"QUINTA": [
{ nome: "Marcos", curso: "Engenharia", horario: "9h - 13h", email: "marcos@faculdade.com" }
],
"SEXTA": []
};


const days = Object.keys(data);
let index = 0;


const content = document.getElementById("content");
const currentDay = document.getElementById("currentDay");


document.getElementById("prevDay").onclick = () => changeDay(-1);
document.getElementById("nextDay").onclick = () => changeDay(1);


function changeDay(dir) {
index = (index + dir + days.length) % days.length;
render();
}


function render() {
const day = days[index];
currentDay.textContent = day;
const list = data[day];
content.innerHTML = list.length ? list.map(card).join("") : "<p>Nenhum coordenador disponível.</p>";
}


function card(item) {
return `
<div class="coord-card">
<h3>${item.nome}</h3>
<p><strong>Curso:</strong> ${item.curso}</p>
<p><strong>Horário:</strong> ${item.horario}</p>
<button class="email-btn" onclick="window.location='mailto:${item.email}'"></button>
</div>
`;
}


function updateClock() {
const now = new Date();
document.getElementById("datetime").textContent = now.toLocaleString();
}
setInterval(updateClock, 1000);
updateClock();
render();
</script>
