import React ,{useState} from 'react'
import "./signup.css"

import axios from 'axios'

function Signup (){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('') ;
    const handleLogin = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}api/user/signup`,
            // withCredentials : true ,
           {
               "name" : name,
                "email" : email,
                "password" : password,
            }
        ) 
        .then((res) => {
            if (res.data.errors) { 
                // emailError.innerHTML = res.data.errors.email;
                // passwordError.innerHTML = res.data.errors.password ;
            } else {
                window.location = '/login';
            }
        })
        .catch( (err) => {
            console.log(err)
        }
        )
    }
    return (

        <div className="body">
           <nav class="navbar navbar-expand-lg navbar-dark bg-transparent nav-customer " >
                <a class="navbar-brand" href="#">Instar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Design</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Template</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                    </ul>
                </div>
                <form class="form-inline">
                        <button type="button" class="btn btn-dark" style={{margin:"10px"}}
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href=`/login`;
                        }}>
                            Login</button>
                        <button type="button" class="btn btn-light" style={{margin:"10px"}}
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href=`/signup`;
                        }}
                        >
                            signup</button>
                </form>
            </nav>
            <div >
                <form className="form" onSubmit={handleLogin}>
                    <p className='style1'>Create your account</p>
                    <p className='style2'>This will take few minutes</p> <br/>
                    <div className="square">
                        <label htmlFor="name">Name</label> <br/>
                        <input 
                        class="form-control"
                        type="text"
                        id="name" 
                        placeholder="amine zouari"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        />
                    </div> <br/>
                    <div className="square">
                        <label htmlFor="email">Email</label> <br/>
                        <input 
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="aminezouari@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    </div> <br/>
                    <div className="square">
                        <label htmlFor="password">Password</label> <br/>
                        <input 
                        class="form-control"
                        type="password" 
                        id="password" 
                        placeholder="************"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                        <p className='style3'>
                            Use 8 or more characters with a mix of letters Numbers and symbols
                        </p>
                    </div> <br/>
                    <button type="submit" className='bt'> Let's get started</button> <br/><br/>
                    <div className='square'>
                    <p className='style2'>By continuing , you agree to INSTAR terms of use  </p> 
                    <p className='style2'>All ready have account? <a href='/login'>sign in</a></p>
                    </div>
                </form>
            </div>
            <img scr="C:\IA3\Dot-it\instar\src\Path 10847.jpg"/>
        </div>
    )
}

export default Signup ;