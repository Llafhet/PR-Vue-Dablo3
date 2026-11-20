import { defineStore } from "pinia";

export const useError = defineStore('error',{
    state: () => ({
        error: null
    }),

    actions: {
        setError(payload){
            this.error = payload
        }
    }
})