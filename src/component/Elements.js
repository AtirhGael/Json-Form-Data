import React from 'react'
import Input from './element/Input'
import Select from './element/Select'
import Box from './element/Box'
// import Checkbox from './element/checkbox'


const Element = ({ fields: {type,name, placeholder, value,options}}) =>{
    switch (type){
        case 'text':
            return (<Input 
            name={name} 
            placeholder= {placeholder} 
            value={value}
            
            />)
        case 'select':
            return(<Select
             name={name} 
            placeholder= {placeholder} 
            value={value}
            options={options}
            />)
        // case 'checkbox':
        //     return (<Checkbox />)
        case 'radio':
            return (<Box/>)

        default:
            return null
    }
}
export default Element
