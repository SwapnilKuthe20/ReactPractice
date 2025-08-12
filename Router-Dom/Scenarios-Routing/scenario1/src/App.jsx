import { Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './Componets/Pages/Dashboard'
import Home from './Componets/Pages/Home'
import MainLayout from './Componets/Layoutes/MainLayout'
import OrdersLayout from './Componets/Layoutes/OrdersLayout'
import PendingOrdersPage from './Componets/Pages/Orders/PendingOrdersPage'
import CompletedOrdersPage from './Componets/Pages/Orders/CompletedOrdersPage'
import NotFound from './Componets/Pages/NotFound'
import InventoryLayout from './Componets/Layoutes/InventoryLayout'
import AddProductPage from './Componets/Pages/Inventory/AddProductPage'
import ProductListPage from './Componets/Pages/Inventory/ProductListPage'
import CategoryListPage from './Componets/Pages/Inventory/CategoryListPage'
import AddCategoryPage from './Componets/Pages/Inventory/AddCategoryPage'

function App() {

  const mainRoutes = [
    { id: 1, index: true, element: <Home /> },
    { id: 2, path: '/dashboard', element: <Dashboard /> },
    // { id: 2, path: 'orders', element:},
    // { id: 3, path: 'inventory', element:},
  ]

  const OrderRoutes = [
    { id: 1, index: true, element: <PendingOrdersPage /> },
    { id: 2, path: 'completed', element: <CompletedOrdersPage /> },
  ]

  const InventoryProductsRoutes = [
    { id: 1, index: true, element: <ProductListPage /> },
    { id: 2, path: 'products/add', element: <AddProductPage /> }
  ]

  const InventoryCategoryRoutes = [
    { id: 1, path: 'categories/list', element: <CategoryListPage /> },
    { id: 2, path: 'categories/add', element: <AddCategoryPage /> },
  ]

  return (
    <div className='w-full h-screen bg-black text-white'>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          {
            mainRoutes.map(({ id, index, path, element }) => (
              <Route key={id} index={index} path={path} element={element} />
            ))
          }

          <Route path='/orders' element={<OrdersLayout />}>
            {
              OrderRoutes.map(({ id, index, path, element }) => (
                <Route key={id} index={index} path={path} element={element} />
              ))
            }
          </Route>

          <Route path='/inventory' element={<InventoryLayout />}>
            {
              InventoryProductsRoutes.map(({ id, index, path, element }) => (
                <Route key={id} index={index} path={path} element={element} />
              ))
            }

            {
              InventoryCategoryRoutes.map(({ id, path, element }) => (
                <Route key={id} path={path} element={element} />
              ))
            }
          </Route>

        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
