import { useState } from "react"

import { IoIosArrowDown, IoIosArrowUp, IoMdCheckmark } from 'react-icons/io';

interface SelectProps {
  title?: string;
}

const item = [
  {
    id: 1,
    item: "Pizzas"
  },
  {
    id: 2,
    item: "Bebidas"
  },
]

export function Selected({ title }: SelectProps) {
  const [isSelected, setIsSelected] = useState(false);
  const [itemSeleted, setItemSeleted] = useState<any>(`Selecionar ${title}`);

  function handleSelect(i: string) {
    setIsSelected(false);

    if (itemSeleted === i) {
      setItemSeleted(null);
    } else {
      setItemSeleted(i);
    }
  }

  return (
    <div className="w-[100%] ">
      <div className="relative rounded-lg bg-white mb-1 border-[1px] border-zinc-200 transition-all hover:border-primary hover:text-primary px-3 py-2 flex items-center justify-between">
        <label htmlFor="checkbox-select"></label>
        <input
          type="checkbox"
          id="checkbox-select"
          onChange={() => setIsSelected(!isSelected)}
        />

        <div className="w-[100%] text-zinc-900">
          {itemSeleted}
        </div>

        <div>
          {isSelected ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>


      <div className={`relative w-[100%] bg-red-400 p-20" 
      ${isSelected ? "flex" : "hidden"}
      `}>
        <div className={`absolute w-[100%] max-h-[200px] rounded-lg border-[1px] bg-white flex-col shadow-lg `}
        >
          {item.map(i => {
            return (
              <div key={i.id} className="relative flex items-center justify-between w-[100%] px-4 py-2 border-b-[0.2px] hover:text-primary hover:font-medium">
                <input
                  type="radio"
                  name="item"
                  id="radio-select"
                  value={i.item}
                  onChange={(e) => setItemSeleted(e.target.value)}
                  onClick={() => handleSelect(i.item)}
                />
                {i.item}

                <div className="text-primary">
                  {itemSeleted === i.item && <IoMdCheckmark />}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}