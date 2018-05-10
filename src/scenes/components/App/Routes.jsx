import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Home} from '../../Home/components/Home.jsx';
import {Projects} from '../../Projects/components/Projects.jsx';
import {About} from '../../About/components/About.jsx';
import {Contact} from '../../Contact/components/Contact.jsx';
import {Gallery} from '../../Gallery/components/Gallery.jsx';
import {NotFoundPage} from '../../../components/NotFoundPage.jsx';

export class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/gallery" component={Gallery} />
                <Route exact path="/contact" component={Contact} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        );
    }
}