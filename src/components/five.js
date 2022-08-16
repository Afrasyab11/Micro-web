import React from 'react'
import '../Hdf.css';
import image4 from "../images/images4.jpg"
import image5 from "../images/images5.jpg"
import image6 from "../images/images6.jpg"
import image7 from "../images/images7.jpg"

const Five = () => {
  return (
    <div className='fv'>
      <h2 className='ftxt'>Meet Our New Headphones</h2>
      <div>
        <img className='fpctr4' src={image4} alt='flower'></img>
      </div>

      <div>
        <img className='fpctr5' src={image5} alt='flower'></img>
      </div>

      <div>
        <img className='fpctr6' src={image6} alt='flower'></img>
      </div>

      <div>
        <img className='fpctr7' src={image7} alt='flower'></img>
      </div>

<br></br>

      <div className='fvd'>
        <div>
          <img className='fpctr8' src={image4} alt='flower'></img>
        </div>

        <div>
          <img className='fpctr9' src={image5} alt='flower'></img>
        </div>

        <div>
          <img className='fpctr10' src={image6} alt='flower'></img>
        </div>

        <div>
          <img className='fpctr11' src={image7} alt='flower'></img>
        </div>
      </div>
    </div>
  )
}

export default Five