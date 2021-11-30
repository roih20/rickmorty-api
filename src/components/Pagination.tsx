import React from 'react'
import { Info } from './CharactersList'

interface Props {
    info: Info;
    next: () => void;
    prev: () => void;
}
export default function Pagination({info, next, prev}: Props) {

    const handleNext = () => {
        next();
    }

    const handlePrev = () => {
        prev();
    }
    return (
        <div className="mt-4 flex flex-row justify-center mb-4 space-x-4">
            <div>
            {
                info.prev ? (
                    <button onClick={handlePrev} className="border-2 border-blue-600 px-4 py-2 rounded-lg hover:bg-gray-200 font-medium text-blue-700">Previous</button>
                ) : null
            }
            </div>
            <div>
                {
                    info.next ? (
                        <button onClick={handleNext} className="border-2 border-blue-500 px-4 py-2 rounded-lg hover:bg-gray-200 text-blue-700 font-medium">Next</button>
                    ): null
                }
            </div>
        </div>
    )
}
