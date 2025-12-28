import React, { useEffect } from "react";

import Header from "./header";
import Footer from "./footer";

import "../assets/css/main.css";

const HomePage = () => {
	// Get user safely from localStorage
	const user = JSON.parse(localStorage.getItem("user"));
	const loggedIn = !!user;

	useEffect(() => {
		if (loggedIn) {
			window.location.href = "/appointmentpage";
		}
	}, [loggedIn]);

	const onAppointmentBook = () => {
		window.location.href = "/login";
	};

	return (
		<>
			{/* HEADER WITH BACKGROUND IMAGE + NAVBAR */}
			<Header />

			{/* SINGLE INTRO SECTION (TEXT + CTA) */}
			<div
				style={{
					padding: "60px 20px",
					textAlign: "center",
					backgroundColor: "#f9f9f9",
				}}
			>
				<h1 style={{ fontSize: "38px" }}>
					LittleCare Children’s Hospital
				</h1>

				<p
					style={{
						fontSize: "20px",
						marginTop: "12px",
						color: "#555",
						maxWidth: "700px",
						marginInline: "auto",
					}}
				>
					Caring for children with compassion, comfort, and trust.
					We provide safe, friendly, and specialized pediatric care
					for every stage of childhood.
				</p>

				<button
					style={{
						marginTop: "25px",
						padding: "14px 30px",
						fontSize: "16px",
						borderRadius: "25px",
						border: "none",
						backgroundColor: "#4CAF50",
						color: "white",
						cursor: "pointer",
					}}
					onClick={onAppointmentBook}
				>
					Book an Appointment
				</button>
			</div>

			{/* SERVICES SECTION */}
			<div className="services" id="services">
				<h1 id="services-head">Our Pediatric Services</h1>

				<div className="container1">
					<div className="service">
						<i className="fa fa-bed fa-3x"></i>
						<h4>Child Emergencies</h4>
					</div>
					<div className="service">
						<i className="fa fa-ambulance fa-3x"></i>
						<h4>24x7 Ambulance</h4>
					</div>
					<div className="service">
						<i className="fa fa-medkit fa-3x"></i>
						<h4>Pediatric Medical Care</h4>
					</div>
				</div>

				<div className="container2">
					<div className="service">
						<i className="fa fa-wheelchair fa-3x"></i>
						<h4>Child-Friendly Facilities</h4>
					</div>
					<div className="service">
						<i className="fas fa-flask fa-3x"></i>
						<h4>Diagnostic Laboratory</h4>
					</div>
					<div className="service">
						<i className="fas fa-phone fa-3x"></i>
						<h4>
							24x7
							<br />
							Parent Helpline
						</h4>
					</div>
				</div>
			</div>

			{/* FOOTER */}
			<Footer />
		</>
	);
};

export default HomePage;
