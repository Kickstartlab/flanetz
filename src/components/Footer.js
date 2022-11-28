import React from 'react'
import telegram from '../assets/telegram.png';
import discord from '../assets/discord.png';
import twitter from '../assets/twitter.png';


export default function Footer() {
  return (
    <footer className='text-white-100 bg-blue-200 md:px-20 px-5'>
      <div className="container font-poppins mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-between gap-24 py-12">

          <div className="md:col-span-3 col-span-1">
            <h3 className='text-3xl font-bold uppercase pb-6'>Disclaimer</h3>
            <p className=''>It is not intended to create or in any way put into effect contractual relationship through the information contained in this whitepaper. This whitepaper is primarily designed to provide relevant information to potential holders so that they can comprehensively analyze the project and make an informed decision. Statements, estimates and financial information in this lite paper incorporate and consider certain known and unknown risk factors, which could affect estimated results in fact or influence them substantially, factually and significantly from those featured in forward looking statements. </p>
          </div>

          <div className="col-span-1">
            <h3 className='text-3xl font-bold uppercase pb-6'>menu</h3>
            <ul>
              <li className='pb-5'>Home</li>
              <li className='pb-5'>Tokenomics</li>
              <li className='pb-5'>Roadmap</li>
              <li>Market Plan</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className='text-3xl font-bold uppercase pb-6'>connect</h3>
            <div className="flex gap-4">
            <img src={telegram} alt="" />
            <img src={discord} alt="" />
            <img src={twitter} alt="" />

            </div>
          </div>
        </div>

        <div className="text-center py-8 px-2">
          <p>Copyright, Rana Muneeb Asad - Ravi Inc 2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
