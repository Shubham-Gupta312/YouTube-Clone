import React from 'react';
import { Stack } from '@mui/material';
import {categories} from '../utils/constants';

const selectedCategory = 'New';

const SideBar = () => {
  return (
    <Stack direction="row" overflow='auto' >
      
      {categories.map((category) => (
        <button className='category-btn' style={{
            background: category.name === selectedCategory && 'yellow', color: '#03fc98' 
        }}
        key= {category.name}
        >
            <span style={{color: category.name === selectedCategory ? '#fff' : '#03fc98', marginRight: '5px'}}>{category.icon}</span>
            <span style={{color: category.name === selectedCategory ?'#fff' : '#03fc98'}}>{category.name}</span>
        </button>
      ))}
      

    </Stack>
  )
} 

export default SideBar
