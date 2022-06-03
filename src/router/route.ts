import { Home } from "../pages/Home";
import { Error } from "../pages/Error";

export const route = [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: Error
  }
]