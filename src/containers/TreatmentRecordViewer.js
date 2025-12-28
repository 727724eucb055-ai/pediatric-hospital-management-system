import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const TreatmentRecordViewer = () => {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (!user || !user.email) {
			window.location.href = "/login";
			return;
		}

		let allTreatments =
			JSON.parse(localStorage.getItem("treatments")) || [];

		// 🔹 AUTO-SEED (only if empty)
		if (allTreatments.length === 0) {
			allTreatments = [
				{
					id: Date.now(),
					patientEmail: user.email,
					diagnosis: "Routine Check-up",
					prescription: "Vitamin syrup – 5ml daily",
					immunization: "MMR Vaccine",
					date: new Date().toLocaleDateString(),
				},
			];
			localStorage.setItem(
				"treatments",
				JSON.stringify(allTreatments)
			);
		}

		// 🔐 Patient can view ONLY their records
		const myRecords = allTreatments.filter(
			(t) => t.patientEmail === user.email
		);

		setRecords(myRecords);
	}, []);

	return (
		<>
			<Navbar />

			{/* PAGE WRAPPER – SAME THEME AS LOGIN/SIGNUP */}
			<div
				style={{
					minHeight: "80vh",
					backgroundColor: "#f9fafb",
					padding: "40px 20px",
				}}
			>
				<div
					style={{
						maxWidth: "900px",
						margin: "0 auto",
						backgroundColor: "#ffffff",
						padding: "35px",
						borderRadius: "14px",
						boxShadow:
							"0 10px 30px rgba(0,0,0,0.1)",
					}}
				>
					<h1 style={{ textAlign: "center" }}>
						Treatment Records
					</h1>

					{records.length === 0 ? (
						<p
							style={{
								textAlign: "center",
								color: "#6b7280",
							}}
						>
							No treatment records available.
						</p>
					) : (
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								gap: "20px",
								marginTop: "25px",
							}}
						>
							{records.map((r) => (
								<div
									key={r.id}
									style={{
										padding: "20px",
										borderRadius: "12px",
										backgroundColor: "#f9fafb",
										boxShadow:
											"0 4px 12px rgba(0,0,0,0.08)",
									}}
								>
									<p>
										<strong>Date:</strong>{" "}
										{r.date}
									</p>
									<p>
										<strong>Diagnosis:</strong>{" "}
										{r.diagnosis}
									</p>
									<p>
										<strong>Prescription:</strong>{" "}
										{r.prescription}
									</p>
									<p>
										<strong>Immunization:</strong>{" "}
										{r.immunization}
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			<Footer />
		</>
	);
};

export default TreatmentRecordViewer;
