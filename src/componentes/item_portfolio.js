import React from "react";

const ItemPortfolio = props => {
    return (
        <div className='col-sm-4'>
            <div className='thumbnail'>
                <img src='paris.jpg' alt='Paris' width='400' height='300' />
                <p>{props.key}</p>
                <p>{props.conteudo.descricao}</p>
                <p>{props.conteudo.titulo}</p>
            </div>
        </div>
    )
}

export default ItemPortfolio