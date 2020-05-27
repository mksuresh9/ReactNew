import React from 'react';
import Listitem from './listitem'


export class Table extends React.Component{
    state = {
        data: tableData
    }

    getData = (rowData) => {
        console.log(rowData);
    }

    render(){
        return(
            <div>
                {this.state.data.map(item =>( 
                    <Listitem rowData={item} handleClick = {this.getData} />
                ))}
            </div>
        )
    }
}

export default Table;