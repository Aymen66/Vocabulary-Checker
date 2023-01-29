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

// popups codes

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode")
  var change = document.getElementById("darkMode");
  if (change.innerHTML == "Go Dark")
  {
      change.innerHTML = "Go Light";
    }
      else {
        change.innerHTML = "Go Dark";
                }
}


// codes for the table and the inputs

var VocabData = [];


function displayTableData(){
  var html ="<table border='1/1' id='dataTable' class='table'>";
  setTimeout(() => {
    html+="<thead>";
    html+="<tr>";
    // html+="<td>"+'SNo.'+"</td>";
    html+="<td>"+'Word'+"</td>";
    html+="<td>"+'Meaning'+"</td>";
   
    // html+="<td>"+'Action'+"</td>";
    html+="</tr>";
    html+="</thead>";
    for ( var i = 0; i< VocabData.length; i++){
      // var sno=i+1;
      html+="<tr class='randomPractice'>";
    // html+="<td>"+sno+"</td>";
    html+="<td >"+VocabData[i].addWord+"</td>";
    html+="<td >"+VocabData[i].addMeaning+"</td>";
   

    html+="</tr>";
    html+="<tr>";
    html+="<td id='hideRow'>"+`<button type="button" class="removeBtn" onclick='removeItem(${VocabData[i].id})'><i class="fa fa-trash"></i>
    
     </button>
     `+"</td>";

    html+="</tr>";



    }
    html+="</table>";
    document.getElementById("table").innerHTML = html

  }, 200);

}
displayTableData();
let leadsFromLocalStorage = JSON.parse( localStorage.getItem("VocabData") )
console.log(leadsFromLocalStorage)
if (leadsFromLocalStorage) {
  VocabData = leadsFromLocalStorage
}
function addBtn(){
  var addWord= document.getElementById("addWord").value;
  var addMeaning= document.getElementById("addMeaning").value;
  
let id = VocabData.length +1;
  if(addWord && addMeaning){
    VocabData.push({addWord:addWord, addMeaning:addMeaning, id:id})
    displayTableData();
    clearItems();
    localStorage.setItem("VocabData", JSON.stringify(VocabData) )

  }
 
  result.textContent = ""
  
    
}


localStorage.setItem('table', VocabData);
localStorage.getItem("VocabData")


function clearItems(){
   document.getElementById("addWord").value=""
   document.getElementById("addMeaning").value=""
  
}

function removeItem(rec){
  var filt = VocabData.filter((a,i)=>{
    if(rec== a.id){
      VocabData.splice(i,1);
      displayTableData();
      localStorage.setItem("VocabData", JSON.stringify(VocabData) )

    }
  })
}

function deletebBtn(){
  let existingEntries = JSON.parse(localStorage.getItem("VocabData"));
  existingEntries.splice(-1, 1);
  localStorage.setItem("VocabData", JSON.stringify(existingEntries))
  VocabData.pop();

  
  
  displayTableData();  
  show()


}


function logOut() {
  let inputEl = document.getElementById("addWord");
  // let inputMeaningEl = document.getElementById("addWMeaning");

  let result = document.getElementById("result");
inputEl.value=inputEl.value.toLowerCase();
// inputMeaningEl.value=inputMeaningEl.value.toLowerCase();

let table = document.getElementById("table");
let row = table.getElementsByTagName("td");
for (i = 0; i < row.length; i++) {
  if (inputEl.value===row[i].innerHTML.toLowerCase()) {
   return  row = result.textContent="✅"+" available";
  } else if (inputEl.value!==""){
      result.textContent="❌"+" Not available";				
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
let table = document.getElementById("table");
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
function show(){
  let table = document.getElementById("table");
if (table.style.display === "none") {
  table.style.display = "block";
} else {
  table.style.display = "none";
}
}show()

function getRandomWord(){
let table = document.getElementById("table");
// let row = table.getElementByName("randomPractice");

let row = table.getElementsByClassName('randomPractice');
// document.querySelectorAll('input:not(.nothis)');
	for (i = 0; i < row.length; i++) {
    let randomIndex = Math.floor(Math.random() * row.length)
      randomWord.innerHTML = row[randomIndex].innerHTML;
    
	}
  showMeaning()
}getRandomWord();


function showMeaning(){

  let table = document.getElementById("randomWord");
  let row = table.querySelector("td");
  if (row.style.display === "none") {
   return row.style.display = "block";
} else {
  row.style.display = "none";
}

}showMeaning()

// function practiceBtn(){
//   let hideShow = document.getElementById("practiceSection");
// if (hideShow.style.display !== "none") {
//   hideShow.style.display = "none";
// } else {
//   hideShow.style.display = "block";
// }
// }practiceBtn();



function toggler(divId) {
  $("#" + divId).toggle();
}

function practiceBtn() {
  toggler('practiceSection');
  $('#GFG_DOWN').text("DIV Box is toggling.");
}




// function download(data, filename, type) {
//   var file = new Blob([VocabData], {type: type});
//   if (window.navigator.msSaveOrOpenBlob) // IE10+
//     window.navigator.msSaveOrOpenBlob(file, filename);
//   else { // Others
//     var a = document.createElement("a"),
//             url = URL.createObjectURL(file);
//     a.href = url;
//     a.download = filename;
//     document.body.appendChild(a);
//     a.click();
//     setTimeout(function() {
//         document.body.removeChild(a);
//         window.URL.revokeObjectURL(url);  
//     }, 0); 
//   }
//   }

