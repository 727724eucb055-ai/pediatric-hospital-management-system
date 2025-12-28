import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const GrowthTracker = () => {
	const [records, setRecords] = useState([]);
	const [form, setForm] = useState({
		height: "",
		weight: "",
		vaccination: "",
		milestone: "",
	});

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (!user || !user.email) {
			window.location.href = "/login";
			return;
		}

		const allGrowth =
			JSON.parse(localStorage.getItem("growthRecords")) || [];

		const myRecords = allGrowth.filter(
			(g) => g.email === user.email
		);

		setRecords(myRecords);
	}, []);

	const saveGrowth = (e) => {
		e.preventDefault();

		const user = JSON.parse(localStorage.getItem("user"));
		if (!user) return;

		const allGrowth =
			JSON.parse(localStorage.getItem("growthRecords")) || [];

		const newRecord = {
			id: Date.now(),
			email: user.email,
			date: new Date().toLocaleDateString(),
			height: form.height,
			weight: form.weight,
			vaccination: form.vaccination,
			milestone: form.milestone,
		};

		allGrowth.push(newRecord);
		localStorage.setItem(
			"growthRecords",
			JSON.stringify(allGrowth)
		);

		setRecords([...records, newRecord]);
		setForm({
			height: "",
			weight: "",
			vaccination: "",
			milestone: "",
		});

		alert("Growth record saved successfully");
	};

	return (
		<>
			<Navbar />

			<div style={page}>
				<div style={card}>
					<h1 style={{ textAlign: "center" }}>
						Growth & Development Tracker
					</h1>

					{/* INPUT FORM */}
					<form onSubmit={saveGrowth} style={formBox}>
						<input
							style={input}
							placeholder="Height (cm)"
							value={form.height}
							required
							onChange={(e) =>
								setForm({
									...form,
									height: e.target.value,
								})
							}
						/>
						<input
							style={input}
							placeholder="Weight (kg)"
							value={form.weight}
							required
							onChange={(e) =>
								setForm({
									...form,
									weight: e.target.value,
								})
							}
						/>
						<input
							style={input}
							placeholder="Vaccination (if any)"
							value={form.vaccination}
							onChange={(e) =>
								setForm({
									...form,
									vaccination: e.target.value,
								})
							}
						/>
						<input
							style={input}
							placeholder="Developmental Milestone"
							value={form.milestone}
							onChange={(e) =>
								setForm({
									...form,
									milestone: e.target.value,
								})
							}
						/>

						<button style={btn}>Save Record</button>
					</form>

					{/* RECORDS LIST */}
					{records.length === 0 ? (
						<p style={empty}>
							No growth records available.
						</p>
					) : (
						<div style={list}>
							{records.map((r) => (
								<div key={r.id} style={item}>
									<p>
										<strong>Date:</strong>{" "}
										{r.date}
									</p>
									<p>
										<strong>Height:</strong>{" "}
										{r.height} cm
									</p>
									<p>
										<strong>Weight:</strong>{" "}
										{r.weight} kg
									</p>
									<p>
										<strong>Vaccination:</strong>{" "}
										{r.vaccination || "—"}
									</p>
									<p>
										<strong>Milestone:</strong>{" "}
										{r.milestone || "—"}
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

/* STYLES – SAME THEME AS LOGIN / RECORDS */

const page = {
	minHeight: "80vh",
	backgroundColor: "#f9fafb",
	padding: "40px 20px",
};

const card = {
	maxWidth: "900px",
	margin: "auto",
	backgroundColor: "#ffffff",
	padding: "35px",
	borderRadius: "14px",
	boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const formBox = {
	display: "grid",
	gridTemplateColumns: "1fr 1fr",
	gap: "15px",
	marginBottom: "30px",
};

const input = {
	padding: "12px",
	borderRadius: "8px",
	border: "1px solid #d1d5db",
	fontSize: "14px",
};

const btn = {
	gridColumn: "1 / -1",
	padding: "12px",
	backgroundColor: "#4CAF50",
	color: "white",
	border: "none",
	borderRadius: "25px",
	cursor: "pointer",
};

const list = {
	display: "flex",
	flexDirection: "column",
	gap: "15px",
};

const item = {
	backgroundColor: "#f9fafb",
	padding: "20px",
	borderRadius: "12px",
	boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
};

const empty = {
	textAlign: "center",
	color: "#6b7280",
};

export default GrowthTracker;
