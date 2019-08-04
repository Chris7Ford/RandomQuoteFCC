/*A few* more things to do:
1.change colors of button and bg per button press

2.change fonts

*/

$(document).ready(function(){
//quote library is first the rest of the code is after
var quoteLibrary = [{
  quote:"Wikipedia Is The Best Thing Ever. Anyone In The World Can Write Anything They Want About Any Subject, So You Know You Are Getting The Best Possible Information.Wikipedia Is The Best Thing Ever. Anyone In The World Can Write Anything They Want About Any Subject, So You Know You Are Getting The Best Possible Information." ,
  speaker:"Michael Scott"
},

{
  quote:"I Wonder What People Like About Me? Probably My Jugs." ,
  speaker:"Phyllis"
},

{
  quote:"Right Now This Is Just A Job. If I Advance Any Higher In This Company, Then This Would Be My Career. And Well, If This Were My Career I'd Have To Throw Myself In Front Of A Train."
 ,
  speaker:"Jim Halpert"
},
{
  quote:"Bears. Beets. Battlestar Galactica." ,
  speaker:"Jim Halpert"
},

{
  quote:"Through Concentration, I Can Raise And Lower My Cholesterol At Will." ,
  speaker:"Dwight Schrute"
},

{
  quote:"I Love Inside Jokes. Love To Be A Part Of One Someday." 
 ,
  speaker:"Michael Scott"
},

{
  quote:"I Wish There Was A Way To Know You’re In The Good Old Days, Before You've Actually Left Them."
  ,
  speaker:"Andy Bernard"
},




{
  quote:"How Would I Describe Myself? Three Words. Hard-working. Alpha Male. Jackhammer. Merciless. Insatiable." 


 ,
  speaker:"Dwight Schrute"
},

{
  quote:"Do You Think Doing Alcohol Is Cool?"


 ,
  speaker:"Michael Scott"
},

{
  quote:"You Couldn’t Handle My Undivided Attention."


 ,
  speaker:"Dwight Schrute"
},

{
  quote:"That's What She Said!"



 ,
  speaker:"Michael Scott"
},

{
  quote:"my philosophy is basically this, and this is something that I live by, and I always have, and I always will: Don't ever, for any reason, do anything, to anyone, for any reason, ever, no matter what, no matter where, or who, or who you are with, or where you are going, or where you've been, ever, for any reason whatsoever."


 ,
  speaker:"Michael Scott"
},

{
  quote:"I go to the bathroom for 45 minutes and everything changes."


 ,
  speaker:"Kevin Malone"
},

{
  quote:"Hey Deangelo, what do you think about bald people? I hate them."


 ,
  speaker:"Kevin Malone"
},

{
  quote:"Hey Deangelo, what do you think about bald people? I hate them."


 ,
  speaker:"Kevin Malone"
},

{
  quote:"Hey Deangelo, what do you think about bald people? I hate them."


 ,
  speaker:"Kevin Malone"
},

{
  quote:"Nope it's not Ashton Kutcher, it's Kevin Malone. Equally handsome, equally smart."


 ,
  speaker:"Kevin Malone"
},

{  quote:"I have this little vacuum cleaner that’s broken. If Dwight doesn’t work out, maybe that can be manager."
 ,
  speaker:"Pam Beesly"
},


{  quote:"Gabe was a great guy with so many wonderful qualities. But it was a challenge being touched by him."



 ,
  speaker:"Erin"
},

{  quote:"I talk a lot, so I've learned to just tune myself out."
 ,
  speaker:"Kelly"
},
];



  var quoteNumber;
  var previousNumber;


/*quoteNumber= Math.floor(Math.random() * (1 - 0 + 1)) + 0;
  
  $('#quoteBody').html(quoteLibrary[quoteNumber].quote);
  $("#speakerPlace").html("-"+quoteLibrary[quoteNumber].speaker);*/


$('button').click(function(){

   $('#quoteBody').hide();
 $("#speakerPlace").hide();
  
   quoteNumber= Math.floor(Math.random() * (19 - 0 + 1)) + 0;
  
 //while loop makes sure we don't get the same quote twice in a row 
 while (quoteNumber===previousNumber) {
quoteNumber= Math.floor(Math.random() * (19 - 0 + 1)) + 0;
  };
  previousNumber=quoteNumber;
  
  $('#quoteBody').html('"'+quoteLibrary[quoteNumber].quote+'"');
  $("#speakerPlace").html("-"+quoteLibrary[quoteNumber].speaker);
  
   $('#quoteBody').fadeIn(300);
 $("#speakerPlace").fadeIn(2000);
//storing the quote number to pass into tweeter function
  return quoteNumber;
    });
  

  //on click function to tweet out the current quote 
  $(".fa").click(function(){
  function tweeter(){
    var url="https://twitter.com/intent/tweet";
    var text=quoteLibrary[quoteNumber].quote;
    var hashtag="TheOffice,"+quoteLibrary[quoteNumber].speaker;
    var user="userName";
    window.open(url+"?text="+text+";hashtags="+hashtag+";via="+user);
  }
          tweeter();


    });
});