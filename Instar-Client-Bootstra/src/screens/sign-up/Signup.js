import React ,{useState} from 'react'
import "./signup.css"
import Navbar from '../../Components/Navbar/Navbar'
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
            <Navbar />
            <div >
                <form className="form" onSubmit={handleLogin}>
                    <p className='style1'>Create your account</p>
                    <p className='style2'>This will take few minutes</p> <br/>
                    <div className="square">
                        <label htmlFor="name">Name</label> <br/>
                        <input 
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
                        id="email"
                        placeholder="aminezouari@gmail.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    </div> <br/>
                    <div className="square">
                        <label htmlFor="password">Password</label> <br/>
                        <input 
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
                    <p className='style2'>New to instar ? <a href=''>sign up</a></p>
                    </div>
                </form>
            </div>
            <img scr="C:\IA3\Dot-it\instar\src\Path 10847.jpg"/>
        </div>
    )
}

export default Signup ;