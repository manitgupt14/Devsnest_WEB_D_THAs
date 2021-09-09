import { useContext } from "react";
import ThemeContext from "../ThemeContext"
import {ThemeContextType} from '../ThemeContext'

const ThemeToggle = () => {

    const {theme,setTheme} = useContext<ThemeContextType>(ThemeContext);

    return(
        <button className={theme?"theme-btn dark":"theme-btn"} onClick={()=>setTheme(!theme)}>
            {theme?"Light":"Dark"}
        </button>
    )
}

export default ThemeToggle;
