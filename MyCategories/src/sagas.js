// sagas.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_CATEGORIES, setCategories } from './actions/actions';

function transformCategory(category) {
  if (!category || typeof category !== 'object') {
    return null;
  }

  const transformedCategory = {
    title: category.name,
    value: category.categoryId,
  };

  if (Array.isArray(category.children) && category.children.length > 0) {
    transformedCategory.children = category.children.map(transformCategory);
  }

  return transformedCategory;
}

function transformCategories(categories) {
  if (!Array.isArray(categories) || categories.length === 0) {
    return [];
  }

  return categories.map(transformCategory);
}

function* fetchCategoriesAsync() {
  try {
    //const categories1 = {"categoryId":"root","name":"Root Category","parent":null,"children":[{"categoryId":"category1","name":"Category One","parent":"root","children":[{"categoryId":"category1-3","name":"Category One Three","parent":"category1","children":[]},{"categoryId":"category1-1","name":"Category One One","parent":"category1","children":[{"categoryId":"category1-1-1","name":"Category One One One","parent":"category1-1","children":[{"categoryId":"category1-1-1-1","name":"Category One One One One","parent":"category1-1-1","children":[]},{"categoryId":"category1-1-1-2","name":"Category One One One Two","parent":"category1-1-1","children":[{"categoryId":"category1-1-1-2-1","name":"Category 111211","parent":"category1-1-1-2","children":[]}]}]},{"categoryId":"category1-1-2","name":"Category One One Two","parent":"category1-1","children":[]}]},{"categoryId":"category1-2","name":"Category One Two","parent":"category1","children":[{"categoryId":"category1-2-1","name":"Category One Two One","parent":"category1-2","children":[]},{"categoryId":"category1-2-2","name":"Category One Two Two","parent":"category1-2","children":[]}]},{"categoryId":"category1-5","name":"Category One Five","parent":"category1","children":[{"categoryId":"category1-5-7","name":"Category One Five Seven","parent":"category1-5","children":[{"categoryId":"category1-5-7-1","name":"Category One Five Seven One","parent":"category1-5-7","children":[{"categoryId":"category1-5-7-1-1","name":"Category 15711","parent":"category1-5-7-1","children":[]},{"categoryId":"category1-5-7-1-2","name":"Category 15712","parent":"category1-5-7-1","children":[]}]}]}]},{"categoryId":"category1-4","name":"Category One Four","parent":"category1","children":[]}]},{"categoryId":"category3","name":"Category Three","parent":"root","children":[{"categoryId":"category3-1","name":"Category Three One","parent":"category3","children":[]}]},{"categoryId":"category4","name":"Category Four","parent":"root","children":[]},{"categoryId":"category5","name":"Category Five","parent":"root","children":[]},{"categoryId":"category2","name":"Category Two","parent":"root","children":[{"categoryId":"category2-1","name":"Category Two One","parent":"category2","children":[]},{"categoryId":"category2-2","name":"Category Two Two","parent":"category2","children":[{"categoryId":"category2-2-2","name":"Category Two Two Two","parent":"category2-2","children":[]}]}]}]}

    const response = yield call(fetch, 'http://localhost:8080/categoryTree'); // Replace with your API URL
    const categories1 = yield response.json();

    const categories = [
      categories1
    ];
  
    // Transform the categories
    const transformedCategories = transformCategories(categories);
    //yield put(setCategories(transformedCategories));
    yield put(setCategories(categories));
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}

function* watchFetchCategories() {
  yield takeEvery(FETCH_CATEGORIES, fetchCategoriesAsync);
}

export default watchFetchCategories;