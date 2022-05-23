 
// console.log(product)
let product=JSON.parse(localStorage.getItem("products"))||[]
// console.log(product)
function append(){
    let product=JSON.parse(localStorage.getItem("products"))||[]
    let container=document.querySelector("#all_products")

    product.forEach(function(el){
        
        let card=document.createElement("div")
        card.setAttribute("id","card")

        let image=document.createElement("img")
        image.src=el.img
        let type=document.createElement("p")
        type.innerText=el.type
        let desc=document.createElement("p")
        desc.innerText=el.description
        let price=document.createElement("p")
        price.innerText=el.price
        let del=document.createElement("button")
        del.innerText="remove"
        del.addEventListener("click",remove)


        card.append(image,type,desc,price,del)
        container.append(card)

    })
    function remove(){
        event.target.parentNode.remove()
    }

}
append()