export default {
  namespace: 'products',
  state: [{
    id: 0,
    name: 'chen000'
  },
  {
    id: 1,
    name: 'chen111'
  },
  {
    id: 2,
    name: 'chen222'
  }],
  reducers: {
    'delete'(state, {playload: id}) {
      return state.filter(item => item.id !== id)
    }
  }
}