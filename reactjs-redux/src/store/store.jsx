import {configureStore} from '@reduxjs/toolkit'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'

const initialState = {
    count: 0
}

const counterReducer = (state=initialState , action) => {
    switch(action.type) {
        case INCREMENT:
            return {count: state.count + 1}
        case DECREMENT:
            return {count: state.count - 1}
        default:
            return state
    }
}

const store = configureStore({
    reducer: counterReducer
})


export default store;
export {INCREMENT , DECREMENT}