// let tabs = document.querySelectorAll('[data-tab-target]')
// let tabContents = document.querySelectorAll('[data-tab-content]')

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     let target = document.querySelector(tab.dataset.tabTarget)
//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove('active')
//     })
//     tabs.forEach(tab => {
//       tab.classList.remove('active')
//     })
//     tab.classList.add('active')
//     target.classList.add('active')
//   })
// })


// function darkMode() {
//   var element = document.body;
//   element.classList.toggle("dark-mode")
//   var change = document.getElementById("darkMode");
//   if (change.innerHTML == "Go Dark")
//   {
//       change.innerHTML = "Go Light";
//     }
//       else {
//         change.innerHTML = "Go Dark";
//                 }
// }


// // codes for the table and the inputs

// var VocabData = [];


// function displayTableData(){
//   var html ="<table border='1/1' id='dataTable' class='table'>";
//   setTimeout(() => {
//     html+="<thead>";
//     html+="<tr>";
//     // html+="<td>"+'SNo.'+"</td>";
//     html+="<td>"+'Word'+"</td>";
//     html+="<td>"+'Meaning'+"</td>";
   
//     // html+="<td>"+'Action'+"</td>";
//     html+="</tr>";
//     html+="</thead>";
//     for ( var i = 0; i< VocabData.length; i++){
//       // var sno=i+1;
//       html+="<tr class='randomPractice'>";
//     // html+="<td>"+sno+"</td>";
//     html+="<td >"+VocabData[i].addWord+"</td>";
//     html+="<td >"+VocabData[i].addMeaning+"</td>";
   

//     html+="</tr>";
//     html+="<tr>";
//     html+="<td id='hideRow'>"+`<button type="button" class="removeBtn" onclick='removeItem(${VocabData[i].id})'><i class="fa fa-trash"></i>
    
//      </button>
//      `+"</td>";

//     html+="</tr>";



//     }
//     html+="</table>";
//     document.getElementById("table").innerHTML = html

//   }, 200);

// }
// displayTableData();
// let leadsFromLocalStorage = JSON.parse( localStorage.getItem("VocabData") )
// console.log(leadsFromLocalStorage)
// if (leadsFromLocalStorage) {
//   VocabData = leadsFromLocalStorage
// }
// function addBtn(){
//   var addWord= document.getElementById("addWord").value;
//   var addMeaning= document.getElementById("addMeaning").value;
  
// let id = VocabData.length +1;
//   if(addWord && addMeaning){
//     VocabData.push({addWord:addWord, addMeaning:addMeaning, id:id})
//     displayTableData();
//     clearItems();
//     localStorage.setItem("VocabData", JSON.stringify(VocabData) )

//   }
 
//   result.textContent = ""
  
    
// }


// localStorage.setItem('table', VocabData);
// localStorage.getItem("VocabData")


// function clearItems(){
//    document.getElementById("addWord").value=""
//    document.getElementById("addMeaning").value=""
  
// }

// function removeItem(rec){
//   var filt = VocabData.filter((a,i)=>{
//     if(rec== a.id){
//       VocabData.splice(i,1);
//       displayTableData();
//       localStorage.setItem("VocabData", JSON.stringify(VocabData) )

//     }
//   })
// }

// function deletebBtn(){
//   let existingEntries = JSON.parse(localStorage.getItem("VocabData"));
//   existingEntries.splice(-1, 1);
//   localStorage.setItem("VocabData", JSON.stringify(existingEntries))
//   VocabData.pop();

  
  
//   displayTableData();  
//   show()


// }


// function logOut() {
//   let inputEl = document.getElementById("addWord");
//   // let inputMeaningEl = document.getElementById("addWMeaning");

//   let result = document.getElementById("result");
// // inputEl.value=inputEl.value.toLowerCase();
// // inputMeaningEl.value=inputMeaningEl.value.toLowerCase();

// let table = document.getElementById("table");
// let row = table.getElementsByTagName("td");
// for (i = 0; i < row.length; i++) {
//   if (inputEl.value.toLowerCase()===row[i].innerHTML.toLowerCase().replace(/\s/g, '')) {
//    return  row = result.textContent="✅"+" available";
//   } else if (inputEl.value!==""){
//       result.textContent="❌"+" Not available";				
//   }
//   else{
//      return row=result.textContent="";		
//   }
  
// }

// }


