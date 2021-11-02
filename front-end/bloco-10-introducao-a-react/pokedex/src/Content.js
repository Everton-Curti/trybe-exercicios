import React, { Component } from "react";
import ArrayContent from './ArrayContent';

class Content extends Component {
    render() {
        return (
            <div className='content'>
                {ArrayContent.map((conteudo) => {
                    return (
                        <div key={conteudo} className='card'>
                            <h4>{`O conteudo é: ${conteudo.conteudo}`}</h4>
                            <p>{`Status: ${conteudo.status}`}</p> 
                            <p>{`Bloco: ${conteudo.bloco}`}</p>
                        </div>
                    );
                })}
            </div>
        );      
    }
}

export default Content;