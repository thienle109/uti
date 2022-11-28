import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../../navbar/Navbar";
import Sidebar from "../../sidebar/Sidebar";
import './add.scss'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.scc';


const EmpEdit = () => {
    const { empid } = useParams();
    useEffect(() => {
        fetch("http://localhost:3006/products/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            imgchange(resp.img);
            pricechange(resp.price);
            branchchange(resp.branch);
            categorychange(resp.category);
            colorchange(resp.color);
            Sizechange(resp.Size);
            amountchange(resp.amount);
            typechange(resp.type);
            activechange(resp.active);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);



    const navigate = useNavigate();
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [img, imgchange] = useState("");
    const [price, pricechange] = useState("");
    const [branch, branchchange] = useState("");
    const [category, categorychange] = useState("");
    const [color, colorchange] = useState("");
    const [Size, Sizechange] = useState("");
    const [amount, amountchange] = useState("");
    const [type, typechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);

    const handlesubmit = (e) => {
        e.preventDefault();
        const empdata = { name, img, price, branch, category, color, Size, amount, type, active };


        fetch("http://localhost:3006/products/" + empid, {
            method: "PUT",
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
                                                    <input required value={name} onMouseDown={e => valchange(true)} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                                    {name.length === 0 && validation && <span className="text-danger">Enter the name</span>}
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Img</label>
                                                    <input value={img} onChange={e => imgchange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Price</label>
                                                    <input value={price} onChange={e => pricechange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Branch</label>
                                                    <input value={branch} onChange={e => branchchange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Category</label>
                                                    <input value={category} onChange={e => categorychange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Color</label>
                                                    <input value={color} onChange={e => colorchange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Side</label>
                                                    <input value={Size} onChange={e => Sizechange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Amount</label>
                                                    <input value={amount} onChange={e => amountchange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Type</label>
                                                    <input value={type} onChange={e => typechange(e.target.value)} className="form-control"></input>
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-check">
                                                    <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                                                    <label className="form-check-label">Is Active</label>

                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <button className="btn btn-success" type="submit">Save</button>
                                                    <Link to="/product" className="btn btn-danger">Back</Link>
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
    )
}
export default EmpEdit;


