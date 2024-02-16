export const ADD_CUR_USER = 'ADD_CUR_USER' 

export function addCurrentUser(add){

    return{
        type: ADD_CUR_USER,
        payload: add
    }
}
