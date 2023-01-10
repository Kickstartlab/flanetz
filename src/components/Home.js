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
import statue from '../assets/statue.png';
import heart from '../assets/heart.png';




export default function Home() {

    return (
        <div className='font-poppins'>

            {/* top section */}

            <div className="md:px-20 px-5 bg-top">
                <div className='container mx-auto h-screen'>
                    <Menu />

                    <div className="lg:mt-0 mt-8">

                        <div className="flex mx-auto md:py-20 py-5 justify-center">
                            <img src={logo} alt="" className='logo-2' />
                        </div>

                    </div>


                </div>

            </div>

            {/* About us section */}

            <div className="bg-mon text-white-100 lg:h-150 h-screen">
                <div className="md:px-20 px-5 py-12 container mx-auto">

                    <p className="font-minecraft pt-5 md:text-3xl text-xl font-semibold lg:w-1/2 w-full text-white-100 tracking-wide">
                        Have to believe that crypto will return to its prime. FLANETZ, a bsc utility token created and followed by an amazing community
                    </p>

                    <div className="py-8 flex gap-16 font-minecraft">

                        <a href="https://poocoin.app/tokens/0x27044cfe4d9e4d799c5ae3778d2215110465df00">
                            <button className='bg-blue-100 rounded-xl px-6 py-2 text-lg font-semibold tracking-wide'>
                                Chart
                            </button>
                        </a>

                        <a href="https://t.me/flanetz_chat">
                            <button className='bg-blue-100 rounded-xl px-6 py-2 text-lg font-semibold tracking-wide'>
                                Telegram
                            </button>
                        </a>
                    </div>

                </div>
            </div>

            {/* tokenomics section */}

            <div className="bg-liberty text-white-100">
                <div className="md:pl-20 px-5">

                    <div className="flex justify-between">

                        <div className="lg:w-5/12 w-full py-12">
                            <p className="font-minecraft pt-5 md:text-4xl text-xl font-semibold text-white-100 tracking-wide">
                                Lorem ipsum dolor sit amet,
                            </p>
                            <p className='py-5 font-kanit'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>

                            <img src={diamond} alt="diamond" />

                            <button className='bg-red-50 mt-5 uppercase rounded-xl px-6 py-2 text-lg font-semibold tracking-wide'>
                                Lorem
                            </button>
                        </div>

                        <div className="lg:w-2/12 w-full lg:block hidden">


                        </div>

                        <div className="lg:w-6/12 w-full">

                            <img src={cloud} alt="cloud" className=' absolute' />
                            <img src={heart} alt="heart" className='absolute mt-20 -ml-24 heart' />
                            <img src={statue} alt="liberty" className='' />

                        </div>
                    </div>

                </div>
            </div>

            {/* utilities section */}

            <div className="bg-utility bg-blue-300 text-white-100">
                <div id='pot' className=' -mt-28' >
                    <img src={cloud} alt="" className='lg:w-1/3 w-full' />
                </div>

                <div className="md:px-20 px-5 py-16 container mx-auto">

                    <img src={utility} alt="" className='mb-8 lg:w-1/2 w-full flex mx-auto' />

                    <div class="lg:grid grid-cols-1 lg:grid-cols-3 items-center justify-between gap-24">

                        <div class="flex flex-col gap-32">

                            <a href='https://www.flanetzstaking.com/'>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Staking
                                </h4>
                                <p className='py-5'>140% APY </p>
                                <img src={util} alt="util" />
                            </a>

                            <div>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100 pb-5">
                                    Coming soon
                                </h4>

                                <img src={util} alt="util" />
                            </div>

                        </div>
                        <div class="flex flex-col py-16 lg:py-0">

                            <a href='https://t.me/GoldguardBot'>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    GoldguardBot
                                </h4>
                                <p className='py-5'>GoldguardBot is a verification captcha bots, we design it simple so easy to use</p>
                                <img src={util} alt="util" />
                            </a>

                        </div>

                        <div class="flex flex-col gap-16">

                            <div>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100 pb-5">
                                    Coming soon
                                </h4>

                                <img src={util} alt="util" />
                            </div>

                            <div>
                                <img src={coin} alt="coin" />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100 pb-5">
                                    Coming soon
                                </h4>

                                <img src={util} alt="util" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* roadmap section */}

            <div id="roadmap" className="bg-map bg-blue-300 text-white-100 ">
                <div className="md:px-20 px-5 py-12 container mx-auto">

                    <div className="lg:flex block items-center justify-between">

                        <div>
                            <img src={rd_top} alt="roadmap" />
                            <h1 className='font-minecraft uppercase py-5 md:text-5xl text-3xl font-semibold text-white-100 tracking-wide'>roadmap</h1>
                        </div>

                        <div className='lg:my-0 my-12'>
                            <img src={monkey} alt="monkey" className='ml-10 bounce-out-down' />
                            <img src={util} alt="roadmap" />
                        </div>

                    </div>

                    <div className="lg:block hidden">
                        <svg width="69" height="239" viewBox="0 0 69 239" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40.7489 0.453708L28.9537 3.75106L32.251 15.5463L44.0463 12.2489L40.7489 0.453708ZM68.5 237.5L59.1961 222.89L51.1958 238.253L68.5 237.5ZM35.1929 7.26406C19.7774 34.6427 2.86595 77.8867 0.785275 120.793C-1.29788 163.75 11.5004 206.586 55.7747 232.562L57.2928 229.974C14.2912 204.745 1.73273 163.192 3.78175 120.938C5.83326 78.6334 22.5429 35.8457 37.807 8.73594L35.1929 7.26406Z" fill="#00B6E3" />
                        </svg>
                    </div>

                    <div className="lg:flex gap-12 items-center">
                        <div>
                            <div className="flex gap-3 items-center">
                                <img src={one} alt="cart" className='w-8 h-8' />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Phase I
                                </h4>
                            </div>

                            <ul className='py-5 font-kanit ml-9 list-disc'>
                                <li>first utility live (@GoldguardBot)</li>
                                <li>staking release</li>
                                <li>2000 holders</li>
                            </ul>
                        </div>

                        <div className="lg:block hidden">
                            <svg width="227" height="137" viewBox="0 0 227 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.451105 126.616L7.61566 136.549L17.5489 129.384L10.3843 119.451L0.451105 126.616ZM222 0.5L209.697 12.6917L226.407 17.2505L222 0.5ZM8.76023 129.481C37.2437 134.093 81.1465 133.63 122.366 117.834C163.641 102.016 202.249 70.8031 219.875 13.9845L217.01 13.0956C199.702 68.8869 161.866 99.4834 121.292 115.032C80.6631 130.603 37.3118 131.065 9.23977 126.519L8.76023 129.481Z" fill="#00B6E3" />
                            </svg>
                        </div>

                        <div className='lg:-mt-12 mt-5'>
                            <div className="flex gap-3 items-center">
                                <img src={two} alt="cart" className='w-8 h-8' />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Phase II
                                </h4>
                            </div>

                            <ul className='py-5 font-kanit ml-9 list-disc'>
                                <li>  coinmarketcap & coingecko listing</li>
                                <li>social media campaign</li>
                                <li>(xxx) utility set up</li>
                                <li>5000 holders</li>
                            </ul>
                        </div>

                    </div>

                    {/* <div className="lg:block hidden">
                        <svg width="162" height="332" viewBox="0 0 162 332" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M140.489 0.379895L135.38 11.5106L146.511 16.6201L151.62 5.48937L140.489 0.379895ZM0 329L17.1183 331.639L10.8444 315.494L0 329ZM142.094 9.02146C156.257 47.2232 166.382 108.122 151.635 168.22C136.909 228.234 97.3699 287.527 12.0225 322.719L13.1661 325.492C99.45 289.914 139.608 229.822 154.548 168.934C169.468 108.131 159.23 46.6113 144.906 7.97854L142.094 9.02146Z" fill="#00B6E3" />
                        </svg>
                    </div> */}

                    <div className="lg:flex gap-12 items-center mt-12">
                        <div>
                            <div className="flex gap-3 items-center">
                                <img src={three} alt="cart" className='w-8 h-8' />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Phase III
                                </h4>
                            </div>

                            <ul className='py-5 font-kanit ml-9 list-disc'>
                                <li>first CEX listing</li>
                                <li>(xxx) utility release</li>
                                <li>real world marketing</li>
                                <li>10000 holders</li>
                            </ul>
                        </div>

                        <div className="lg:block hidden">

                            <svg width="439" height="189" viewBox="0 0 439 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M438.086 76.1023L433.102 64.9145L421.914 69.8977L426.898 81.0855L438.086 76.1023ZM18.5 188.499L22.125 171.562L5.64471 176.891L18.5 188.499ZM430.537 71.5995C336.094 35.3637 212.589 -2.42309 122.283 0.640386C77.1412 2.17175 39.8969 13.9248 18.9002 41.6315C-2.11637 69.3644 -6.48112 112.577 12.9144 176.1L15.7836 175.224C-3.50271 112.059 1.13824 70.0368 21.2912 43.4434C41.464 16.8239 77.553 5.1595 122.385 3.63866C212.026 0.597722 335.027 38.1675 429.463 74.4005L430.537 71.5995Z" fill="#00B6E3" />
                            </svg>

                        </div>

                        <div className='lg:-mt-12 mt-5'>
                            <div className="flex gap-3 items-center">
                                <img src={four} alt="cart" className='w-8 h-8' />
                                <h4 className="font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100">
                                    Phase IV
                                </h4>
                            </div>

                            <ul className='py-5 font-kanit ml-9 list-disc'>
                                <li>roadmap updates</li>
                                <li>(xxx) utility growth and development</li>
                                <li>top 10 CEX listing</li>
                                <li>20000 holders</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            {/* how to buy section */}

            <div className="bg-blue-300 text-white-100 ">
                <div className="md:px-20 px-5 py-16 container mx-auto">

                    <div className="flex gap-4 justify-center items-center">
                        <h1 className='font-minecraft uppercase pt-5 md:text-5xl text-xl font-semibold text-white-100 tracking-wide'>HOW TO BUY</h1>
                        <img src={cart} alt="cart" className='w-20' />
                    </div>

                    <div className="lg:flex block justify-between items-center gap-14 my-16">

                        <div className='flex flex-col gap-14'>
                            <div className="flex gap-4 justify-center items-center">
                                <img src={one} alt="cart" className='w-20' />
                                <p className='font-minecraft text-xl font-semibold text-white-100 tracking-wide'>Download Metamask or Trust Wallet & set your bsc wallet</p>
                            </div>

                            <div className="flex gap-4 justify-center items-center">
                                <img src={two} alt="cart" className='w-20' />
                                <p className='font-minecraft text-xl font-semibold text-white-100 tracking-wide'>Open PancakeSwap and
                                    Connect your wallet</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-14'>
                            <div className="flex gap-4 justify-center items-center lg:mt-0 mt-12">
                                <img src={three} alt="cart" className='w-20' />
                                <p className='font-minecraft text-xl font-semibold text-white-100 tracking-wide'>Add $FLANETZ  contract
                                    Click settings and set “slippage” to 10%</p>
                            </div>

                            <div className="flex gap-4 justify-center items-center">
                                <img src={four} alt="cart" className='w-20' />
                                <p className='font-minecraft text-xl font-semibold text-white-100 tracking-wide'>Enter the desired amount and swap</p>
                            </div>
                        </div>

                    </div>

                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x27044cfe4D9E4d799c5aE3778d2215110465Df00">
                        <button className='bg-red-50 mt-5 uppercase rounded-2xl px-6 py-2 text-2xl font-semibold tracking-wider font-minecraft flex mx-auto'>
                            buy
                        </button>
                    </a>
                    <img src={hand} alt="" className='w-16 flex mx-auto' />

                    <div className="lg:flex block gap-4 justify-between items-center mt-8">
                        <div>
                            <h4 className='font-minecraft uppercase pt-5 md:text-3xl text-xl font-semibold text-white-100 tracking-wide'>ArE TOGETHER STRONG</h4>

                            <p className='font-minecraft text-lg text-white-100 tracking-wide my-5'>$FLANETZ will change the Binance Smart Chain forever</p>
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