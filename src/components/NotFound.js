import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="flex justify-center items-center flex-col bg-blue-300 mt-32">
			<h1 className="text-6xl text-white font-extrabold">404</h1>
			<p className="text-white text-4xl font-medium">Page not found</p>
			<p className="m-12 text-4xl text-white ">
				Go Back{" "}
				<Link
					className="cursor-pointer text-4xl text-gray-700 underline rounded"
					to="/"
				>
					Home
				</Link>
			</p>
		</div>
	);
}

export default NotFound;
