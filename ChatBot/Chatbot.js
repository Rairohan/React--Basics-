//<input /> is a self closing tag
//<>,</> are fragments which helps to group elements without nesting of div  
//component uses pascal case(Every starting letter is capital letter)
//in react we need to assign key to each element of array
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
function Chatmessages(){
    const array= React.useState([
        {
        message:"Hello chatbot", sender:"user",id:'id1'
     },
     {
        message:"Hello! How are you ?" ,sender:"robot",id:'id2'
     },
     {
        message:"Can you get me todays date?", sender:"user" ,id:'id3'
     },
     {
        message:"Today is November 12" ,sender:"robot",id:"id4"
     }
     ])
     const chatMessages = array[0]
     const setChatMessages = array[1]
     function sendMessage(){
         setChatMessages([
            ...chatMessages,
            {
              message:"test",sender:"user",id:crypto.randomUUID()
            }
         ])
     }
    return(
        <>
        <button onClick={sendMessage }>Send Message</button>
      {chatMessages.map((ChatMsg)=>{
       return( 
        <ChatMessage
            message={ChatMsg.message}
            sender={ChatMsg.sender}
            key={ChatMsg.id}
        />
        )
     })}
      </>
    )
}
//conponent reusability message inside Chatmessage is a prop name which is stored in message 
//variable which is returned 
//key is a prop which uniquely define element
function App(){
     
    return(
    <>
        <ChatInput />
        <Chatmessages/>
    </>)
}
const container = document.getElementById("Container")
ReactDOM.createRoot(container).render(<App/>)
