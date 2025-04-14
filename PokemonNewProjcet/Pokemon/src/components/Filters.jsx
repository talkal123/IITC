import React from 'react'
import { LuListFilter } from "react-icons/lu";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

const Filters = ({ filterPokemons }) => {
   
    const handleChange = (e) => {
        const value = e.target.value;
        filterPokemons(value); // מעביר את הבחירה לפונקציה ב־HomePage
      };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
      <div className='p-3 bg-blue-200 cursor-pointer rounded-full'>
        <LuListFilter className='w-5 h-5  text-white'/>
      </div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Filters</AlertDialogTitle>
          <AlertDialogDescription>
            
            <legend className="font-semibold mb-2">Select Types:</legend>

            <label className="flex items-center gap-2">
            <input onChange={handleChange} type="checkbox" name="colors" value="fire" />
            fire
            </label>

            <label className="flex items-center gap-2">
            <input onChange={handleChange} type="checkbox" name="colors" value="grass" />
            grass
            </label>

            <label className="flex items-center gap-2">
            <input onChange={handleChange} type="checkbox" name="colors" value="psychic" />
            psychic
            </label>

            <label className="flex items-center gap-2">
            <input onChange={handleChange} type="checkbox" name="colors" value="rock" />
            rock
            </label>
            <label className="flex items-center gap-2">
            <input onChange={handleChange} type="checkbox" name="colors" value="psychic" />
            psychic
            </label>
        </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    
  )
}

export default Filters
