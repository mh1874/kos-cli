export default {
  namespace: 'system',
  initial: {
    collapsed: false,
    name: '123',
    list: [],
    params: {},
  },
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    toggleCollapsed(state) {
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    },
  },
  asyncs: {
  },
};
