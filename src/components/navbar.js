import React from "react";

const Navbar = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const loggedIn = !!user;

	return (
		<div
			style={{
				width: "100%",
				backgroundColor: "#ffffff",
				borderBottom: "1px solid #e5e7eb",
				padding: "14px 30px",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				boxSizing: "border-box",
			}}
		>
			<h2
				style={{
					margin: 0,
					cursor: "pointer",
					fontWeight: "600",
					color: "#4CAF50",
				}}
				onClick={() => (window.location.href = "/")}
			>
				LittleCare
			</h2>

			<div
				style={{
					display: "flex",
					gap: "22px",
					alignItems: "center",
				}}
			>
				<a href="/" style={linkStyle}>
					Home
				</a>

				{!loggedIn ? (
					<>
						<a href="/login" style={linkStyle}>
							Login
						</a>
						<a href="/signup" style={linkStyle}>
							Sign Up
						</a>
					</>
				) : (
					<>
						<a
							href="/appointmentpage"
							style={linkStyle}
						>
							Appointments
						</a>

						<a href="/record" style={linkStyle}>
							Records
						</a>

						<a href="/growth" style={linkStyle}>
							Growth
						</a>

						<button
							onClick={() => {
								localStorage.removeItem("user");
								window.location.href = "/";
							}}
							style={logoutBtn}
						>
							Logout
						</button>
					</>
				)}
			</div>
		</div>
	);
};

const linkStyle = {
	color: "#374151",
	textDecoration: "none",
	fontSize: "15px",
	fontWeight: "500",
};

const logoutBtn = {
	backgroundColor: "#4CAF50",
	color: "white",
	border: "none",
	padding: "6px 16px",
	borderRadius: "20px",
	cursor: "pointer",
	fontSize: "14px",
};

export default Navbar;
