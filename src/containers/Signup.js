import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import logo from "../assets/imgs/logo.png";
import "../assets/css/form.css";

const Signup = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState(false);

	const onFormSubmit = (event) => {
		event.preventDefault();

		if (!user.name || !user.email || !user.password || !user.age) {
			setError(true);
			return;
		}

		setError(false);

		// Frontend-only signup
		localStorage.setItem("user", JSON.stringify(user));

		// SUCCESS MESSAGE
		alert("Signup successful! Please login to continue.");

		// Redirect to login
		window.location.href = "/login";
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
				<form
					id="signin-container"
					onSubmit={onFormSubmit}
					style={{
						width: "100%",
						maxWidth: "450px",
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

					<h2 style={{ marginBottom: "8px" }}>
						Create an Account
					</h2>

					<p
						style={{
							color: "#6b7280",
							marginBottom: "25px",
							fontSize: "14px",
						}}
					>
						Register to manage your child’s healthcare
					</p>

					{/* NAME */}
					<div className="input-container">
						<i className="fa fa-user icon"></i>
						<input
							className="logininput"
							type="text"
							placeholder="Parent / Guardian Name"
							required
							onChange={(e) =>
								setUser({
									...user,
									name: e.target.value,
								})
							}
						/>
					</div>

					{/* EMAIL */}
					<div className="input-container">
						<i className="fa fa-envelope icon"></i>
						<input
							className="logininput"
							type="email"
							placeholder="Email address"
							required
							onChange={(e) =>
								setUser({
									...user,
									email: e.target.value,
								})
							}
						/>
					</div>

					{/* PASSWORD */}
					<div className="input-container">
						<i className="fa fa-lock icon"></i>
						<input
							className="logininput"
							type="password"
							placeholder="Password"
							required
							onChange={(e) =>
								setUser({
									...user,
									password: e.target.value,
								})
							}
						/>
					</div>

					{/* CHILD AGE */}
					<div className="input-container">
						<i className="fa fa-child icon"></i>
						<input
							className="logininput"
							type="number"
							placeholder="Child Age"
							required
							onChange={(e) =>
								setUser({
									...user,
									age: e.target.value,
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
							Please fill all fields
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
						Sign Up
					</button>

					<p
						style={{
							marginTop: "18px",
							fontSize: "14px",
							color: "#6b7280",
						}}
					>
						Already have an account?
					</p>

					<button
						type="button"
						onClick={() =>
							(window.location.href = "/login")
						}
						style={{
							background: "none",
							border: "none",
							color: "#2563eb",
							cursor: "pointer",
							fontSize: "14px",
						}}
					>
						Login
					</button>
				</form>
			</div>

			<Footer />
		</>
	);
};

export default Signup;
