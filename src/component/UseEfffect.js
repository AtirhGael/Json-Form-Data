import React,{useEffect,useState} from 'react'
import form from '../format.json'
import './style.css'

function Usememo() {
  const [elements, setElement] = useState(null);
  useEffect(() =>{
      setElement(form[0])
  },[] )
  const { field,options,recommend,language} = elements?? {}

  return (
    <div>
        <div class="formbold-main-wrapper">
   
  <div class="formbold-form-wrapper">
    <img src="https://www.shutterstock.com/image-vector/student-wearing-uniform-character-collection-1951878367" alt='hello'/>
    <form action="https://formbold.com/s/FORM_ID" method="POST">
    {field && field.map((items,i)=>(
      <div key={i}>
      <div class="formbold-input-group">
        <label for="name" class="formbold-form-label"> {items.name} </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder={items.placeholder}
          class="formbold-form-input"
        />
      </div>
      </div>
    ))}
      <div class="formbold-input-group">
        <label class="formbold-form-label">
          Which option best describes you?
        </label>

        <select class="formbold-form-select" name="occupation" id="occupation">
          
         {options && options.map((items,i)=>(
          <option key={i} value="Student">{items.optionlabel}</option>
         ))}
        </select>
      </div>

    {recommend && recommend.map((items,i)=>
      <div key={i} class="formbold-input-radio-wrapper">
        <label for="ans" class="formbold-form-label">
          {items.title}
        </label>

        {items.value.map((c,i)=>(
          <div key={i} class="formbold-radio-flex">
          <div class="formbold-radio-group">
            <label class="formbold-radio-label">
              <input
                class="formbold-input-radio"
                type={items.type}
                name="ans"
                id="ans"
              />
                {c.val}
              <span class="formbold-radio-checkmark"></span>
            </label>
          </div>  
        </div>
            ))}
       
      </div>
    )}

    {language && language.map((items,i)=>
      <div key={i} class="formbold-input-radio-wrapper">
        <label for="ans" class="formbold-form-label">
          {items.title}
        </label>

        {items.value.map((c,i)=>(
          <div key={i} class="formbold-radio-flex">
          <div class="formbold-radio-group">
            <label class="formbold-radio-label">
              <input
                class="formbold-input-radio"
                type={items.type}
                name="ans"
                id="ans"
              />
                {c.val}
              <span class="formbold-radio-checkmark"></span>
            </label>
          </div>  
        </div>
            ))}
       
      </div>
    )}

      <div>
        <label for="message" class="formbold-form-label">
          Any comments or suggestions
        </label>
        <textarea
          rows="6"
          name="message"
          id="message"
          placeholder="Type here..."
          class="formbold-form-input"
        ></textarea>
      </div>

      <button class="formbold-btn">Submit</button>
    </form>
  </div>
</div>
    </div>
  )
}

export default Usememo