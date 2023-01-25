import FeaturedMovie from "../components/FeaturedMovie";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <form className="mb-8 flex">
        <button className="rounded-l-full bg-neutral-800 pr-4 pl-8">
          <FaSearch color="gray" />
        </button>

        <input
          className="color-neutral-200 basis-full rounded-r-full bg-neutral-800 p-4 focus:outline-none"
          type="text"
          placeholder="Search for movies, TV shows..."
        />
      </form>
      <FeaturedMovie />
    </>
  );
};

export default Home;
