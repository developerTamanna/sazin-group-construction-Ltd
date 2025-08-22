import React from 'react'
import CategoryCard from '../../../../components/CategoryCard';
const Category = () => {
const subCategories = [
    {
      title: "Full Face",
      image:
        "/fullface.jpg",

    },
    {
      title: "Modular Face",
      image:
        "/modulerface.jpg",
    },
    {
      title: "Open Face",
      image:
        "/openface.jpg",
    },
    {
      title: "Half Face",
      image:
        "/halfface.jpg",
    },
  ];
 const contents={
    title: "Motorcycle Helmet",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
  }  
  return (
    <div>
      <CategoryCard subCategories={subCategories} context={contents} />

    </div>
  )
}

export default Category
