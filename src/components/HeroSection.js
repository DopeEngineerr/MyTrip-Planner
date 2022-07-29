import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
	return (
		<div className="hero-container">
			<video src="/videos/video-1.mp4" autoPlay loop muted />
			<h1>PLAN YOUR TRIP TODAY!</h1>
			<p>
				Create your travel itinerary. Book your accommodation, tours & flights
				as a package online.
			</p>
			<div className="hero-btns">
				<Button
					className="btns"
					buttonStyle="btn--outline"
					buttonSize="btn--large"
				>
					CREATE ACCOUNT
				</Button>
				<Button
					className="btns"
					buttonStyle="btn--primary"
					buttonSize="btn--large"
					onClick={console.log("hey")}
				>
					ABOUT US <i className="far fa-play-circle" />
				</Button>
			</div>
		</div>
	);
}

export default HeroSection;
