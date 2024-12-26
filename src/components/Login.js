import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";

export default function Login() {
	const handleClick = () => {
		alert("You have been logged in your account successfully.");
		console.log("You have been logged in your account successfully.");
	};
	useEffect(() => {
		const btn = document.getElementById("loginbtn");
		btn.addEventListener("click", handleClick);
	});
	const container = {
		margin: "5rem 0 5rem 35rem",
		height: "35rem",
		width: "40rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
		boxShadow: "20px 20px 20px black",
		borderRadius: "10px",
		padding: "2rem 3rem 2rem 3rem",
		border: "2px solid #ffffff",
	};

	const LoginlogoStyle = {
		fontSize: "xx-large",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	};

	const Async = {
		textDecoration: "none",
		marginLeft: "5rem",
		color: "darkblue",
	};
	const Img = {
		height: "7rem",
		width: "7rem",
		objectFit: "cover",
	};
	const mainHead = {
		fontWeight: "bolder",
		fontSize: "2.5rem",
		marginBottom: "1rem",
		fontStyle: "initial",
		color: "#0d1b2a",
		textAlign: "center",
	};

	const Labels = {
		width: "18rem",
		marginLeft: "3rem",
		// fontWeight: "normal",
		fontFamily: "sans-serif",
		fontSize: "larger",
		fontWeight: "bold",
	};
	const Input = {
		height: "2.5rem",
		width: "20rem",
		marginLeft: "3rem",
		backgroundColor: "whitesmoke",
		border: "2px solid #e7ecef",
		borderRadius: "1rem",
		paddingLeft: "1rem",
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

			<div className="login-container" style={container}>
				<div className="containerinLogin">
					<div className="login">
						<h1 id="login-head" style={mainHead}>
							Sign In
							<h5>Welcome back! Please enter your details</h5>
						</h1>
					</div>

					<i
						id="loginlogo"
						className="fa-solid fa-right-to-bracket"
						style={LoginlogoStyle}></i>
					<br />
					<form>
						<label htmlFor="email" id="emailloglabel" style={Labels}>
							Email
						</label>
						<br />
						<input
							type="email"
							id="emaillogin"
							placeholder="Enter your email here"
							required
							style={Input}
						/>
						<br />
						<br />
						<label htmlFor="password" id="passloglabel" style={Labels}>
							Password
						</label>
						<br />
						<input
							type="password"
							id="passwordlogin"
							placeholder="********"
							required
							style={Input}
						/>
						<br />
						<br />
						<div className="check">
							<input type="checkbox" id="checkbox" required /> I accept all the
							terms and conditions
						</div>
						<br />

						<button type="submit" style={Btn} id="loginbtn">
							Sign in
						</button>
					</form>
				</div>
			</div>
			<div className="footer">
				<footer>
					<h3 className="footer-content">
						With ❤️ from
						<Link to="/" className="async" style={Async}>
							<img
								src={CalmChakra}
								className="logoimg"
								alt="logo"
								style={Img}
							/>
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
