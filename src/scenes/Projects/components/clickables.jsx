import React from 'react';
import { ProjectDefault } from './ProjectContent/projectContent.jsx';
import { Project1a, Project1b } from './ProjectContent/projectContent.jsx';
import { Project2, Project3, Project4, Project5 } from './ProjectContent/projectContent.jsx';
import { Project6, Project7, Project8, Project9, Project10 } from './ProjectContent/projectContent.jsx';

class Clickable extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.props.onClick(this.props.id, this.props.itemIndex);
    }
    render() {
        return (
        <li onClick={this.handleClick} className={this.props.isActive ? 'active': null}> 
            <span>{this.props.listLabel}</span>
        </li>
        )
    }
}
export class Clickables extends React.Component {
    render() {
        return (
        <div>
            <Clickable id={<ProjectDefault />} itemIndex={0} isActive={ this.state.activeItem===0 } onClick={this.handleClick} listLabel="Onderhoud en reinigen" />
            {
            this.state.isProject1
                ? <div id="Project1SubElements" >
                    <Clickable id={<Project1a />} itemIndex={1} isActive={ this.state.activeItem===1 } onClick={this.handleClick} listLabel="Tuin" />
                    <Clickable id={<Project1b />} itemIndex={2} isActive={ this.state.activeItem===2 } onClick={this.handleClick} listLabel="Gebouwen" />
                </div>
                : null
            }
            <Clickable id={<Project2 />} itemIndex={3} isActive={ this.state.activeItem===3 } onClick={this.handleClick} listLabel="Afbraakwerken" />
            <Clickable id={<Project3 />} itemIndex={4} isActive={ this.state.activeItem===4 } onClick={this.handleClick} listLabel="Sanitaire klussen" />
            <Clickable id={<Project4 />} itemIndex={5} isActive={ this.state.activeItem===5 } onClick={this.handleClick} listLabel="Isolatie" />
            <Clickable id={<Project5 />} itemIndex={6} isActive={ this.state.activeItem===6 } onClick={this.handleClick} listLabel="Valse wanden en plafonds" />
            <Clickable id={<Project6 />} itemIndex={7} isActive={ this.state.activeItem===7 } onClick={this.handleClick} listLabel="Herstellingen" />
            <Clickable id={<Project7 />} itemIndex={8} isActive={ this.state.activeItem===8 } onClick={this.handleClick} listLabel="Schilderwerken" />
            <Clickable id={<Project8 />} itemIndex={9} isActive={ this.state.activeItem===9 } onClick={this.handleClick} listLabel="Totaalpakketten" />
            <Clickable id={<Project9 />} itemIndex={10} isActive={ this.state.activeItem===10 } onClick={this.handleClick} listLabel="Tuinhuizen" />
            <Clickable id={<Project10 />} itemIndex={11} isActive={ this.state.activeItem===11 } onClick={this.handleClick} listLabel="Hulp bij..." />
        </div>
        )
    }
}