import ProductCardDemo from '../../../../components/ProductCard';
import React from 'react'

function ProductCard() {
    const products = [
    {
      id: "p-1",
      title: "AirFlex Runner Sneakers – Breathable Knit",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop",
      price: 79.99,
    },
    {
      id: "p-2",
      title: "Minimal Leather Backpack – 15\" Laptop",
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=1600&auto=format&fit=crop",
      price: 129,
    },
    {
      id: "p-3",
      title: "UltraSoft Tee – 240 GSM Heavyweight",
      image: "https://images.unsplash.com/photo-1520975922284-7b0072ae1e04?q=80&w=1600&auto=format&fit=crop",
      price: 19.5,
    },
  ];
  return (
    <ProductCardDemo products={products} Contents={{}} />
  )
}

export default ProductCard