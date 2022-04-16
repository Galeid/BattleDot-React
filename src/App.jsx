import { AppRoutes } from "./Components";
import { Header } from "./Layouts";

const App = () => {
  return (
    <div className="h-screen bg-zinc-600">
      <Header/>
      <div className="container xl:max-w-screen-xl w-full mx-auto pt-20">
        <AppRoutes />
      </div>
    </div>
  )
}

export default App;
