import { DropdownMenu } from '../menu/DropdownMenu';
import Image from 'next/image';
import { LandingPageBackground } from './LandingPageBackground';

export const LandingPage = ({ ...props }) => (
  <div
    className="w-full h-screen "
    style={{
      background:
        'linear-gradient(180deg, #1241AD 0%, #E6D65A 36%, #ED3D3A 58%, #608EC9 100%)',
    }}
    {...props}
  >
    <div className="dark:invert w-full h-full">
      <LandingPageBackground></LandingPageBackground>
        </div>
    <div className="md:h-1/2 flex flex-col justify-between	  ">
      <DropdownMenu className="mx-2 my-2 py-2 px-2 z-10 inline-block text-left font-ven text-white text-xl lg:flex-end lg:mx-[-1]" />
      <div className="text-3xl md:text-5xl lg:text-7xl px-5 md:px-10 py-10 md:py-20">
        <div className="absolute font-barberComplete text-[#E89E0B]">
          HI, I&quot;M KHÁNH-DUY NGUYỄN
        </div>
       
      </div>
    </div>
    <div className="lg:h-1/2 font-danhda px-5 md:px-10 py-20 text-[#FFD243] text-xl lg:text-5xl">
      <div>I devoted myself to be a Data Scientist.</div>
      <div>
        I aim to help individuals make contextualized data-driven decisions.
      </div>
      
    </div>
    
    <div className='fixed mb-0'>Hi</div>
  </div>
);
