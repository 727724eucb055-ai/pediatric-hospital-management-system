import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import logo from "../assets/imgs/logo.png";
import "../assets/css/form.css";

const Login = () => {
	const [credentials, setCredentials] = useState({});
	const [error, setError] = useState(false);

	const onFormSubmit = (event) => {
		event.preventDefault();

		const storedUser = JSON.parse(localStorage.getItem("user"));

		if (
			storedUser &&
			storedUser.email === credentials.email &&
			storedUser.password === credentials.password
		) {
			window.location.href = "/appointmentpage";
		} else {
			setError(true);
		}
	};

	const toSignUp = () => {
		window.location.href = "/signup";
	};

	return (
		<>
			{/* HEADER / NAVBAR HANDLES HOME NAVIGATION */}
			<Navbar />

			{/* LOGIN CARD */}
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
				<form
					id="login-container"
					onSubmit={onFormSubmit}
					style={{
						width: "100%",
						maxWidth: "420px",
						backgroundColor: "#ffffff",
						padding: "35px",
						borderRadius: "14px",
						boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
						textAlign: "center",
					}}
				>
					<img
						src={logo}
						alt="LittleCare Children’s Hospital"
						style={{ width: "80px", marginBottom: "15px" }}
					/>

					<h2 style={{ marginBottom: "8px" }}>Welcome Back</h2>
					<p style={{ color: "#6b7280", marginBottom: "25px" }}>
						Login to manage your child’s appointments
					</p>

					<div className="input-container">
						<i className="fa fa-envelope icon"></i>
						<input
							className="logininput"
							type="email"
							placeholder="Email address"
							required
							onChange={(e) =>
								setCredentials({
									...credentials,
									email: e.target.value,
								})
							}
						/>
					</div>

					<div className="input-container">
						<i className="fa fa-lock icon"></i>
						<input
							className="logininput"
							type="password"
							placeholder="Password"
							required
							onChange={(e) =>
								setCredentials({
									...credentials,
									password: e.target.value,
								})
							}
						/>
					</div>

					{error && (
						<p
							style={{
								color: "#dc2626",
								fontSize: "14px",
								marginBottom: "10px",
							}}
						>
							Incorrect email or password
						</p>
					)}

					<button
						type="submit"
						style={{
							width: "100%",
							padding: "12px",
							marginTop: "10px",
							backgroundColor: "#4CAF50",
							color: "white",
							border: "none",
							borderRadius: "25px",
							fontSize: "16px",
							cursor: "pointer",
						}}
					>
						Login
					</button>

					<p
						style={{
							marginTop: "18px",
							fontSize: "14px",
							color: "#6b7280",
						}}
					>
						Don’t have an account?
					</p>

					<button
						type="button"
						onClick={toSignUp}
						style={{
							background: "none",
							border: "none",
							color: "#2563eb",
							cursor: "pointer",
							fontSize: "14px",
						}}
					>
						Create an account
					</button>
				</form>
			</div>

			<Footer />
		</>
	);
};

export default Login;
