import { Box } from '@mui/material'
import React from 'react'
import Breadcrumb from '../infoTether/Breadcrumbs/index'
import Crypoinfo from '../infoTether/cryproInfo/index'

function index() {
  return (
    <Box>
        <Breadcrumb/>
        <Crypoinfo/>
    </Box>
  )
}

export default index