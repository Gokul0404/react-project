var i = 0;
var txt1 = 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.';
// var txt3='JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript.'
// var txt2='The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It is frequently assisted by technologies such as Cascading Style.'

var speed = 50;

function TypeWriter() {
  if (i < txt1.length) {
    // document.getElementById("demo").innerHTML += txt2.charAt(i);
    document.getElementById("demo1").innerHTML += txt1.charAt(i);
    // document.getElementById("demo2").innerHTML += txt3.charAt(i);
  

    i++;
    setTimeout(TypeWriter, speed);
  }
}





export default TypeWriter;
