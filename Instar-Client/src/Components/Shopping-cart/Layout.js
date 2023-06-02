import React from 'react'
import './shopping-cart.css'
import PropTypes from 'prop-types';
const Layout = (props) => {
    return (
        <>
            <div class="r1">
                <div>
                    <img class="cart-item-image" src={props.item.picture} style={{"width":"50px", "height":"50px"}}/>
                </div>
                <div class="cart-item-title">
                    {props.item.category}
                </div>
                <div class="cart-item-price">
                    {props.item.price}DNT
                </div>
                <div class="cart-item-button">
                        <button onClick={props.handleClick} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Remove</button>
                </div>
            </div>
        </>
    )
}

// Layout.propTypes = {
//     handleClick : PropTypes.func
// }

export default Layout; 