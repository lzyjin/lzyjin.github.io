const quotes = [
  {
    quote: 'Order without liberty and liberty without order are equally destructive.',
    author: 'Theodore Roosevelt',
  },
  {
    quote: "If you tell the truth, you don't have to remember anything.",
    author: 'Mark Twain',
  },
  {
    quote: 'Beware the barrenness of a busy life.',
    author: 'Socrates',
  },
  {
    quote: 'To live is to suffer, to survive is to find some meaning in the suffering.',
    author: 'Friedrich Nietzsche',
  },
  {
    quote: 'None are so old as those who have outlived enthusiasm.',
    author: 'Henry David Thoreau',
  },
  {
    quote: 'If you can dream it, you can do it.',
    author: 'Walt Disney',
  },
  {
    quote: "You reach a point where you don't work for money.",
    author: 'Walt Disney',
  },
  {
    quote: "It always seems impossible until it's done.",
    author: 'Nelson Mandela',
  },
  {
    quote: 'The more you like yourself, the less you are like anyone else, which makes you unique.',
    author: 'Walt Disney',
  },
  {
    quote: "You don't walk away if you love someone. You help the person.",
    author: 'Hillary Clinton',
  },
];

const quote = document.querySelector("#quotes p");
const author = document.querySelector("#quotes strong");

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = `"${randomQuote.quote}"`;
author.innerText = randomQuote.author;