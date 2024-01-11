const apiKey = "CWFJDniy+DMLTaxW85tBtQ==7CXn7WkB1J46cXgA"
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  }
};
let exercise = []
const urlParams = new URLSearchParams(window.location.search);
const queryParam = urlParams.get('type');
const apiURL = "https://api.api-ninjas.com/v1/exercises?type="+ queryParam;
document.addEventListener('DOMContentLoaded', async function(){
  try{
    const response =  await fetch(apiURL, options)
    const data = await response.json();
    console.log(data);
    for (let i=0; i<data.length; i++){
  let exerciseName = data[i].name;
  let exerciseEquipment = data[i].equipment;
  let exerciseMuscle = data[i].muscle;
  let exerciseInstructions = data[i].instructions;
  exercise.push([exerciseName, exerciseEquipment, exerciseMuscle, exerciseInstructions])
    }
    const grid = new gridjs.Grid({
    columns:['Name', 'Equipment', 'Muscle', 'Instructions'],
    data: exercise
  }).render(document.getElementById('grid'));
  }
  catch (error){
    console.log(error);
  }
})


 


// document.addEventListener('DOMContentLoaded', function(){
//   const grid = new gridjs.Grid({
//     columns:['Name', 'Age', 'Email'],
//     data:[
//       ['John Doe', 30, 'john@example.com'],
//       ['Jane Doe', 28, 'jane@gmail.com'],
//       ]
//   }).render(document.getElementById('grid'));
// });
