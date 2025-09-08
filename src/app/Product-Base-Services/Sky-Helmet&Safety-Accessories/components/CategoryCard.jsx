import React from 'react'
import CategoryCard from '../../../../components/CategoryCard';
const Category = () => {
const subCategories = [
    {
      title: "Full Face",
      image:
        "/fullface.jpg",

        path:'/Product-Base-Services/Sky-Helmet&Safety-Accessories/Full-Face',
        id:1
    },
    {
      title: "Modular Face",
      image:
        "/modulerface.jpg",
        path:'/Product-Base-Services/Sky-Helmet&Safety-Accessories/Modular-Face',
        id:2
    },
    {
      title: "Open Face",
      image:
        "/openface.jpg",
        path:'/Product-Base-Services/Sky-Helmet&Safety-Accessories/Open-Face',
        id:3
    },
    {
      title: "Half Face",
      image:
        "/halfface.jpg",
        path:'/Product-Base-Services/Sky-Helmet&Safety-Accessories/Half-Face',
        id:4
    },
      {
      title: "Half Face",
      image:
        "/halfface.jpg",
        path:'/Product-Base-Services/Sky-Helmet&Safety-Accessories/Half-Face',
        id:4
    },
   
    {
      title: "Half Face",
      image:
        "/halfface.jpg",
        path:'/Product-Base-Services/Sky-Helmet&Safety-Accessories/Half-Face',
        id:4
    },

  ];
 
  return (
    <div>
      <CategoryCard subCategories={subCategories}  />

    </div>
  )
}

export default Category
