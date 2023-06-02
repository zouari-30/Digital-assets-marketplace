import React from "react";
import Uploadimages from "./Uploadimages"
const Creatingproject = () => {
    return (
        <>
         <div className="container">
            <h2>Start creating your piece of art</h2>
            <div className="content">
                <Uploadimages />
            </div>
            <label for="inputEmail3MD" class="col-sm-2 col-form-label">Describe your work</label>
                <div class="col-sm-10">
                    <div class="md-form mt-0">
                        <input type="text" class="form-control" style={{}}
                         id="inputEmail3MD" placeholder="Description"/>
                    </div>
                </div>
                <label for="inputEmail3MD" class="col-md-2 col-form-label">category</label>
                <div class="col-sm-10">
                    <div class="md-form mt-0">
                        <input type="text" class="form-control" style={{}}
                         id="inputEmail3MD" placeholder="Category"/>
                    </div>
                </div>
            <form class="form-inline">
                <div class="form-group">
                    <label class="sr-only" for="exampleInputAmount">Amount</label>
                    <div class="input-group">
                    <div class="input-group-addon">Price</div>
                    <input type="number" min="0.00" step="5"  
                    id="exampleInputAmount" class="form-control" 
                    placeholder="Price" style={{"height":"40px" , "width":"80px"}}/>
                    </div>
                    <button className="btn btn-danger " >
                        Share your work
                    </button>
                </div>
            </form>    
        </div>
        </>
    )
}

export default Creatingproject;
