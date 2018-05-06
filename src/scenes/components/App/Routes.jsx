import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {Home} from '../../Home/components/Index.jsx';
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
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/contact" component={Contact} />
                <Route path="/sitemap.xml" />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        );
    }
}