import React from 'react'
import { Link } from 'react-router-dom';

const Menu = props => {
    return (
        <div>
            <h1>Menu administrativo</h1>
            <div className="list-group">
                <Link to="#" className="list-group-item list-group-item-action active">Selecione uma opção</Link>
                <Link to="/admin/portfolioadmin" className="list-group-item list-group-item-action">Portifólio</Link>
            </div>
        </div>
    )
}

export default Menu