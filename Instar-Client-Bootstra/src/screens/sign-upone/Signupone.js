import React from 'react'
import './signupone.css'
import Navbar from '../../Components/Navbar/Navbar'
import icons from '../../Constants/icons'
function Signupone (){
    return (
        <div className="body1">
           <Navbar/>
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
                    <button type="submit" className='btt3'> Log in</button> <br/> <br/>
                    <div className='square'>
                    <p className='style3'>Already have an account ?<a href=''>Log in</a></p>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signupone ;