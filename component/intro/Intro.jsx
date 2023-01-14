import Image from 'next/image'
import React from 'react'
import {BsFillGiftFill} from "react-icons/bs"
function Intro() {

    return (
        <div className="intro">
            <div className="container">
                <div className="row align-items-center justify-content-space-between">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                        <div className="intro-content">
                            <div className="title">
                                سهولت در خرید و فروش تتر و سایر استیبل کوین ها</div>
                            <div className="desc">
                                صرافی آنلاین دیجیکس24 ،مرجعی برای خرید تتر و فروش تتر ، خرید بیت کوین و فروش بیت کوین و خرید ارز دیجیتال با دلار میباشد و بستری امن را برای شما ایجاد نموده تا در سریع ترین زمان و بهترین قیمت ، اقدام به خرید و فروش ارز دیجیتال نمایید.

                            </div>
                            <span className='gift'><BsFillGiftFill className='icon'/><p>همین حالا ثبت نام کنید و کد تخفیف 100هزارتومانی دریافت کنید</p></span>

                         <div className="input-box">
                            <input className='text' type="text" placeholder='09123254235' />
                            <input className='btn-main' type='submit' value="ثبت نام" />
                         </div>
                        </div>

                    </div>
                    <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-12">
                        <div className="intro-img">
                            <img src="image/Group 31.png" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro