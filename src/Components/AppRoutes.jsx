import { useRoutes } from "react-router-dom";
import Home from "../Views/Home";
import Game from "../Views/Game";

const AppRoutes = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'play',
      element: <Game />,
    }
  ])

  return element
}

export default AppRoutes;
