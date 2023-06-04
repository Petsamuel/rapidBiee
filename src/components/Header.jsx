import { Fragment } from 'react'
export const Header = () => {
    const menuList = ["Home", "About", "Contact"]
    return (
        <Fragment>
            <section className="relative w-full">
                <div className=' flex w-full shadow-sm'>
                    <nav className="flex justify-around my-6 w-full items-center">
                        <div>
                            {/* logo */}
                            <div><a href="/" className="logoFont text-4xl">RapidBiee</a></div>
                        </div>
                        <ul className='relative'>
                            {/* menu */}
                            <li className='flex '>
                                {menuList.map((index, key) => (
                                    <a key={key} className="px-5 cursor-pointer hover:text-teal-200">{index}</a>
                                ))}
                            </li>
                        </ul>
                        <div>
                            RxHamburgerMenu
                        </div>
                    </nav>
                </div>

            </section>
        </Fragment>
    )
}