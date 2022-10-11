// welcome message
var user = 'Esraa'
var salutation = 'Hello, ' ;
var greeting = salutation + user + '! Here is what Esraa has been up to lately!';
var greetingEl = document.getElementById('greeting');



//product price
var projectgoal = 20, 
    projectsfinished = .05
    studentPrice = price - ( projectgoal * projectsfinished),
    projectEl = document.getElementById('projectgoal'),
    projectsfinishedEl = document.getElementById('projects finished');

    projectEl.textContent = projectgoal.toFixed(2);
    projectsfinishedEl.textContent = projectsfinished.toFixed(2);

    function myFunction() {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
      }