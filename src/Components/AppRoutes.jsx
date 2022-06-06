import { useRoutes } from "react-router-dom";
import HomeView from "../Views/Home";
import SpriteTestView from "../Views/SpriteTest";
import GameView from "../Views/Game";

const AppRoutes = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <HomeView />,
    },
    {
      path: 'test',
      element: <SpriteTestView />,
    },
    {
      path: 'play',
      element: <GameView />,
    },
  ])

  return element
}

export default AppRoutes;
