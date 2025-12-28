import React from "react";
import Navbar from "./navbar";

const Header = () => {
	return (
		<header
			className="header"
			style={{
				backgroundImage:
					"linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('https://images.unsplash.com/photo-1584515933487-779824d29309')",
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "300px",
				width: "100%",
				position: "relative",
				color: "white",
			}}
		>
			<Navbar />

			{/* CENTERED QUOTE */}
			<div
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					textAlign: "center",
					padding: "0 20px",
				}}
			>
				<h1
					style={{
						fontSize: "32px",
						fontWeight: "600",
						marginBottom: "10px",
					}}
				>
					Where Little Hearts Receive Big Care
				</h1>

				<p
					style={{
						fontSize: "16px",
						opacity: 0.9,
						maxWidth: "600px",
						margin: "0 auto",
					}}
				>
					Trusted pediatric care with compassion, comfort, and
					expertise because every child deserves the best start.
				</p>
			</div>
		</header>
	);
};

export default Header;
