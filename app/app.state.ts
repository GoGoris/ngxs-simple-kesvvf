import { State, Action } from '@ngxs/store';
import { patch, updateItem } from '@ngxs/store/operators';

export class Add {
  static readonly type = 'Add';
}

export class DemoStateModel {
  list: string[];
  count: number;
}

@State<DemoStateModel>({
  name: 'demo',
  defaults: { 
    list: [],  
    count: 0 
  }
})
export class DemoState {
  @Action(Add)
  add({ getState, setState }) {
    const state = getState();
    setState(patch({count: state.count + 1}));
  }
}
