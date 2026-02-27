function ajustarData(){
    const data=document.getElementById("input");
    data.addEventListener("keyup", (e)=>{
        let v=data.value.replace(/\D/g, "");
        if (event.key.charCodeAt(0)<48 || event.key.charCodeAt(0)>57) event.preventDefault();
        if (v.length>4) data.value=v.slice(0, 2)+"/"+v.slice(2, 4)+"/"+v.slice(4, 8); 
        else if (v.length>2) data.value=v.slice(0, 2)+"/"+v.slice(2, 4);
    });
}