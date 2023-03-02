var i = 0;
var txt2='The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is frequently assisted by technologies such as Cascading Style.'
var speed = 50;

function TypeWriter1() {
    if (i < txt2.length) {
  
      document.getElementById("demo").innerHTML += txt2.charAt(i);
  
      i++;
      setTimeout(TypeWriter1, speed);
    }
  }
  export default TypeWriter1;