// function logOutSearch() {
//   let inputEl = document.getElementById("searchBox");
//   let result = document.getElementById("resultTwo");
// inputEl.value=inputEl.value.toLowerCase();
// let table = document.getElementById("randomWord");
// let row = table.getElementsByTagName("td");
// for (i = 0; i < row.length; i++) {
//   if (inputEl.value===row[i].innerHTML.toLowerCase().replace(/\s/g, '')) {
//    return  row = result.textContent="✅"+" Correct";
//   } else if (inputEl.value!==""){
//       result.textContent="❌"+" Wrong";				
//   }
//   else{
//      return row=result.textContent="";		
//   }
  
// }

// }
// function show(){
//   let table = document.getElementById("table");
// if (table.style.display === "none") {
//   table.style.display = "block";
// } else {
//   table.style.display = "none";
// }
// }show()

// function getRandomWord(){
// let table = document.getElementById("table");
// // let row = table.getElementByName("randomPractice");

// let row = table.getElementsByClassName('randomPractice');
// document.querySelectorAll('input:not(.nothis)');
// 	for (i = 0; i < row.length; i++) {
//     let randomIndex = Math.floor(Math.random() * row.length)
//       randomWord.innerHTML = row[randomIndex].innerHTML;
    
// 	}
//   showMeaning()
// }getRandomWord();


// function showMeaning(){

//   let table = document.getElementById("randomWord");
//   let row = table.querySelector("td");
//   if (row.style.display === "none") {
//    return row.style.display = "table";
// } else {
//   row.style.display = "none";
// }

// }showMeaning()

// // function practiceBtn(){
// //   let hideShow = document.getElementById("practiceSection");
// // if (hideShow.style.display !== "none") {
// //   hideShow.style.display = "none";
// // } else {
// //   hideShow.style.display = "block";
// // }
// // }practiceBtn();



// function toggler(divId) {
//   $("#" + divId).toggle();
// }

// function practiceBtn() {
//   toggler('practiceSection');
//   $('#GFG_DOWN').text("DIV Box is toggling.");
// }




// // function download(data, filename, type) {
// //   var file = new Blob([VocabData], {type: type});
// //   if (window.navigator.msSaveOrOpenBlob) // IE10+
// //     window.navigator.msSaveOrOpenBlob(file, filename);
// //   else { // Others
// //     var a = document.createElement("a"),
// //             url = URL.createObjectURL(file);
// //     a.href = url;
// //     a.download = filename;
// //     document.body.appendChild(a);
// //     a.click();
// //     setTimeout(function() {
// //         document.body.removeChild(a);
// //         window.URL.revokeObjectURL(url);  
// //     }, 0); 
// //   }
// //   }


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


