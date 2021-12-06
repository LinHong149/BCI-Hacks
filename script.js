// var navbar = document.getElementsByClassName('nav-section');
window.onscroll = () => {
    if (window.scrollY > 30) {
        document.getElementById('nav').style["boxShadow"] = "0 0 5px #001B2E";
    }
    else {
        document.getElementById('nav').style["boxShadow"] = "none";
    }
};