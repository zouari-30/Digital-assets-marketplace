import React , {useState} from 'react';
import './payment.css'
import data from './order.json'
import Tagorder from './Tagorder';
const Yourorder = () =>{
    return (
        <div className='order'>
        <div> Your Order </div>
        <div>
            <ul>
                {data.order.map((d, i) => (<Tagorder data={d} />))}
            </ul>
        </div>
        <h5>Total :</h5>
        <button>Place your order</button>
        </div>
    )
}

export default Yourorder;