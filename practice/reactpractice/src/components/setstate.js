import React from 'react';


class Setstate extends React.Component{
    constructor(){
        super()

        this.state = {
            "name":"chetan",
            "age":23
        }
        this.handlechange = this.handlechange.bind(this)
        
    }

    handlechange(){
        this.setState({
            "name": "suresh",
            "age": 24
        })
    }

    render(){
        return(
            <div>
                <p>this component is used to setting the state and update the state</p>
                <ul>
                    <li>{this.state.name}</li>
                    <li>{this.state.age}</li>
                    <button onClick={this.handlechange}> change state</button>
                </ul>
            </div>
        )
    }
}

export default Setstate;