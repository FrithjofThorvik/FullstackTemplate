import { FC } from "react";

import "../scss/components/pages/Home.scss";

interface IHomeProps {}

const Home: FC<IHomeProps> = (): JSX.Element => {
	return <div className="home">Home</div>;
};

export default Home;
