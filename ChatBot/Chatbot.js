//<input /> is a self closing tag
//<>,</> are fragments which helps to group elements without nesting of div  
//component uses pascal case(Every starting letter is capital letter)
//in react we need to assign key to each element of array
function ChatInput({ chatMessages, setChatMessages }) { 
    const [inputText, setInputText] = React.useState('')
    // inputText stores what the user types
    //setInputText updates the value
    function saveInputText(event){
        setInputText(event.target.value)
    }

    function sendMessage(){
        const newChatMessages =
        [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID()
            }
        ]
        setChatMessages(newChatMessages)

         const response = Chatbot.getResponse(inputText)
            setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: "robot",
                id: crypto.randomUUID()
            }
        ])
        setInputText(''); // Clear the input after sending
    }

    return (
        <div className="input-container">
            <input 
                placeholder="Send Message"
                size="25" 
                value={inputText}  // Makes the input a "controlled component"
                onChange={saveInputText}
                className="input-text"
            />
            <button onClick={sendMessage} className="send-button"> Send </button>
        </div>
    )
}

function ChatMessage({message, sender}){
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
        <div>
            {sender === "robot" && <img src="robot.png" width="50" alt="robot"/> }
            {message}
            {sender === "user" && <img src="user.png" width="50" alt="user"/> }
        </div>
    )
}

function Chatmessages({ chatMessages }){
    // Removed local useState here — chatMessages now comes from parent (App)
    // This component should only display messages, not manage state

    return( 
        <>
            {chatMessages.map((ChatMsg) => {
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
    //  State is now correctly defined in App — the parent component
    const [chatMessages, setChatMessages] = React.useState([
        {
            message:"Hello chatbot", sender:"user", id:'id1'
        },
        {
            message:"Hello! How are you ?", sender:"robot", id:'id2'
        },
        {
            message:"Can you get me todays date?", sender:"user", id:'id3'
        },
        {
            message:"Today is November 12", sender:"robot", id:"id4"
        }
    ]);

    return(
        <>
            <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
            />
            <Chatmessages
                chatMessages={chatMessages}
            />
        </>
    )
}

const container = document.getElementById("Container")
ReactDOM.createRoot(container).render(<App/>) 