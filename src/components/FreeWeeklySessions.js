import React from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";

export default function FreeWeeklySessions() {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};
	const container = {
		margin: "5rem 0 5rem 35rem",
		height: "45rem",
		width: "45rem",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#ffffff",
		boxShadow: "20px 20px 20px black",
		borderRadius: "10px",
		padding: "2rem 3rem 2rem 3rem",
		border: "2px solid #ffffff",
		fontFamily: "Times New Roman",
		color: "#8f2d56",
	};
	const Main = {
		textDecoration: "none",
		fontWeight: "bold",
		color: "#8f2d56",
	};
	const Btn = {
		cursor: "pointer",
		marginLeft: "10rem",
		width: "20rem",
		backgroundColor: "#1e96fc",
		border: "1rem solid #1e96fc",
		borderRadius: "1rem",
		color: "#fff",
		fontWeight: "bold",
		fontSize: "1.4rem",
	};
	const head1 = {
		fontWeight: "bolder",
		fontSize: "3rem",
		color: "#8f2d56",
	};
	const Badge = {
		marginLeft: "16rem",
	};
	const para = {
		fontWeight: "bold",
		fontSize: "1.2rem",
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
					<h2 style={head1}>Free Weekly Session&ensp;</h2>
					<br />
					<h2>
						<span class="badge text-bg-success" style={Badge}>
							New
						</span>
					</h2>
					<br />

					<p style={para}>
						This is a free weekly session on every sunday morning. This session
						is specially curated for those who can't attend the regular
						sessions. In this special session, we will cover some important
						practces like mindful meditation, streches, yoga asans for all and
						some tips and tricks from health and yoga experts.
					</p>
					<li style={para}>Time: 6 AM - 9 AM</li>
					<li style={para}>Duration: 3 hours</li>
					<li style={para}>
						Mode: Online <br />
						**Link will be made available on the &ensp;
						<Link to="/" style={Main}>
							CalmChakra.com
						</Link>
						&ensp;half an hour before the session.**
					</li>
					<br />
					<br />
					<Link to="/confirm">
						<button style={Btn}>Register now</button>
					</Link>
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
