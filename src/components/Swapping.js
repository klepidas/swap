// import usdc from '../assets/img/usdc'
import usdc from './usdc.png'
import {FaAngleDown} from 'react-icons/fa'
import {FaArrowDown} from 'react-icons/fa'
import {FaArrowsAltH} from 'react-icons/fa'
import {FaBolt} from 'react-icons/fa'

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
              <div><img src={usdc} /></div>
              <div>
              <span><p>USDC</p><p>$1.00</p></span></div>
              {/* <div><img src={usdc} /><span><p>USDC</p><p>$1.00</p></span></div> */}
              <div><p><FaAngleDown 
                style={{color: '#4570e6', cursor: 'pointer'}} 
                /></p>
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
          style={{color: '#4570e6', cursor: 'pointer'}} 
          />
        </button>
      </div>
      <form className="swap-form2">
      <div className="form-control2">
        <label>SwapTo(Est.):</label>
          <div className="input-flex2">
            <div className="input-end2">
              <input type='text' placeholder='Amount' />
            </div>
            <div className="span-end2">
              <div><p>Img</p></div>
              <span><p>EGLD</p><p>$188.54</p></span>
              {/* <div><img src={usdc} /><span><p>USDC</p><p>$1.00</p></span></div> */}
              <div><p><FaAngleDown 
                style={{color: '#4570e6', cursor: 'pointer'}} 
                /></p>
              </div>
           </div>
          <div className="balance2">
            {/* <div>Required</div> */}
            <div>Balance:0</div>
          </div>
      </div>
      </div>
    </form>
      <div className='exchange'>
        <div className="form-control-check">
          <input type='checkbox'/>
          <label>Skip unwrap WEGLD</label>
        </div>
        <div className="exchange-main">
            <div className='exchange-flex-1'>
            <div className="exchange-rate">
              <p>Exchange Rate</p>
              <p>Slippage</p>
            </div>
            <div className='exchange-flex-2'>
              <div className='flex-2'>
              <p>1 EGLD ≃ 193.8774 USDC($193.87) </p>
              <p><FaArrowsAltH 
                style={{color: '#4570e6', cursor: 'pointer'}} 
              /></p></div>
              <div className='percent'>
              <p>1%</p></div>
            </div>
            </div>
            <hr>
            </hr>
            <div className='details'>
                <p>More details</p>
                <p><FaAngleDown 
                style={{color: '#4570e6', cursor: 'pointer'}} 
                /></p>
            </div>
          </div>
      </div>
      <div className='connect'>
          <p><FaBolt 
            style={{color: '#ffffff', cursor: 'pointer'}} 
          /></p>
          <p>Connect</p>
      </div>
        <p className='transact'>You will be asked to sign 2 transactions</p>
    </form>
    
  )
}

export default Swapping
