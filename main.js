const quotes = [{name: "Dr. Seuss", quote: "Don't cry because it's over, smile because it happened."},
{name: "Marilyn Monroe", quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."},
{name: "Oscar Wilde", quote: "Be yourself; everyone else is already taken."},
{name: "Albert Einstein", quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."},
{name: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world."},
{name: "Robert Frost", quote: "In three words I can sum up everything I've learned about life: it goes on."},
{name: "Mark Twain", quote: "If you tell the truth, you don't have to remember anything."},
{name: "Maya Angelou", quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."},
{name: "Martin Luther King Jr.", quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."},
{name: "John F. Kennedy", quote: "Things do not happen. Things are made to happen."}];

const colorCodes = '0123456789abcdef';


$(document).ready(function() {
  function getQuote() {
    /*newQuote = quotes[Math.floor(Math.random() * 10)];
    document.getElementById('quote-text').textContent = '"' + newQuote.quote + '"';
    document.getElementById('name-text').textContent = newQuote.name;*/
    var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    $.getJSON(url, function(data) {
      document.getElementById('quote-text').textContent = '"' + data.quoteText + '"';
      document.getElementById('name-text').textContent = data.quoteAuthor;
    });
  }


  function changeColor() {
    var newColor = '#';
    for (var i = 0; i < 6; i++) {
      newColor += colorCodes[Math.floor(Math.random() * 8)];
    }
    document.querySelector('*').style.setProperty('--bg', newColor);
  }

  function tweetQuote() {
    window.open(`https://twitter.com/intent/tweet/?text=${document.getElementById('quote-text').textContent} -${document.getElementById('name-text').textContent}`);
  }

  getQuote()
  changeColor()

});

function getQuote() {
  /*newQuote = quotes[Math.floor(Math.random() * 10)];
  document.getElementById('quote-text').textContent = '"' + newQuote.quote + '"';
  document.getElementById('name-text').textContent = newQuote.name;*/
  var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
  $.getJSON(url, function(data) {
    document.getElementById('quote-text').textContent = '"' + data.quoteText + '"';
    document.getElementById('name-text').textContent = data.quoteAuthor;
  });
}


function changeColor() {
  var newColor = '#';
  for (var i = 0; i < 6; i++) {
    newColor += colorCodes[Math.floor(Math.random() * 8)];
  }
  document.querySelector('*').style.setProperty('--bg', newColor);
}

function tweetQuote() {
  window.open(`https://twitter.com/intent/tweet/?text=${document.getElementById('quote-text').textContent} -${document.getElementById('name-text').textContent}`);
}
