import React, { useEffect ,useContext ,useState} from "react";
import {UidContext} from "../AppContext"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { useDispatch } from "react-redux";
import { likeProduct, unlikeProduct } from "../../Actions/product.actions";
const style2={
    "margin-right" :"10px",
    "width":"20px",
    "height":"20px"
}

const LikeButton = ({product}) => {
    const [liked,setLiked] = useState(false);
    const uid = useContext (UidContext)
    const dispatch = useDispatch()

    const like = () => {
        dispatch(likeProduct(product._id,uid))
        setLiked(true)
       
    }
    const unlike = () => {
        dispatch(unlikeProduct(product._id,uid))
        setLiked(false)
    } 
    useEffect (()=> {
        if (product.likers.includes(uid)) setLiked(true)
        else setLiked(false)
    }, [uid,product.likers,liked])
    return (
        <>
        <div>
            {uid === null && 
            <Popup trigger={<img src="./uploads/products/like-icon.png" alt="like" style={style2}/>} position={['bottom center','bottom right','bottom left']}
            closeOnDocumentClick
            >
                <div>please be connected to like this product !!</div>
            </Popup>
            }
            {uid && liked === false &&(
                <img src="./uploads/products/like-icon.png" onClick={like} alt="like" style={style2}/>
            )}
            {uid && liked &&(
                <img src="./uploads/products/like-icon-filled.png" onClick={unlike} alt="like" style={style2}/>
            )}
        </div>
        </>
    )
}
export default LikeButton;