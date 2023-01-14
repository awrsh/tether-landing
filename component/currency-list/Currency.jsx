import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import data from "../../data/dataProduct.json"
import { useState } from 'react';
import changeCurrency from '../Util';
const Currency = () => {

    const [items, setItems] = useState(data.products)
    return (
        <div className="currency-list">
            <div className="container">
              <div className="currency-list-title">
                   <h2>لیست ارز ها</h2>
                     <p>صرافی دیجیکس کوین مرکز معاملات انواع استیل کوین</p>
              </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 1100 }} aria-label="simple table">
                        <TableHead >
                            <TableRow>
                                <TableCell>
                                    <p className=' title'> ارز </p>
                                </TableCell>
                                <TableCell align="right">
                                    <p className=' title'> قیمت خرید </p>
                                </TableCell>
                                <TableCell align="right">
                                    <p className=' title'> قیمت فروش </p>
                                </TableCell>
                                <TableCell align="right">
                                    <p className=' title'>  تقییرات 24 ساعته </p>
                                </TableCell>
                                <TableCell align="right">
                                    <p className=' title'>  نمودار </p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                items.map((item) => (

                                    <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            <div className="name">
                                                <img src={item.image} alt="" />

                                                <div className="text">{item.persian}</div>
                                            </div>

                                        </TableCell>

                                        <TableCell align="right">
                                            <div className="price item">{changeCurrency(item.price_buy)}</div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="deals item">{changeCurrency(item.price_sell)}</div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="change item">{item.change}</div>
                                        </TableCell>
                                        <TableCell align="right">
                                            <div className="chart-img item"><img src={(item.chart)} alt="" /></div>
                                        </TableCell>

                                        <TableCell align="right">
                                            <div className="rotate"><img src="image/rotate.png" alt="" /></div>
                                        </TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}

export default Currency