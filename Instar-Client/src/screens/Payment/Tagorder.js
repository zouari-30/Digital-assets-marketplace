const Tagorder = ({ data }) => {
    return (
        <div >
            <span>{data["picture"]} {data["description"]}  {data["price"]}</span>
            
        </div>);
  };
  
  export default Tagorder;