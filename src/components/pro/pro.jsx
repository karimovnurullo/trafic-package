import React, { Component } from 'react';
import "./pro.scss";

class Pro extends Component {
   render() { 
      return <div className="pro">
         <div className="nav">
         <div className="title">Pro</div>
         <div className="popular">Popular</div>
         </div>
         <div className="price-div">
            <span className='dollar'>$</span><span>19</span> / month
         </div>
         <p className="description">Good for small business launching their products less then once a year</p>
         <ul>
            <li><i class="fa-solid fa-check"></i>Unlimited Blocks </li>
            <li><i class="fa-solid fa-check"></i>5GB Clould Storages</li>
            <li><i class="fa-solid fa-check"></i>Custom Domain Names</li>
            <li><i class="fa-solid fa-check"></i>Unlimited Emails</li>
         </ul>
         <div className="btn">Start Free Trial</div>
         <p className="credit">No credit card required</p>
      </div>;
   }
}
 
export default Pro;