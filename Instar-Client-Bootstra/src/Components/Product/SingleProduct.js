import React from "react";
import {Card} from "react-bootstrap" 
const SingleProduct = ({product}) => {
    return(
            <Card>
                <Card.Img src={product.picture} />
                <Card.Body>
                    <Card.Title>{product.owner_Name}</Card.Title>
                </Card.Body>
            </Card> 
    )
}
export default SingleProduct ;