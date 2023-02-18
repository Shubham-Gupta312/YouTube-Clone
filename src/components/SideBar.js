import React from 'react';
import { Stack } from '@mui/material';
import {categories} from '../utils/constants';


const SideBar = ({selectedCategory, setSelectedCategory}) => {
  return (
    <Stack direction="row" overflow='auto' >
      
      {categories.map((category) => (
        <button className='category-btn' style={{
            background: category.name === selectedCategory && '#d6d6d1', color: '#03fc98' 
        }}
        key= {category.name}
        onClick={()=> setSelectedCategory(category.name)}
        >
            <span style={{color: category.name === selectedCategory ? '#fff' : '#03fc98', marginRight: '5px'}}>{category.icon}</span>
            <span style={{color: category.name === selectedCategory ?'#fff' : '#03fc98'}}>{category.name}</span>
        </button>
      ))}
      

    </Stack>
  )
} 

export default SideBar
