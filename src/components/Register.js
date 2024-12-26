import React, { useEffect } from "react";
import CalmChakra from "./CalmChakra.png";
import { Link } from "react-router-dom";

export default function Register() {
	const handleClick = () => {
		alert("You are registered successfully.");
		console.log("You are registered successfully.");
	};
	useEffect(() => {
		const btn = document.getElementById("btn");
		btn.addEventListener("click", handleClick);
	});
	const container = {
		margin: "5rem 0 5rem 35rem",
		height: "44rem",
		width: "40rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
		boxShadow: "20px 20px 20px black",
		borderRadius: "10px",
		padding: "2rem 3rem 2rem 3rem",
		border: "2px solid #ffffff",
		color: "#8f2d56",
		fontFamily: "Times New Roman",
	};
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};
	const label = {
		width: "18rem",
		marginLeft: "3rem",
		// fontWeight: "normal",
		// fontFamily: "sans-serif",
		fontSize: "larger",
		fontWeight: "bold",
	};
	const input = {
		height: "2.5rem",
		width: "20rem",
		marginLeft: "3rem",
		backgroundColor: "whitesmoke",
		border: "2px solid #e7ecef",
		borderRadius: "1rem",
		paddingLeft: "1rem",
	};
	const submitBtn = {
		cursor: "pointer",
		marginLeft: "4rem",
		width: "20rem",
		backgroundColor: "#1e96fc",
		border: "1rem solid #1e96fc",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "1.4rem",
	};
	const mainHead = {
		fontWeight: "bolder",
		fontSize: "2.5rem",
		fontFamily: "Cambria",
		textAlign: "center",
	};
	const para = {
		textAlign: "center",
		fontFamily: "Cambria",
		fontSize: "1.5rem",
	};
	return (
		<>
			<nav className="navbar navbar-expand-lg custom-navbar">
				<div className="container-fluid">
					<Link className="logo-img" to="/">
						<img src={CalmChakra} className="logoimg" alt="LogoImg" />
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="/navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" to="/about" id="about-link">
									&ensp;&ensp;About&ensp;
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/blog" id="blog-link">
									&ensp;Blog&ensp;
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/classes" id="classes-link">
									&ensp;Classes&ensp;
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/events" id="events-link">
									&ensp;Events&ensp;
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link"
									to="/instructors"
									id="instructors-link">
									&ensp;Instructors&ensp;
								</Link>
							</li>
						</ul>
						<Link to="/account">
							<button
								class="account-click-btn"
								type="submit"
								id="account-link-btn">
								Sign in
							</button>
						</Link>
					</div>
				</div>
			</nav>
			<div className="container" style={container}>
				<div className="content">
					<h2 style={mainHead}>Register here</h2>
					<br />
					<p style={para}>Please fill the following information.</p>
					<br />
					<form>
						<label htmlFor="userName" style={label}>
							Name
						</label>
						<br />
						<input
							type="text"
							name="userName"
							id="name"
							style={input}
							required
						/>
						<br />
						<br />
						<label htmlFor="userEmail" style={label}>
							Email
						</label>
						<br />
						<input
							type="email"
							name="userEmail"
							id="email"
							style={input}
							required
						/>
						<br />
						<br />
						<label htmlFor="number" style={label}>
							Contact number (optional)
						</label>
						<br />
						<input type="number" style={input} />
						<br />
						<br />
						<label htmlFor="history" style={label}>
							Medical History (if any)
						</label>
						<br />
						<input type="text" style={input} />
						<br />
						<br />
						<br />

						<button type="submit" id="btn" style={submitBtn}>
							Submit
						</button>
					</form>
				</div>
			</div>
			<div className="footer">
				<footer>
					<h3 className="footer-content">
						With ❤️ from
						<Link to="/" className="async" style={Async}>
							<img src={CalmChakra} className="logoimg" alt="logo" />
						</Link>
					</h3>
					<div className="connect">
						<p className="para-connect">Connect with us</p>
						<Link to="/" className="connect-links">
							LinkedIn &ensp;
						</Link>
						<Link to="/" className="connect-links">
							Instagram&ensp;
						</Link>
						<Link to="/" className="connect-links">
							Facebook&ensp;
						</Link>
						<br />
					</div>
				</footer>
			</div>
		</>
	);
}
