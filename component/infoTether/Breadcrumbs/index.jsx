import React from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}



function index() {
    return (
        <Box className='container'>
            <Box role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        صفحه اصلی
                    </Link>
                    <Link
                        underline="hover"
                        color="inherit"
                        href="/material-ui/getting-started/installation/"
                    >
                        لیست ارزها
                    </Link>
                    <Typography color="text.primary">تتر (USDT)</Typography>
                </Breadcrumbs>
            </Box>
        </Box>
    )
}

export default index