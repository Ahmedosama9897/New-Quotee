var arr = [
    {Quote :" “So many books, so little time.”", Auther :"― Frank Zappa" },
    {Quote:"“You only live once, but if you do it right, once is enough.”",Auther: "― Mae West"},
    {Quote:"“Be the change that you wish to see in the world.”",Auther: "― Mahatma Gandhi"},
    {Quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",Auther: "― Oscar Wilde "},
    {Quote:"“We accept the love we think we deserve.”",Auther: "― Stephen Chbosky"},
    {Quote:"“A room without books is like a body without a soul.”",Auther: "― Marcus Tullius Cicero"},
    {Quote:"“Be yourself; everyone else is already taken.”",Auther: "― Oscar Wilde"},
    {Quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",Auther: "― Albert Einstein"},
    {Quote:"“It does not do to dwell on dreams and forget to live.”",Auther: "― J.K. Rowling"},
    {Quote:"“I have not failed. I've just found 10,000 ways that won't work.”",Auther: "― Thomas A. Edison"},
        
]
var qu = document.getElementById("qu");
var au = document.getElementById("au");
    function getQuote(){
        var i = Math.floor( Math.random()*10) ;
        
        qu.innerHTML=arr[i].Quote
        au.innerHTML=arr[i].Auther

    }
    // getQuote();
 
    
  