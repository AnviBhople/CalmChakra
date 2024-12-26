import React from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";

export default function About() {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};
	const container = {
		margin: "5rem 0 5rem 27rem",
		height: "48rem",
		width: "60rem",
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
	const Head = {
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
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
			<div className="container" style={container}>
				<div className="content">
					<h2 style={Head}>About CalmChakra</h2>
					<p>
						Welcome to CalmChakra, your sanctuary for mental well-being and
						personal growth. We’re dedicated to providing a safe space that
						fosters relaxation, mindfulness, and support. In today’s fast-paced
						world, we believe that mental health is paramount, and our mission
						is to make it accessible for everyone.
					</p>
					<p>
						At CalmChakra, we blend scientifically-backed mental wellness
						techniques with community support to help you achieve a balanced and
						peaceful life. Whether you’re looking to practice mindfulness,
						manage stress, or simply explore tools for a calmer mind, we’re here
						to guide you every step of the way.
					</p>
					<br />
					<h3 style={Head}>Our Vision</h3>
					<p>
						We envision a world where mental health is prioritized, and everyone
						has access to the tools and support they need for personal peace and
						resilience. Through CalmChakra, we aim to build a community of
						compassionate individuals who uplift each other and navigate life’s
						challenges together.
					</p>
					<br />
					<h3 style={Head}>Why Choose CalmChakra?</h3>
					<ul>
						<li>Access to a variety of mental health resources</li>
						<li>Guided practices in mindfulness and relaxation</li>
						<li>A community-driven support network</li>
						<li>
							Personalized tools to help track and manage your wellness journey
						</li>
					</ul>
					<p>
						Join us in creating a balanced, mindful, and peaceful life. Let
						CalmChakra be your partner in discovering a calmer, more fulfilling
						existence.
					</p>
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
