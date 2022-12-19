import store from "../store"

export const createIncrementAction = data => ({ type: 'increment', data })
export const createDecrementAction = data => ({ type: 'decrement', data })

export const createIncrementAsynAction = (data, time) => {
    return () => {
        setTimeout(
            () => {
                store.dispatch(createIncrementAction(data))
            }, time)
    }
}