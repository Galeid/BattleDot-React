import { useRef } from "react"
import { ContentCard, Sprite } from "../../Components"

const Game = () => {
  const dot02Anim = {
    all: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    idle: [1, 2],
    walk: [1, 3],
    sleep: [9, 10],
    victory: [6, 5],
    lose: [7, 8],
    eat: [6, 4],
    angry: [11, 12],
    palette: [16]
  }

  const spritePlay = useRef()
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
            <Sprite
              filename={'dot02.png'}
              animations={dot02Anim}
              initialAnim={'idle'}
              height={720}
              width={720}
              columns={4}
              rows={4}
              fps={2}
              playRef={spritePlay}
            />
          </ContentCard>
        </div>
        <div className="grow w-0 mx-5">
          <ContentCard title="Select Sprite Animation">
            <button className="mb-4 px-6 py-2 text-sm text-white rounded shadow-xl bg-emerald-500"
              onClick={() => spritePlay.current('sleep')}
            >
              Play "Sleep" Animation
            </button>
            <button className="mb-4 px-6 py-2 text-sm text-white rounded shadow-xl bg-emerald-500"
              onClick={() => spritePlay.current('victory')}
            >
              Play "Victory" Animation
            </button>
            <button className="mb-4 px-6 py-2 text-sm text-white rounded shadow-xl bg-emerald-500"
              onClick={() => spritePlay.current('lose')}
            >
              Play "Lose" Animation
            </button>
            <button className="mb-4 px-6 py-2 text-sm text-white rounded shadow-xl bg-emerald-500"
              onClick={() => spritePlay.current('eat')}
            >
              Play "Eat" Animation
            </button>
            <button className="px-6 py-2 text-sm text-white rounded shadow-xl bg-emerald-500"
              onClick={() => spritePlay.current('all')}
            >
              Play "All Sprites" Animation
            </button>
          </ContentCard>
        </div>
      </div>
    </main>
  )
}

export default Game
