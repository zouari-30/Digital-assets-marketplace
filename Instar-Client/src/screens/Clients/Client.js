import React from 'react'
import {useSelector} from 'react-redux'
import Logout from '../Logout/Logout';
const Style = {
    "justify-content": "center",
    "display":"flex",
    "align-items": "center",
    "margin-left": "200px",
    "width": "250px",
    "height": "350px",
    "background-color":"black"
  };
  const Style1 = {
    "background-color":"#ffc40c",
    "margin-left" : "20px",
    "margin-bottom" : "10px"
  }
  const Style2 = {
    "color":"yellow" ,
    "border-color":"yellow",
    "margin-left" : "15px",
    "margin-bottom" : "10px"
  }
const Client = () => {
    const userData = useSelector((state) => state.userReducer);
    return (
        <>
        <div>
            <div style={{"background-color":"#8D8D8D"}}>
            <nav class="navbar navbar-expand-md navbar-light bg-transparent navbar-custom" >
                <a class="navbar-brand" href="#" style={{"color":"white"}}>Instar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/" style={{"color":"white"}}>Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" style={{"color":"white"}}>Design</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" style={{"color":"white"}}>Template</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#" style={{"color":"white"}}>Features</a>
                        </li>
                    </ul>
                </div>
                <form class="form-inline">
                        <button class="btn btn-warning" style ={{"margin":"10px" ,"background-color":"#ffc40c"}}>
                            Share your work
                        </button>
                    <div class="input-group">
                    <input type="text" class="form-control" placeholder="Search this blog"/>
                    <div class="input-group-append">
                        
                        <button class="btn btn-secondary" type="button" style={{"background-color":"#ffc40c"}}>
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                    </div>
                    <button class="bouton">
                        <i style={{"color":"white"}} class="bi bi-cart"></i>
                    </button>
                    <button class="bouton">
                        <i style={{"color":"white"}} class="bi bi-bell"></i>
                    </button>
                    
                    <button class="bouton">
                        <img src={userData.picture} alt="" style={{
                        height:"30px" ,
                        width : "30px",
                        'border-radius': "50%",
                        // border: "10px solid #FEDE00"
                    }} />
                    </button>
                    
                </form>
            </nav>
            <div class="card" style={Style} >
                    <div class="image-container" >
                        <img src={userData.picture} class="card-img-top" alt="..." style={{ height:"80px" ,width : "80px",'border-radius': "50%","margin":"20px"}}/> 
                        <p style={{"color":"white"}}>
                            {userData.name}
                        </p>
                        <p style={{"color":"white"}}>Graphic design</p>
                    </div>
                    <div class="card-body">
                        <button class="btn btn-warning" style ={Style1} 
                        onClick={(e) => {
                            e.preventDefault()
                            window.location ='/profile'
                        }}>
                            Edit your profile
                        </button>
                        <button type="button" class="btn" style ={Style2} >
                            Check your offers
                        </button>
                        <p style={{"color":"white" ,"font-size":"12px"}}>member since 21 november 2020</p>
                    </div>
            </div>
                
            </div>
            <div>Your projecet you've been working on</div>
            <div>
                <Logout/>
            </div>
            </div>  
        </>
    )

} 

export default Client ;