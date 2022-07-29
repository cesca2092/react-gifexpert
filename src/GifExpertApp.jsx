import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {
    if(categories.find(el => el === newCategory)) return;
    setCategories( cat => [newCategory, ...cat] );
  }


  return (
    <>

        <div>GifExpertApp</div>

        <AddCategory 
          onNewCategory={onAddCategory}
        />

        { categories.map( category => (
          <GifGrid 
            key={category} 
            category={category}
          />)) 
        }

    </>  
  )
}
