import React from "react";

const Footer = () => {
	return (
		<footer>
			<div
				className="footer"
				id="footer"
				style={{
					backgroundColor: "#1f2933",
					color: "#e5e7eb",
					padding: "25px 30px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexWrap: "wrap",
				}}
			>
				{/* LEFT SIDE */}
				<div style={{ textAlign: "left" }}>
					<p
						style={{
							fontSize: "14px",
							margin: "0 0 6px 0",
							color: "#cbd5e1",
							fontWeight: "500",
						}}
					>
						LittleCare Children’s Hospital
					</p>

					<p
						style={{
							fontSize: "12px",
							margin: 0,
							color: "#9ca3af",
						}}
					>
						© 2025 LittleCare Children’s Hospital. All rights
						reserved.
					</p>
				</div>

				{/* RIGHT SIDE */}
				<ul
					className="footer-right"
					style={{
						listStyle: "none",
						padding: 0,
						margin: 0,
						textAlign: "right",
					}}
				>
					<li>
						<span
							className="foot-text"
							style={{
								fontSize: "13px",
								color: "#9ca3af",
							}}
						>
							Child Care • Appointments • Vaccination • Growth
							Tracking • Pediatric Support
						</span>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
