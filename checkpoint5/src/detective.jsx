import './/index.css'
import { useState } from "react"

function Detective(){
    const  [sherlock,setSherlock] = useState('психопат')
    const handleClick = () => {
        setSherlock('высокоактивный социопат')
        }
    
      
    
    return(
        <div className="a">
         {sherlock}
          <button onClick={handleClick} className="btn">Узнать правду</button>
        </div>

    )
}


export default Detective