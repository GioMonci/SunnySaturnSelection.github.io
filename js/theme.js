let icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src = "imgs/logo2.png";
    }else{
        icon.src = "imgs/logo.png"
    }
}