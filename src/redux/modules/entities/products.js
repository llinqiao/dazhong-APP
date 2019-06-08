import createReducer from '../../../utils/createReducer'

export const schema= {
  id:"id",//检索数据
  name:'products'
}//领域实体扁平化处理


const reducer = createReducer(schema.name)

export default reducer

//selectors

export const getProductDetail = (state,id) => {
  const product = state.entities.products[id]
  return product && product.detail && product.purchaseNotes?product:null
}

export const getProductById = (state, id) => {
  return state.entities.products[id]
}