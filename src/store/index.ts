import * as goodSelector from './goods/goodSelector';
export { default as goodReducer } from './goods/goodSlice';
export { goodActions } from './goods/goodSlice';

import * as categorySelector from './categories/categorySelector';
export { default as categoryReducer } from './categories/categorySlice';
export { categoryActions } from './categories/categorySlice';

export { goodSelector, categorySelector };
