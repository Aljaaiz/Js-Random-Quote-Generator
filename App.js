
(function(){
 const quotes = [
   {
    quote: "My style is unique and random. But I think it's important that it still makes sense.",

    author:"- Ade"
   },
   {
   quote: "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do",
    
    author:"― C. JoyBell C."
   },
   {
    quote: "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.",
     
     author:"― J.R. Ward, Crave"
    },
    {
      quote: "What do you want? Where's the goddamn ice I ordered? Where's the booze? There's a war on, man! People are being killed!",
       
       author:"― Hunter S. Thompson"
      }
 ]
 const pQuote = document.getElementById('quote')
 const author = document.getElementById('author')
 const btn = document.getElementById('submit');


  btn.addEventListener('click', function(){
      let rdm = Math.floor(Math.random() * quotes.length);
      pQuote.lastChild.nodeValue= quotes[rdm].quote;
      console.log(quotes[rdm].quote)
      author.firstChild.textContent = quotes[rdm].author;
  })
})();
