var data =JSON.parse(localStorage.getItem("purchase"))
console.log(data)

data.forEach((el)=>{
    let box = document.createElement("div")

    let img = document.createElement("img")
    img.src = el.image 
     
    let name = document.createElement("p") 
    name.innerText =  el.name 
    name.id = "name"

     let price = document.createElement("h4")
     price.innerText = el.price
     price.id = "price"

     box.append(img, name, price)
     document.getElementById("purchased_vouchers").append(box)

    })


    let dataArr = []
    var data = JSON.parse(localStorage.getItem("user"))
     dataArr.push(data)
     console.log(dataArr)
     dataArr.forEach((el)=>{
        let amount =document.getElementById("wallet_balance")
        amount.innerText =el.amount  
        
    })