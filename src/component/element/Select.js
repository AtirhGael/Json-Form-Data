import React from 'react'


function Select({type,name, placeholder, value,options}) {
  return (
    <div>
        <div className="formbold-input-group">
        <label className="formbold-form-label">
          Which option best describes you?
        </label>

        <select placeholder={placeholder} className="formbold-form-select" name="occupation" id="occupation">
        {options.lengh>0 && options.map((options,i)=>(
            <option value={options.optionlabel} key={options.optionlabel}  ></option>
        ))}
        </select>
      </div>
    </div>
  )
}

export default Select