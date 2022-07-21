import { CounterAction } from './actions/counterActions';
import { CounterState } from './interfaces/counterInterfaces';
import { INITIAL_STATE } from './state/counterState';

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {
  switch (action?.type) {
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        previous: state.counter,
        changes: state.changes + 1,
      };

    case 'reset':
      return INITIAL_STATE;

    default:
      return state;
  }
};
