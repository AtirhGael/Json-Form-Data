import React from 'react'


function Input({type,name, placeholder, value,}) {
  return (
    <div>
        <div className="formbold-input-group">
        <label for="name" className="formbold-form-label"> {name} </label>
        <input
          type="text"
          name={name}
          id="name"
          placeholder={placeholder}
          className="formbold-form-input"
        />
      </div>
    </div>
  )
}

export default Input