import { GET, ADD, UPDATE, DELETE } from '../actions/index';


export default (count = 0, action) => {
    switch (action.type) {
        case GET:
            // Fill in the body of this case
        case ADD:
            // Fill in the body of this case
        case UPDATE:
        // Fill in the body of this case
        case DELETE:
        // Fill in the body of this case
        default:
            return true;
    }
};