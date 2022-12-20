import store from "../store"

export const increment = data => ({ type: 'increment', data })
export const decrement = data => ({ type: 'decrement', data })

export const incrementAsync = (data, time) => {
    return () => {
        setTimeout(
            () => {
                store.dispatch(increment(data))
            }, time)
    }
}