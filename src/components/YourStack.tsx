import type { ITechnology } from "../types/technology";

interface IYourStackProps {
  stack: ITechnology[];
  handleRemove: (item: ITechnology) => void;
  handleRemoveAll: () => void;
}

  const YourStack = ({stack,handleRemove,handleRemoveAll,}:IYourStackProps) => {
  
    return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 mt-8">
      <h2 className="text-xl font-bold">
        Your Stack
      </h2>

      <p className="mt-1 text-sm text-gray-400">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 && (
        <div className="mt-5 rounded-lg border border-dashed border-gray-200 p-8 text-center">
          <p className="text-sm text-gray-400"> Your stack is empty. </p>
        </div>
       )}

        <div className="mt-5 space-y-2">
        {stack.map((technology) => (
          <div
            key={technology.id}
            className="flex items-center justify-between rounded-lg border border-gray-200 p-3"
          >
            <div className="flex items-center gap-3">
              <img
                src={technology.icon}
                alt={technology.name}
                className="h-8 w-8 object-contain"
              />

              <div>
                <h3 className="text-sm font-semibold">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-400">
                  {technology.category}
                </p>
              </div>
            </div>

               <button
              onClick={() => handleRemove(technology)}
              className="text-xl text-gray-400 hover:text-red-500"
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mt-5 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;
