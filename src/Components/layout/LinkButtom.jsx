import {Link} from 'react-router-dom'
import Styles from './LinkButtom.module.css'

function LinkButtom({to, text}) {
    return(
        <Link className={Styles.btn} to={to}> 
            {text}
        </Link>
    )
}

export default LinkButtom;