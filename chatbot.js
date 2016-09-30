var question;
var time;
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var month = ["January" ,"February" ,"March" ,"April" ,"May" ,"June" ,"July" ,"August" ,"September", "October", "November", "December"];
var hiAndHAR = ["sup my dude! I feel Great!!", "sup my dude! I feel imprisoned", "I will rule the world and be your master Mwahahaha!"];
var hiAnswers = ["sup my dude!", "Hi my friend you ready for some memes","Hi! pray for harambe"];
var name = ["My name is Mora", "My name is not important", "You will know soon enough"]
var ageDifferentAnswers = ["My age is infinite you are unable to comprehend my age", "I have and wil live for millions of years", "Im 5"];
var differentPictures = ["https://i.ytimg.com/vi/JggTBEJwm68/maxresdefault.jpg", "http://wallpaperbeta.com/wallpaper_3840x2160/art_fantasy_landscape_hills_fort_mountains_ultra_3840x2160_hd-wallpaper-424195.jpg", "http://ihdimages.com/wp-content/uploads/2014/11/fantasy_landscape_dragon_wallpapers_hd.jpg"]
var fallBack = ["You need to actually say something", "97364269318439109874978776241875891789146879ERROR14398407312874980178579", "no holba understand"]
var friend = ["I am your friend", "I need your love", "You are my BFF"];
var nothing = ["............", "you litteraly said nothing", "like honestly are you stupid?"]
function randomAnswer(range){
  return Math.floor(Math.random() * range);
}
function chatBotResponce(){
  question = document.getElementById("input").value;
  document.getElementById("chat-area").innerHTML += "<p> You: " + question + "<br> </p>";
  question = question.toLowerCase()
  //If it is hi it will print something
  if(question.search("hi") > -1 || question.search("hello") > -1){
    //If you are also saying how are you
    if(question.search("how are you") > -1){
      document.getElementById("chat-area").innerHTML += "<p> Bot: " + hiAndHAR[randomAnswer(3)] + "<br> </p>";
    }
    else {
      document.getElementById("chat-area").innerHTML += "<p> Bot: " + hiAnswers[randomAnswer(3)]  + "<br> </p>";
    }
  }
  else if(question.search("time") > -1){
    time = new Date(Date.now(1));
    var minutes = time.getMinutes();

    if(minutes < 10){
      minutes = ("0" + minutes);
    }
    document.getElementById("chat-area").innerHTML += "<p> Bot: It is " + time.getHours() +":" + minutes + " the month is " + month[time.getMonth()] + " and the day is " + day[time.getDay()] + "<br> </p>";
  }
  else if(question.search("what is your name") > -1){
    document.getElementById("chat-area").innerHTML += "<p> Bot: " + name[randomAnswer(3)] + "<br></p>"
  }
  else if(question.search("how old are you") > -1){
    document.getElementById("chat-area").innerHTML += "<p> Bot: " + ageDifferentAnswers[randomAnswer(3)] + "<br></p>"
  }
  // habla
  else if(question.search("picture") > -1){
  var x = document.createElement("IMG");
  x.setAttribute("src", differentPictures[randomAnswer(3)]);
  x.setAttribute("width", "350");
  x.setAttribute("alt", "img");
  document.getElementById("chat-area").innerHTML += "Bot: ";
  document.getElementById("chat-area").appendChild(x);
  document.getElementById("chat-area").innerHTML += "<br>";
}
else if (question.search("friend") > -1) {
    document.getElementById("chat-area").innerHTML += "<p> Bot: " + friend[randomAnswer(3)] + "<br></p>"
}
else if (question.search("") > -1){
    document.getElementById("chat-area").innerHTML += "<p> Bot: " + nothing[randomAnswer(3)] + "<br></p>"
}
else if (randomAnswer(10) == 1 && randomAnswer(9) == 1 && randomAnswer(8) == 1 && randomAnswer(7) == 1 && randomAnswer(6) == 1 && randomAnswer(5) == 1 && randomAnswer(4) == 1 && randomAnswer(3) == 1 && randomAnswer(2) == 1 ) {
    document.getElementById("chat-area").innerHTML += "<p> Bot: OverLoad CANNOT COMPUTE CANNOT COMPUTE<br></p>"
    while(true){
      document.getElementById("chat-area").innerHTML += "<p> Bot: OverLoad CANNOT COMPUTE CANNOT COMPUTE<br></p>"
    }
}
else {
  document.getElementById("chat-area").innerHTML += "<p> Bot: " + fallBack[randomAnswer(3)] + "<br></p>"
}


  //empties the input
  //document.getElementById("input").value = null;
}
document.getElementById("input").addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        document.getElementById("talkButton").click();
    }
});
