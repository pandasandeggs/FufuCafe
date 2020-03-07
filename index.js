function showMenu(name){
    let menu = document.getElementById(name)
    console.log("This is the the name passed in : ", typeof(name), name)
    console.log("Does this match it? ", typeof(menu.id), menu.id)
    menu === name ? document.getElementById(menu.id).style.display = "block" : document.getElementById(menu.id).style.display = "none";
}
