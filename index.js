function showMenu(name){
    let option = document.getElementsByName(name)
    let menu = document.getElementById(name)
    console.log("This is the option: ", option)
    console.log("Does this match it? ", menu.id)
    menu === option ? document.getElementById(menu.id).style.display = "block" : document.getElementById(menu.id).style.display = "none";
}
