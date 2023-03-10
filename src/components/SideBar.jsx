import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import { rgbToHex } from '@material-ui/core';


const SideBar = ({selectedCategory, setSelectedCategory}) => (
    <Stack direction="row" sx = {{ overflow:'auto', height: { sx:'auto', md:'95%'}, flexDirection: {md: 'column'}}}>
      {categories.map((category) => (
        <button className='category-btn' 
        onClick ={() => setSelectedCategory(category.name)}
        style ={{ background: category.name===selectedCategory && '#baeb34', color:'white'}} key={category.name}>
          <span  style={{ color: category.name === selectedCategory ? 'white' : '#d2f573', marginRight:'15px' }}>
            {category.icon}
          </span>
          <span style={{ opacity: category.name===selectedCategory ?'1' :'0.8'}}>
            {category.name}
          </span>
        </button>
      ))}

    </Stack>
  )


export default SideBar;