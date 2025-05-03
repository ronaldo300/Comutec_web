console.log("HOLA MUNDO")
const btn = document.getElementById("comutec")
const title = document.getElementById("title")
function hello(){
    console.log("Hola");
    title.innerText = "Hello";

}
btn.addEventListener("click", hello);