let darkBtn = document.getElementById("darkMode")
darkBtn.addEventListener("click", function() {
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
  })

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase,set, ref, push, onValue, remove,update,get,limitToLast   } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { getStorage, ref as sRef,uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-storage.js";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged, fetchSignInMethodsForEmail, signOut    } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const appSettings ={
    databaseURL: "https://working-hours-calculator-c5ea5-default-rtdb.europe-west1.firebasedatabase.app/"
}
const firebaseConfig = {
  apiKey: "AIzaSyAMgHd1mKPlFjmugqMEzTqDA7PYIaSFebI",
  authDomain: "vocabulary-checker-app-a87d2.firebaseapp.com",
  databaseURL: "https://vocabulary-checker-app-a87d2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vocabulary-checker-app-a87d2",
  storageBucket: "vocabulary-checker-app-a87d2.appspot.com",
  messagingSenderId: "963359666009",
  appId: "1:963359666009:web:2cdb10a3ed7d25db72a648"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const auth = getAuth(app);
const hoursInDB = ref(database, "shifts")

const inputFieldEl = document.getElementById("addWord")
const inputFieldFromEl = document.getElementById("addMeaning")


const addButtonEl = document.getElementById("add-button")
let userVocabListEl = document.getElementById("userVocabListEl")

addButtonEl.addEventListener("click", function() {

  const user = auth.currentUser;
  if (!user) {
    // User is not signed in
    return;
  }

  const myData = {
    word: inputFieldEl.value,
    meaning: inputFieldFromEl.value
  };

  const userVocabList = ref(database, `userVocabList/${user.uid}`);
  push(userVocabList, myData);
    clearInputFieldEl ()
    result.textContent="";
    
    // console.log(inputValue)
})

function clearuserVocabListEl() {
  userVocabListEl.innerHTML = ""
}
function clearInputFieldEl (){
    inputFieldEl.value = ""
    inputFieldFromEl.value = ""


}


function appendItemToUserVocabListEl(item){
    let newEntry = document.createElement("div")
    newEntry.className= "randomPractice"
     newEntry.innerHTML = `
    <p id="wordParagraph" class="wordParagraph">${item[1].word} </p>
    <p id="meaningParagraph" class="meaningParagraph">${item[1].meaning} </p>
    
    
    
     



    `
    
    let vocabID = item[0]

    


   let btnConfirm = document.createElement("button")
   newEntry.append(btnConfirm)
   let icon = document.createElement("i")
   icon.classList="fa fa-trash"
   btnConfirm.append(icon)
   btnConfirm.id="btnConfirm"

  let exactLocationOfItemInDB
  btnConfirm.addEventListener("click", function(){
    const user = auth.currentUser;
    const currentUsers = user.uid
    document.getElementById('id01').style.display='block'
     exactLocationOfItemInDB = ref(database, `userVocabList/${currentUsers}/${vocabID}`)

})

let btnRemove = document.getElementById("btnRemove")
   btnRemove.addEventListener("click", function(){

    remove(exactLocationOfItemInDB)
    document.getElementById('id01').style.display='none'

})

userVocabListEl.append(newEntry)


    

}

// other codes 
document.getElementById("addWord").oninput = function() {displaySearchFronPage()}

// })
let result = document.getElementById("result");

function displaySearchFronPage() {
  let inputEl = document.getElementById("addWord");



let userVocabListEl = document.getElementById("userVocabListEl");
let row = userVocabListEl.getElementsByTagName("p");
for (let i = 0; i < row.length; i++) {
  if (inputEl.value.toLowerCase()===row[i].innerHTML.toLowerCase().replace(/\s/g, '')) {
   return  row = result.textContent="✅"+" available";
  } else if (inputEl.value!==""){
      result.textContent="❌"+" Not available";				
  }
  else{
     return row = result.textContent="";		
  }
  
}

}

document.getElementById("searchBox").oninput = function() {displaySearch()}

function displaySearch() {
  let inputEl = document.getElementById("searchBox");
  let result = document.getElementById("resultTwo");
inputEl.value=inputEl.value.toLowerCase();
let userVocabListEl = document.getElementById("userVocabListEl");

let row = userVocabListEl.querySelectorAll(".wordParagraph");
for (let i = 0; i < row.length; i++) {
  if (inputEl.value===row[i].innerHTML.toLowerCase().replace(/\s/g, '')) {
   return  row = result.textContent="✅"+" Correct";
  } else if (inputEl.value!==""){
      result.textContent="❌"+" Wrong";				
  }
  else{
     return row=result.textContent="";		
  }
  
}

}
function clearSearchBox(){
  let inputEl = document.getElementById("searchBox");
  inputEl.value = ""
  let result = document.getElementById("resultTwo");
  result.textContent=""

}
///////////////
document.getElementById("practiceBtn").addEventListener("click", practiceBtn)

function practiceBtn(){
  let hideShow = document.getElementById("practiceSection");
if (hideShow.style.display !== "none") {
  hideShow.style.display = "none";
} else {
  hideShow.style.display = "block";
}
}practiceBtn();

document.getElementById("show").addEventListener("click", show)

function show(){
  let userVocabListEl = document.getElementById("userVocabListEl");
if (userVocabListEl.style.display === "none") {
  userVocabListEl.style.display = "block";
} else {
  userVocabListEl.style.display = "none";
}

}show()

document.getElementById("getRandomWord").addEventListener("click", getRandomWord)

function getRandomWord(){

let userVocabListEl = document.getElementById("userVocabListEl");
let randomWord = document.getElementById("randomWord");

let row = userVocabListEl.getElementsByTagName("div");


	for (let i = 0; i < row.length; i++) {
    let randomIndex = Math.floor(Math.random() * row.length)
      randomWord.innerHTML = row[randomIndex].innerHTML
  randomWord.querySelector(".meaningParagraph").style.display = "block";
  clearSearchBox()
	}
  
}



document.getElementById("showMeaning").addEventListener("click", showMeaning)

function showMeaning(){
  $('#randomWord .meaningParagraph, #randomWord .wordParagraph').toggle();


}showMeaning()





var files = [];
var reader = new FileReader();

var myimg = document.getElementById("myimg");
var proglab = document.getElementById("upprogress");
var selectBtn = document.getElementById("selectBtn");
var uploadBtn = document.getElementById("uploadBtn");
var input = document.createElement("input")
  input.type= "file";
  input.onchange = e => {
   files = e.target.files;


   reader.readAsDataURL(files[0])
}

reader.onload = function (){
  myimg.src = reader.result;
}
selectBtn.onclick = function(){
  input.click();
}

async function UploadProcess() {
  var ImgToUpload = files[0];
  const metaData = {
    contentType: ImgToUpload.type
  };

  const storage = getStorage();
  const user = auth.currentUser;

  const storageRef = sRef(storage, `Images/${user.uid}`  );
  const uploadTask = uploadBytesResumable(storageRef, ImgToUpload, metaData);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      proglab.innerHTML = "upload" + progress + "%";

    },
    (error) => {
      alert("Error: Image not uploaded. " + error.message);
      console.log("Error: Image not uploaded.", error);
    },
    async () => {
      const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      console.log(downloadURL);
      if (downloadURL){
        const user = auth.currentUser;
        if (!user) {
          // User is not signed in
          return;
        }
        const downloadURL = await getDownloadURL(storageRef);

    const database = getDatabase();
    const imageRef = ref(database, `images/${user.uid}`);


    const imageKey = await set(imageRef, {
      // name: ImgName,
      url: downloadURL
    });

 document.getElementById("upprogress").style.display="none";
document.getElementById("selectBtn").style.display="none";
 document.getElementById("uploadBtn").style.display="none";
 window.location.reload()  //   to refresh the page so that  the current user's data that is retrieved in "My List" can be displayed wihtout having to refresh the page 
 

      }

    }
  );
}

