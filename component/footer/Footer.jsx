import React from 'react'
import Link from "next/link"
const Footer = () => {
    return (

        <footer>
            <div className="container padding">
                <div className="row">
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-item">
                            <div className="logo"><img src="image/logoFa.png" alt="" /></div>
                            <div className="desc">
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                                </p>
                            </div>
                            <div className="call">
                                <img src="image/Group 14.png" alt="" />
                                <div className="text">
                                    <p>تماس با پشتیبانی</p>
                                    <span>021-2352555</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-item">
                            <div className="title">خرید ارز دیجیتال</div>
                            <div className="links">
                                <Link href="/">خرید فروش تتر</Link>
                                <Link href="/">خرید فروش باینتس کوین</Link>
                                <Link href="/">خرید فروش یو اس دی کوین</Link>
                                <Link href="/">خرید فروش دای</Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-item">
                            <div className="title"> دیجیکس 24 </div>
                            <div className="links">
                                <Link href="/">خرید فروش ارز دیجیتال</Link>
                                <Link href="/">کیف پول</Link>
                                <Link href="/">واریز و برداشت</Link>
                                <Link href="/">  درباره ما</Link>
                                <Link href="/">   قوانبن و شرایط استفاده</Link>
                                <Link href="/">  سیاست حفظ حریم خصوصی </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-item">
                            <div className="title"> پشتیبانی </div>
                            <div className="links">
                                <Link href="/">تماس با ما</Link>
                                <Link href="/">پشتیبانی واتس اپ</Link>
                                <Link href="/"> راهنما</Link>
                                <Link href="/">سوالات متداول  </Link>
                            </div>

                        </div>
                    </div>
                    <div className="col-xxl-2 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div className="footer-item">
                            <div className="title"> شبکه های اجتماعی </div>
                            <div className="links">
                                <Link href="/"> اینستاگرام </Link>
                                <Link href="/"> تلگرام </Link>
                                <Link href="/"> توییتر </Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right"><p>کلیه حقوق مادی و معنوی این سایت متعلق به دیجیکس 24 می باشد</p></div>
        </footer>
    )
}

export default Footer