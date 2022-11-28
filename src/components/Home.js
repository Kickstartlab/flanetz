import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import doge_2 from '../assets/doge_2.png';
import roadmap from '../assets/roadmap.png';


export default function Home() {

    return (
        <div className='font-poppins'>

            {/* top section */}

            <div className="bg-top">

                <div className="md:px-20 px-5">
                    <div className='container mx-auto'>
                        <Menu />

                        <div className="lg:flex block justify-between items-center">
                            <div className="text-white-100">
                                <h2 className='md:text-6xl text-3xl font-bold'>
                                    The Year 2023  here
                                </h2>

                                <p className='pt-3 py-8 leading-loose text-lg'><span className='text-yellow-50'>BSC Network </span>You Do Not Know
                                    What Is <span className='text-yellow-50'>Coming</span>!</p>

                                <div className="flex gap-x-6 font-poppins">
                                    <a href="/">
                                        <button className="border-2 border-yellow-50 font-poppins text-white-50 bg-yellow-50 py-2 px-8 rounded-sm font-semibold">
                                            About us
                                        </button>
                                    </a>
                                    <a href="/">
                                        <button className="border-2 text-yellow-50 font-poppins hover:text-white-100 border-yellow-50 hover:bg-yellow-50 py-2 px-8 rounded-sm font-semibold">
                                            Telegram
                                        </button>
                                    </a>
                                </div>
                            </div>

                            <div className="img md:mt-0 mt-5">
                                <img src={doge_2} alt="Logo" />
                            </div>
                        </div>
                    </div>

                </div>

            </div >

            {/* About us section */}

            <div className="bg-side text-white-100 ">
                <div className="md:px-20 px-5 py-12 container">

                    <h3 className="text-2xl font-bold">
                        About Us
                    </h3>
                    <h2 className='pt-3 py-8 uppercase text-5xl font-bold'><span className='text-yellow-50'>2023</span> is here
                    </h2>
                    <p className='pb-6'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
                    </p>
                    <p>
                        Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
                    </p>
                </div>
            </div>

            {/* Roadmap section */}

            <div className="bg-black-100 text-white-100">
                <div className="md:px-20 px-5 py-12 container">

                    <h2 className='pt-3 py-8 uppercase text-5xl font-bold text-center'>Road<span className='text-yellow-50'> map</span>
                    </h2>

                    <div className="pt-8">
                        <img src={roadmap} alt="Logo" />
                    </div>
                </div>
            </div>

            {/* Marketing plan section */}

            <div className="bg-side text-white-100 ">
                <div className="md:px-20 px-5 py-12 container">

                    <h2 className='pt-3 py-8 uppercase text-5xl font-bold text-center'>marketing<span className='text-yellow-50'> plan</span>
                    </h2>

                    <div className="grid grid-cols-3 grid-rows-3 gap-6 items-center pt-5 justify-items-center">
                        <div className="bg-purple py-5 px-3 rounded-xl">
                            <div>
                                <i class="fa fa-telegram fa-2x text-white" aria-hidden="true"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





            <Footer />
        </div>

    )
}
