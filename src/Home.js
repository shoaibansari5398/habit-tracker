import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Context } from "./Context";

const Home = () => {

	const { data, setData, formPopUp, setFormPopUp, formPopUpHandler } =
		useContext(Context);

	const [formData, setFormData] = useState({
		id: uuidv4(),
		name: "",
		repeat: "Daily",
		goal: "1 times",
		time: "Anytime",
		date: "Today",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};


	const formHandler = (e) => {
		e.preventDefault();
		data.push(formData);
		setFormPopUp(false)
		setFormData({
			id: uuidv4(),
			name: "",
			repeat: "",
			goal: "",
			time: "",
			date: "",
		});
		console.log(data);
	}


	return (
		<div>
			<button
				onClick={formPopUpHandler}
				className="mx-2 bg-gray-300 px-3 rounded-md border-2 border-gray-500"
			>
				Add Habit
			</button>
			{!formPopUp ? (
				<h2>Click on Add Habit Button to add your Habit</h2>
			) : (
				<form
					onSubmit={formHandler}
					className="flex flex-col max-w-80 border border-black mx-auto mt-5 align-middle p-5 rounded-md"
				>
					<label className="my-2">
						Name
						<input
							type="text"
							placeholder="Input Habit Name"
							name="name"
							className="border border-black rounded-md px-2 ml-2"
							value={formData.name}
							onChange={handleChange}
						/>
					</label>
					<label className="my-2">
						Repeat
						<select
							className="border border-black ml-2"
							value={formData.repeat}
							onChange={handleChange}
						>
							<option>Daily</option>
							<option>Weekly</option>
						</select>
					</label>
					<label className="my-2">
						Goal
						<select
							className="border border-black ml-2"
							value={formData.goal}
							onChange={handleChange}
						>
							<option>1 Times</option>
							<option>2 Times</option>
						</select>
					</label>
					<label className="my-2">
						Time of Day
						<select
							className="border border-black ml-2"
							value={formData.time}
							onChange={handleChange}
						>
							<option>Anytime</option>
							<option>Morning</option>
							<option>Evening</option>
						</select>
					</label>
					<label className="my-2">
						Start Date
						<select
							className="border border-black ml-2"
							value={formData.date}
							onChange={handleChange}
						>
							<option>Yesterday</option>
							<option>Today</option>
							<option>Tomorrow</option>
						</select>
					</label>
					<div className="flex justify-center mt-3">
						<button
							onClick={() => console.log("clicked")}
							className="mx-2 bg-gray-300 px-3 rounded-md border-2 border-gray-500"
						>
							Discard
						</button>
						<button
							type="submit"
							className="mx-2 bg-gray-300 px-3 rounded-md border-2 border-gray-500"
						>
							Save
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default Home;
