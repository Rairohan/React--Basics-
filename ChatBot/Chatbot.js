//<input /> is a self closing tag
//<>,</> are fragments which helps to group elements without nesting of div  
//component uses pascal case capital letter
function ChatInput(){  
    return (
        <>
            <input placeholder="Send Message" size="25" />
            <button> Send </button>
        </>
    )
}
function ChatMessage(){
    return(
        <>
            
        </>
    )
}
const app = (
    <>
        <ChatInput />
    </>
)
const container = document.getElementById("Container")
ReactDOM.createRoot(container).render(app)
