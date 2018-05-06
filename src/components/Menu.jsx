import React from 'react';
import { Link } from 'react-router-dom';
import wlData from '../wlData.json';

export class Menu extends React.Component{
  render(){
    var pathname = this.props.pathname;
    return (
      <ul className={this.props.className}>
        <Link to="/" className={pathname === '/'?"current":null}><li className="tabs-1" ><span className="tabs-text">{wlData.menu_items.item1.name}</span></li></Link>

        <Link to="/about" className={pathname === '/about'?"current":null}><li className="tabs-2"><span className="tabs-text">{wlData.menu_items.item2.name}</span></li></Link>

        <Link to="/projects" className={pathname === '/projects'?"current":null}><li className="tabs-3"><span className="tabs-text">{wlData.menu_items.item3.name}</span></li></Link>

        <Link to="/gallery" className={pathname === '/gallery'?"current":null}><li className="tabs-5"><span className="tabs-text">{wlData.menu_items.item5.name}</span></li></Link>

        <Link to="/contact" className={pathname === '/contact'?"current":null}><li className="tabs-4"><span className="tabs-text">{wlData.menu_items.item4.name}</span></li></Link>
      </ul>
    );
  }
}
