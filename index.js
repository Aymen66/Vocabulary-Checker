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

let toDo = e => {
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  formData.push({
    activity : document.getElementById("activity").value,
    // time : document.getElementById("time").value,
    // date : document.getElementById("date").value,
    location : document.getElementById("location").value,
    


  });
 
  localStorage.setItem("formData",  JSON.stringify(formData));
  dispData();
  e.preventDefault();
  document.querySelector("form").reset();
document.getElementById("activity").focus();
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
      <td id="activity" >${data.activity}</td>
     
      <td>${data.location}</td>

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

 
function download() {
//   let table = document.getElementById("output");
// let row = table.getElementsByTagName("td");
//   var text = JSON.stringify(row);
  

  var text = JSON.stringify(localStorage);
  var filename = "My list.txt";
  var blob = new Blob([text], { type: "text/plain" });
  var anchor = document.createElement("a");
  anchor.download = filename;
  anchor.href = window.URL.createObjectURL(blob);
  anchor.target = "_blank";
  anchor.style.display = "none"; // just to be safe!
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
}




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
  let inputEl = document.getElementById("activity");
  let result = document.getElementById("result");
inputEl.value=inputEl.value.toLowerCase();
let table = document.getElementById("output");
let row = table.getElementsByTagName("td");
for (i = 0; i < row.length; i++) {
  if (inputEl.value===row[i].innerHTML.toLowerCase()) {
   return  row = result.textContent="✅"+" صحيح";
  } else if (inputEl.value!==""){
      result.textContent="❌"+" خطأ";				
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