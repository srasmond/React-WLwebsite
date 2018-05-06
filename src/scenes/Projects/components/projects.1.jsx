import React from 'react';
import ReactDOM from 'react-dom';
import { Clickables } from './clickables.jsx';

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isProject1: false };
    this.state = { activeItem: null };
  }
  handleClick(projectComponent, itemIndex) {
    if (projectComponent.type.name === "ProjectDefault" || projectComponent.type.name === "Project1a" || projectComponent.type.name === "Project1b"){
      this.setState({ isProject1: true });
      this.setState({ activeItem: itemIndex })
    }
    else {
      this.setState({ isProject1: false });
      this.setState({ activeItem: itemIndex })
    }
    const element = (
      projectComponent
    );
    ReactDOM.render(
      element,
      document.getElementById('projectContent')
    );
  }
  render() {
    return (
      <div className="fc-tab-3">
        <div className="projects-container">
          <div className="tabs_ver_7">
            <ul className="resp-tabs-list2 tabFloatLeft2">
              <Clickables isProject1 />
            </ul>
          </div>

          <div id="projectContent" className="tabFloatRight2"><p id="projectDefaultText">Gelieve een keuze te maken in de kolom hiernaast.</p>
          </div>
        </div>
      </div>
    )
  }
}