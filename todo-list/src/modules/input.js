import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

// 문자열 앞에 리듀서 이름을 적어준다.
const SET_INPUT = 'input/SET_INPUT';


export const setInput = createAction(SET_INPUT);

// 초기 상태
const initialState = Map({
  value: ''
});

// 리듀서 정의
export default handleActions({
  [SET_INPUT]: (state, action) => {
    return state.set('value', action.payload)
  }
}, initialState);

