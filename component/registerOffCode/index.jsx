import React from 'react'
import Link from "next/link"
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import {Button} from "@mui/material";
function Index() {
  return (
     <div className="friends registerOffCode">
        <div className="container">
            <div className="title">با ثبت نام، کد تخفیف 100 تومانی برای معامله اول دریافت کنید.</div>
            <div className="desc">پس از ثبت نام و اهراز حویت، کد تخفیف 100 تومانی برای معامله خرید و فروش برای شما فعال می شود.</div>
            <div className="links">
              <Button variant="contained" sx={{height:'50px',maxWidth:300,width:'100%'}} >ثبت نام و دریافت کد تخفیف</Button>
            </div>
        </div>
     </div>
  )
}

export default Index