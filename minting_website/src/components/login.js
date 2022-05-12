import {useMoralis} from 'react-moralis';
function Login() {
    const { authenticate, isAuthenticated } = useMoralis();
    return(
        <div className="flex w-screen h-screen justify-center items-center">
            <button onClick={authenticate} className = "border-[1px] p-2 border-black">Login to MetaMask</button>
        </div>
    )
}

export default Login;