import React, { Component } from "react";

class RenderPokemon extends Component {
    render() {
        const { name, type, averageWeight, image} = this.props;
        return (
            <section className='container'>
                <div className='card'>
                    <div>
                        <h2>{name}</h2> 
                        <h3>{type}</h3>
                        <h3>{`${averageWeight.value} ${averageWeight.measurementUnit}`}</h3>
                    </div>                
                    <div>
                        <img src={image} alt={name} />
                    </div>
               </div>
            </section>         
        );
    }
}

export default RenderPokemon;