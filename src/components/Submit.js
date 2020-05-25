import React from "react";
import { Link } from "react-router-dom";
function Submit() {
	return (
		<div className="submit ">
			<div>
				<p className="text-2xl text-green-800 text-center p-8 ">
					Weldone! <br />
					kindly click the button below to submit your work
				</p>
			</div>
			<div className="m-4">
				<Link to="/highscores">
					<input
						className="text-green-200 font-bold bg-green-800 px-8 py-2 shadow-lg rounded hover:bg-green-200 hover:text-green-800 border-2 border-green-800"
						type="submit"
						value="Submit"
					/>
				</Link>
			</div>
		</div>
	);
}

export default Submit;
