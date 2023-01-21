import { Box } from '@mui/material'
import React from 'react'
import dynamic from 'next/dynamic'
// import FormTabPrice from '../../component/buySell/index'

const DynamicComponentWithNoSSR = dynamic(
  () => import ('./cryproChart/index'),
  { ssr: false }
)
function index() {
  return (
    <Box className=''>
        <DynamicComponentWithNoSSR/>
    </Box>
  )
}

export default index