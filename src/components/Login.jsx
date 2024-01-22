import Header from './Header'
import { useState } from 'react'

import "./Login.css"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function loginUser(e) {
    }

    return (
        <>  
        <section class='login-bg-image'>
                 
            <Header/>
            <div class="container d-flex justify-content-center align-items-center">
                    <form >
                            <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">usernmae</label>
                            <input type="name" class="form-control" id="exampleInputEmail1" onChange={e => setUsername(e.target.value)} />
                            </div>
                            <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">email</label>
                            <input type="email" class="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                            </div>
                            
                            <button type="submit" class="btn btn-primary" onClick={loginUser}>Login</button>
                    </form>
            </div>
            {/* <img src="../src/images/ocean.png" class="container-fluid no-padding px-0 vh-100" alt="AuStralia Gold Coast"/> */}
        </section>
        </>
    )
}

export default Login
