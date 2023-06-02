import React from 'react'
import './signupone.css'
import icons from '../../Constants/icons'
function Signupone (){
    return (
        <div className="body1">
           <nav class="navbar navbar-expand-lg navbar-dark bg-transparent nav-customer" >
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
                        }}
                        >
                            Login
                        </button>
                        <button type="button" class="btn btn-light" style={{margin:"10px"}}
                        onClick={(e) => {
                            e.preventDefault(); 
                            window.location.href=`/signup`;
                        }}
                        >
                            signup
                        </button>
                </form>
            </nav>
           <div >
                <form className="form1">
                    <p className='style1'>Get started now</p> <br/><br/>
                    <div className='underbody'>
                    <p className='style2'>Sign up to discover all of our options</p> 
                    <ul>
                        <li>Sell of all your design</li>
                        <li>Buy and discover designs and documents in minuts</li>
                        <li>Every price range to satisfy every client</li>
                    </ul>
                    <br/>
                    <button type="submit" className='btt1'>
                        <span className='button-icons'>
                            <img src={icons.fb} height ="18" width="9.33" />
                        </span>
                         <span>Log in with Facebook</span>
                    </button> <br/> <br/>
                    <button type="submit" className='btt2'>
                        <span className='button-icons1'>
                            <img src={icons.google} height ="25" width="26" />
                        </span>
                         <span>Log in with Google</span>
                         </button> <br/> <br/>
                    <button type="submit" className='btt3'
                    onClick={(e) => {
                        e.preventDefault(); 
                        window.location.href=`/login`;
                    }}>
                         Log in</button> <br/> <br/>
                    <div className='square'>
                    <p className='style3'>Don't have an account ?<a href='/signup'>sign up now</a></p>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signupone ;