<script>
const data = {
"SEGUNDA": [
{ nome: "MARCOS FERREIRA BENEDITO", hora: "08:00 às 12:00", email: "marcos@example.com" },
{ nome: "ANA PAULA DOS SANTOS GOMES", hora: "8:30 às 12:30", email: "anapaula@example.com" },
{ nome: "CRISTINA CARVALHO DE MELO", hora: "11:40 às 13:40", email: "cristina@example.com" },
{ nome: "CAMILLA AYALA FELISBERTO SILVA", hora: "13:00 às 17:00", email: "camilla@example.com" },
{ nome: "ANA PAULA DOS SANTOS GOMES", hora: "13:00 às 15:00", email: "anapaula@example.com" },
{ nome: "ELIZABETH RODRIGUES BRITO IBRAHIM", hora: "14:00 às 17:00", email: "elizabeth@example.com" },
{ nome: "CRISTINA CARVALHO DE MELO", hora: "15:00 às 19:00", email: "cristina@example.com" },
{ nome: "ELISA SIQUEIRA", hora: "14:00 às 21:00", email: "elisa@example.com" },
{ nome: "MARCOS FERREIRA BENEDITO", hora: "16:00 às 21:00", email: "marcos@example.com" }
],


"TERÇA": [
{ nome: "ELIZABETH RODRIGUES BRITO IBRAHIM", hora: "13:00 às 17:00", email: "elizabeth@example.com" },
{ nome: "ANA AMELIA FONSECA VIANA CRUZ", hora: "08:30 às 12:30", email: "anaamelia@example.com" },
{ nome: "ANA AMELIA FONSECA VIANA CRUZ", hora: "13:30 às 17:30", email: "anaamelia@example.com" },
{ nome: "ANA PAULA DOS SANTOS GOMES", hora: "14:30 às 19:00", email: "anapaula@example.com" },
{ nome: "MARCOS FERREIRA BENEDITO", hora: "14:00 às 18:00", email: "marcos@example.com" },
{ nome: "CAMILLA AYALA FELISBERTO SILVA", hora: "15:00 às 19:00", email: "camilla@example.com" },
{ nome: "DANIEL PORTELA DIAS MACHADO", hora: "15:00 às 19:00", email: "daniel@example.com" },
{ nome: "ELISA SIQUEIRA", hora: "14:00 às 19:00", email: "elisa@example.com" },
{ nome: "CRISTINA CARVALHO DE MELO", hora: "15:00 às 20:30", email: "cristina@example.com" }
],


"QUARTA": [
{ nome: "ELISA SIQUEIRA", hora: "08:00 às 13:00", email: "elisa@example.com" },
{ nome: "MARCOS FERREIRA BENEDITO", hora: "17:00 às 21:00", email: "marcos@example.com" },
{ nome: "ELIZABETH RODRIGUES BRITO IBRAHIM", hora: "17:00 às 21:00", email: "elizabeth@example.com" }
],


"QUINTA": [
{ nome: "DANIEL PORTELA DIAS MACHADO", hora: "08:00 às 12:00", email: "daniel@example.com" },
{ nome: "CAMILLA AYALA FELISBERTO SILVA", hora: "13:00 às 17:00", email: "camilla@example.com" },
{ nome: "ANA PAULA DOS SANTOS GOMES", hora: "15:30 às 21:00", email: "anapaula@example.com" },
{ nome: "ANA AMELIA FONSECA VIANA CRUZ", hora: "13:00 às 21:00", email: "anaamelia@example.com" },
{ nome: "DANIEL PORTELA DIAS MACHADO", hora: "15:00 às 21:00", email: "daniel@example.com" }
],


"SEXTA": [
{ nome: "CAMILLA AYALA FELISBERTO SILVA", hora: "09:00 às 13:00", email: "camilla@example.com" },
{ nome: "DANIEL PORTELA DIAS MACHADO", hora: "17:00 às 19:00", email: "daniel@example.com" },
{ nome: "CRISTINA CARVALHO DE MELO", hora: "14:30 às 19:00", email: "cristina@example.com" },
{ nome: "MARCOS FERREIRA BENEDITO", hora: "17:00 às 19:00", email: "marcos@example.com" },
{ nome: "ELIZABETH RODRIGUES BRITO IBRAHIM", hora: "17:00 às 21:00", email: "elizabeth@example.com" }
]
};


const grid = document.getElementById("grid");


Object.keys(data).forEach(day => {
const column = document.createElement("div");
column.className = "day-column";


const title = document.createElement("h2");
title.textContent = day;
column.appendChild(title);


data[day].forEach(item => {
const div = document.createElement("div");
div.className = "coordinator";


div.innerHTML = `
<div>
<strong>${item.nome}</strong><br>
<span>${item.hora}</span>
</div>
<a class="email-btn" href="mailto:${item.email}">
<img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" />
</a>
`;


column.appendChild(div);
});


grid.appendChild(column);
});
</script>
