
//----------------------------------------------Task ----------------------------------------------
// function Hello(props){
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h1>are you {props.age}</h1>
//         </div>
//     )
// }
// function App()
// {
//     return(
//         <Hello name="rohan" age="21"/>
//     )
// }
//----------------------------------------------Task ----------------------------------------------
// function Message({message,author}){
//     return(
//         <div>
//             <p>{message}</p>
//             <p>{author}</p>
//         </div>
//     )
// }
// function  App(){
//     return(
//         <Message message="Hello" author="Rohan"/>
//     )
// }
//----------------------------------------------Task ----------------------------------------------
// function Button({label}){
//     return(
//         <button>{label}</button>
//     )
// }
// function App(){
//     return(
//         <Button label="click me"/>
//     )
// }
//----------------------------------------------Task ----------------------------------------------
// function Product({title,price}){
//     return(
//         <div>
//             <p>{title} {price}</p>
//         </div>  
//     )
// }
// function App(){
//     return(
//         <div>
//             <Product title="Apple" price="100" />
//             <Product title="Banana" price="50" />
//             <Product title="Orange" price="80" />
//         </div>
//     )
// }
//----------------------------------------------Task ----------------------------------------------
// function UserProfile({user}){
//     return(
//         <div>
//             <p>Name:{user.name}</p>
//             <p>Age:{user.age}</p>
//             <p>City: {user.city}</p>
//         </div>
//     )
// }
// function App(){
//  const user = { name: "Rohan", age: 20, city: "Darjeeling" };
//     return(
//         <UserProfile user={user}/>
//     )
// }
//----------------------------------------------Task ----------------------------------------------
// function TaskList({ tasks }) {
//   return (
//     <ul>
//       {tasks.map(task => (
//         <li key={task.id}>{task.title}</li>
//       ))}
//     </ul>
//   );
// }

// function App(){
//     const tasks = [
//   { id: 1, title: "Study React" },
//   { id: 2, title: "Do homework" },
//   { id: 3, title: "Go gym" }
  
// ];
// return(
//     <TaskList tasks={tasks}/>
// )
// }
//----------------------------------------------Task ----------------------------------------------
// function App(){
//   const[num,setnum]=React.useState(10)

//   function show(){
//     setnum(10)
//   }
//   function add(){
//     setnum(num+1)
//   }
//   function sub(){
//     setnum(num-1)
//   }
//   return(
//     <div>
//       <h2>number:{num}</h2>
//       <button onClick={show}>reset</button>
//       <button onClick={add}>add</button>
//       <button onClick={sub}>sub</button>
//     </div>
//   )
// }
//----------------------------------------------Task ----------------------------------------------
// function App(){
//     const [num,setnum]= React.useState(0)
//     function increase(){
//         setnum(num+1)
//     }
//     function decrease(){
//         setnum(num-1)
//     }
//     return(
//         <div>
//             <p>number = {num}</p>
//             <button onClick={increase}>increase</button>
//             <button onClick={decrease}>decrease</button>
//         </div>
//     )
// }
//----------------------------------------------Task ----------------------------------------------
// function App() {
//   const [show, setShow] = React.useState(false);

//   function toggleMessage() {
//     setShow(!show);        // toggle between true ↔ false
//   }

//   return (
//     <div>
//       <button onClick={toggleMessage}>
//         {show ? "Hide Message" : "Show Message"}
//       </button>

//       {show && <p>This is the secret message 😄</p>}
//     </div>
//   );
// }
//----------------------------------------------Task ----------------------------------------------
// function App(){
//     const[text,settext]= React.useState("")
//     function handlechange(event){
//         settext(event.target.value)
//     }
//     return(
//         <div>
//             <input type="text" placeholder="enter something" onChange={handlechange}/>
//             <p>You have entered {text}</p>
//         </div>
//     )
// }
//----------------------------------------------Task ----------------------------------------------
// function App(){
//     const[text,setText]=React.useState("")
//     const maxchar=100
//     function handlechange(event){
//         setText(event.target.value)
//     }
//     return(
//         <div>
//             <input
//                 type="text"
//                 placeholder="enter text"
//                 onChange={handlechange}
//                 maxLength={maxchar}
//             />
//             <p>
//                 you have entered {text.length} number of characters
//                 you have {maxchar-text.length} characters remaining
//             </p>
//         </div>
//     )
// }
//----------------------------------------------Task ----------------------------------------------
// function App() {
//   const [text, setText] = React.useState("");
//   const [list, setList] = React.useState([]);

//   function add() {
//     if (text.trim() === "") return;
//     setList([...list, text]);
//     setText("");
//   }

//   function remove(index) {
//     setList(list.filter((_, i) => i !== index));
//   }

//   return (
//     <div>
//       <input 
//         type="text" 
//         placeholder="enter todo"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button onClick={add}>add</button>

//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => remove(index)}>delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// ----------------------------------------------Task ----------------------------------------------

const div = document.getElementById("btn")
ReactDOM.createRoot(div).render(<App/>)
