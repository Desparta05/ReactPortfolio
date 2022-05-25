import "./portfolioList.css"
import Portfolio from "../portfolio/portfolio"
import {portfolios} from "../../data"

const PortfolioList = () => {
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Portfolio</h1>
                <p className="pl-desc">
                    Projects I completed while in Boot Camp
                </p>
            </div>
            <div className="pl-List">
                {portfolios.map((item) =>(
                    <Portfolio key={item.id} img={item.img} link={item.link} text={item.text}/>
                ))}
            </div>
        </div>
    )
}

export default PortfolioList