
let returnbtn = document.getElementById("returnbtn")

let noinbt = document.getElementById("noinbt")

let inputnote = document.getElementById("inputnote")

let btn = document.getElementById("btn")

let ull = document.getElementById("ull")

ull.setAttribute("class", "ulll")


btn.addEventListener("click", function() {

 /* if(inputnote !== ""){  */
  
    let newel = document.createElement("p") 
    newel.setAttribute("class", "pp")
    newel.innerText = inputnote.value;
    
    ull.appendChild(newel)
    inputnote.value = "";
  
    let newbtn = document.createElement("button")
    newbtn.setAttribute("class", "newbtn")
    newbtn.innerText = "show detail";
    newel.appendChild(newbtn)
  
    /*
    for(let i = 1;i <= newel.length;i++) { 
    newel.appendChild(i)
    alert(i)
    }
  */

/*  } else if (inputnote == "") { 
    alert("enter note first")
  } */


  newbtn.addEventListener("click", function() {
    ull.setAttribute("class", "newull")
    newbtn.setAttribute("class", "newbtnn")
    newel.setAttribute("class", "ppp")

    noinbt.setAttribute("class", "noinbt")

   /* let returnbtn = document.createElement("button")
    returnbtn.setAttribute("class", "h")  */  

    returnbtn.addEventListener("click", function() {
      ull.setAttribute("class", "newull2")
    newbtn.setAttribute("class", "newbtn")
    newel.setAttribute("class", "pp")

    noinbt.setAttribute("class", "noinbt1")
    }) 
  })

})