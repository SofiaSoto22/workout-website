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
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
document.addEventListener('DOMContentLoaded', async function(){
  try{
    const response =  await fetch(apiURL, options)
    const data = await response.json();
    console.log(data);
    for (let i=0; i<data.length; i++){
      let exerciseName = capitalizeFirstLetter(data[i].name.replaceAll("-", " "));
      let badgeClass = "";
      let badgeLevel = "";

      if (data[i].difficulty === 'expert'){
        badgeClass = "danger";
        badgeLevel = "expert";
      }
      else if (data[i].difficulty === 'intermediate'){
        badgeClass = "warning";
        badgeLevel = "intermediate";
      }
      else {
        badgeClass = "success";
        badgeLevel = "beginner";
      }
      exerciseName = gridjs.html(
        exerciseName + "<span class='badge bg-" + badgeClass + "'>" + badgeLevel + "</span>"

        )
      let exerciseEquipment = capitalizeFirstLetter(data[i].equipment.replaceAll("_", " "));
      let exerciseMuscle = capitalizeFirstLetter(data[i].muscle);
      let exerciseInstructions = capitalizeFirstLetter(data[i].instructions);
      exercise.push([exerciseName, exerciseEquipment, exerciseMuscle, exerciseInstructions])

    }
    const grid = new gridjs.Grid({
      columns:[{
        name:'Name',
        width: '100px',
        sort: true,
      }, {
        name: 'Equipment', 
        width: '100px',

      }, {
        name:'Muscle',
        width: '80px',
      }, {
        name:'Instructions',
        width: '250px',

      }],
      pagination: {
        limit: 5
      },
      resizable: true,
      search: true,
      fixedHeader: true,
      height: '500px',
      data: () => {
        return new Promise(resolve => {
          setTimeout(() =>
            resolve(exercise),1000);
        });
      }

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
