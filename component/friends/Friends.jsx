import React from 'react'
import Link from "next/link"
function Friends() {
  return (
     <div className="friends">
        <div className="container">
            <div className="title">درآمد همیشگی برای شما ودوستانتان</div>
            <div className="desc">با دعوت ار دوستان خودتون در صرافی دیجیکس 24 با هر معامله موفقی که انجام میدهند شما هم پاداش میگیرید</div>
            <div className="links">
                <Link  href="/"><span className="btn-main white">معرفی دوستان</span></Link>
                <Link href="/">بیشتر بدانید</Link>
            </div>
        </div>
     </div>
  )
}

export default Friends