function turnResponsive(){
    let myNavigationBar = document.getElementById("myTopNav");
    if (myNavigationBar.className === "topnav"){
        myNavigationBar.className+=" responsive";
    }
    else{
        myNavigationBar.className="topnav"
    }
}
