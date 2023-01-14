import { useState } from "react"
import data from "../../data/dataAtribute.json"
const Atributies = () => {

    const [atributeItems, setAtributeItems] = useState(data.atributies)
    console.log(atributeItems)
    return (
        <div className="atributies">
            <div className="container">
                <div className="atributies-title">
                    <h2>  ویژگی های دیجیکس 24</h2>
                    <p>صرافی دیجیکس کوین مرکز معاملات انواع استیل کوین</p>
                </div>
                <div className="row">
                    
                    {
                        atributeItems.map((item) => (
                           
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 " key={item.id}>
                                <div className="atribute-item">
                                    <div className="img"><img src={item.image} alt="" /></div>
                                    <div className="title">{item.title}</div>
                                    <div className="desc">{item.desc}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Atributies