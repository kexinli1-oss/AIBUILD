import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { TreeSelect, Button } from 'antd';

import useCategories from '../useCategories';
import { fetchCategories } from '../actions/actions';
import 'antd/dist/reset.css';

const Categories = () => {
  const categories = useCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();

  const onSelectCategory = (value) => {
    setSelectedCategory(value);
    alert(`Selected Category ID: ${value}`);
  };

  const fetchCategoriesWithSaga = () => {
    dispatch(fetchCategories());
  };

  const fetchCategoriesWithCustomHook = () => {
    // The useCategories hook already dispatches the action
  };

   return (
    <div>
      <h1>Category Selection</h1>
      <Button onClick={fetchCategoriesWithSaga}>Fetch Categories with Saga</Button>
      <Button onClick={fetchCategoriesWithCustomHook}>Fetch Categories with Custom Hook</Button>
      <TreeSelect
        showSearch
        style={{ width: '100%' }}
        value={selectedCategory}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        treeData={categories}
        treeNodeFilterProp="name"
        placeholder="Select a category"
        treeDefaultExpandAll
        onSelect={onSelectCategory}
      />
    </div>
  );
};

export default Categories;
