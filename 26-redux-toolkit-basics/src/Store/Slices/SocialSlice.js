import { createSlice } from "@reduxjs/toolkit";
const SocialSlice= createSlice({
    name:'Social',
    initialState:{
        books:["Social Bokk 1","Social Book 2" ]
    },
    reducers:{
        addbook:(state,action)=>{
            console.log('line 9:',action);
            
            console.log("addbook function:",action.payload);
            state.books.push(action.payload)
        },
        emptyBooks:(state,action)=>{
            state.books=[]
        }
    }

})

export const{addbook, emptyBooks }=SocialSlice.actions
export default SocialSlice.reducer;