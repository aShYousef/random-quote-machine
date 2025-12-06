const textEl = document.getElementById("text");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetBtn = document.getElementById("tweet-quote");

async function getQuote() {
  const res = await fetch("https://api.quotable.io/random");
  const data = await res.json();

  textEl.textContent = data.content;
  authorEl.textContent = "- " + data.author;

  // tweet link update
  tweetBtn.href =
    "https://twitter.com/intent/tweet?text=" +
    encodeURIComponent(`"${data.content}" — ${data.author}`);
}

// load first quote
getQuote();

// button action
newQuoteBtn.addEventListener("click", getQuote);
