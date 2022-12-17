import CountUI from '../../components/ReactReduxCount'
// import store from '../../redux/store'
//引入connect用于连接ui组件与redux
import {connect } from 'react-redux'

//创建Count容器组件
const CountConainer = connect()(CountUI)

export default CountConainer;