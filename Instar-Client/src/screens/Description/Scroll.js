import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useSelector} from "react-redux"
import { useState } from 'react';
const Scroll = (props) => {
  function isEmpty(value){
    return (value == null || value === '');
  }
  

  function openImg (id) {
    console.log(id)
    var image = document.getElementById(id);
    var source = image.src;
    window.open(source);
  }

  let data= props.products;
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 100;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 100;
      };
    return (
        <>
            <div className='relative flex items-center'>
        <MdChevronLeft 
        className='opacity-50 cursor-pointer hover:opacity-100' 
        onClick={slideLeft} 
        size={40} />
        <div
          id='slider'
          className='w-180 h-300 overflow-x-scroll scroll whitespace-nowrap scroll-smooth  scrollbar-hide'
        >
          {!isEmpty(data.productpictures) && data.productpictures.map((i) => (
            <img 
              key={i}
              id={data.productpictures.indexOf(i)}
              className='w-[250px] inline-block p-2 cursor-pointer hover:scale-150 ease-in-out duration-300'
              src={i}
              alt='/'
              // onClick={e => displayID(e,this)}
            />
          )
          )}
        </div>
        <MdChevronRight 
        className='opacity-50 cursor-pointer hover:opacity-100' 
        onClick={slideRight} 
        size={40} />
      </div>
    </>
    )
}
export default Scroll;