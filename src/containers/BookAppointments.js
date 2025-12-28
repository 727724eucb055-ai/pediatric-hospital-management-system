import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import logo from "../assets/imgs/logo.png";
import "../assets/css/form.css";

const BookAppointments = () => {
	const [date, setDate] = useState("");
	const [slot, setSlot] = useState("");

	const onMakeAppointment = (e) => {
		e.preventDefault();

		const user = JSON.parse(localStorage.getItem("user"));

		// HARD CHECK
		if (!user || !user.email) {
			alert("Invalid login session. Please login again.");
			console.error("USER OBJECT:", user);
			return;
		}

		// Get appointments safely
		let appointments = [];
		try {
			appointments =
				JSON.parse(localStorage.getItem("appointments")) || [];
		} catch {
			appointments = [];
		}

		const newAppointment = {
			id: Date.now(),
			email: user.email,
			patientName: user.name,
			date,
			slot,
			token: appointments.filter(
				(a) => a.email === user.email
			).length + 1,
		};

		appointments.push(newAppointment);

		// SAVE
		localStorage.setItem(
			"appointments",
			JSON.stringify(appointments)
		);

		console.log("SAVED APPOINTMENTS:", appointments);

		alert("Appointment booked successfully!");
		window.location.href = "/appointmentpage";
	};

	return (
		<>
			<Navbar />

			<div
				style={{
					minHeight: "80vh",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#f9fafb",
					padding: "40px 20px",
				}}
			>
				<form onSubmit={onMakeAppointment} style={cardStyle}>
					<img src={logo} alt="Appointment" style={logoStyle} />

					<h2>Book Appointment</h2>

					<div className="input-container">
						<i className="fa fa-calendar icon"></i>
						<input
							className="logininput"
							type="date"
							required
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>

					<div className="input-container">
						<i className="fa fa-clock icon"></i>
						<select
							className="logininput"
							required
							onChange={(e) => setSlot(e.target.value)}
						>
							<option value="">Select Time Slot</option>
							<option value="7AM - 10AM">
								7AM - 10AM
							</option>
							<option value="12PM - 4PM">
								12PM - 4PM
							</option>
							<option value="6PM - 11PM">
								6PM - 11PM
							</option>
						</select>
					</div>

					<button style={primaryBtn} type="submit">
						Book Appointment
					</button>
				</form>
			</div>

			<Footer />
		</>
	);
};

const cardStyle = {
	width: "100%",
	maxWidth: "420px",
	backgroundColor: "#ffffff",
	padding: "35px",
	borderRadius: "14px",
	boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
	textAlign: "center",
};

const logoStyle = {
	width: "80px",
	marginBottom: "15px",
};

const primaryBtn = {
	width: "100%",
	padding: "12px",
	marginTop: "10px",
	backgroundColor: "#4CAF50",
	color: "white",
	border: "none",
	borderRadius: "25px",
	fontSize: "16px",
	cursor: "pointer",
};

export default BookAppointments;
