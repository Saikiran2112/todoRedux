import {createSlice} from '@reduxjs/toolkit'

const task=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        delet(state,action){
            return state.filter((item)=>{
                return item.id!==action.payload
            })
        }
    }
})
export const {add,delet}=task.actions
export default task.reducer