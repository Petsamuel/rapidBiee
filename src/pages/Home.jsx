/* eslint-disable no-unused-vars */
import { Fragment, useState } from 'react'
import { Sidebar } from '../components/Sidebar'
import { Prompt } from '../components/Prompt'

// import PropTypes from 'prop-types'
export const Home = () => {
  const [hidden, setHidden] = useState(false)
  return (
    <Fragment>
      <section className='h-full w-full relativ '>
        <div className='flex h-screen '>
          <div className='w-3/12 border-gray-500 border-r-[1px]'>
            {/* sidebar */}
            <Sidebar />
          </div>
          <div className='w-full mx-8 h-full'>

            {/* pprompt */}
            <Prompt />
          </div>

        </div>
      </section>
    </Fragment>
  )
}


