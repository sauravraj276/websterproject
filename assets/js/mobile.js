let ham = document.getElementById('menu')
    let logo = document.getElementById('hmenu')
    logo.addEventListener('click', function run(){
        if (ham.style.display == "block") {
            ham.style.display = "none";
        } else {
            ham.style.display = "block";
        }
        
    });