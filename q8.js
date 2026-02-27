function checar(){
    const input=document.getElementById("input");
    input.addEventListener("keypress", function(event){
        if (event.key.charCodeAt(0)<48 || event.key.charCodeAt(0)>57) event.preventDefault();
    });
}