import React from "react";

function Options({ answers, counter, ans }) {
	return (
		<div className="">
			<div className="choice__container  w-64 cursor-pointer border-2 border-green-800 rounded shadow-lg">
				<p className="choice__prefix w-8 px-6 py-3 bg-green-800 text-green-200">
					A
				</p>
				<p
					className="choice__text text-green-800 bg-green-200 hover:bg-green-800 hover:text-green-200"
					data-number="4"
					onClick={() => counter(1, ans)}
				>
					{answers[0]}
				</p>
			</div>

			<div className="choice__container  w-64 cursor-pointer border-2 border-green-800 rounded shadow-lg">
				<p className="choice__prefix w-8 px-6 py-3 bg-green-800 text-green-200">
					B
				</p>
				<p
					className="choice__text text-green-800 bg-green-200 hover:bg-green-800 hover:text-green-200"
					data-number="4"
					onClick={() => counter(2, ans)}
				>
					{" "}
					{answers[1]}
				</p>
			</div>
			<div className="choice__container  w-64 cursor-pointer border-2 border-green-800 rounded shadow-lg">
				<p className="choice__prefix w-8 px-6 py-3 bg-green-800 text-green-200">
					C
				</p>
				<p
					className="choice__text text-green-800 bg-green-200 hover:bg-green-800 hover:text-green-200"
					data-number="4"
					onClick={() => counter(3, ans)}
				>
					{answers[2]}
				</p>
			</div>
			<div className="choice__container  w-64 cursor-pointer border-2 border-green-800 rounded shadow-lg">
				<p className="choice__prefix w-8 px-6 py-3 bg-green-800 text-green-200">
					D
				</p>
				<p
					className="choice__text text-green-800 bg-green-200 hover:bg-green-800 hover:text-green-200"
					data-number="4"
					onClick={() => counter(4, ans)}
				>
					{answers[3]}
				</p>
			</div>
		</div>
	);
}

export default Options;
