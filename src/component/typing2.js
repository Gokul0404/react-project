var i = 0;
var txt3='JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript.'
var speed = 50;

function TypeWriter2() {
    if (i < txt3.length) {
  
     
      document.getElementById("demo2").innerHTML += txt3.charAt(i);
      i++;
      setTimeout(TypeWriter2, speed);
    }
  }
  export default TypeWriter2;