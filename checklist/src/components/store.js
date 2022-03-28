import create from 'zustand'


const store = (set, get) => {
    return {
        username: 'mike'
    }
}

export const useStore = create(store)