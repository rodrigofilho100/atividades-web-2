function blurNome(){
    var nome=document.getElementById("nome").value;
    if (/\d/.test(nome)) alert("Nome inválido!");
}
function blurIdade(){
    const idade=document.getElementById("idade").value;
    if (/[a-zA-Z]/.test(idade)) alert("Idade inválida!");
}
function blurEmail(){
    var email=document.getElementById("email").value;
    if (!email.includes("@")) alert("E-mail inválido!")
}