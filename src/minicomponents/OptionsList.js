import React from "react";
import Options from "../minicomponents/Options";

function OptionsList({ select, counter, correctAns }) {
	return <Options select={select} counter={counter} />;
}

export default OptionsList;
