
let returnbtn = document.getElementById("returnbtn")

let noinbt = document.getElementById("noinbt")

let inputnote = document.getElementById("inputnote")

let btn = document.getElementById("btn")

let ull = document.getElementById("ull")

let showDetailPara = document.querySelector(".show")

ull.setAttribute("class", "ulll")


btn.addEventListener("click", function() {
    if(inputnote.value !== ""){
    let newel = document.createElement("p") 
    let innerSpan = document.createElement("span")
    newel.setAttribute("class", "pp")
    innerSpan.setAttribute("class", "innerSpan")
    newel.appendChild(innerSpan)
    innerSpan.innerText = inputnote.value;
    
    ull.appendChild(newel)
    inputnote.value = "";
  
    let newbtn = document.createElement("button")
    newbtn.setAttribute("class", "newbtn")
    newbtn.innerText = "show detail";
    newel.appendChild(newbtn)

    let deleteBtn = document.createElement("button")
    deleteBtn.setAttribute("class", "delete-btn")
    deleteBtn.innerText = "delete"
    newel.appendChild(deleteBtn)

    deleteBtn.addEventListener("click", function(){
      newel.remove()
    })


  newbtn.addEventListener("click", function() {

    let hide = document.createElement("button")
    hide.setAttribute("class", "hide-btn")
    hide.textContent = "hide"
           
  

   
    showDetailPara.textContent = innerSpan.innerText;
    showDetailPara.appendChild(hide)
    showDetailPara.setAttribute("class", "show")
    
    hide.addEventListener("click",function(){
      showDetailPara.setAttribute("class","usShow")
    })

    
  })
}else{
  alert("write somethig first!")
}

})