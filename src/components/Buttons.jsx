import  { useState } from 'react'

export default function Buttons() {
    
const [text, setText] = useState();
    const handleclick =()=> {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlechange =()=>{
        console.log('Onchange')
        setText(event.target.value)
    }
    
    return (
        <div>
            <div className="mt-10">
               
                <textarea className="form-control" value={text} onChange={handlechange} id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button className="glow-on-hover" type="button" onClick={handleclick}>
                Click to uppercase
            </button>


        </div>
    )
}
