import React from 'react'
import Paymentdetail from './Paymentdetail';
import Yourorder from './Yourorder';
import Availablepaymentmethod from './Availablepaymentmethod';

function Payment (){
    return (
        <div>
            <div>Payment METHOD</div>
            <div className='rowC'>
                <Paymentdetail/>
                <Yourorder/>
            </div>
            <Availablepaymentmethod/>
        </div>
    )
}

export default Payment  ;