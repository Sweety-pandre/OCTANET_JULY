
//xplore button
function scrollToHeading(){
    var heading = document.getElementById("xploreMenu");
    heading.scrollIntoView({behavior:"smooth"});
}


//navbar links
function menu(){
    var menu = document.getElementsByClassName("menu")[0];
    menu.scrollIntoView({behavior:"smooth"});
}
function contact(){
    var contact = document.getElementsByClassName("contact")[0];
    contact.scrollIntoView({behavior:"smooth"});
}
function signUp(){
    var signUp = document.getElementsByClassName("services")[0];
    signUp.scrollIntoView({behavior:"smooth"});
}


//scroll button
function arrDown(){
    var downTo = document.getElementsByClassName("services")[0];
    downTo.scrollIntoView({behavior:"smooth"});
}

