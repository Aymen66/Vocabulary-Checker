let tabs = document.querySelectorAll('[data-tab-target]')
let tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    let target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

let vocabChecker = e => {
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  formData.push({
    word : document.getElementById("word").value,
   
    meaning : document.getElementById("meaning").value,
    


  });
 
  localStorage.setItem("formData",  JSON.stringify(formData));
  dispData();
  e.preventDefault();
  document.querySelector("form").reset();
document.getElementById("word").focus();
  formData.pop();
  result.textContent = ""

  getRandomWord()

  
}

function dispData(){
  // console.log(localStorage.getItem("formData"))
  if(localStorage.getItem("formData")){
    // the data pushed to formData is stored in tbody
    var output = document.querySelector("tbody");
    output.innerHTML = "";
    JSON.parse(localStorage.getItem("formData")).forEach(data =>{
      output.innerHTML += `
      <tr >
      <td id="activity" >${data.word}</td>
     
      <td>${data.meaning}</td>

      </tr>

      `
    })
  }
}dispData();


function deletebBtn(){
  let existingEntries = JSON.parse(localStorage.getItem("formData"));
  existingEntries.splice(-1, 1);
  localStorage.setItem("formData", JSON.stringify(existingEntries))

  
  
  dispData()
  
  // show()


}

function show(){
  let table = document.getElementById("output");
if (table.style.display === "none") {
  table.style.display = "block";
} else {
  table.style.display = "none";
}
}show()

// function download() {
//   // Retrieve the data from localStorage
//   var data = localStorage.getItem('formData');

//   // Parse the data into a JavaScript object
//   var obj = JSON.parse(data);

//   // Get an array of the keys in the object
//   var keys = Object.keys(obj);

//   // Transform the array of keys into an array of rows, with each row being an array of values
//   var rows = keys.map(key => [key, obj[key]]);

//   // Convert each row into a string, with the values separated by commas
//   var csv = rows.map(row => row.join(',')).join('\n');

//   return csv;
// }

 
// function download() {
// //   let table = document.getElementById("output");
// // let row = table.getElementsByTagName("td");
// //   var text = JSON.stringify(row);
  

//   var text = JSON.stringify(localStorage);
//   var filename = "My list.CSV";
//   var blob = new Blob([text], { type: "text/csv" });
//   var anchor = document.createElement("a");
//   anchor.download = filename;
//   anchor.href = window.URL.createObjectURL(blob);
//   anchor.target = "_blank";
//   anchor.style.display = "none"; // just to be safe!
//   document.body.appendChild(anchor);
//   anchor.click();
//   document.body.removeChild(anchor);
// }

// function download(){

//   var item = localStorage.csv=localStorage;

//   var ary = localStorage.getItem( "csv" ); //csv as a string
//   var blob = new Blob([item], {type: "text/csv"});
//   var url = URL.createObjectURL(blob);
//   var a = document.querySelector("#results"); // id of the <a> element to render the download link
//   a.href = url;
//   a.download = "file.csv";



// }
 


function search() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
let table = document.getElementById("output");
let row = table.getElementsByTagName("tr");
	for (i = 0; i < row.length; i++) {
		if (!row[i].innerHTML.toLowerCase().includes(input)) {
			row[i].style.display = "none";
		} else {
			row[i].style.display="block";				
		}
    
	}



}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}




function logOut() {
  let inputEl = document.getElementById("word");
  let result = document.getElementById("result");
inputEl.value=inputEl.value.toLowerCase();
let table = document.getElementById("output");
let row = table.getElementsByTagName("td");
for (i = 0; i < row.length; i++) {
  if (inputEl.value===row[i].innerHTML.toLowerCase()) {
   return  row = result.textContent="✅"+" Correct";
  } else if (inputEl.value!==""){
      result.textContent="❌"+" Wrong";				
  }
  else{
     return row=result.textContent="";		
  }
  
}

}
function logOutSearch() {
  let inputEl = document.getElementById("searchBox");
  let result = document.getElementById("resultTwo");
inputEl.value=inputEl.value.toLowerCase();
let table = document.getElementById("output");
let row = table.getElementsByTagName("td");
for (i = 0; i < row.length; i++) {
  if (inputEl.value===row[i].innerHTML.toLowerCase()) {
   return  row = result.textContent="✅"+" Correct";
  } else if (inputEl.value!==""){
      result.textContent="❌"+" Wrong";				
  }
  else{
     return row=result.textContent="";		
  }
  
}

}


function getRandomWord(){
  // let randomWord = document.getElementById("randomWord")
let table = document.getElementById("output");
let row = table.getElementsByTagName("tr");
	for (i = 0; i < row.length; i++) {
    let randomIndex = Math.floor(Math.random() * row.length)
      randomWord.innerHTML = row[randomIndex].innerHTML;
    
	}
  // the output here is [object HTMLTableCellElement]
  showMeaning()
}getRandomWord()


function showMeaning(){

  // var table = document.querySelector('td');
  let table = document.getElementById("randomWord");
  let row = table.querySelector("td");
  if (row.style.display === "none") {
   return row.style.display = "block";
} else {
  row.style.display = "none";
}
}

function practiceBtn(){
  let table = document.getElementById("practiceSection");
if (table.style.display === "none") {
  table.style.display = "block";
} else {
  table.style.display = "none";
}
}practiceBtn()


// function showMeaning(){

