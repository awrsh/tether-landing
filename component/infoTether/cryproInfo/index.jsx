import React from 'react'
import { Box } from '@mui/material'
import Tether from '../../../public/image/tether-usdt-logo.png'
function index() {
    return (
        <Box className="container">
            <Box className="col-lg-4">
                <Box>
                    <img src={Tether} alt="" width={60}/>
                </Box>
            </Box>
        </Box>

    )
}

export default index