//This reducer is used to store the matches returned from the server

const matchesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MATCHES':
            return action.payload;
        default:
            return state;
    }
};
 
// matches will be on the redux state at:
// store.matches

export default matchesReducer;
  