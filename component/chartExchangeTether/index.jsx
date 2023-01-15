import { Box } from '@mui/material'
import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import ('./cryproChart/index'),
  { ssr: false }
)
function index() {
  return (
    <Box>
        <DynamicComponentWithNoSSR/>
    </Box>
  )
}

export default index