import React , {useEffect,useState,useRef} from 'react';
import './acceuil.css';
import Navbar1 from '../../Components/Navbar1/Navbar1';
import TextField from "@mui/material/TextField";
import data from "../../design.json" ;
import Tag from "./Tag" ;
import Thread from '../../Components/Thread'

function Acceuil (){
    //modified value that depends on the hole code 
    const scrl = useRef();
    //the first position of the scrollx is done by 0 
    const [scrollX, setscrollX] = useState(0); 
    //so scrolEnd is at boolean value 
    const [scrolEnd, setscrolEnd] = useState(false); 
    //
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX+shift) ;
        //permet de donner l'entier le plus proche de cette soustraction 
        if (Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <= scrl.current.offsetWidth) {
            setscrolEnd(true);
          } else {
            setscrolEnd(false);
          }
    };
    // const scrollCheck = () => {
    //     setscrollX(scrl.current.scrollLeft);
    //     if (
    //       Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
    //       scrl.current.offsetWidth
    //     ) {
    //       setscrolEnd(true);
    //     } else {
    //       setscrolEnd(false);
    //     }
    //   };
    // useEffect(() => {
    //     //Check width of the scollings
    //     if (scrl.current && scrl?.current?.scrollWidth === scrl?.current?.offsetWidth) {
    //       setscrolEnd(true);
    //     } else {
    //       setscrolEnd(false);
    //     }
    //     return () => {};
    //   }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);  
    return (
        <div>
            <Navbar1/>
            <div className="main"> <br/><br/>
                <p className="st">Here we provide you with every aspect </p> 
                <p className="st">of design needed</p> <br/>
                <div className="search">
                    {/* <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    /> */}
                    <input type="text" name="search" placeholder="Search.." />
                </div> 
            </div>
            <div className="second">
                <br/>
                <div className='d1'>To make your experience easier</div>
                <div className='d2'>here are some things that you may be interested in</div>    
                    <div className="up">
                        <span>
                        <button>Categories</button>  
                        {/* left button */}
                        {scrollX !== 0 && (<button className="prev" onClick={() => slide(-50)}>
                            <i className="fa fa-angle-left"> prev</i>
                        </button>)}
                        <ul className="list" ref={scrl} >
                            {data.design.map((d, i) => (
                                <Tag data={d} />
                            ))}
                        </ul>
                        {/* right button */}
                        {!scrolEnd && (<button className="next" onClick={() => slide(+50)}>
                            <i className="fa fa-angle-right">next</i>
                        </button>)}
                        <button>Filtres</button>
                        </span>
                    </div>
 
                </div>
                <div>
                    
                </div>
                <div className='Non'>
                    <Thread/>
                </div>
        </div>
    )
}

export default Acceuil ;