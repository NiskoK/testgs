
function testGS(){//read from the spreadsheet!!!
    
    const url = "https://script.google.com/macros/s/AKfycbxOP35dXJ0v7gPMDIZ7e_1nHVwNSS6c4hiPmRdIyx8GcbXcYpaDjgio6nMcsqxvxy7xBA/exec";
    
    fetch(url)
    .then(d => d.json())//then prende la response; e la converto in json object,
    .then(d => {  //dovrei avere l'array! [{"status":"cool"}]
        
        
        document.getElementById("app").textContent = d[0].status;
    }   
    ); //e con il secondo prendo questa risposta finale credo
}

document.getElementById("btn").addEventListener("click",testGS);


document.getElementById("btn2").addEventListener("click",addGS);

//to write something
function addGS(){
//we will read the same url but we will do a post request!
    const url = "https://script.google.com/macros/s/AKfycbxOP35dXJ0v7gPMDIZ7e_1nHVwNSS6c4hiPmRdIyx8GcbXcYpaDjgio6nMcsqxvxy7xBA/exec";
    
    fetch(url,{
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({name:"Olivia"}) // body data type must match "Content-Type" header
      });
}


/*
// Example POST method implementation:
async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  
  postData('https://example.com/answer', { answer: 42 })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
*/
