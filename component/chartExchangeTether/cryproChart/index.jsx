import React, { useState } from 'react'
import { Box, Typography } from "@mui/material";
import Chart from 'react-apexcharts'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from "next/router";
import FormTabPrice from '../../buySell/index'

function index() {
  const series = [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }]
  const options = {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      labels: {
        format: 'MMM',
      },
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-10-19T01:30:00.000Z", "2018-11-19T02:30:00.000Z", "2018-12-19T03:30:00.000Z", "2019-01-19T04:30:00.000Z", "2019-02-19T05:30:00.000Z", "2019-03-19T06:30:00.000Z"]
    },
    yaxis: {
      labels: {
        formatter: function (value) {
          return value + "$";
        }
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  }
  const [value, setValue] = useState('1');
  const router = useRouter()
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [valueTop, setValueTop] = useState('#chart');

  const handleChangeTop = (event, newValue) => {
    setValueTop(newValue);
    router.push(newValue)
  };
  return (
    <>
      <Box className={'topTabBar col-sm-12 col-md-6'}>
        <Tabs
          classes={{
            indicator: 'indicatorStyles'
          }}
          value={valueTop} onChange={handleChangeTop} aria-label="basic tabs example">
          <Tab disableTouchRipple value={'#chart'} label="نمودار قیمت" />
          <Tab disableTouchRipple value={'#cryptoInfo'} label="توضیح و معرفی" />
          <Tab disableTouchRipple value={'#faq'} label="سوالات متداول" />
        </Tabs>
      </Box>
      <Box className=" ">
        <Box className={'flex chartWrapper flex-wrap'} sx={{paddingBlock: "30px"}} id={'chart'}>
          <Box className={'col-lg-7 col-12'}>
            <Box className={'row justify-content-space-between col-sm-12 mb-2'} sx={{ padding: 0, rowGap: '10px' }}>
              <Box className={' '}>
                <Typography fontWeight={'bolder'} fontSize={'22px'}>نمودار قیمت تتر</Typography>
              </Box>
              <Box className={'chartTabBar '}>
                <Tabs
                  classes={{
                    indicator: 'indicatorStyles'
                  }}
                  value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab value={'1'} label="روزانه" />
                  <Tab value={'2'} label="هفتگی" />
                  <Tab value={'3'} label="ماهانه" />
                </Tabs>
              </Box>
            </Box>
            <Box sx={{ border: '1px solid #ccc', borderRadius: '10px' }}>
              <Chart toolbar={false} options={options} series={series} type="area" height={425} />
            </Box>
          </Box>
          <Box className={'col-lg-5 col-12'}>
            <FormTabPrice />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default index