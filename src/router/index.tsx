import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { route } from './route'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {route.map((item) => (
          <Route path={item.path} element={<item.component />}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  )
}
