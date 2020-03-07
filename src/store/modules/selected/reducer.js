import produce from 'immer';

const INITIAL_STATE = [false, false, false, false];

export default function selected(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@selected/orders': {
        draft.fill(false);
        draft[0] = true;
        break;
      }
      case '@selected/deliverymen': {
        draft.fill(false);
        draft[1] = true;
        break;
      }
      case '@selected/recipients': {
        draft.fill(false);
        draft[2] = true;
        break;
      }
      case '@selected/problems': {
        draft.fill(false);
        draft[3] = true;
        break;
      }
      default:
    }
  });
}
