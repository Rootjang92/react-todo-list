import { Map, List } from 'immutable';
import { handleActions, createAction } from 'redux-actions';

const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);

const initialState = List([
  Map({
    id: 0,
    text: '리액트 공부하기',
    done: true
  }),
  Map({
    id: 1,
    text: '컴포넌트 스타일링 해보기',
    done: false
  })
]);

export default handleActions({
  [INSERT]: (state, action) => {
    const { id, text, done } = action.payload;

    return state.push(Map({
      id,
      text,
      done
    }));
  },
  [TOGGLE]: (state, action) => {
    const { payload: index } = action;
    // = const index = action.payload;
    // 비구조화 할당.
    return state.updateIn([index, 'done'], done => !done);
    // updateIn이 아니면 setIn,getIn으로 가능.
    // return state.setIn([index, 'done], !state.getIn([0, index]));
  },
  [REMOVE]: (state,action) => {
    const { payload: index} = action;
    return state.delete(index);
  }
}, initialState)