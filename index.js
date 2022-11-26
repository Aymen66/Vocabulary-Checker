
    let wordsList =[];
    let ulEl = document.getElementById("ul-el")
    if (typeof window !== "undefined") {
      console.log("In Browser");
      let result = document.getElementById("result");
  
    }
    else {
      console.log("In nodeJS");
    }
  
    if (typeof window !== "undefined") {
      console.log("In Browser");
      var inputEl = document.getElementById("input");
  
    }
    else {
      console.log("In nodeJS");
    }
      
  
    if (typeof window !== "undefined") {
      console.log("In Browser");
      let leadsFromLocalStorage = JSON.parse( localStorage.getItem("wordsList") )
      console.log(leadsFromLocalStorage)
      // 1. Check if leadsFromLocalStorage is truthy
  // 2. If so, set myLeads to its value and call renderLeads()
  
  if (leadsFromLocalStorage) {
    wordsList = leadsFromLocalStorage
  }
    }
    else {
      console.log("In nodeJS");
    }
    
  
  
  
  
  function AddNewWord(){
    if (typeof window !== "undefined") {
      console.log("In Browser");
      wordsList.push(inputEl.value);
      inputEl.value = ""
      result.textContent = ""
  
    }
    if (typeof window !== "undefined") {
      console.log("In Browser");
      localStorage.setItem("wordsList", JSON.stringify(wordsList) )
  
  
    }
    show()
  
    }AddNewWord();
    
  
    
    
    function logOutNames(){
      
      for (let i = 0; i<wordsList.length; i++){
        if (inputEl.value===wordsList[i]) {
         return result.textContent = "✅"+" صحيح";
      
    
        } 
        else if(inputEl.value!=="") {
           result.textContent = "❌"+" خطأ"
        }
        else {
         
          return result.textContent =" "
  
        }
    
      }
    
    }
    
    function show(){
      let listItems = ""
      for (let i = 0; i < wordsList.length; i++) {
          listItems += "<li>" + wordsList[i] + "</li>"
          
      }
      
      ulEl.innerHTML = listItems 
    }show()

  
     function deleteBtn(){
      let existingEntries = JSON.parse(localStorage.getItem("wordsList"));
      existingEntries.splice(-1, 1);
      localStorage.setItem("wordsList", JSON.stringify(existingEntries));
     wordsList.pop()
    show()
    
      }deleteBtn();


      function hide() {
       
        if (ulEl.style.display === "none") {
          ulEl.style.display = "block";
        } else {
          ulEl.style.display = "none";
        }
        
      }
    