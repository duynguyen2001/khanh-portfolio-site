import { DropdownMenu } from '../menu/DropdownMenu';

export const LandingPage = ({ ...props }) => (
  <div
    className="w-full h-screen "
    style={{
      background:
        'linear-gradient(180deg, rgba(18,65,173,1) 0%, rgba(18,65,173,1) 75%, rgba(96,142,201,1) 100%)',
    }}
    {...props}
  >
    <div className="md:h-1/2 flex flex-col justify-between	  ">
      <DropdownMenu className="mx-2 my-2 py-2 px-2 z-10 inline-block text-left font-ven text-white text-xl lg:flex-end lg:mx-[-1]" />
      <div className="text-3xl md:text-5xl lg:text-7xl px-5 md:px-10 py-10 md:py-20">
        <div className="absolute font-barberComplete text-[#E89E0B]">
          HI, I'M KHÁNH-DUY NGUYỄN
        </div>
        <div className="absolute font-barberFill text-[#E20D0F]">
          HI, I'M KHÁNH-DUY NGUYỄN
        </div>
        <div className="absolute font-barberRight text-[##E6D65A] ">
          HI, I'M KHÁNH-DUY NGUYỄN
        </div>
        <div className="absolute font-barberOutline text-white">
          HI, I'M KHÁNH-DUY NGUYỄN
        </div>
        <div className="absolute font-barberShadow text-[#E89E0B]">
          HI, I'M KHÁNH-DUY NGUYỄN
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
