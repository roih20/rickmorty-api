import React, { ReactElement } from 'react'
import { Character } from './CharactersList'



interface Props {
    character: Character;
}

export default function CardCharacters({character}: Props): ReactElement {
    return (
        <div className="bg-gray-700 h-full max-w-xs sm:max-w-xs w-full rounded-lg flex flex-col">
            <div className="overflow-hidden ">
                <img src={character.image} alt="rick" className="rounded-lg w-full " />
            </div>

            <div className="py-2 px-3">
                <h2 className="text-lg font-medium text-white">{character.name}</h2>
            </div>

            <div className="py-2 px-3">
                 <p className="text-lg text-white ">Status: {character.status}</p>
            </div>

            <div className="py-2 px-3">
                 <p className="text-lg text-white ">Species: {character.species}</p>
            </div>
            <div className="py-2 px-3">
                 <p className="text-lg text-white ">Gender: {character.gender}</p>
            </div>
            
        </div>
    )
}
