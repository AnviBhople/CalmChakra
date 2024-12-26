import React from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";
import googleLogo from "./googleLogo.png";

export default function SignupwithGoogle() {
	const GooglecontainerStyle = {
		backgroundColor: "#fefeff",
		height: "40rem",
		width: "30rem",
		// display: "flex",
		// justifyContent: "center",
		// alignItems: "center",
		border: "2px solid #ccc9dc",
		borderRadius: "10%",
		border: "radius top 20%",
		marginBottom: "10rem",
		marginTop: "2rem",
		boxShadow: "20px 20px 20px black",
		marginLeft: "39rem",
	};
	const Btn = {
		cursor: "pointer",
		marginLeft: "5rem",
		width: "20rem",
		backgroundColor: "#4BB543",
		border: "1rem solid #4BB543",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "larger",
	};
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};
	const GoogleheadLogo = {
		textAlign: "center",
		fontWeight: "bolder",
		fontSize: "3rem",
		fontStyle: "initial",
		color: "#8f2d56",
		// marginRight: "2rem",
		fontFamily: "Times New Roman",
	};
	const H4 = {
		fontFamily: "Times New Roman",
		textAlign: "center",
		color: "#8f2d56",
		fontWeight: "bold",
	};
	const label = {
		fontFamily: "Times New Roman",
		color: "#8f2d56",
		fontWeight: "bolder",
		fontSize: "1.6rem",
		marginLeft: "6rem",
	};
	const input = {
		height: "2.5rem",
		width: "20rem",
		marginLeft: "5rem",
		backgroundColor: "whitesmoke",
		border: "2px solid #e7ecef",
		borderRadius: "1rem",
		paddingLeft: "1rem",
	};
	const para = {
		marginLeft: "3rem",
		marginRight: "2rem",
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
			<div className="Google-conatiner" style={GooglecontainerStyle}>
				<div className="box">
					<br />
					<br />
					<h1 className="google-head" style={GoogleheadLogo}>
						Sign Up
					</h1>
				</div>
				<h4 style={H4}>Continue with Google</h4>
				<br />
				<br />
				<br />
				<div className="input-conatiner">
					<label htmlFor="emailOrPhone" style={label}>
						Email or phone
					</label>
					<br />
					<input
						type="text"
						id="emailOrPhone"
						name="emailOrPhone"
						style={input}
					/>
				</div>
				<br />
				<br />
				<br />
				<p style={para}>
					To continue, Google will share your name, email address, language
					preference and profile picture. Before using, you can check their
					privacy polich through their official website.
				</p>
				<br />
				<Link to="/next">
					<button className="button" id="nextbtn" style={Btn}>
						Next
					</button>
				</Link>
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
