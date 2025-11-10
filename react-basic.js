let name = "Rohan"
const root = document.getElementById("root")
const div = <div> 
    <button>Hello!</button>
    <p>This is multiple element {name} </p>
</div>//using div help to use multiple element {} enables to insert js
ReactDOM.createRoot(root).render(div)
//ReactDOM.createRoot(root) act as location in our case root is location
//render(<h1>Hello World</h1>) acts as what changes is to be done 

