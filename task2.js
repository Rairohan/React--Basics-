
// ----------------------------------------------Task 1 ----------------------------------------------
// function Btn(){
//     const[isButton , setisButton] = React.useState(true)
//     function Switch(){
//         if(isButton){
//             setisButton(false)
//         }
//         else{
//             setisButton(true)
//         }
//     }
//     return(
//         <button onClick={Switch} className={isButton ? 'btn-on':'btn-off'}>
//             {isButton ? 'on' : 'off'}
//         </button>
//     )
// }
// ----------------------------------------------Task 2 ----------------------------------------------
function Log(){
        const[showpass,setshowpass] = React.useState(false)
        function tooglepass(){
           setshowpass(!showpass)
        }
        return(
            <div>
                 <h2>Hello! Welcome to Our Website</h2>
                 <div>
                    <input placeholder="email"></input>
                 </div>
                  <div>
                    <input placeholder="Password" type={showpass ? 'text':'password'}></input>
                    <button onClick={tooglepass}>{showpass? 'hide':'show'}</button>
                 </div>
                 <button >Login</button>
                 <button >SignUp</button>
            </div>
        )
}
const btn = document.getElementById("container")
ReactDOM.createRoot(btn).render(<Log/>)
