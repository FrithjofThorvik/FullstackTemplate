import { FC } from "react";
import { StoreState } from "../data/store";
import { useStoreSelector } from "../hooks/useStore";

import "../scss/components/User.scss";
import { IUser } from "../types/interfaces";

interface IUserProps {}

const User: FC<IUserProps> = (): JSX.Element => {
	const user: IUser = useStoreSelector((state: StoreState) => state.user.value);

	return (
		<div className="user">
			<h3>{user.name}</h3>
			<p>{user.id}</p>
			<p>{user.email}</p>
		</div>
	);
};

export default User;
