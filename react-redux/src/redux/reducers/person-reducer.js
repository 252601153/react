
import { ADD_PERSON } from '../constant'
const initState = [{ id: '001', name: 'tom', age: '18' }];
//返回值会和preState浅比较，如果相同则不重新渲染页面
export default function personReducer(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }

}