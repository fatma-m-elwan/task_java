
var menu = document.querySelector("#menu")
var show = document.querySelector("header .navbar")
menu.onclick = function(){
    show.style.transform = "scaleY(1)";
    show.style.opacity = "1";
}

menu.ondblclick = function(){
    show.style.transform = "scaleY(0)";
    show.style.opacity = "0";
}


var add = document.querySelectorAll(".addbtn")
var content =document.querySelector("#addcontent")
var text =document.querySelector("#text")
var totalPrice =document.querySelector("#tatalprice")
var total = 0;


add.forEach(function(item){
    item.onclick = function(){
        content.innerHTML += "  " + item.previousElementSibling.previousElementSibling.previousElementSibling.textContent + " <br> ";
        total += parseInt(item.previousElementSibling.innerText)
        console.log(total)

        // if (content.innerHTML != ""){
            // btn.style.display="block";
        // }
        // console.log( item.previousElementSibling.previousElementSibling.previousElementSibling.textContent )
    }
})

btn.onclick=function(){
    totalPrice.innerHTML = total +"$" ;
    
    if(total >= 50){
        totalPrice.style.background = "red"
    }
    else{
        totalPrice.style.background = "#6E8A3C "
    }
}


