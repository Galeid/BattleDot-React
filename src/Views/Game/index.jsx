import { ContentCard, Dot } from "../../Components"

const Game = () => {
  const dot02 = require('./../../Assets/dot02.png')

  return (
    <main className="container mx-auto pt-5">
      <div className="flex">
        <div className="grow w-0 mx-5">
          <ContentCard title="Sheet">
            <img src={dot02} alt='dot'/>
          </ContentCard>
        </div>
        <div className="grow w-0 mx-5">
          <ContentCard title="Prueba Sprite">
            <Dot/>
          </ContentCard>
        </div>
        <div className="grow w-0 mx-5">
          <ContentCard/>
        </div>
      </div>
    </main>
  )
}

export default Game
