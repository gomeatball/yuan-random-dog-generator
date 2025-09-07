import React from "react";
import { useState, useEffect } from "react";
import { DogPhotoCard } from "./DogPhotoCard";


//create your first component
const Home = () => {
 const [photo, setPhoto] = useState("");

useEffect(()=> {
	
		const fetchData = async() => {
	    const response = await fetch("https://dog.ceo/api/breeds/image/random");
		if (!response.ok) {
			throw new Error("cannot find correct fetched response");
			
		}
		const data = await response.json();
		console.log(data);
		const dogPhoto = data.message;
		setPhoto(dogPhoto);
	}
		

	fetchData();
},[])
	return (
		<div>
		<DogPhotoCard image={photo}/>

		</div>
	);
};

export default Home;