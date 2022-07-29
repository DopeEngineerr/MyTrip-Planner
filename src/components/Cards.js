import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
	return (
		<div className="cards">
			<h1>Check out these EPIC Destinations!</h1>
			<div className="cards__container">
				<div className="cards__wrapper">
					<ul className="cards__items">
						<CardItem
							src="images/img-9.jpg"
							text="One of the most popular hill stations in Himachal, Manali offers the most magnificent views of the Pir Panjal and the Dhauladhar ranges covered with snow for most parts of the year."
							label="Adventure"
							path="/services"
						/>
						<CardItem
							src="images/img-20.jpg"
							text="Formerly known as Laccadive Islands, Lakshadweep translates to 'one hundred thousand islands' in Malayalam. Home to a few of the most beautiful and exotic islands and beaches of India."
							label="Luxury"
							path="/services"
						/>
					</ul>
					<ul className="cards__items">
						<CardItem
							src="images/img-3.jpg"
							text="Udaipur, also known as the City of Lakes, is one of the most visited tourist places in Rajasthan. Located around stunning water lakes."
							label="Mystery"
							path="/services"
						/>
						<CardItem
							src="images/img-4.jpg"
							text="Nainital is a charming hill station located at the foothills of the Kumaon ranges in Uttarakhand. Located close to Dehradun."
							label="Adventure"
							path="/products"
						/>
						<CardItem
							src="images/img-80.jpg"
							text="World's oldest living city, Varanasi - also known as Kashi (City of Life) and Benaras, is the spiritual capital of India."
							label="Religious"
							path="/sign-up"
						/>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Cards;
