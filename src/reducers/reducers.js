export const initialState = [

]



export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_FEATURE":
            console.log('add feature works');
            console.log(action.payload.id)
            console.log(action.payload.name)
            const totalPrice = action.payload.price
            return[
                ...state,
                totalPrice
            ]
        default:
            return state;
    }
}