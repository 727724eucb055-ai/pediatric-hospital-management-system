import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AppointmentCard from "../components/appointmentCards";

const LandingPage = () => {
	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (!user || !user.email) {
			window.location.href = "/login";
			return;
		}

		const all =
			JSON.parse(localStorage.getItem("appointments")) || [];

		const mine = all.filter(
			(a) =>
				a.email === user.email ||
				a.userEmail === user.email ||
				a.child === user.name
		);

		setAppointments(mine);
	}, []);

	return (
		<>
			<Navbar />

			<div style={page}>
				<div style={card}>
					{/* CENTERED TITLE */}
					<h1 style={{ textAlign: "center" }}>
						Your Appointments
					</h1>

					{/* CENTERED BUTTONS */}
					<div style={actions}>
						<button
							style={btn}
							onClick={() =>
								(window.location.href =
									"/appointments")
							}
						>
							Book New
						</button>

						<button
							style={{ ...btn, background: "#ef4444" }}
							onClick={() => {
								localStorage.removeItem("user");
								window.location.href = "/";
							}}
						>
							Logout
						</button>
					</div>

					{/* APPOINTMENTS */}
					{appointments.length === 0 ? (
						<p style={{ textAlign: "center" }}>
							No appointments found
						</p>
					) : (
						<div style={grid}>
							{appointments.map((a, i) => (
								<AppointmentCard
									key={a.id || i}
									appointment={a}
								/>
							))}
						</div>
					)}
				</div>
			</div>

			<Footer />
		</>
	);
};

/* STYLES */

const page = {
	minHeight: "80vh",
	background: "#f9fafb",
	padding: "40px",
};

const card = {
	maxWidth: "900px",
	margin: "auto",
	background: "#fff",
	padding: "35px",
	borderRadius: "14px",
	boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const actions = {
	display: "flex",
	justifyContent: "center", // 👈 CENTER BUTTONS
	gap: "15px",
	margin: "25px 0",
	flexWrap: "wrap",
};

const grid = {
	display: "flex",
	justifyContent: "center", // 👈 CENTER CARDS
	flexWrap: "wrap",
	gap: "20px",
};

const btn = {
	padding: "12px 24px",
	background: "#4CAF50",
	color: "white",
	border: "none",
	borderRadius: "25px",
	cursor: "pointer",
};

export default LandingPage;
