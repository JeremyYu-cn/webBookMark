import { createStore, StoreOptions } from "vuex";

interface IStateData {}

const storeOption: StoreOptions<IStateData> = {
  state: {},
};

const store = createStore(storeOption);

export default store;
