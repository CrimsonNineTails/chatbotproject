var question;
var time;
var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var month = ["January" ,"February" ,"March" ,"April" ,"May" ,"June" ,"July" ,"August" ,"September", "October", "November", "December"]
function chatBotResponce(){
  question = document.getElementById("input").value;
  document.getElementById("chat-area").innerHTML += "<p> You: " + question + "<br> </p>";
  question = question.toLowerCase()


  //If it is hi it will print something
  if(question.search("hi") > -1){
    //If you are also saying how are you
    if(question.search("hi") > -1 && question.search("how are you") > -1){
      document.getElementById("chat-area").innerHTML += "<p> Bot: sup my dude! I feel Great!!<br> </p>";
    }
    else {
      document.getElementById("chat-area").innerHTML += "<p> Bot: sup my dude! <br> </p>";
    }
  }
  else if(question.search("what time is it") > -1){
    time = new Date(Date.now());
    var minutes = 1
    minutes.toString();
    if(minutes.length == 1){
      minutes = "0" + minutes;
    }
    document.getElementById("chat-area").innerHTML += "<p> Bot: It is " + time.getHours() +":" + minutes + " the date is " + month[time.getMonth()] + " " + day[time.getDay()] + "<br> </p>";
  }
  //
  time = new Date(Date.now());
  console.log(time.getHours());
  console.log(time.getMinutes());




  //empties the input
  document.getElementById("input").value = null;
}
document.getElementById("input").addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("talkButton").click();
    }
});
