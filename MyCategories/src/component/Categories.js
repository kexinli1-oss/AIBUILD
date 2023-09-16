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

  const fetchCategoriesWithCustomHook = async () => {
    try {
      //const response = await fetch('http://localhost:8080/categoryTree'); // Replace with your API endpoint
      //const data1 = await response.json();
      //const data = [data1];
      const data = [{name:'Node1',categoryId:'0-0',children:[{name:'Child Node1',categoryId: '0-0-1',},{name:'Child Node2',categoryId:'0-0-2',},],},{name:'Node2',categoryId:'0-1',},];
      dispatch({ type: 'SET_CATEGORIES', payload: data });
    } catch (error) {
      console.error('Error fetching categories:', error);
      alert('lllll');
    }
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
        fieldNames={{label: "name", title:"name", value:"categoryId"}}
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
