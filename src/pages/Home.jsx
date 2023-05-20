import { Fragment, useState } from 'react'
import { Card } from '../components/Card'
import { Prompt } from '../components/Prompt'

// import PropTypes from 'prop-types'

export const Home = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <Fragment>
      <section className="md:lg:h-full h-full my-6 flex justify-center">
        <div className='mx-8  relative w-full '>
          <div className='flex flex-col justify-center items-center '>
            <h4 className='text-center '>
              Explore whats possible with some <span>RapidBiee</span> applications
            </h4>
            <div onClick={() => { setHidden(!hidden) }} className="cursor-pointer hover:text-teal-400">
              ⮁ <span className='text-xs'>{!hidden ? `Hide` : `Show`}</span>

            </div>
          </div>
          <div className={!hidden ? 'grid grid-cols-2 items-center gap-3 overflow-y-clip' : "grid grid-cols-1"}>
            <div className={!hidden ? 'grid grid-cols-2 gap-5 mx-5 shadow-xl' : 'hidden'}>
              <Card />
            </div>
            <div ><Prompt /></div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

// Home .propTypes = {}

