import React, { Component } from "react";
import RenderPokemon from "./RenderPokemon";
import Data from './Data';

class Pokedex extends Component {
    render() {
        return (
            <>
                {Data.map(({ name, type, averageWeight, image }) => (
                    <RenderPokemon 
                        key={name} 
                        name={name}
                        type={type}
                        averageWeight={averageWeight}
                        image={image}
                />))}
            </>
        )        
    }
}

export default Pokedex;
