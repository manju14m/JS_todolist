var main = document.getElementById("main");
var btn = document.getElementById("button");
var inputbtn  = document.getElementById("text");
var inputvalue;


inputbtn.addEventListener('input', function(item){
    debugger;
    inputvalue = item.target.value;
});

inputbtn.addEventListener('keyup', function(item){
    debugger;
    if(item.keyCode ===13){
        addItem();
    }
});

main.addEventListener('click', deleteItem);

btn.addEventListener('click', addItem);

function addItem(){
    if(inputvalue !== "" && inputvalue !== undefined && inputvalue !== null){    
    var newElement =  document.createElement("div")
    var text = document.createTextNode(inputvalue)
    var trash = document.createElement("i")
    trash.classList.add("fa")
    trash.classList.add("fa-trash")
    newElement.appendChild(text)
    newElement.appendChild(trash)
    main.appendChild(newElement)

    inputvalue=""
    inputbtn.value=""
    }
}

function deleteItem(item){
    debugger;
    if(item.target.classList[0] === "fa"){
       console.log(item.target.parentElement);
       item.target.parentElement.remove();
    }
}





