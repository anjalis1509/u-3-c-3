let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers"
async function getData(){
    let res = await fetch(url)
    let data =await res.json()
    var results= data[0].vouchers
    console.log(results)
    appendData(results)

}
getData()

function appendData(data){
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

     var btn = document.createElement("button")
     btn.innerText = "Buy"
     btn.setAttribute("class", "buy_voucher")
     btn.addEventListener("click", function(){
         buy(el)
     })

     box.append(img, name, price, btn)
     document.getElementById("voucher_list").append(box)

    })
}
 let arr = JSON.parse(localStorage.getItem("purchase")) || []
function buy(el){
console.log(el)
arr.push(el)
localStorage.setItem("purchase", JSON.stringify(arr))
}
let dataArr = []
var data = JSON.parse(localStorage.getItem("user"))
dataArr.push(data)
console.log(dataArr)


dataArr.forEach((el)=>{
    let amount =document.getElementById("wallet_balance")
    amount.innerText =el.amount  
})

