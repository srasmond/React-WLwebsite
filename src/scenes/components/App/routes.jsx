import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Home} from '../../Home/components/index.jsx';
import {Projects} from '../../Projects/components/projects.jsx';
import {About} from '../../About/components/about.jsx';
import {Contact} from '../../Contact/components/contact.jsx';
import {Gallery} from '../../Gallery/components/gallery.jsx';
import {NotFoundPage} from '../../../components/NotFoundPage.jsx';

export class Routes extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contact} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        );
    }
}