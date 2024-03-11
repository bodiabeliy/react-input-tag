
import { createWrapper } from 'next-redux-wrapper';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk';
import { create } from 'zustand';
import { CategoryTags, MathOperations } from './types';

const rootReducer = combineReducers({ })

 // using Redux Srore for internationalization
export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
    devTools: true,
  })
}
export const wrapper = createWrapper(store);

// Zustand Store
export const useCategoryTagStore = create<CategoryTags>((set) => ({
  categoryIndex: 0,
  mathOperation:"",
  categoryTags:[],
  addNewTag:(tagName:string) =>set(state => {
    return {
      categoryTags:[...state.categoryTags, tagName],
      
    }
  }),
  removeTag:(i:number) =>set(state => {
    return {
      categoryTags:state.categoryTags.filter((tag: any, index: number) => index !== i)
    }
  }),

  draggTag:(tag: any, currPos:number, newPos: number) =>set(state => {
    const newTags = state.categoryTags.slice();

      newTags.splice(currPos, 1);
      newTags.splice(newPos, 0, tag);

    return {
      categoryTags: [...newTags]
    }
  }),
  calculateCategoryIndex:(index:number, typeOperation:string) =>set(state => {
    switch (typeOperation) {
      case MathOperations.SUBTRACKTION:
        return {
          categoryIndex:state.categoryIndex-index
        }
      case MathOperations.MULTY:
        return {
          categoryIndex:state.categoryIndex*index
        }
      case MathOperations.DIVIDE:
        return {
          categoryIndex:state.categoryIndex/index
        }
    
     
    }
    return {
      categoryIndex:state.categoryIndex+index
    }
  })
}))
