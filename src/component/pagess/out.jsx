
import React from 'react';
import Table from '../table/table'
import './out.scss'


const customerTableHead = [

]
const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.type}</td>
    </tr >
)

const Out = () => {


    return (

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
                    <div className='out'><img src="https://imgt.taimienphi.vn/cf/Images/tt/2021/2/9/loi-cam-on-khach-hang-hay-va-sau-sac-34.jpg" className='imge' /></div>
                </div>
            </div>
        </div>

    )
}

export default Out

