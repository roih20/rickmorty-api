
import React, { useEffect, useState } from 'react'
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

    const [characters, setCharacters] = useState<Character[]>([]);
    const [info, setInfo] = useState<Info>({
        next: '',
        prev: ''
    })

    useEffect(() => {
        RickAdnMortyAPI(API);
    }, [])

    const API: string = 'https://rickandmortyapi.com/api/character';

    const RickAdnMortyAPI = async (url: string) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const result = data.results
            const info = data.info;
            console.log(info);
            console.log(result);
            setCharacters(result);
            setInfo(info);
        } catch (error) {
            console.log(error);
        }
    } 

    const onNext = () => {
        RickAdnMortyAPI(info.next);
    }

    const onPrev = () => {
        RickAdnMortyAPI(info.prev);
    }
    
    return (
        <div className="container mx-auto mt-16 mb-16">
           <div className="mb-16">
            <Pagination  info={info} next={onNext} prev={onPrev}/>
           </div>
          <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
              {
                  characters.map((character) => (
                      <CardCharacters  key={character.id} character={character}/>
                  ))
              }
          </div>
          <div className="mt-16">
            <Pagination  info={info} next={onNext} prev={onPrev}/>
          </div>
        </div>
    )
}
