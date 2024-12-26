import React from "react";
import { Link } from "react-router-dom";
import CalmChakra from "./CalmChakra.png";
import InstructorM1 from "./Instructor m1.png";
import InstructorM2 from "./Instructor m2.png";
import Instructorf1 from "./Instructor f1.png";
import Instructorf2 from "./Instructor f2.png";

export default function Instructors() {
	const Async = {
		textDecoration: "none",
		fontWeight: "bold",
		fontSize: "xx-large",
		color: "#8f2d56",
	};
	const Card = {
		width: "18rem",
		backgroundColor: "#f4f4f4",
		border: "1px solid #ccc",
		borderRadius: "8px",
		padding: "20px",
		textAlign: "center",
		// width: "calc(50% - 20px)",
		boxShadow: "20px 20px 20px black",
	};
	const cards = {
		display: "flex",
		flexWrap: "wrap",
		gap: "5rem",
		justifyContent: "center",
		// maxWidth: "800px",
		margin: "0 auto",
	};
	const title = {
		fontWeight: "bolder",
		fontFamily: "Times New Roman",
		fontSize: "1.5rem",
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
			<br />
			<br />
			<div className="container">
				<div className="content" style={cards}>
					<div className="card" style={Card}>
						<img
							src={Instructorf1}
							className="card-img-top"
							alt="female inst 1"
						/>
						<div className="card-body">
							<h5 className="card-title" style={title}>
								Aditi Sharma
							</h5>
							<p className="card-text">
								Aditi is passionate about helping students connect their body,
								mind, and spirit through gentle Hatha practices. She emphasizes
								mindfulness and proper breathing techniques.
								<br />
								<br />
								Experience: 6 years
							</p>
						</div>
					</div>
					<div className="card" style={Card}>
						<img
							src={InstructorM1}
							className="card-img-top"
							alt="male inst 1"
						/>
						<div className="card-body">
							<h5 className="card-title" style={title}>
								Robin F
							</h5>
							<p className="card-text">
								With a focus on strength, flexibility, and discipline, Robin's
								classes challenge students to push their limits. His energetic
								approach makes yoga fun and empowering.
								<br />
								<br />
								<br />
								Experience: 8 years
							</p>
						</div>
					</div>
					<div className="card" style={Card}>
						<img
							src={InstructorM2}
							className="card-img-top"
							alt="male inst 2"
						/>
						<div class="card-body">
							<h5 className="card-title" style={title}>
								Abheek Lama
							</h5>
							<p className="card-text">
								Abheek specializes in guiding beginners into the world of yoga
								through dynamic and creative Vinyasa flows. His teaching style
								is approachable and encouraging.
								<br />
								<br />
								Experience: 4 years
							</p>
						</div>
					</div>
					<div className="card" style={Card}>
						<img
							src={Instructorf2}
							className="card-img-top"
							alt="female inst 2"
						/>
						<div className="card-body">
							<h5 className="card-title" style={title}>
								Alaya Josph
							</h5>
							<p className="card-text">
								Alaya combines slow, deep stretches with meditative practices,
								creating a calming and restorative environment. Her classes are
								perfect for relaxation and stress relief.
								<br />
								<br />
								Experience: 5 years
							</p>
						</div>
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
