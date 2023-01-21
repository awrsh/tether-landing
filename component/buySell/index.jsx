import React from 'react'
import { Box, Button } from '@mui/material'
import FormTabs from './formTab/index';
import  DAI  from '../../public/image/dai.svg';



export default function Dashboard() {
  const [tabvalue, setTabvalue] = React.useState(0);
  const [open, setOpen] = React.useState({
    buy: false,
    shop: false,
    bank: false,
  });

  const handleOpen = (props) => (event) => {
    setOpen({ ...open, [props]: true });
  }
  const handleClose = (props) => (event) => {
    setOpen({ ...open, [props]: false });
  }

  const handleChange = (event, newValue) => {
    setTabvalue(newValue);
  };
  const data = [
    { "name": "تعداد بایننس کوین", "price": "2150BUSD" },
    { "name": "قیمت هر واحد", "price": "30,250تومان" },
    { "name": "مبلغ", "price": "63,570,500تومان" },
    { "name": "تخفیف", "price": "0 تومان" },
    { "name": "کارمزد‌شبکه‌ارسال", "price": "در‌انتظار‌محاسبه" },
  ]

  const options = [
    { "label": 'بایننس کوین', "icon": DAI }
    // { "label": 'تتر', "icon": TET },
    // { "label": 'دای', "icon": DAI },
    // { "label": 'یو اس دی کوین', "icon": USD },
  ]
  const value = " 67,973,000 تومان"
  return (
    <div>
      <div className='row' style={{ height: "100%" }}>
        <div className='col-lg-12 col-12 mycontainer '>
          <FormTabs
            options={options}
            tabvalue={tabvalue}
            handleChange={handleChange}
            openprop={open}
          />
        </div>
      </div>
 
    </div>
  )
}
