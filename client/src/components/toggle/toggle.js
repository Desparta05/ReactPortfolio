import "./toggle.css"
import Moon from "../../assets/Images/icons8-moon-64.png"
import Sun from "../../assets/Images/icons8-sun-30.png" 
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = ()=>{
        theme.dispatch({ type: "TOGGLE" })
    }

    return (
        <div className="t">
            <img src={Sun} alt="" className="t-icon" />
            <img src={Moon} alt="" className="t-icon" />
            <button className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0 : 20}}/>
        </div>
    )
}

export default Toggle