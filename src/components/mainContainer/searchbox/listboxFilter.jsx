import { useState } from "react";

const filters = [
  { name: "All" },
  { name: "Food" },
  { name: "Vehicles" },
  { name: "Health" },
  { name: "CPS" },
];

export default function ListboxFilter() {
  const [selected, setSelected] = useState();
  console.log(selected);

  return (
    <div className="mr-0 md:mr-7">
      <select
        id="location"
        name="location"
        className="shadow-sm py-2 sm:py-4 focus:outline-none p-5 block w-full pr-12 sm:text-sm border-gray-300 rounded-3xl"
        defaultValue="Canada"
        onChange={(e) => setSelected(e.target.value)}
      >
        {filters.map((value) => (
          <option key={value.name}>{value.name}</option>
        ))}
      </select>
    </div>
  );
}
