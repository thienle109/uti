import React, { useState } from 'react'

import './table.scss'

const Table = props => {
    console.log(props);
    // có limit và sản phẩm thì dùng hàm slice để chia trang còn khong thì sẽ trả về product
    const initDataShow = props.limit && props.bodyData ? props.bodyData.slice(0, Number(props.limit)) : props.bodyData

    const [dataShow, setDataShow] = useState(initDataShow)

    let pages = 1

    let range = []

    if (props.limit !== undefined) {
        // số trang : mart.floor làm tròn dưới  
        let page = Math.floor(props.bodyData.length / Number(props.limit))
        //limit số lượng ssanr phẩm trong1 trang  
        pages = props.bodyData.length % Number(props.limit) === 0 ? page : page + 1
        // đưa số trang vầ mảng pages
        range = [...Array(pages).keys()]
    }

    const [currPage, setCurrPage] = useState(0)

    const selectPage = page => {
        // bắt đầu : số sản phẩm * só page 
        const start = Number(props.limit) * page
        // kết thúc : số bắt đầu + số sản phẩm trong 1 trang 
        const end = start + Number(props.limit)
        // set số trang 
        setDataShow(props.bodyData.slice(start, end))

        setCurrPage(page)
    }

    return (
        <div>
            <div className="table-wrapper">
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData.map((item, index) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        props.bodyData && props.renderBody ? (
                            <tbody>
                                {
                                    dataShow.map((item, index) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item, index) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Table
