let name = "rohan"
let socks = 10
let tshirt = 8
function productcost(){
   return socks+2*tshirt
}
 console.log(`one pack of socks and 2 t-shirt ${productcost()}`)
 let productcostvar = socks+2*tshirt
 const btn = document.getElementById("btn")
const div = <div>
    <button>Good Job!</button>
    <p>My name is {name}</p>
    <p>Cotton socks</p>
    <p>Price: $10</p>
    <button>Add to cart</button>
    <p>Total cost ${productcostvar}</p>
</div>
ReactDOM.createRoot(btn).render(div)