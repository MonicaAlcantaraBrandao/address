import { Component } from "react";

class Header extends Component{
    render(){
        return(
            <header>
                {this.props.title}
            </header>
        )
    }
}

export default Header