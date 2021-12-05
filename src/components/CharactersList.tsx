
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'
import CardCharacters from './CardCharacters'
import Pagination from './Pagination'


export type Character = {
    id: number;
    image?: string;
    name: string;
    status?: string;
    species: string;
    gender: string;
  
}

export type Info = {
    next: string;
    prev: string;
}


export default function CharactersList() {

     const characters: any = useSelector((state: State) => state.character);
     
     const [info, setInfo] = useState<Info>({
            next: '',
            prev: ''
     })

     const dispatch = useDispatch();

     const { fetchAll } = bindActionCreators(actionCreators, dispatch);


     useEffect(()=> {
         fetchAll();
     }, [dispatch]);

   

    return (
        <div className="container mx-auto mt-16 mb-16">
           <div className="mb-16">
               <button>Next</button>
           </div>
          <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
              {
                  characters.map((character: Character) =>(
                      <CardCharacters key={character.id} character={character} />
                  ))
              }
          </div>
          <div className="mt-16">
            
          </div>
        </div>
    )
}
