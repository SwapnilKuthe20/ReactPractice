import React from 'react';
import { NavLink } from 'react-router-dom';

const Inventory = () => {

  const InventoryItems = [
    { id: 1, to: "/inventory/products", label: "Products" },
    { id: 2, to: "/inventory/categories", label: "Categories" }
  ]

  return (
    <div className='w-2xs h-screen bg-fuchsia-950 text-fuchsia-100'>
      <ul>
        {
          InventoryItems.map(({ id, to, label }) => (
            <li key={id}>
              <NavLink to={to}> {label} </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Inventory;
