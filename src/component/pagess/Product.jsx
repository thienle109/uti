import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.scss';
import Sidebar from '../sidebar/Sidebar';
import Navbar from '../navbar/Navbar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { NavLink, useNavigate } from 'react-router-dom';



const Product = () => {
    const navig = useNavigate();
    const client = axios.create({
        baseURL: "http://localhost:3006/products"
    });
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client.get('?').then((response) => {
            setPosts(response.data);
            console.log(response)
        });
    }, []);


    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadEdit = (id) => {
        navigate("/product/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:3006/products/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    useEffect(() => {
        fetch("http://localhost:3006/products").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    const searchHandle = async (event) => {
        let key = event.taget.value;
        if (key) {
            let result = await fetch("http://localhost:3006/product/" + key);
            if (result) {

            }
        }
    }
    return (
        <div className='home'>
            <Sidebar />
            <div className='homeContainer' >
                <Navbar />
                <div className='divbtn'>
                    <NavLink to={'/add'}>
                        <Button className='tipthe'><img src="https://img.icons8.com/color/48/null/add-product.png" className='colom' width='3px' /></Button >
                    </NavLink>
                    <div className="pruduct-list">
                        <input
                            type=""
                            className="search-product-box" placeholder="Search Product"
                            onChange={searchHandle}
                        />
                    </div>
                    <div className="container p-5">
                        <table className="table">


                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Price </th>
                                    <th scope="col">Branch </th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Side</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>

                                {empdata &&
                                    empdata.map((post) => {
                                        return <tr key={post.id}>
                                            <td >{post.id}</td>
                                            <td>{post.name}</td>
                                            <td><img style={{ width: '140px', height: '110px' }} src={post.img} alt="" /></td>
                                            <td>{post.price}</td>
                                            <td>{post.branch}</td>
                                            <td>{post.category}</td>
                                            <td>{post.color}</td>
                                            <td>{post.Size}</td>
                                            <td>{post.amount}</td>
                                            <td>{post.type}</td>
                                            <td>{
                                                <ButtonGroup className='delete'>
                                                    <Button onClick={() => { Removefunction(post.id) }}> <img src="https://img.icons8.com/fluency/48/null/delete-forever.png" width='25px' />
                                                    </Button>

                                                    <Button onClick={() => { LoadEdit(post.id) }} className='edit'><img src="https://img.icons8.com/external-creatype-glyph-colourcreatype/64/null/external-edit-interface-a2-creatype-glyph-colourcreatype-2.png" width='25px' />
                                                    </Button>

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
        </div >
    )
}

export default Product;

