import React, { Component } from "react";
import RenderizarLista from "./RenderizarLista";

class Input extends Component {
    constructor() {
        super();
        this.state = {
            texto: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            texto: event.target.value,            
        });        
    }

    render() {
        const { texto } = this.state;
        return (<>
            <label className='input' htmlFor='texto'>
                <h3>Digite a cor que deseja filtrar: </h3>
                <input
                    onChange={ this.handleChange }
                    value={ texto }                    
                    type='text' 
                    name='texto' 
                    id='texto'
                />
            </label> 
            <RenderizarLista value={texto} />  </>      
        );
    }
}

export default Input;