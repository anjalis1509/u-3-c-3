

function myFun(){
    event.preventDefault()
    let obj = {
     name : document.getElementById("name").value,
     email : document.getElementById("email").value,
     address : document.getElementById("address").value,
     amount : document.getElementById("amount").value,
    } || JSON.parse(localStorage.getItem("user"))
    
    // let user = new Obj(name, email, address, amount) || JSON.parse(localStorage.getItem("user"))
    console.log(obj)

    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("address").value = ""
    document.getElementById("amount").value = ""

    localStorage.setItem("user" ,JSON.stringify(obj))

}