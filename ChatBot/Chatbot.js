//<input /> is a self closing tag
//<>,</> are fragments which helps to group elements without nesting of div  
//component uses pascal case(Every starting letter is capital letter)
function ChatInput(){  
    return (
        <>
            <input 
                placeholder="Send Message"
                size="25" 
            />
            <button> Send </button>
        </>
    )
}
function ChatMessage({message,sender}){
    // const message = props.message
    // const sender = props.sender
    // const {message,sender} = props

   /* if(sender ==="robot"){
        return(
            <div>
                <img src="robot.png" width="50"/>  
                {message}
            </div>
        )
    } */
    //&& a guard op where if value 1 is true, value 2 is result
    return(
        < div>
            {sender ==="robot" && <img src="robot.png" width="50"/> }
            {message}
            {sender ==="user" && <img src="user.png" width="50"/> }
            
        </div>
    )
}
//conponent reusability message inside Chatmessage is a prop name which is stored in message 
//variable which is returned 
function App(){
    const ChatMessages = [
        {
        message:"Hello chatbot", sender:"user"
     },
     {
        message:"Hello! How are you ?" ,sender:"robot"
     },
     {
        message:"Can you get me todays date?", sender:"user" 
     },
     {
        message:"Today is November 12" ,sender:"robot"
     }
     ]
    const ChatMessageComponents= ChatMessages.map((ChatMsg)=>{
       return( 
        <ChatMessage
            message={ChatMsg.message}
            sender={ChatMsg.sender}
        />
        )
     })

    return(
    <>
        <ChatInput />
        {ChatMessageComponents}
    </>)
}
const container = document.getElementById("Container")
ReactDOM.createRoot(container).render(<App/>)
