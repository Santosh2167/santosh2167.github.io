//SCRIPT FOR: HAMBURGER MENU
//Description: This script helps to show menu items on click

const hamburger= document.querySelector(".hamburger");
hamburger.addEventListener("click",displayMenuItems)

function displayMenuItems(){
    const menuItems = document.querySelector(".menu-items");

    if(menuItems.style.display==="block"){
        menuItems.style.display="none";
    }else{
        menuItems.style.display="block";
        
            }

}

//END OF SCRIPT FOR HAMBURGER MENU