uploadBtn.onclick = UploadProcess;

 
auth.onAuthStateChanged(function() {
  const user = auth.currentUser;
  
    const imageRef = ref(database, `images/${user.uid}`);
    onValue(imageRef, function (snapshot){
      if (snapshot.exists()){
        let  userName = snapshot.val()
  
        document.getElementById("myimg").src= userName.url
        document.getElementById("selectBtn").textContent="Change Profile picture";

//  document.getElementById("yourProfile").textContent="Your Profile";

      }else{
        document.getElementById("myimg").src= "no-profile-pic.jpg"

      }
    })
  
  })
let profileEmail = document.getElementById("profileEmail")
let profileUsername = document.getElementById("profileUsername")




// })
// let WelcomebackMessage =[];
auth.onAuthStateChanged(function(user) {
  if (user) {
    

   const usersInDB = ref(database, `users/${user.uid}`)

   onValue(usersInDB, function (snapshot){
     
     if (snapshot.exists()){
   
      let  userName = snapshot.val();
           const currentUserName = userName;
          


      clearuserVocabListEl()
      
          
           
          

           profileUsername.innerHTML= "You're logged in as" +" "+ currentUserName.username;

           profileEmail.innerHTML= " "+ currentUserName.email;
 document.getElementById("profileDetails-ShownPart").style.display="flex";

//  let WelcomebackModal= document.getElementById("WelcomebackModal")

//            WelcomebackModal.classList.add('WelcomebackModal');

//           document.getElementById("WelcomebackModalMessage").innerHTML= "  welcome back"+", " +" "+ currentUserName.username;
//           setTimeout(() => {
//             document.getElementById("WelcomebackModal").style.display = "none";

//             // window.location.reload()  //   to refresh the page so that  the current user's data that is retrieved in "My List" can be displayed wihtout having to refresh the page 

//           }, 2000);
            
      
     } 
    
   })
   
  }else{

  }

  
})


let currentVocab =[]


auth.onAuthStateChanged(function(user) {
  if (user) {
    
    // User is signed in

    const userVocabList = ref(database, `userVocabList/${user.uid}`);
    onValue(userVocabList, function(snapshot) {
      if (snapshot.exists()) {
        let vocabArray = Object.entries(snapshot.val())

        clearuserVocabListEl();

          
          for (let i = 0; i < vocabArray.length; i++) {
            currentVocab = vocabArray[i];
            appendItemToUserVocabListEl(currentVocab);
            // welcomebackMessage(currentHours);
          }
          deletebBtn(currentVocab);
        }
       else {
        userVocabListEl.textContent = "There's no data";
      }
    });
    document.getElementById("signup-container").style.display = "none";
    document.getElementById("signup-page").style.display = "none";

    document.getElementById("logoutBtn").style.display = "block";
   
    

  } else {
    
    
    document.getElementById("signup-container").style.display = "flex";


    document.getElementById("logoutBtn").style.display = "none";
    
  }
   

})


