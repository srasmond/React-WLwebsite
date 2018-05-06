import React from 'react';
import { Link } from 'react-router-dom';
import {Routes} from './Routes.jsx';
import {Menu} from '../../../components/Menu.jsx';
import headerImage from './img/LOGOWillem_RoodWit_zonderNummer.png';

export class App extends React.Component{
    render(){
        var pathname = this.props.pathname;
        
		return (
            <div>
            <section className="section-full image-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <header>
                                <Link to="/" className={pathname === '/'?"current":null}>
                                <div className="responsive-logo">
                                    <img src={headerImage} alt="Website Logo Willem Lorein Klusjesdienst" />
                                </div>
                                </Link> 
                            </header>
                            <div className="VerticalTab VerticalTab_hash_scroll VerticalTab_6 tabs_ver_6 VerticalTab.tabs_ver_6.resp-vtabs" >
                                <Menu pathname={pathname} className="resp-tabs-list tabFloatRight"/>
                                <div className="resp-tabs-container  tabFloatLeft tabs_scroll">
                                    <Routes/>
                                    {this.props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer>
                <Menu pathname={pathname} className="footer_menu" />
                Copyright &copy; 2018 Willem Lorein Klusjesdienst 
                | Beheer en design: <a href="https://be.linkedin.com/in/sammyrasmond" target="_blank" rel="noopener noreferrer"> Sammy Rasmond </a>
                <br/>
                <p className="versionUpdate">v1.3.8 - Laatste update: 06 mei 2018</p>
            </footer>
            </div>
        );
	}
}
