import React from "react";
import logo from "../assets/imgs/vaccine.png";

const AppointmentCard = ({ appointment }) => {
	// Normalize values from mixed data
	const patientName =
		appointment.patientName ||
		appointment.child ||
		"Child";

	const slotMap = {
		"1": "7AM - 10AM",
		"2": "12PM - 4PM",
		"3": "6PM - 11PM",
	};

	const slot =
		slotMap[appointment.slot] ||
		appointment.slot ||
		"—";

	return (
		<div style={card}>
			<img src={logo} alt="apt" style={{ width: "50px" }} />

			<h4>{patientName}</h4>
			<p>Date: {appointment.date}</p>
			<p>Time: {slot}</p>

			{appointment.token && (
				<p style={token}>
					Token No: {appointment.token}
				</p>
			)}
		</div>
	);
};

const card = {
	width: "240px",
	padding: "20px",
	borderRadius: "12px",
	background: "#f9fafb",
	boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
	textAlign: "center",
};

const token = {
	marginTop: "10px",
	fontWeight: "600",
	color: "#2563eb",
};

export default AppointmentCard;
