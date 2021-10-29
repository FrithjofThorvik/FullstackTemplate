import { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import userReducer from "./features/user";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		user: userReducer,
	},
});

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
	document.getElementById("root")
);
