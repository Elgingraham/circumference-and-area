document.getElementById('run').addEventListener('click', randomizer)
let diameter = 0
let circumference = 0
let area = 0
let radius = 0
function randomizer () {
  diameter = document.getElementById('input').value
  diameter = parseInt(diameter)
  radius = diameter / 2
  circumference = 2 * Math.PI * radius 
  area = radius * radius * Math.PI
  document.getElementById('result').innerHTML = 'The circumference is ' + circumference + ' and the area is ' + area
}