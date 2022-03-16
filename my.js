
function testGS(){
    
    const url = "https://script.google.com/macros/s/AKfycbxOP35dXJ0v7gPMDIZ7e_1nHVwNSS6c4hiPmRdIyx8GcbXcYpaDjgio6nMcsqxvxy7xBA/exec";
    
    fetch(url)
    .then(d => d.json())//then prende la response; e la converto in json object,
    .then(d => {  //dovrei avere l'array! [{"status":"cool"}]
        
        
        document.getElementById("app").textContent = d[0].status;
    }   
    ); //e con il secondo prendo questa risposta finale credo
}

document.getElementById("btn").addEventListener("click",testGS);