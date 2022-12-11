//初始状态
const initState = 0
/**
 * 为ReduxCount 组件服务的Reducer
 * @param {*} preState 之前的状态
 * @param {*} action 动作
 * @returns 新的状态
 */
const countReducer = (preState = initState, action) => {
    console.log(preState,action)
    const { type, data } = action;
    if (preState === undefined) {
        preState = 0;
    }
    switch (type) {
        case 'increment':
            return preState + data
        case 'decrement':
            return preState - data
        default: //初始化
            return preState;
    }
}
export default countReducer;