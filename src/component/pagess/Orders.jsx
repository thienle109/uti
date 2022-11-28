import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Table from '../table/table'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import './orders.scss'
const customerTableHead = [
    'id',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location',
    'action'
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
        <td>{item.total_orders}</td>
        <td>{item.total_spend}</td>
        <td>{item.location}</td>

        <td>{
            <ButtonGroup className='font'>
                <Button className='ngoi'> <img src="https://img.icons8.com/fluency/48/null/delete-forever.png" width='25px' />
                </Button>
                <Button className='edit'><img src="https://img.icons8.com/external-creatype-glyph-colourcreatype/64/null/external-edit-interface-a2-creatype-glyph-colourcreatype-2.png" width='25px' /></Button>
            </ButtonGroup>
        }
        </td>
    </tr>
)

const Orders = () => {
    return (
        <>
            <div className='home'>
                <Sidebar />
                <div className='homeContainer' >
                    <Navbar />
                    <br />
                    <div >
                        <Button className='tipthe'><img src="https://img.icons8.com/color/48/null/add-product.png" className='colom' width='35px' /></Button >
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card__body">
                                        <Table
                                            limit='10'
                                            headData={customerTableHead}
                                            renderHead={(item, index) => renderHead(item, index)}
                                            bodyData={[]}
                                            renderBody={(item, index) => renderBody(item, index)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders
