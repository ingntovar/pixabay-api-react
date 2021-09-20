import { useState } from "react";
import Error from "./Error";

const Form = ({setInputData}) => {
  const [inputText, setInputText]=useState('')
  const [error, setError]=useState(false)

  const handleInput=(e)=>{
    setInputText(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(inputText===''){
      setError(true)
      
    }else{
      setError(false)
      setInputData(inputText)
    }

  }


  
  return ( 
    <form onSubmit={handleSubmit}>

      {error ? <Error message={'Not valid data'} />: null}
      
      <div className="row">
        <div className="form-group col-md-8">
          <input
            value={inputText} 
            type="text" 
            placeholder="Search for your Image!"
            className="form-control form-control-lg"
            onChange={handleInput}
          />
        </div>
        <div className="form-group col-md-4">
          <input 
            type="submit" 
            className="btn btn-lg btn-danger btn-block"
          />
        </div>
      </div>
    </form>

   );
}
 
export default Form;