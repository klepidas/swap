// import usdc from '../assets/img/usdc'
import {FaAngleDown} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'


const Swapping = () => {
  return (
    <form className="swap-form">
      <div className="form-control">
        <label>Swap From:</label>
          <div className="input-flex">
            <div className="input-end">
              <input type='text' placeholder='Amount' />
            </div>
            <div className="span-end">
              <div><p>Img</p></div>
              <span><p>USDC</p><p>$1.00</p></span>
              {/* <div><img src={usdc} /><span><p>USDC</p><p>$1.00</p></span></div> */}
              <div><h3><FaAngleDown 
                style={{color: 'blue', cursor: 'pointer'}} 
                /></h3>
              </div>
              </div>
          </div>
          <div className="balance">
            {/* <div>Required</div> */}
            <div>Balance:0</div>
          </div>
      </div>
      <div>
        <button>
          <FaArrowDown
          style={{color: 'blue', cursor: 'pointer'}} 
          />
        </button>
      </div>
      <form className="swap-form2">
      <div className="form-control2">
        <label>Swap To (Est.):</label>
          <div className="input-flex2">
            <div className="input-end2">
              <input type='text' placeholder='Amount' />
            </div>
            <div className="span-end2">
              <div><p>Img</p></div>
              <span><p>EGLD</p><p>$188.54</p></span>
              {/* <div><img src={usdc} /><span><p>USDC</p><p>$1.00</p></span></div> */}
              <div><h3><FaAngleDown 
                style={{color: 'blue', cursor: 'pointer'}} 
                /></h3>
              </div>
           </div>
          <div className="balance2">
            {/* <div>Required</div> */}
            <div>Balance:0</div>
          </div>
      </div>
      </div>
    </form>

    </form>
    
  )
}

export default Swapping
