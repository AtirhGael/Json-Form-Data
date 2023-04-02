import React,{useState} from 'react'
//for handling more complex state use usereducers
function Usestate() {
    const [name, setname] = useState(['gael', 'atirh', 'suh'])
    const [addname, setAddname] = useState('')
  
    const addedname = () =>{
      setname([...name, addname])
      setAddname('')
  
    }
  return (
    <div>
         <div className="App">

{name.map((addname)=>(
 
    <li key={addname} >
      {addname}
    </li>
 
))}

<input
type='text'
value={addname}
onChange={(e)=>setAddname(e.target.value)}
/>

<button onClick={addedname} >submit</button>

</div>
    </div>
  )
}

export default Usestate