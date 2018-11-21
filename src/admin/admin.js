import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Menu from './menu';
import PortfolioAdmin from './portifolioadmin';

class Admin extends Component {
     constructor(props) {
        super(props)
    }
 
    render() {
        return (
            <div>
                <h2>Área administrativa</h2>
                <Route path={`/`} component={Menu} />
                <Route path={`${this.props.match.url}/portfolioadmin`} component={PortfolioAdmin} />
            </div>
        )
    }
}

export default Admin