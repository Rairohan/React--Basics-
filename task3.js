// ----------------------------------------------Task 2 ----------------------------------------------
// function App(){
//     const[count,setcount]=React.useState(0)
//     return(
//         <div>
//             <h2>Here,is the {count}</h2>
//             <div>
//                 <button onClick={()=>setcount(count+1)}>Increase</button>
//                 <button onClick={()=>setcount(count-1)}>Decrease</button>
//             </div>
//         </div>
//     )
// }
// ----------------------------------------------Task 2 ----------------------------------------------
// function App() {
//   const [button, setbutton] = React.useState(false);
//   function toogle() {
//     setbutton(!button);
//   }

//   return (
//     <div>
//       <input
//         placeholder="text"
//         type={button ? "text" : "password"}
//       />
//       <button onClick={toogle}>
//         {button ? "hide" : "show"}
//       </button>
//     </div>
//   );
// }
// ----------------------------------------------Task 3 ----------------------------------------------
// function App(){
//     const maxchar=100
//     const [text,settext]=React.useState("")
//     function charcount(event){
//         settext(event.target.value)
//     }
//     return(
//         <div>
//         <input  placeholder="text"
//           maxLength={maxchar}
//           onChange={charcount}/> 
//           <p>
//             you have entered {text.length}
//           </p>
//           <p>
//             you have {maxchar-text.length} characters left
//           </p>
//         </div>
//     )
// }
// ----------------------------------------------Task 3 ----------------------------------------------
// function App() {
//   const [input, setInput] = React.useState("");
//   const [todos, setTodos] = React.useState([]);

//   function addItem() {
//     if (input.trim() === "") return; // prevent empty entry

//     setTodos([...todos, input]);   // add item
//     setInput("");                  // clear input
//   }

//   function deleteItem(index) {
//     const updated = todos.filter((_, i) => i !== index);
//     setTodos(updated);
//   }

//   return (
//     <div>
//       <h2>To-Do List</h2>

//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Enter task"
//       />

//       <button onClick={addItem}>Add</button>

//       <ul>
//         {todos.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => deleteItem(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// ----------------------------------------------Task 3 ----------------------------------------------
// function App(){
//     const[count,setcount]=React.useState(0)
//     function increment(){
//         setcount(count+1)
//     }
//     React.useEffect(()=>{
//         document.title=`${count}`
//     })
//     return(
//         <div>
//             <button onClick={increment}>Increase</button>
//         </div>
//     )
// }
function App() {
  const inputRef = React.useRef(null);   // for focusing the input
  const valueRef = React.useRef("");     // store input value without re-render

  React.useEffect(() => {
    inputRef.current.focus();            // focus on page load
  }, []);

  function showValue() {
    alert("Current value: " + valueRef.current);
  }

  return (
    <div>
      <h2>useRef Practice</h2>

      <input
        ref={inputRef}                           // auto-focus target
        onChange={(e) => (valueRef.current = e.target.value)}  // store value
        placeholder="Type here"
      />

      <button onClick={showValue}>Show Value</button>
    </div>
  );
}
const app = document.getElementById("here");
ReactDOM.createRoot(app).render(<App />);
