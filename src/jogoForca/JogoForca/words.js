const words = [
  { word: "Leonardo de Alencar", clue: "reconhecido principalmente por seu papel como líder comunitário e empresário" },
  { word: "Chico Surdo", clue: "Criador do barco de fogo" },
  { word: "José Antônio", clue: "Ficou conhecido internacionalmente no mundo das artes" },
  { word: "Judite Melo", clue: "Famosa por suas esculturas que ultrapassaram os limites de Estância" },
  { word: "Florial Santos", clue: "Fez sua primeira exposição no ano de 1933" },
  { word: "Cosme e Damião", clue: "Gêmeos reconhecidos internacionalmente pelas obras que retratavam o convívio local" },

];

export default function getWord() {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
