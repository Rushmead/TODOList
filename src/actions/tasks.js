//Add task action
export const addTask = (task) => {
    return {
        type: 'addTask',
        task
    };
};
//Mark task as done action
export const markAs = (task) => {
    return {
        type: 'markAs',
        task
    };
};
//Delete task action
export const deleteTask = (task) => {
    return {
        type: 'remove',
        task
    };
};
//Clear all action
export const clear = () => {
    return {
        type: 'clear'
    };
};