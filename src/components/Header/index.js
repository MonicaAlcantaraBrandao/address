import { Component } from "react";
import styles from './Header.module.css'

class Header extends Component{
    render(){
        return(
            <header className={styles.header}>
                {this.props.title}
            </header>
        )
    }
}

export default Header