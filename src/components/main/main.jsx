import React, {Component} from 'react';
import "./main.scss";
import Basic from '../basic/basic';
import Pro from '../pro/pro';
class Main extends Component {
   state = {  } 
   render() { 
      return (
         <div className='main'>
            <div className="main-title">It’s time to taste it</div>
            <h1>Ready to use our service? Choose a package.</h1>
            <div className="components">
               <Basic />
               <Pro/>
            </div>
         </div>
      );
   }
}
 
export default Main;