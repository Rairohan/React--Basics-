
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
// const div = document.getElementById("btn")
// ReactDOM.createRoot(div).render(<App/>)

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
// const div = document.getElementById("btn")
// ReactDOM.createRoot(div).render(<App/>)
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
// const div = document.getElementById("btn")
// ReactDOM.createRoot(div).render(<App/>)
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
// const div = document.getElementById("btn")
// ReactDOM.createRoot(div).render(<App/>)
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
// const div = document.getElementById("btn")
// ReactDOM.createRoot(div).render(<App/>)
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
// const div = document.getElementById("btn")
// ReactDOM.createRoot(div).render(<App/>)
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

// const div = document.getElementById("btn")
// ReactDOM.createRoot(div).render(<App/>)
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
// const div = document.getElementById("btn")
// ReactDOM.createRoot(div).render(<App/>)
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
// const div = document.getElementById("btn")
// ReactDOM.createRoot(div).render(<App/>)
//----------------------------------------------Task ----------------------------------------------

