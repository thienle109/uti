import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import './add.scss'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.scc';



const Add = () => {

    const [id, idChange] = useState("");
    const [name, nameChange] = useState("");
    const [img, imgChange] = useState("");
    const [price, priceChange] = useState("");
    const [brand, brandChange] = useState("");
    const [category, categoryChange] = useState("");
    const [color, colorChange] = useState("");
    const [side, sideChange] = useState("");
    const [amount, amountChange] = useState("");
    const [type, typeChange] = useState("");
    const [active, activeChange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { name, img, price, brand, category, color, side, amount, type, active };


        fetch("http://localhost:3006/products", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        }).then((res) => {
            alert('Saved successfully.')
            navigate('/product');
        }).catch((err) => {
            console.log(err.message)
        })

    }

    return (
        <div>
            <div className='addProduct'>
                <div className='home'>
                    <Sidebar />
                    <div className='homeContainer' >
                        <Navbar />
                        <div className="row">
                            <div className="offset-lg-3 col-lg-6">
                                <form className="container" onSubmit={handlesubmit}>

                                    <div className="card" style={{ "textAlign": "left" }}>
                                        <div className="card-title">

                                        </div>
                                        <div className="card-body">

                                            <div className="row">

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>ID</label>
                                                        <input value={id} disabled="disabled" className="form-control"></input>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Name</label>
                                                        <input required value={name} onMouseDown={e => valchange(true)} onChange={e => nameChange(e.target.value)} className="form-control"></input>
                                                        {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Img</label>
                                                        <input value={img} onChange={e => imgChange(e.target.value)} className="form-control"></input>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Price</label>
                                                        <input value={price} onChange={e => priceChange(e.target.value)} className="form-control"></input>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Brand</label>
                                                        <input value={brand} onChange={e => brandChange(e.target.value)} className="form-control"></input>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Category</label>
                                                        <input value={category} onChange={e => categoryChange(e.target.value)} className="form-control"></input>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Color</label>
                                                        <input value={color} onChange={e => colorChange(e.target.value)} className="form-control"></input>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Side</label>
                                                        <input value={side} onChange={e => sideChange(e.target.value)} className="form-control"></input>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Amount</label>
                                                        <input value={amount} onChange={e => amountChange(e.target.value)} className="form-control"></input>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Type</label>
                                                        <input value={type} onChange={e => typeChange(e.target.value)} className="form-control"></input>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-check">
                                                        <input checked={active} onChange={e => activeChange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                                        <label className="form-check-label">Is Active</label>

                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <button className="btn btn-success" type="submit">Save</button>
                                                        <Link to="/" className="btn btn-danger">Back</Link>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Add;


