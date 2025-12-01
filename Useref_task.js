//-------------------------------------Task 1 (focus the input)-------------------------------
// function App(){
//     const inputRef = React.useRef(null)
//     function focusinput(){
//         inputRef.current.focus()
//     }
//     return(
//         <div>
//             <input ref={inputRef}
//              placeholder="here"/>
//             <button onClick={focusinput}>Click to focus</button>
            
//         </div>
//     )
// }
//-------------------------------------Task 2(Count button clicks WITHOUT re-render)-------------
// function App(){
//     const btnref = React.useRef(0)
//     function click(){
//         btnref.current += 1
//     }
//     function show(){
//         alert("you clicked button"+ btnref.current+" times")
//     }
//     return(
//         <div>
//         <button onClick={show}>show</button>
//         <button onClick={click}>click</button>
//         </div>
//     )
// }
//-------------------------------------Task 3 (show previous value)---------------------------
function App() {
  const prevValue = React.useRef("");

  const [text, setText] = React.useState("");

  function savePrevious() {
    prevValue.current = text;
  }

  function showPrevious() {
    alert("Previous value was: " + prevValue.current);
  }

  return (
    <div>
      <input 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />

      <button onClick={savePrevious}>Save Previous</button>
      <button onClick={showPrevious}>Show Previous</button>
    </div>
  );
}
const app =document.getElementById("here")
ReactDOM.createRoot(app).render(<App/>)