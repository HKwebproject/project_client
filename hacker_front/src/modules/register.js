import axios from 'axios';

const REGISTER = 'register_user';

export function register(data) {
  const req = axios.post('http://localhost:4000/users/register', data)
    .then(res => res.data);

  return {  
    type: REGISTER,
    payload: req,
  }
}

export default function (state = {}, action) {
    switch(action.type) {
      case REGISTER:
        return {...state, register: action.payload}
        break
      default:
        return state;
    }
};
