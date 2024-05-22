import { useSelector,useDispatch } from "react-redux";
import { delet } from "./store/taskReducer";
const Products=()=>{
    const dispatch=useDispatch()
    const items=useSelector((state)=>state.task)
    return (
        <div>
        {items.map((item)=>{
            return (
                <div>
                <h1>{item.name}</h1>
                <button onClick={()=>{
                    dispatch(delet(item.id))
                }}>Delete</button>
                </div>
            )
        })}
        </div>
    )
}
export default Products