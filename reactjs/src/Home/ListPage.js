import React,{useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const ListPage = () => {
    const [loading, setloading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() =>{
        callApi();
    });

    const callApi = async() => {
        try {
            const result = await axios.get(
                "https://624061412aeb48a9af735b00.mockapi.io/api/v1/users?page=1&limit=10"
            );
            setloading(false);
            setData(result.data);
        } catch (error) {
            setloading(false);
        }
    }

    const deleteItem = (key) => {
        const newData = data.slice(0, key).concat(data.slice(key + 1, data.length));
        setData(newData);
    };

    const deleteAll= () => {
        const newData = [];
        setData(newData);
    };

    const renderItem = () =>{
        return data.map((value, index) => {
            return (
                <tr key={index}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>
                        <img src={value.avatar} width="50"/>
                    </td>
                    <td>{value.createAt}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => deleteItem(index)}>
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className="container">
            <button className="btn btn-danger" onClick={() => deleteAll()}>DeleteAll</button>
            {
                loading ? (
                    <h1>Loading...</h1>
                ): (
                    <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Avatar</th>
                    <th>Create At</th>
                    </tr>
                </thead>
                <tbody>{renderItem()}
                </tbody>
            </Table>
                )
            }
        </div>
    );
};

export default ListPage;