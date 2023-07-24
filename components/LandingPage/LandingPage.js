import { DropdownMenu } from '../menu/DropdownMenu';

export const LandingPage = ({ ...props }) => (
  <div
    className="w-full h-screen "
    style={{
      background:
        'white',
    }}
    {...props}
  >
    <div className="md:h-1/2 flex flex-col justify-between	  ">
      <DropdownMenu className="mx-2 my-2 py-2 px-2 z-10 inline-block text-left font-ven text-white text-xl lg:flex-end lg:mx-[-1]" />
        <div className="font-ailer font-bold text-5xl lg:text-7xl text-white">
          Hi, Im Khanh Duy Nguyen
      </div>
    </div>
    <div className="lg:h-1/2 font-danhda px-5 md:px-10 py-20 text-[#FFD243] text-xl lg:text-5xl">
      <div>I devoted myself to be a Data Scientist.</div>
      <div>
        I aim to help individuals make contextualized data-driven decisions.
      </div>
      
    </div>
    
  </div>
);
