import React , {useState}from "react"
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import DatePicker from "react-datepicker";
import product from "../../picture.json"
import "react-datepicker/dist/react-datepicker.css";

const Advanced = () => {
    const animatedComponents = makeAnimated();
    const [startDate, setStartDate] = useState(new Date());
    const [tag , setTag] = useState(null);
    const [color,setColor] = useState([]);
    const [madewith,setMadewith] = useState(null);
    const [item,setItem] = useState(product);
     console.log(item)
    function arrayEquals(a, b) {
        return Array.isArray(a) &&
          Array.isArray(b) &&
          a.length === b.length &&
          a.every((val, index) => val === b[index]);
      }
      function dateCompare(d1, d2){
        const date1 = new Date(d1);
        const date2 = new Date(d2);
        
        if (date1.getDay() === date2.getDay() 
        && date1.getMonth()===date2.getMonth() && date1.getFullYear() ===date2.getFullYear()) {
            return (true)
        }
        else  return (false) 
    }
    const filteradvanced = () => {
        const newItem = product.list.filter((newVal) => {
            return ( dateCompare(startDate,newVal.timeframe) 
            && (newVal.tags === tag.value) 
            && (newVal.madewith === madewith.value) 
            && (arrayEquals(array.sort(),newVal.color.sort()))) 
            
        });
        setItem(newItem);
    }
    // console.log(tag);
    //console.log(color); color is a table that  
    // console.log(madewith);
    // console.log(startDate);
    let array = []
    for (let i=0;i<color.length ;i++){
        array.push(color[i].value)
    }
    const options1= [
        { value: 'Animation', label: 'Animation' },
        { value: 'Illustration', label: 'Illustration' },
        { value: 'Typography', label: 'Typography' }
      ]
    const options2 = [
        { value: 'blue', label: 'blue' },
        { value: 'red', label: 'red' },
        { value: 'black', label: 'black' },
        { value: 'yellow', label: 'yellow' }
      ]
      const options4= [
        { value: 'Adobe XD', label: 'Adobe XD' },
        { value: 'Adobe Illustrator', label: 'Adobe Illustrator' },
        { value: 'Sketch', label: 'Sketch' }
      ]
    return (
        <div style ={{"display": "flex","align-items": "center","justify-content": "center" , "margin" : "20px"}}>
        <form>
            <div class="form-row">
                <div class="form-group col-xs-3">
                        <label for="inputTags">Tags</label>
                        <Select 
                        options={options1} 
                        onChange = {(tag) => setTag(tag)}
                        />
                </div>
                <div class="form-group col-xs-3">
                    <label for="inputColors">Colors</label>
                    <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        // defaultValue={[data[4], data[5]]}
                        isMulti
                        options={options2} 
                        onChange = {(color) => setColor(color) }
                        />
                </div>
                <div class="form-group col-md-3">
                    <label for="inputMadewith">Made with</label>
                    <Select 
                    options={options4} 
                    onChange = {(madewith) => setMadewith(madewith)}
                    />
                </div>
                <div class="form-group col-md-3">
                        <label for="inputTimeframe">Time frame</label>
                        <style>
                            {`.date-picker input {
                            height: 100%
                            
                        }`}
                        </style>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} wrapperClassName="date-picker" />
                </div>
                        
            </div>
        </form> 
        <div>
            <button type="button" class="btn btn-dark btn-sm" onClick={filteradvanced}>Filter</button>
        </div>
        </div>
    )
}
export default Advanced;