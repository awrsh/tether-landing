import Link from "next/link"
import { useState } from "react"
import { FaBars } from "react-icons/fa"

export const Navbar = () => {
    const [menu,setMenu] = useState(false)
    return (
        <>
        <div  className={`${menu ? "cover-body active" : "cover-body"}`} onClick={() => setMenu(false)}></div> 

        <nav>
            <div className="container">
                <div className="content">
                     <div className="btn-menu-responcive" onClick={() => setMenu(true)}><FaBars/></div>
                    <div className="logo">
                        <img src="image/logoFa.png" alt="" />
                    </div>
                    <div className={`${menu ? "links active" : "links"}`}>
                        <div className="logo-responsive">
                        <img src="image/logoFa.png" alt="" />

                        </div>
                        <ul>
                            <li><Link href="/">خرید و فروش </Link></li>
                            <li><Link href="/">شرایط وقوانین</Link></li>
                            <li><Link href="/">بلاگ</Link></li>
                            <li><Link href="/">درباره ما</Link></li>
                            <li><Link href="/">تماس با ما</Link></li>
                        </ul>
                    </div>
                    <div className="auth">
                        <ul className="btn-group">
                            <li><Link href="/" className="login">ورود</Link></li>
                            <li  className="register"><Link href="/" >ثبت نام</Link></li>

                        </ul>

                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
