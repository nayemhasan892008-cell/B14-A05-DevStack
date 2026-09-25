import { use } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

 export interface ITechnologyProps{
   TechnologyPromise:Promise<ITechnology[]>
 }


const Technology = ({TechnologyPromise}:ITechnologyProps) => {
  const Technologies = use(TechnologyPromise)
  return (
    <section>
      <div className="container mx-auto">

        {/* heading */}
        <div>
           <h2>Explore the <span className="text-pink-500">Technologies</span></h2>
           <p className="my-1 text-sm text-[#64748B]"> Pick one technology per category to build your ideal stack.</p>
        </div>

               {/* technology */}
         <div className="grid grid-cols-12 gap-6 my-2">
           <div className="col-span-9 grid grid-cols-3 gap-4">
             {Technologies.map((technology:ITechnology) => (
               <TechnologyCard  key={technology.id} />))}
           </div>


            {/* your stack */}
             <div className="col-span-3">
               <YourStack  />
              </div>
          </div>
         

      </div>
    </section>

    
    
  );
};

export default Technology;