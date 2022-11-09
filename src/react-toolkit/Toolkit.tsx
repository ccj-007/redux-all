import React from 'react'
import type { RootState } from './index'
import { useAppSelector, useAppDispatch } from "./index";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './count'
import { useGetPokemonByNameQuery } from "./request";

export default function Toolkit() {
  // const count = useSelector((state: RootState) => state.counter.value)
  // const dispatch = useDispatch()
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')

  console.log(data);

  return (
    <div>
      <div>
        <div className="App">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              <h3>{data.species.name}</h3>
              <img src={data.sprites.front_shiny} alt={data.species.name} />
            </>
          ) : null}
        </div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}