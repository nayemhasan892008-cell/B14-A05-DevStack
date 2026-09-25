import type { ITechnology } from "../types/technology";

interface ITechnologyCardProps {
  technology: ITechnology;
  handleAddStack: (item: ITechnology) => void;
  stack: ITechnology[];
}

const TechnologyCard = ({
  technology,
  handleAddStack,
  stack,
}: ITechnologyCardProps) => {

  const isSelected = stack.includes(technology);

  const handleSelect = () => {
    handleAddStack(technology);
  };

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 mt-8 mb-18">

      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
          {technology.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-semibold">
        {technology.name}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {technology.description}
      </p>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-500">
          {technology.category}
        </span>

        <span className="text-xs text-gray-500">
          {technology.difficulty}
        </span>

        <span className="text-xs text-gray-500">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        onClick={handleSelect}
        disabled={isSelected}
        className="mt-4 w-full rounded-lg bg-black py-2 text-sm text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSelected ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;