import React, { Component } from 'react'

import config, { storage } from '../config/firebase-config'

class PortfolioAdmin extends Component {
    constructor(props) {
        super(props)

        this.gravarPortfolio = this.gravarPortfolio.bind(this);
    }

    gravarPortfolio(event) {
        console.log('gravar portfolio.');
        console.log(this.titulo.value);
        console.log(this.descricao.value);
        console.log(this.imagem.value);
        event.preventDefault();
    } 

    render() {
        return (
            <div style={ {'padding': '150px'} }>
                <form onSubmit={this.gravarPortfolio}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" 
                            className="form-control" 
                            id="titulo" 
                            placeholder="Título" 
                            ref={(ref) => this.titulo = ref}
                            />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <textarea className="form-control" 
                            id="descricao" 
                            rows="3"
                            ref={(ref) => this.descricao = ref}></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="uploadImagem">Imagem</label>
                        <input type="file"
                             className="form-control-file" 
                             id="uploadImagem" 
                             ref={(ref) => this.imagem = ref}
                             />
                    </div>                    
                    <button type="submit" className="btn btn-primary">Salvar</button>
                </form>
            </div>
        )
    }
}

export default PortfolioAdmin