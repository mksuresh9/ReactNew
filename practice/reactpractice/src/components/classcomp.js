import React from "react";
import List from './list'


class Cls extends React.Component{
    constructor(){
        super()

        this.state =  {
           data:[
               {"name":"chetan"},
               {"name":"suresh"}
           ]
        }
    }

    render(){
        
        return(
            <div>
                <h1>
                    this is class component and statefull comp
                </h1>
                <ul>
                    {this.state.data.map((item)=><List data={item} />)}
                </ul>
            </div>
        )
    }
    
}
 export default Cls;