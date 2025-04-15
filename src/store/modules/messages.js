import {getMessage} from "@/data/getMessage.js";

export default {
    state:{
        message: null
    },
    mutations:{
        addMessage(state, code){
            state.message = getMessage(code)
        }
    },
    getters:{
        message: (state) => state.message
    }
}