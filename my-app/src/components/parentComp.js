import React from "react";
import ChildComp from './childComp';

class ParentComp extends React.Component{
    render(){
      return(
          <div>
              <ChildComp message= "passing data from parent to child" /> 
          </div>
      )
    }
}

export default ParentComp;