import { mount } from "dashboard/DashboardApp";
import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
	const ref = useRef(null);
	const history = useHistory();

	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref} />;
};