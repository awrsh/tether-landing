import React from 'react'
import {Box, Button, Chip} from '@mui/material'
import Tether from '../../../public/image/tether-usdt-logo.png'
import Image from 'next/image'
import Typography from "@mui/material/Typography";
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import SwapHorizOutlinedIcon from '@mui/icons-material/SwapHorizOutlined';
function index() {
  return (
    <div className={'cryptoInfoWrapper'}>
      <Box className="container">
        <Box className={'cryptoInfoInnerWrapper'}>
          <Box className={'col-lg-4 col-md-6 col-sm-12 flex flexColumn cryptoInfo gap-15'}>
            <Box className={'col-xs-12 flex cryptoInfoInner gap-15'}>
              <Box className={'flex gap-10'}>
                <Image src={Tether} alt=""/>
                <Typography variant={'h5'}>تتر</Typography>
              </Box>
              <Box className={'flex gap-10'}>
                <Chip label="USDT" color={'chipsLight'}/>
                <Chip label="رتبه 3#" color={'chipsDark'}/>
              </Box>
              <Box className={'flex gap-10'}>
                <Button color={'iconButtonsLight'} variant={'outlined'}>
                  <StarBorderOutlinedIcon fontSize={'small'}/>
                </Button>
                <Button color={'iconButtonsLight'} variant={'outlined'}>
                  <ShareOutlinedIcon fontSize={'small'}/>
                </Button>
              </Box>
            </Box>
            <Box className={'col-xs-12'}>
              <Box className={'flex gap-15'}>
                <Button size={'small'} variant="contained" color={'buttonsLight'}
                        endIcon={<LinkOutlinedIcon fontSize={'small'}/>}
                        startIcon={<FileUploadOutlinedIcon fontSize={'small'}/>}>
                  tether.to
                </Button>
                <Button size={'small'} variant="contained" color={'buttonsLight'}
                        endIcon={<SearchOutlinedIcon fontSize={'small'}/>}
                        startIcon={<FileUploadOutlinedIcon fontSize={'small'}/>}>
                  Explorer
                </Button>
              </Box>
            </Box>
          </Box>
          <Box className={'col-lg-2 col-md-6 col-sm-12 flex gap-10 flexColumn'}>
            <Box className={'flex align-items-center'} sx={{height: '32px'}}>
              <Typography fontSize={'14px'} color={'digigrey.main'}>قیمت تتر (USDT)</Typography>
            </Box>
            <Box className={'flex align-items-center gap-15'}>
              <Typography fontSize={'20px'} fontWeight={'700'}>$0.9999</Typography>
              <Typography fontSize={'16px'} color={'digigrey.main'}>(41,300) تومان</Typography>
            </Box>
          </Box>
          <Box className={'col-lg-4 col-md-9 col-sm-12 flex gap-15 flexColumn valueSliderWrapper'}>
            <Box className={'flex align-items-center'} sx={{height: '32px'}}>
              <Typography fontSize={'14px'} color={'digigrey.main'}>محدوده قیمت (24 ساعته)</Typography>
            </Box>
            <Box className={'flex align-items-center gap-15 thumbSlider'} sx={{width: '100%'}}>
              <Stack spacing={2} direction="row" sx={{mb: 1, width: '100%'}} alignItems="center">
                <Typography fontSize={'12px'}>کمترین: {(40900).toLocaleString()}</Typography>
                <Slider valueLabelFormat={(value) => value.toLocaleString()} valueLabelDisplay="on" disabled
                        sx={{width: '50%'}} step={100} min={40900} max={41900} aria-label="Volume" value={41300}/>
                <Typography fontSize={'12px'}>بیشترین: {(41900).toLocaleString()}</Typography>
              </Stack>
            </Box>
          </Box>
          <Box className={'col-lg-2 col-md-3 col-sm-12 flex gap-15 flexColumn align-items-end justify-content-center'}>
            <Button variant="contained" sx={{height:'50px',width:'100%'}} startIcon={<SwapHorizOutlinedIcon fontSize={'small'}/>}>خرید و فروش تتر</Button>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default index