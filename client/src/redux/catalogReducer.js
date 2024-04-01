import { createSlice } from "@reduxjs/toolkit";

const categories = [{
  id: 'couch',
  title: 'Диван'
},
{
  id: 'armchair',
  title: 'Крісло'
}]

const list = [
  {
    id: 'ugaskfgsh',
    title: 'Найс диван',
    price: 1200,
    categoryId: 'couch',
    description: ''
  },
  {
    id: 'fyhdsgj',
    title: 'Дуже великий диван',
    price: 5000,
    categoryId: 'couch',
    description: ''
  },
  {
    id: 'dfkskf',
    title: 'Елегантний диван',
    price: 3800,
    categoryId: 'couch',
    description: ''
  },
  {
    id: 'djgsj',
    title: 'Найс крісло',
    price: 800,
    categoryId: 'armchair',
    description: ''
  },
  {
    id: 'aidhvw',
    title: 'Дуже велике крісло',
    price: 2000,
    categoryId: 'armchair',
    description: ''
  },
]

const initialSelectedCategoryId = categories[0].id

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    selectedCategoryId: initialSelectedCategoryId,
    categories,
    list,
    filteredList: list.filter(item => item.categoryId === initialSelectedCategoryId)
  },
  reducers: {
    changeCategory: (state, action) => {
      state.selectedCategoryId = action.payload
      state.filteredList = state.list.filter(item => item.categoryId === state.selectedCategoryId)
    }
  }
})

export const { changeCategory } = catalogSlice.actions
export default catalogSlice.reducer