const signUp = document.getElementById("signUp")
signUp.addEventListener("click", (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    const check = document.querySelector('#agreement:checked') !== null

    e.preventDefault();
   
    

    let messageWarning 
    if (!check){
      messageWarning = document.getElementById("notCheckedWarning").style.display = "block";
return false
// check =check.requred
    }else{
      messageWarning = document.getElementById("notCheckedWarning").style.display = "none";

    }
 


  createUserWithEmailAndPassword(auth, email, password, check)
      .then((userCredential) => {
      // Signed in 
      document.getElementById("signup-page").style.display = "none";

      document.getElementById("WelcomebackModal").style.display = "none";
    

      const user = userCredential.user;
      set(ref(database, "users/" + user.uid),{
          username: username,
          email: email,
          check : check,
          
      })

      // ...
      document.getElementById("signup-evalidation").style.display = "none";
     
     
      


    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      document.getElementById("signup-evalidation").style.display = "flex";

      
    });
})




const signin = document.getElementById("signin")

signin.addEventListener("click", () => {
  const email = document.getElementById("signin-email").value;
  const password = document.getElementById("signin-password").value;

  signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          const dt = new Date();
          update(ref(database, "users/" + user.uid), {
              last_login: dt,
          })
          
      document.getElementById("signin-evalidation").style.display = "none";
      window.location.reload()  //   to refresh the page so that  the current user's data that is retrieved in "My List" can be displayed wihtout having to refresh the page 

        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
      
      document.getElementById("signin-evalidation").style.display = "flex";

        });

})
let logoutBtn = document.getElementById("logoutBtn")
logoutBtn.addEventListener("click", (e) => {
e.preventDefault();
auth.signOut();

window.location.reload()  //   to refresh the page so that  the current user's data that is retrieved in "My List" can be displayed wihtout having to refresh the page 

})
// document.getElementById("deletebBtn").addEventListener("click", deletebBtn);

// function deletebBtn(item){
//   const user = auth.currentUser;
// const currentUsers = user.uid
// // Get a reference to the tasks list
// // var tasksRef = database().ref('userVocabList');
// // tasksRef = ref(database, `userVocabList/${currentUsers}`)
// let vocabID = item[0];
// const database = firebase.database();

// // Retrieve the list from the database
// let listRef = database.ref(database, `userVocabList/${currentUsers}`)

// // let listRef = ref(database, `userVocabList/${currentUsers}`)
// // var listRef = firebase.database().ref(`userVocabList/${currentUsers}`);


// // remove(listRef)

//   // onValue(listRef, function(snapshot) {
//     listRef.limitToLast(1).once('value', function(snapshot) {
//       snapshot.forEach(function(childSnapshot) {
//         // Remove the last item
//         childSnapshot.ref.remove()
//           .then(function() {
//             console.log("Last item deleted successfully.");
//           })
//           .catch(function(error) {
//             console.error("Error deleting last item:", error);
//           });
//       });
//     });

  



// }

// document.getElementById("body").addEventListener("click", hideProfile);

// function hideProfile(event) { 

//   if(event.target.id!="signup-page")
//   { 
//       document.getElementById("signup-page").style.display="none";
//     }
//   }
// var modal = document.getElementById('signup-page"');
// $('body').click(function(e) {
//   if (!$(e.target).closest('#signup-page').length){
//       $("#signup-page").hide();
//   }
// });
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// let hideAnchor = document.getElementById("hideAnchor")
// hideAnchor.addEventListener('click', () => {
//   console.log('I run only once! 😇');
//   document.getElementById("selectBtn").style.display = "block";
//   document.getElementById("hideAnchor").style.display = "none";

// }, { once: true });

// function handleClick() {
//   console.log("Button clicked!");
//   document.getElementById("selectBtn").style.display = "block";

  
//   // Remove the event listener after it's executed
//   document.getElementById("hideAnchor").removeEventListener("click", handleClick);
// }

// document.getElementById("hideAnchor").addEventListener("click", handleClick);
const hideAnchor = document.getElementById('hide');

hideAnchor.addEventListener('click', () => {

  // 👇️ hide button
  // window.open("https://aymen66.github.io/Vocabulary-Checker/");
  document.getElementById("selectBtn").style.display = "block";
  document.getElementById("aHide").href = '';

  hideAnchor.style.display = 'none';



});