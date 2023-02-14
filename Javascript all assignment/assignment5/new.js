 
    //   Assignment=05
//       Chapter=14-16
//          Array

//       Question=01
document.write('<h3> Chapter=14-16 </h3>');
document.write('<h3> "Question # 01 " </h3>');
var futureStudents = [];

//       Question=02
document.write('<h3> "Question # 02 " </h3>');
var futureStudents = new Array();
var futureStudents = [];

//       Question=03
document.write('<h3> "Question # 03 " </h3>');
var stringArray = ['foo', 'bar', 'baz'];

//       Question=07
document.write('<h2> "Question # 07 " </h2>');
var qualifications = ['1) SSC', '2) HSC', '3) BCS', '4) BS', '5) BCOM', '6) MS', '7) M. Phil.', '8) PhD'];
document.write("<h3>Qualification</h3>");
document.write('<ul>');
for (var i = 0; i < qualifications.length; i++) {
  document.write(`<li>${qualifications[i]}</li>`);
}
document.write('</ul>');


//       Question=08
document.write('<h2> "Question # 08 " </h2>');
var studentNames = ['Alice', 'Bob', 'Charlie'];
var studentScores = [430, 370, 480];
var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
  const percentage = (studentScores[i] / totalMarks) * 100;
  document.write(`${studentNames[i]} scored ${studentScores[i]} marks, and their percentage is ${percentage}% <br>`);
}

//       Question=10
document.write('<h2> "Question # 10 " </h2>');
var studentScores = [80, 67, 92, 58, 75];

studentScores.sort(function(a, b) {
  return a - b;
});

document.write(`Sorted scores: ${studentScores}`);
