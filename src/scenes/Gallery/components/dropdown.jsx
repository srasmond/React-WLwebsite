import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import wlData from '../../../wlData.json';

export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.onSelectHandler = this.onSelectHandler.bind(this);
    }
    onSelectHandler(eventKey){
        this.props.onSelect(eventKey);
        //console.debug("test" + eventKey);
    }
    render() {
        const MenuItems = (
            <DropdownButton
                bsSize={this.props.bsSize}
                title={this.props.title}
                id={this.props.id}
            >
                <MenuItem header>{wlData.menu_items.item3.sub_items.sub_item2.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"1a"}>{wlData.menu_items.item3.sub_items.sub_item2.sub_sub_items.sub_sub_item1.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"1b"}>  {wlData.menu_items.item3.sub_items.sub_item2.sub_sub_items.sub_sub_item2.name}
                </MenuItem>
                <MenuItem divider />
                <MenuItem onSelect={this.onSelectHandler} eventKey={"2"}>
                    {wlData.menu_items.item3.sub_items.sub_item3.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"3"}>
                    {wlData.menu_items.item3.sub_items.sub_item4.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"4"}>
                    {wlData.menu_items.item3.sub_items.sub_item5.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"5"}>
                    {wlData.menu_items.item3.sub_items.sub_item6.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"6"}>
                    {wlData.menu_items.item3.sub_items.sub_item7.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"7"}>
                    {wlData.menu_items.item3.sub_items.sub_item8.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"8"}>
                    {wlData.menu_items.item3.sub_items.sub_item9.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"9"}>
                    {wlData.menu_items.item3.sub_items.sub_item10.name}
                </MenuItem>
                <MenuItem onSelect={this.onSelectHandler} eventKey={"10"}>
                    {wlData.menu_items.item3.sub_items.sub_item11.name}
                </MenuItem>
            </DropdownButton>
        );
        return (
            MenuItems
        );
    }     
  }     
  
