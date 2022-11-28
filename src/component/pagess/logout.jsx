import React from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import Table from '../table/table'
import './logout.scss';
import { NavLink } from 'react-router-dom';

const customerTableHead = [



]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.confirm}</td>

    </tr>

)

const Logout = () => {
    return (
        <>
            <div className='home'>
                <Sidebar />
                <div className='homeContainer' >
                    <Navbar />

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
                                    <ButtonGroup className='delete'>
                                        <NavLink to={'/'}>
                                            <Button className='ngoi'>quay lại
                                            </Button>
                                        </NavLink>
                                        <NavLink to={'/out'}>
                                            <Button className='edit'> rời khỏi</Button>
                                        </NavLink>
                                    </ButtonGroup>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logout
