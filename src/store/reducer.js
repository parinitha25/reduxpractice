const initialState={
    age:21
};
debugger

const reducer = (state=initialState,action) =>{
    debugger
  const newState={...state};
   switch(action.type){
       case'AGE_UP':
       debugger
         newState.age++;
         break;
       case'AGE_DOWN':
       debugger
         newState.age--;
         break;
   }
   debugger
      return newState;
  }
  debugger
export default reducer;