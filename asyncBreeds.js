// const fs = require('fs');

// const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
//   console.log('breedDetailsFromFile: Calling readFile...');
//   fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
//     console.log("In readFile's Callback: it has the data.");
//     if (!error) functionToRunWhenThingsAreDone(data);
//   });
// };
// const printOutCatBreed = breed => {
//   console.log('Return Value:', breed);
// }
// const bombay = breedDetailsFromFile('Bombay', printOutCatBreed);



const firstLettertoUpper = (name, cd) => {
  let newName = ""
  for(const index in name){
    if(name[index] === 0){
      newName += name[index].toUpperCase();
    } else {
      newName += name[index].toLowerCase();
    }
  }
  cd(newName)
}
const printToConsole = (name) => {
  console.log(name);
}
firstLettertoUpper("landon", printToConsole)
