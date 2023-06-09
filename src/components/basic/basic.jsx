import React, { Component } from 'react';
import "./basic.scss";

class Basic extends Component {
   render() { 
      return <div className="basic">
         <div className="title">Basic</div>
         <div className="price-div">
            <span className='dollar'>$</span><span>19</span> / month
         </div>
         <p className="description">Good for small business launching their products less then once a year</p>
         <ul>
            <li><i class="fa-solid fa-check"></i>Unlimited Blocks </li>
            <li><i class="fa-solid fa-check"></i>5GB Clould Storages</li>
            <li className='dim'><i class="fa-solid fa-check"></i>Custom Domain Names</li>
            <li className='dim'><i class="fa-solid fa-check"></i>Unlimited Emails</li>
         </ul>
         <div className="btn">Start Free Trial</div>
         <p className="credit">No credit card required</p>
      </div>;
   }
}
 
export default Basic;