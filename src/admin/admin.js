import React, { Component } from 'react'

import Menu from './menu';

class Admin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Área administrativa</h2>
                <Menu />
            </div>
        )
    }
}

export default Admin