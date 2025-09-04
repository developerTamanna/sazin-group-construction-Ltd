'use client'
import HelmetAndSafetyCard from '../app/Product-Base-Services/Sky-Helmet&Safety-Accessories/components/HelmetAndSafetyCard'
import React, { useRef, useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts } from "./FetchFunction";
import { FiSearch } from "react-icons/fi";


export default function QueryFunction({value ,ky}) {
  const[mainData,setMainData]=useState([]);
  const [query,setQuery] = useState(value);
  const [search, setSearch] = useState("");
  const [filterPrice, setFilterPrice] = useState("all");
  const [sort, setSort] = useState("none");

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch
  } = useInfiniteQuery({
    queryKey: ["products",query,ky],
    queryFn: ({ pageParam = 1 }) => fetchProducts(pageParam,query,ky ),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 5 * 60 * 1000, // 5 minutes
    catchTimeout: 10 * 1000, // 10 seconds
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    refetch();
    console.log("Refetching data...", { query, ky });
    
  }, [query, refetch, ky]);
   
  useEffect(()=>{
      setQuery(value);
      setSort("none");
      setFilterPrice("all");
      setSearch("");
  },[value,query,ky])

  useEffect(()=>{
        const allData = data?.pages?.map(page => page?.data || []).flat();
        setMainData(allData);
  },[data])

  const loadMoreRef = useRef();

  useEffect(() => {
    if (!loadMoreRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );
    observer.observe(loadMoreRef.current);

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  
  // Filtering & Sorting Logic
  const filterAndSortData = () => {
    let filtered = data?.pages?.map(page => page?.data || []).flat() || [];
    if(filtered.length<=0) return ;
    if (search) {
      filtered = filtered.filter((item) =>
        item?.title?.toLowerCase().includes(search.toLowerCase())
      );
    }


    if (filterPrice === "low") {
      filtered = filtered.filter((item) => item?.price < 1000);
    } else if (filterPrice === "high") {
      filtered = filtered.filter((item) => item?.price >= 1000);
    }

    if (sort === "asc") {
      filtered = [...filtered].sort((a, b) => a.price - b.price) || [];
    } else if (sort === "desc") {
      filtered = [...filtered].sort((a, b) => b.price - a.price) || [];
    }

        console.log('fillllll',filtered);

    setMainData(filtered);
  };

  useEffect(() => {
     filterAndSortData();
  }, [search,filterPrice,sort,data]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "error") return <p>Error fetching products!</p>;

  return (
  <div className="container mx-auto py-22 p-6">
      {/* 🔍 Search + Filter + Sort Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div className="relative w-full md:w-1/3">
          <FiSearch
            className="absolute left-3 top-3 text-gray-500 dark:text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          />
        </div>

        {/* Filter & Sort */}
        <div className="flex flex-wrap gap-3">
          <select
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-400 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          >
            <option value="all">All Categories</option>
            <option value="Full-Face">Full-Face</option>
            <option value="Half-Face">Half-Face</option>
            <option value="Open-Face">Open-Face</option>
            <option value="Modular-Face">Modular-Face</option>
          </select>

          <select
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-400 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          >
            <option value="all">All Prices</option>
            <option value="low">Below 1000</option>
            <option value="high">1000 & Above</option>
          </select>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-400 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100"
          >
            <option value="none">Sort by</option>
            <option value="asc">Price: Low → High</option>
            <option value="desc">Price: High → Low</option>
          </select>
        </div>
      </div>
        <HelmetAndSafetyCard data={mainData} />
  

      {/* Sentinel element for IntersectionObserver */}
      <div ref={loadMoreRef} className=" w-full z-[999]  h-10 mt-5 text-center">
        {isFetchingNextPage && <p className='text-red-500'>Loading more...</p>}
        {!hasNextPage && <p className="text-gray-300 text-xl font-semi-bold">No more products</p>}
      </div>
    </div>
  );
}
