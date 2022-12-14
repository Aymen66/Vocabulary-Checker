
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
      let wordsFromLocalStorage = JSON.parse( localStorage.getItem("wordsList") )
      console.log(wordsFromLocalStorage)
      // 1. Check if leadsFromLocalStorage is truthy
  // 2. If so, set myLeads to its value and call renderLeads()
  
  if (wordsFromLocalStorage) {
    wordsList = wordsFromLocalStorage
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
     inputEl.value=inputEl.value.toLowerCase();

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
          listItems += " " + wordsList[i] + " ▫️ "
          
      }
      if (ulEl.style.display === "none") {
        ulEl.style.display = "block";
      } else {
        ulEl.style.display = "none";
      }
      ulEl.textContent = listItems 
    }show()

    
     function deleteBtn(){
      let existingEntries = JSON.parse(localStorage.getItem("wordsList"));
      existingEntries.splice(-1, 1);
      localStorage.setItem("wordsList", JSON.stringify(existingEntries));
     wordsList.pop()
    show()
    
      }deleteBtn();


    //   function download(text, name, type) {   
    //     var a = document.createElement("a");
    //     var file = new Blob([wordsList], { type: type });
    //     a.href = URL.createObjectURL(file);
    //     a.download = name;  
    //     a.click();
    //  }
    // Function to download data to a file
function download(data, filename, type) {
  var file = new Blob([wordsList], {type: type});
  if (window.navigator.msSaveOrOpenBlob) // IE10+
      window.navigator.msSaveOrOpenBlob(file, filename);
  else { // Others
      var a = document.createElement("a"),
              url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function() {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);  
      }, 0); 
  }
}
    
      // anotehr way  to excute the download button is using this javascript codes 

    // function download(filename, text) {
    //   var element = document.createElement('a');
    //   element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(wordsList));
    //   element.setAttribute('download', filename);
    
    //   element.style.display = 'none';
    //   document.body.appendChild(element);
    
    //   element.click();
    
    //   document.body.removeChild(element);
    // }
    
    // // Start file download.
    // document.getElementById("dwn-btn").addEventListener("click", function(){
    // // Start the download of yournewfile.txt file with the content from the text area
    //     var text = document.getElementById("ul-el").innerText=wordsList;
    //     var filename = "yournewfile.txt";
        
    //     download(filename, wordsList);
    // }, false);