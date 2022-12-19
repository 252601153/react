import CountUI from "../../components/ReactReduxCount";
// import store from '../../redux/store'
//引入connect用于连接ui组件与redux
import { connect } from "react-redux";
import { createDecrementAction, createIncrementAction, createIncrementAsynAction } from "../../redux/actions/count";

//a函数的返回的对象的key就是传递给ui组件的props的key,value作为props的value作为状态传递给了ui组件
const mapStateToProps = (state) => ({ count: state });

//b函数返回的额对象的value作为操作状态的方法
const mapDispatchToProps = (dispatch) => {
  return {
    increment:  (data) =>  dispatch(createIncrementAction(data)),
    decrement: data => dispatch(createDecrementAction(data)),
    incrementAsync: (data,timeount) => dispatch(createIncrementAsynAction(data,timeount))
  };
};

//创建Count容器组件
const CountConainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

//精简写法
export default connect(
    state => ({count:state}),
    {
        increment:createIncrementAction,
        decrement:createDecrementAction,
        incrementAsync:createIncrementAsynAction
    }
)(CountUI)

// export default CountConainer;
