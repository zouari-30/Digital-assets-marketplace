const Buttons = ({ filterItem, designItems , productdata}) => {
    return (
      <>
        <div className="d-flex justify-content-center">
          {designItems.map((Val, id) => {
            return (
              <button class="btn btn-light" key={id} style={{"margin":"10px"}} 
              onClick={() => filterItem(Val,productdata)}>
                {Val}
              </button>
            );
          })}
         </div>
      </>
    );
  };
   
  export default Buttons; 