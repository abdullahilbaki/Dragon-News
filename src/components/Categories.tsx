import { use } from "react";
import { NavLink } from "react-router";

type Category = {
  id: number;
  name: string;
};

const CategoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(CategoryPromise);
  const categoryStyle = "p-2 rounded-lg";
  return (
    <div>
      <h3 className="font-semibold">All Categories ({categories.length})</h3>

      <div className="grid grid-cols-1 gap-2 mt-4">
        {categories.map((category: Category) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${categoryStyle} bg-base-300 text-black font-medium`
                : `${categoryStyle} bg-base-100 hover:bg-base-300 
              text-gray-500 hover:text-black`
            }
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
