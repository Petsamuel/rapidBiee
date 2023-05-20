import { Fragment } from 'react'
export const Header = () => {
    const menuList = ["Home", "About", "Contact"]
    return (
        <Fragment>
            <section className=" position flex w-full shadow-md">
                <nav className="flex justify-around my-8 w-full">
                    <div>
                        {/* logo */}
                        <div><a href="/" className="logoFont  text-4xl">RapidBiee</a></div>
                    </div>
                    <div>
                        {/* menu */}
                        <div className='flex '>
                            {menuList.map((index, key) => (
                                <a key={key} className="px-5 cursor-pointer hover:text-teal-200">{index}</a>
                            ))}
                        </div>
                    </div>
                    <div>
                        {/* hamburger */}
                    </div>
                </nav>
            </section>
        </Fragment>
    )
}