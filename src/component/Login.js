import React,{useState,useEffect} from 'react'
import './style.css'
import form from '../format.json'
import Elements from './Elements';

function Login() {
    const [elements, setElement] = useState(null);
    useEffect(() =>{
        setElement(form[0])
    },[] )
    const { title, field} = elements?? {}
    console.log(form);
  return (
    <div>
    <div className="formbold-main-wrapper">
  <div className="formbold-form-wrapper">
    {title}
   
    <img src="your-image-url-here.jpg" alt='start' />
    <form action="https://formbold.com/s/FORM_ID" method="POST" >
      
    {field? field.map((fields, i) =><Elements fields={fields} key={i}/>) : null }
      <button className="formbold-btn">Submit</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default Login