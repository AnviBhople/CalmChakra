import React from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";
import googleLogo from "./googleLogo.png";

export default function Next() {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};
	const NextStyle = {
		boxSizing: "border-box",
		backgroundColor: "#fefeff",
		height: "40rem",
		width: "30rem",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		border: "2px solid #ccc9dc",
		borderRadius: "4%",
		// border: "radius top 20%",
		// marginBottom: "10rem",
		// marginTop: "2rem",
		boxShadow: "20px 20px 20px black",
		marginLeft: "39rem",
		color: "#8f2d56",
	};

	const GoogleLogoStyle = {
		height: "6rem",
		width: "6rem",
		marginLeft: "11rem",
	};

	const ParaStyle = {
		color: "#8f2d56",
		fontSize: "large",
		marginLeft: "2rem",
		marginRight: "2rem",
		textAlign: "center",
	};

	const BtnStyle = {
		cursor: "pointer",
		marginLeft: "4rem",
		// marginRight: "2rem",
		width: "20rem",
		backgroundColor: "#1e96fc",
		border: "1rem solid#1e96fc",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "larger",
	};

	const handleClick = () => {
		const btnid = document.getElementById("submitbtn");
		btnid.addEventListener("click", () => {
			console.log("You have been logged through your Google account.");
			alert("You have been logged through your Google account.");
		});
	};

	const H4Style = {
		fontWeight: "bold",
		fontSize: "x-large",
		color: "#8f2d56",
		textAlign: "center",
		fontFamily: "Times New Roman",
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
					</div>
				</div>
			</nav>
			<br />
			<br />
			<div className="container" style={NextStyle}>
				<div className="box">
					<img
						src={googleLogo}
						id="googlelogo"
						style={GoogleLogoStyle}
						alt="GoogleLogo"></img>
					<br />
					<br />
					<br />
					<h4 style={H4Style}>Continuing with Google</h4>
					<br />
					<br />
					<p id="paranext" style={ParaStyle}>
						Signning with your currently active Google account.By this you have
						accepted all the terms and conditions. If you wish to check them,
						you can kindly visit the Google terms and conditions.
					</p>
					<br />
					<div>
						<button
							type="submit"
							id="submitbtn"
							style={BtnStyle}
							onClick={handleClick}>
							Sign up
						</button>
					</div>
				</div>
			</div>
			<br />
			<br />
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
