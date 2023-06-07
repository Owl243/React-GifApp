import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState(['One Piece'])

    const onAddCategoriy = ( newCategory ) => {

        if(categories.includes(newCategory)){ return; }
        
        setCategories( [newCategory, ...categories] )
        //console.log(categories)
        //setCategories( cat => [ ...cat, 'Ranking Of Kings'] )
    }

  return (
    <>
      <h1>Gif Expert App</h1>

    <AddCategory 
    onNewCategory = { onAddCategoriy }
    />
        {
            categories.map((category) => (
            <GifGrid 
                key={category}
                category={category}/>
            ))
        }
        {/* Items */}
    </>
  )
}