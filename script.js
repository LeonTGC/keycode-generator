function keyCode(event){
    event.target.value = ""
    let key = event.key 
    let code = event.code
    let which = event.which

    console.log(key)

    document.getElementById("key").innerHTML = key
    document.getElementById("code").innerHTML = code
    document.getElementById("which").innerHTML = which
}