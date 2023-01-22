import App from "./App";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import Home from "./views/Home";
import Movies from "./views/Movies";
import TvSeries from "./views/TvSeries";
import Upcoming from "./views/Upcoming";    

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<Home />} />
			<Route path="/movies" element={<Movies />} />
			<Route path="/tv-series" element={<TvSeries />} />
			<Route path="/upcoming" element={<Upcoming />} />
	
		</Route>
	)
);