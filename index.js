var sidnav = document.querySelector(".side-navbar")

function showsidenav(){
    sidnav.style.left="0"
}

function hidesidenav(){
    sidnav.style.left="-45%"
}


var enteredText = ""
var container = document.getElementById("product")
var element = container.querySelectorAll("div")
    

    function check(event){
        enteredText= event.target.value.toUpperCase()

        for(i = 0;i < element.length; i++){
            if(element[i].textContent.toUpperCase().indexOf(enteredText) < 0 ){
                element[i].style.display= "none"
            }
            else{
                element[i].style.display= "block"
            }
        }
    
        
    }