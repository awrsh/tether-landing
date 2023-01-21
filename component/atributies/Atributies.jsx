import { useState } from "react"
import data from "../../data/dataAtribute.json"
const Atributies = () => {

    const [atributeItems, setAtributeItems] = useState(data.atributies)
    console.log(atributeItems)
    return (
        <div className="atributies">
            <div className="container">
                <div className="row flex-wrap">
                    {
                        atributeItems.map((item,index) => (
                           
                            <div className={`col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12`} key={item.id}>
                                <div className={`atribute-item ${index === 0 ? 'atribute-first-item' : ''}`}>
                                    <div className="img"><img src={item.image} alt="" width={50} height={50}/></div>
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