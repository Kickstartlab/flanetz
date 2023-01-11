import React from 'react'
import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';


export default function Footer() {
  return (
    <footer className='text-white-100 bg-blue-300 md:px-20 px-5'>
      <div className="container font-minecraft mx-auto">
        <div className="lg:flex hidden items-center justify-between py-6">

          <div className=" lg:mt-0 mt-5">
            <a href="/" className="logo">
              <h2 className="text-4xl font-bold text-white-100">Flanetz</h2>
            </a>
          </div>

          <div className="col-span-1 lg:mt-0 mt-5">
            <p>Copyright © {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className="flex gap-4 lg:mt-0 mt-5">
            <a href="https://t.me/flanetz_chat"><img src={discord} alt="discord" className='w-16' /></a>
            <a href="https://twitter.com/flanetz"><img src={twitter} alt="twitter" className='w-16' /></a>
          </div>

        </div>

        <div className="lg:hidden flex flex-col justify-center items-center py-6">

          <div className="flex gap-4 lg:mt-0 mt-5">
            <a href="https://t.me/flanetz_chat"><img src={discord} alt="discord" className='w-16' /></a>
            <a href="https://twitter.com/flanetz"><img src={twitter} alt="twitter" className='w-16' /></a>
          </div>

          <div className="col-span-1 lg:mt-0 mt-5 text-center">
            <p>Copyright © {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <div className=" lg:mt-0 mt-5 text-center">
            <a href="/" className="logo">
              <h2 className="text-4xl font-bold text-white-100">Flanetz</h2>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}
