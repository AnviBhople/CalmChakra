import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";

export default function AccountCreated() {
	const container = {
		margin: "5rem 0 5rem 35rem",
		height: "44rem",
		width: "40rem",
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
		backgroundColor: "#ffffff",
		boxShadow: "20px 20px 20px black",
		borderRadius: "10px",
		padding: "2rem 3rem 2rem 3rem",
		border: "2px solid #ffffff",
	};
	const Async = {
		textDecoration: "none",
		marginLeft: "5rem",
		color: "darkblue",
	};
	const H1 = {
		FontFamily: "Arial",
		fontWeight: "bolder",
		fontSize: "3rem",
		TextAlign: "center",
	};
	const Btn = {
		cursor: "pointer",
		marginLeft: "7rem",
		width: "20rem",
		height: "5rem",
		backgroundColor: "#4BB543",
		border: "1rem solid #4BB543",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "x-large",
	};
	const handleClick = () => {
		alert("Your account has been created successfully.");
		console.log("Your account has been created successfully.");
	};
	useEffect(() => {
		const finalBtn = document.getElementById("finalbtn");
		finalBtn.addEventListener("click", handleClick);
	});
	return (
		<>
			<div className="conatiner" style={container}>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<br></br>
				<h1 style={H1} onClick={handleClick}>
					Your account has been created successfully.
				</h1>
				<br />
				<br />
				<br />
				<br />
				<br />
				<button type="submit" style={Btn} id="finalbtn">
					Done
				</button>
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
