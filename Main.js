import React from 'react'
// Import Component from Bootstrap
import {Table} from 'react-bootstrap'
// Import Data
import DataTable from './Data.js'

class MainTable extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.no}</td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>{this.props.weight}</td>
            </tr>
        )
    }
}
class OutputTable extends React.Component{
    render(){
        return(
            <div>
                <Table striped bordered hover style={{'margin':'10px auto','width':'70%'}}>
                    <thead>
                        <tr>
                        <th>No</th>
                        <th>Product Name</th>
                        <th>Price (Rupiah)</th>
                        <th>Weight (kg)</th>
                        </tr>
                    </thead>
                    {DataTable.map(el => {
                        return(
                            <tbody>
                                <MainTable 
                                no={el.no}
                                name={el.name}
                                weight={el.weight}
                                price={el.price}
                                />
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        )
    }
}
export default OutputTable