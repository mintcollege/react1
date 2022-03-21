import create from 'zustand'
import { persist } from "zustand/middleware"


let store = (set, get) => (
    {
        auth: false,
        setAuth: toggle => set(
            {
                auth: toggle
            }
        ),
        username: 'john',
        timezone: '+0800',
        cart: [],
        addToCart: thingToAdd => set(
            {
                cart: get().cart.push(thingToAdd)
            }
        )
    }
)
// eslint-disable-next-line
const useStore = create(persist(store, {name: 'perisitencename'}))


export default useStore