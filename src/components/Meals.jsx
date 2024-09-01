"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const Meals = () => {
  const [search, setSearch] = useState("a");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const leadData = async () => {
   try {
    const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      )
      const data = await res.json()
      setMeals(data?.meals)
      setError("")
   } catch (error) {
    setError("No data found...")
   }
  }

  useEffect(() => {
    leadData()
  }, [search, leadData]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mt-12">
      <input
        onChange={handleSearch}
        className="p-4 outline-none border border-black text-slate-900"
        type="text"
        placeholder="search meals...."
      />
      <button className="bg-red-400 p-4">Search</button>
      <div className="mt-12 grid grid-cols-3 gap-6">    
        {meals.length > 0 && !error && meals?.map((meal) => (
          <div key={meal?.idMeal} className="border-2 border-black p-4">
            <Image src={meal?.strMealThumb} alt={meal?.setMeals} width={500} height={500}/>
            <h1>{meal?.strMeal}</h1>
            <p>{meal?.strInstructions}</p>
          </div>
        ))}
        {
            error && <p className="text-red-500">{error}</p>
  
        }
      </div>
    </div>
  );
};
export default Meals;
