import createReducer from '../../../utils/createReducer'

export const schema= {
  id:"id",//检索数据
  name:'shops'
}//领域实体扁平化处理


const reducer = createReducer(schema.name)

export default reducer

//selectors

export const getShopById = (state,id) => {
  const shop = state.entities.shops[id]
  return shop;
}