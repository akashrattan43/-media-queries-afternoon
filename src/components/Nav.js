import React, {Component} from 'react';
import './Nav.css';

export default class Nav extends Component {
    constructor () {
        super();

        this.state = {
            click: false,
        }
    }

    handleClick() {
        this.setState ({
            click: !this.state.click,
        })
    }

    render(){
        return (
            <div className='nav-header fixed-top'>
                <div className='nav-container'>
                    <h1 className='nav-title'>Start Bootstrap</h1>
                    <button className='nav-menu' onClick={() => this.handleClick()}>Menu</button>
                    <div className={this.state.click ? 'nav-show' : "nav-hidden"}>
                        <ul className='nav-list'>
                            <li className='nav-item'>Services</li>
                            <li className='nav-item'>Portfolio</li>
                            <li className='nav-item'>About</li>
                            <li className='nav-item'>Team</li>
                            <li className='nav-item'>Contact</li>
                        </ul>
                    </div> 
                </div>
            </div>  
        )
    }
}