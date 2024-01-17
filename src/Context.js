import { createContext, useState } from "react";


export const Context = createContext();

export default function ContextProvider({ children }) {

	const [data, setData] = useState([])
	const [formPopUp, setFormPopUp] = useState(false);

	const formPopUpHandler = () => {
		setFormPopUp(!formPopUp);
	}

	return (
		<div>
			<Context.Provider
				value={{ data, setData, formPopUp, setFormPopUp, formPopUpHandler }}
			>
				{children}
			</Context.Provider>
		</div>
	);
}
