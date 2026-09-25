import { use, useState } from "react";
import type { ITechnology } from "../types/technology";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

 export interface ITechnologyProps{
   TechnologyPromise:Promise<ITechnology[]>
 }


const Technology = ({TechnologyPromise}:ITechnologyProps) => {
  const Technologies = use(TechnologyPromise);
    const [stack, setStack] = useState<ITechnology[]>([]);

   const handleAddStack = (item: ITechnology) => {

  const alreadyExists = stack.filter(
    (el) => el.id === item.id
  );

  if (alreadyExists.length > 0) {
    toast.warning("Technology already added...");
    return;
  }

  const updatedStack = [...stack, item];

  setStack(updatedStack);

  toast.success("Technology added successfully...");
};


    const handleRemove = (item: ITechnology) => {
    const filteredStack = stack.filter(
      (el) => el.id !== item.id );
   
        setStack(filteredStack);

    toast.success("Technology removed successfully...");
    };


    const handleRemoveAll = () => {
    setStack([]);

    toast.success("All technologies removed...");
   };



  return (
    <section>
      <div className="container mx-auto my-10">

        <div>
           <h2 className="font-extrabold text-4xl">Explore the <span className=" bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">Technologies</span></h2>
           <p className="my-1 text-lg text-[#64748B]"> Pick one technology per category to build your ideal stack.</p>
        </div>

         <div className="grid grid-cols-12 gap-6 my-2 items-start ">
            <div className="col-span-9 grid grid-cols-3  gap-4 ">
             {Technologies.map((technology:ITechnology) => (
               <TechnologyCard  key={technology.id} technology={technology}  handleAddStack={handleAddStack} stack={stack}  />))}
            </div>

              <div className="col-span-3">
               <YourStack stack={stack} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll}  />
              </div>
          </div>
         

      </div>
    </section>

    
    
  );
};

export default Technology;