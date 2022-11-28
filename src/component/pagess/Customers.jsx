import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './customers.scss';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const Costomers = () => {
    const [Users, fetchUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:3006/user')
            .then((res) => res.json())
            .then((res) => {
                fetchUsers(res)
                console.log(res);
            })
    }, []);
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer' >
                <Navbar />
                <br />
                <div >
                    <Button className='tipthe'><img src="https://img.icons8.com/color/48/null/add-product.png" className='colom' width='3px' /></Button >
                    <div className="container p-5">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>

                                </tr>
                            </thead>
                            <tbody>
                                {Users.map((item) => {
                                    return <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{
                                            <ButtonGroup className='delete'>
                                                <Button className='ngoi'> <img src="https://img.icons8.com/fluency/48/null/delete-forever.png" width='25px' />
                                                </Button>
                                                <Button className='edit'><img src="https://img.icons8.com/external-creatype-glyph-colourcreatype/64/null/external-edit-interface-a2-creatype-glyph-colourcreatype-2.png" width='25px' /></Button>
                                            </ButtonGroup>}
                                        </td>
                                    </tr>
                                })}
                                <tr>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Costomers;
