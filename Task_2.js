function App(){
    return (
        <>
            <p>Hello! Welcome to my Website</p>
            <LoginForm/>
            <button>Login</button>
            <button>SignUP</button>
        </>
    )
}
function LoginForm(){
    return (
             <div>
                 <input placeholder="email" max="30"/>
                 <input placeholder="password" max="30"/>
            </div>
)
}
const location = document.getElementById("Location")
ReactDOM.createRoot(location).render(<App/>)