//   // var table = document.querySelector('td');
//   let table = document.getElementById("randomWord");
//   let row = table.querySelector("td");
//   if (row.style.display === "none") {
//     row.style.display = "block";
// } else {
//   row.style.display = "none";
// }
// // this worked
// }showMeaning()




//  Using Javascript
//  function showMeaning(){
//     // let table = document.getElementById("randomWord");
//     let table = document.getElementById("randomWord");
//    var elems = table.getElementsByTagName("th");
//    for(var i = 0; i<elems.length; i++) {
//     //  elems[i].style.display = "none";
//      if (elems[i].style.display === "none") {
//       elems[i].style.display = "block";
//       } else {
//         elems[i].style.display = "none";
//       }
//    }
//  }showMeaning()

//  // Using Jquery
//  $("#showMeaning").click(function() {
//   $("#randomWord").hide();
//  });

// function showMeaning() {
//   // Get a reference to the table cell
//   var cell = document.querySelector('td');

//   // Create a button element
//   var button = document.createElement('button');
//   button.textContent = 'Hide';

//   // Add an event listener to the button that listens for a click event
//   button.addEventListener('click', function() {
//     // If the cell's display property is currently set to 'none', set it to ''
//     // Otherwise, set it to 'none'
//     cell.style.display = cell.style.display === 'none' ? '' : 'none';
    
//     // Change the text of the button to "Show" or "Hide" depending on the current value of the display property
//     button.textContent = cell.style.display === 'none' ? 'Show' : 'Hide';
//   });

//   // Append the button to the cell
//   cell.appendChild(button);
// }showMeaning()
















// function getRandomWord(){
//   let table = document.getElementById("output");
// let row = table.getElementsByTagName("td");
// var random= row[(Math.random() * row.length) | 0];
         
//   let randomWord = document.getElementById("randomWord")
//   randomWord.innerHTML=random
      
// }



// function logOut(){
//   let inputEl = document.getElementById("activity");
//   let existingEntries = JSON.parse(localStorage.getItem("formData"));
//   localStorage.setItem("formData", JSON.stringify(existingEntries))
//   let result = document.getElementById("result");

//   // inputEl.value=inputEl.value.toLowerCase();
//   for (let i = 0; i<existingEntries.length; i++){
//     if (inputEl.value===existingEntries[i]) {
//      return result.textContent = "✅"+" صحيح";
  

//     } 
//     else if(inputEl.value!==existingEntries[i]) {
//        result.textContent = "❌"+" خطأ"
//     }
//     else {
     
//       return result.textContent =" "

//     }

//   }



// }



// new update 
// function logOut() {
//   let inputEl = document.getElementById("activity");
//   let result = document.getElementById("result");
// inputEl.value=inputEl.value.toLowerCase();
// let table = document.getElementById("output");
// let row = table.getElementsByTagName("td");
// for (i = 0; i < row.length; i++) {
//   if (row[i].innerHTML.toLowerCase()===inputEl.value) {
//     row = result.textContent="right";
//   } else {
//     row=result.textContent="wrong";				
//   }
  
// }

// }
// function logOut(){
//   let inputEl = document.getElementById("activity").value;

//   inputEl.value=inputEl.value.toLowerCase();
//   let result = document.getElementById("result");
 
//    for (let i = 0; i<formData.activity.length; i++){
//      if (inputEl===formData.activity[i]) {
//       return result.textContent = "✅"+" صحيح";
   
 
//      } 
//      else if(inputEl!=="") {
//         result.textContent = "❌"+" خطأ"
//      }
//      else {
      
//        return result.textContent =" "
 
//      }
 
//    }
 
//  }



// function logOut() {
//   let inputEl = document.getElementById("activity");
//   let result = document.getElementById("result");
// inputEl.value=inputEl.value.toLowerCase();
// let table = document.getElementById("output");
// let row = table.getElementsByTagName("td");
// for (i = 0; i < row.length; i++) {
//   if (row[i].innerHTML.toLowerCase()===inputEl.value) {
//      row = result.textContent="✅"+" صحيح";
//   } else if (row[i].innerHTML.toLowerCase()!==inputEl.value){
//       result.textContent="wrong";				
//   }
//   else{
//       row=result.textContent=none;		
//   }
  
// }

// }


class TableCSVExporter {
  constructor (table, includeHeaders = true) {
      this.table = table;
      this.rows = Array.from(table.querySelectorAll("tr"));

      if (!includeHeaders && this.rows[0].querySelectorAll("th").length) {
          this.rows.shift();
      }
  }

  convertToCSV () {
      const lines = [];
      const numCols = this._findLongestRowLength();

      for (const row of this.rows) {
          let line = "";

          for (let i = 0; i < numCols; i++) {
              if (row.children[i] !== undefined) {
                  line += TableCSVExporter.parseCell(row.children[i]);
              }

              line += (i !== (numCols - 1)) ? "," : "";
          }

          lines.push(line);
      }

      return lines.join("\n");
  }

  _findLongestRowLength () {
      return this.rows.reduce((l, row) => row.childElementCount > l ? row.childElementCount : l, 0);
  }

  static parseCell (tableCell) {
      let parsedValue = tableCell.textContent;

      // Replace all double quotes with two double quotes
      parsedValue = parsedValue.replace(/"/g, `""`);

      // If value contains comma, new-line or double-quote, enclose in double quotes
      parsedValue = /[",\n]/.test(parsedValue) ? `"${parsedValue}"` : parsedValue;

      return parsedValue;
  }
}
