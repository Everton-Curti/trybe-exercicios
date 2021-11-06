import React, { Component } from "react";
import paletaCores from "../data/PaletaCores";

class RenderizarLista extends Component {
    render() {
        const { value } = this.props;
        return (
            <main>
                <ul>
                    {paletaCores
                      .filter((cor) => cor.name.includes(value))
                      .map((cor) => (                        
                        <li key={ cor.color } className='lista'>
                            <div style={ { background: `${cor.color}` } } className='color-square' />                            
                            { cor.name }
                        </li>
                    ))}
                </ul>
            </main>
        );
    }
}

export default RenderizarLista;