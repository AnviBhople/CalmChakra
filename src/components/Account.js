import React from "react";
import { Link } from "react-router-dom";
import googleLogo from "./googleLogo.png";
import CalmChakra from "./CalmChakra.png";

export default function Account() {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};
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
	};
	const content = {
		textAlign: "center",
		width: "100%",
	};
	const mainHead = {
		fontWeight: "bolder",
		fontSize: "2.5rem",
		marginBottom: "1rem",
		fontStyle: "initial",
		color: "#0d1b2a",
	};
	const btn = {
		height: "3rem",
		width: "20rem",
		marginLeft: "4.5rem",
		/* background-color: #e5e5e5; */
		/* background-color: hsl(0, 0%, 90%); */
		backgroundColor: "whitesmoke",
		border: "2px solid #e7ecef",
		borderRadius: "1rem",
	};
	const GoogleImg = {
		height: "2rem",
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
	const or = {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: "x-large",
		fontFamily: "sans-serif",
		marginLeft: "3rem",
	};
	const SubmitBtn = {
		cursor: "pointer",
		marginLeft: "5rem",
		width: "20rem",
		backgroundColor: "#1e96fc",
		border: "1rem solid #1e96fc",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "larger",
	};
	const Async1 = {
		textDecoration: "none",
		marginLeft: "5rem",
		color: "darkblue",
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
			<div class="container" style={container}>
				<div class="content" style={content}>
					<h3 id="mainHead" style={mainHead}>
						<br />
						<br />
						Create your account
					</h3>
					<h4>Welcome! Please enter your details.</h4>
					<br />
					<Link to="/signupwithGoogle">
						<button id="googlebtn" style={btn}>
							<div class="googlesignup">
								<img
									src={googleLogo}
									alt="Google logo"
									id="googlelogo"
									style={GoogleImg}
								/>
								&ensp;Sign up with Google
							</div>
						</button>{" "}
					</Link>
					<br />
					<br />
					<p id="or" style={or}>
						Or
					</p>

					<label for="username" class="infoLabel" style={Labels}>
						Name
					</label>
					<br />
					<input
						type="text"
						id="username"
						required
						placeholder="Enter your name here."
						class="infoInput"
						style={Input}
					/>
					<br />
					<br />
					<br />
					<label for="Email" class="infoLabel" style={Labels}>
						Email
					</label>
					<br />
					<input
						type="email"
						id="email"
						placeholder="Enter your email here."
						class="infoInput"
						required
						style={Input}
					/>
					<br />
					<br />
					<br />
					<label for="Password" class="infoLabel" style={Labels}>
						Password
					</label>
					<br />
					<input
						type="password"
						id="pass"
						placeholder="********"
						class="infoInput"
						required
						style={Input}
					/>
					<br />

					<br />
					<br />
					<Link to="/accountcreated">
						<button id="signupbtn" style={SubmitBtn}>
							Sign Up
						</button>
					</Link>
					<br />
					<div>
						<Link to="/login" id="loginlink" style={Async1}>
							Already have an account? Sign in
						</Link>
					</div>
					<br />
					<br />
					<br />
					<br />
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
