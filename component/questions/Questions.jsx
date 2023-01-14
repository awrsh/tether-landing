import data from "../../data/dataQuestion.json"
import QuestionItem from "./QuestionItem"
const Questions = () => {
    return (
        <div className="qusetions">
            <div className="container">
                <div className="title">
                    <h2>هر لحظه و هر جا براحتی معامله کنید</h2>
                    <p>در کوتاه ترین زمان ممکن با بالا ترین امنیت و با بهترین نرخ خرید و فروش معامله کنید</p>
                </div>
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="qusetions-access-content">
                            <div className="qusetions-items">
                                {
                                    data.questions.map((item) =>

                                        <QuestionItem key={item.id} item={item} />

                                    )
                                }

                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div className="quicka-ccess-img">
                            <div className="content">
                                <p>ویدیو کار آموزش صرافی</p>
                                <div className="slogan">
                                    <img src="image/logoFa (1).png" alt="" />
                                    <div className="text"> | <span>راهی به آینده</span></div>
                                </div>
                                <img className="play" src="image/Group 21.png" alt="" />
                            </div>
                            <div className="address">www.digiex24.com</div>

                        </div>
                    </div>
                </div>
                <div className="description">

                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="description-img">
                                <img src="image/Group 45.png" alt="" />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="description-content">
                                <div className="title">خرید و فروش تتر پر مخاطب ترین استیبل کوین</div>
                                <div className="content">
                                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد

                                    </p>
                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد

                                </p>
                                </div>
                                <div className="item">
                                    <img src="image/Group 39.png" alt="" />
                                    <div className="text">
                                        <div className="title">خرید فروش ارز دیجیتال تتر</div>
                                        <div className="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</div>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="image/Group 38.png" alt="" />
                                    <div className="text">
                                        <div className="title">بهترین صرافی دیجیتال ایرانی</div>
                                        <div className="desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Questions