export default(state =[], payload) => {
    switch(payload.type){
        //Add a task to the state
        case 'addTask':
            return [...state, payload.task]
        //Clear the state
        case 'clear':
            return [];
        //Mark certain task as done
        case 'markAs':
            state.map((content, i) => content.id === payload.task.id ? {...content, done: payload.task.done} : content);
            return [...state]
        //Remove a task from the state
        case 'remove':
            return state.filter(element => element !== payload.task);
        //Just return the state like normal
        default:
            return state;
    }
}