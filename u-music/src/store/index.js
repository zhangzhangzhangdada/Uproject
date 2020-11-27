//一、调用redux中创建仓库的方法
import {createStore} from 'redux'
console.log(createStore,'createStore')

//二、初始化一个state

const initState =  {
    msg:'小荷才露尖尖角',
    num:100
}

//封装行动
//封装一个修改数量的行动
// export function changNumAction(){
//     return {
//         type:'CHANGE_NUM'
//     }
// }

export const changNumAction = (payload)=>{
    console.log('当前行动被触发')
    return{
        type:"CHANGE_NEWNUM",
        payload
    }
}


//三、创建一个纯函数，返回我的state。这个函数有两个参数，第一个参数是你的state,第二个参数是触发的行动
function reducer(state=initState,action){
    console.log(action,'行动')
    //会有大量的行动，我们可以 switch case去触发不同的行动
    switch (action.type) {
        case "CHANGE_MSG":
            console.log(state,'state')
            return {
                ...state,
                msg:'哈哈哈'
            }
        case "CHANGE_NEWNUM":
            return {
                ...state,
                num: state.num + action.payload
            }
        default:
            return state;
    }
}

//第四、把纯函数注入到 createStore中
const store= createStore(reducer)

//第六、模拟getter
export const getStateMsg = ()=>store.getState().msg
export const getStateNum = ()=>store.getState().num

//第五步 导出这个仓库
export default store