const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

export async function getQuotes() {
  const quotes = "data.json";
  const res = await fetch(quotes);
  const data = await res.json();

  let i = Math.floor(Math.random() * (data.length + 1));
  quote.textContent = `"${data[i].text}"`;
  author.textContent = data[i].author;
}
