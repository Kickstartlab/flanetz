import React from 'react'
import Footer from './Footer'
import Menu from './Menu'
import logo from '../assets/logo.png';
import diamond from '../assets/diamond.png';
import coin from '../assets/coin.png';
import utility from '../assets/utility.png';
import util from '../assets/util.png';
import rd_top from '../assets/rd-top.png';
import monkey from '../assets/monkey.png';
import cart from '../assets/cart.png';
import hand from '../assets/hand.gif';
import cloud from '../assets/cloud.png';
import one from '../assets/one.png';
import two from '../assets/two.png';
import three from '../assets/three.png';
import four from '../assets/four.png';




export default function Home() {

    return (
        <div className='font-poppins'>

            {/* top section */}

            <div className="md:px-20 px-5 bg-top">
                <div className='container mx-auto'>
                    <Menu />

                    <div className="lg:mt-0 mt-8">

                        <div className="flex mx-auto md:my-0 my-20 justify-center">
                            <img src={logo} alt="" />
                        </div>

                        <p className="font-minecraft md:text-3xl text-xl font-semibold text-white-100 text-center">
                            Lorem ipsum dolor sit amet,<br></br>
                            consectetur adipiscing elit
                        </p>

                        <div className="py-8 flex justify-center">
                            <button>

                            </button>
                        </div>
                    </div>


                </div>

            </div>

            {/* About us section */}

            <div className="bg-mon text-white-100 h-150">
                <div className="md:px-20 px-5 py-12 container">

                    <p className="font-minecraft pt-5 md:text-3xl text-xl font-semibold text-white-100 tracking-wide">
                        Lorem ipsum dolor sit amet,<br></br>
                        consectetur adipiscing elit
                    </p>

                    <div className="py-8 flex gap-16 font-minecraft">
                        <button className='bg-blue-100 rounded-xl px-6 py-2 text-lg font-semibold tracking-wide'>
                            Lorem
                        </button>
                        <button className='bg-blue-100 rounded-xl px-6 py-2 text-lg font-semibold tracking-wide'>
                            Lorem
                        </button>
                    </div>

                </div>
            </div>

            {/* tokenomics section */}

            <div className="bg-liberty text-white-100 h-150">
                <div className="md:px-20 px-5 py-12 container">

                    <div className="lg:w-1/2 w-full py-8">
                        <p className="font-minecraft pt-5 md:text-3xl text-xl font-semibold text-white-100 tracking-wide">
                            Lorem ipsum dolor sit amet,<br></br>
                            consectetur adipiscing elit
                        </p>
                        <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>

                        <img src={diamond} alt="diamond" />

                        <button className='bg-red-50 mt-5 uppercase rounded-xl px-6 py-2 text-lg font-semibold tracking-wide'>
                            Lorem
                        </button>
                    </div>

                </div>
            </div>

            {/* utilities section */}

            <div className="bg-utility text-white-100">
                <div id='pot' className=' -mt-28' >
                    <img src={cloud} alt="" />
                </div>

                <div className="md:px-20 px-5 py-16 container">

                    <img src={utility} alt="" className='mb-8 lg:w-1/2 w-full flex mx-auto' />

                    <div class="lg:grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-24">

                        <div class="flex flex-col gap-32">

                            <div>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Lorem
                                </h4>
                                <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <img src={util} alt="util" />
                            </div>

                            <div>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Lorem
                                </h4>
                                <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <img src={util} alt="util" />
                            </div>

                        </div>
                        <div class="flex flex-col py-16 lg:py-0">

                            <div>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Lorem
                                </h4>
                                <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <img src={util} alt="util" />
                            </div>

                        </div>

                        <div class="flex flex-col gap-16">

                            <div>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Lorem
                                </h4>
                                <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <img src={util} alt="util" />
                            </div>

                            <div>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Lorem
                                </h4>
                                <p className='py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <img src={util} alt="util" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* roadmap section */}

            <div className="bg-map text-white-100 ">
                <div className="md:px-20 px-5 py-12 container">

                    <div className="lg:flex block items-center justify-between">

                        <div>
                            <img src={rd_top} alt="roadmap" />
                            <h1 className='font-minecraft uppercase pt-5 md:text-5xl text-xl font-semibold text-white-100 tracking-wide'>roadmap</h1>
                        </div>

                        <div>
                            <img src={monkey} alt="roadmap" className='ml-10' />
                            <img src={util} alt="roadmap" />
                        </div>

                    </div>
                </div>
            </div>

            {/* how to buy section */}

            <div className="bg-blue-300 text-white-100 ">
                <div className="md:px-20 px-5 py-16 container">

                    <div className="flex gap-4 justify-center items-center">
                        <h1 className='font-minecraft uppercase pt-5 md:text-5xl text-xl font-semibold text-white-100 tracking-wide'>HOW TO BUY</h1>
                        <img src={cart} alt="cart" className='w-20' />
                    </div>

                    <div className="lg:flex block justify-between items-center gap-14 my-16">

                        <div className='flex flex-col gap-14'>
                            <div className="flex gap-4 justify-center items-center">
                                <img src={one} alt="cart" className='w-20' />
                                <p className='font-minecraft text-xl font-semibold text-white-100 tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                            <div className="flex gap-4 justify-center items-center">
                                <img src={two} alt="cart" className='w-20' />
                                <p className='font-minecraft text-xl font-semibold text-white-100 tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-14'>
                            <div className="flex gap-4 justify-center items-center">
                                <img src={three} alt="cart" className='w-20' />
                                <p className='font-minecraft text-xl font-semibold text-white-100 tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>

                            <div className="flex gap-4 justify-center items-center">
                                <img src={four} alt="cart" className='w-20' />
                                <p className='font-minecraft text-xl font-semibold text-white-100 tracking-wide'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>

                    </div>

                    <button className='bg-red-50 mt-5 uppercase rounded-2xl px-6 py-2 text-2xl font-semibold tracking-wider font-minecraft flex mx-auto'>
                        buy
                    </button>

                    <img src={hand} alt="" className='w-16 flex mx-auto' />

                    <div className="lg:flex block gap-4 justify-between items-center mt-8">
                        <div>
                            <h4 className='font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100 tracking-wide'>ArE TOGETHER STRONG</h4>

                            <p className='font-minecraft text-lg text-white-100 tracking-wide my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>

                        <div>
                            <button className='bg-blue-100 rounded-xl px-6 py-2 text-xl font-minecraft font-semibold tracking-wide uppercase'>
                                community
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}