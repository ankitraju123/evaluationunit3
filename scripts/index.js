//store the products array in localstorage as "products"

function Product(t,d,p,i)
{
  this.type=t;
  this.description=d;
  this.price=p;
  this.img=i
}



function productadded(event){
  event.preventDefault()
  let form=document.querySelector("#products")
  let type=form.type.value;
  let desc=form.desc.value;
  let price=form.price.value;
  let img=form.image.value;

  let p1= new Product(type,desc,price,img)
  console.log(p1)

  let data=JSON.parse(localStorage.getItem("products"))||[]

data.push(p1)
console.log(data)
  localStorage.setItem("products",JSON.stringify(data))
}

let btn=document.querySelector("#show_products").addEventListener("click",myfunc)


function myfunc(){
    window.location.href="inventory.html"
}