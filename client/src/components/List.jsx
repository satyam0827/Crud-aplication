import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stdData: []
        }
    }
    
    componentDidMount() {
        this.fetchData();
    }


  fetchData = async ()=>{
    try{
        const response = await axios.get("http://localhost:8000/api/data");
        this.setState({
            stdData:response.data
        })
        console.log(`successfully recived data`)
    }catch(error){
        console.log(`error fetching data: ${error}`)
    }   
  }

    handleDelete = async (id) => {
       
        try{
            await axios.delete(`http://localhost:8000/api/data/${id}`);
            this.fetchData();
        }catch(error){
            console.log(`error fetching data after deletion: ${error}`);
        }
    }
    render() {

        const{stdData} = this.state;
        
        return (
            <div id="list-container">
                <div id='crud-data'>
                    <h2>Crud Data</h2>
                    <Link to="/add" id='add-btn' className='btn'>
                        <span>+</span>Add
                    </Link>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {stdData.map(item => (
                                <tr key={item._id}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Link to={`/update/${item._id}`} className='btn edit'>
                                            Edit
                                        </Link>
                                        <button 
                                            className='btn delete' 
                                            onClick={() => this.handleDelete(item._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                   
                </div>
            </div>
        );
    }
}

export default List;
