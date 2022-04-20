import { SunIcon, HomeIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <nav id="header" className="w-full bg-zinc-800 fixed z-10 top-0 shadow-white">
      <div className="w-full flex container xl:max-w-screen-xl items-center mt-0 mx-auto pt-2 pb-2">
        <div className="w-1/3 flex justify-center text-gray-100 text-3xl font-extrabold" >
          <SunIcon width={'2rem'}/>
          <span className='my-auto pl-2'>Battle Dots</span>
        </div>

        <div className="w-2/3">
          <ul className="flex text-xl font-extrabold text-gray-100">
            <li className="grow w-0 mr-6 my-2 md:my-0">
              <Link to="/" className={'my-2 py-2 flex items-center justify-center hover:bg-zinc-700 focus:border-zinc-700 rounded'}>
                <HomeIcon width={'1.5rem'}/>
                <span className='pl-2'>Home</span>
              </Link>
            </li>
            <li className="grow w-0 mr-6 my-2 md:my-0">
              <Link to="play" className={'my-2 py-2 flex items-center justify-center hover:bg-zinc-700 focus:border-zinc-700 rounded'}>
                <HomeIcon width={'1.5rem'}/>
                <span className='pl-2'>Game</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
