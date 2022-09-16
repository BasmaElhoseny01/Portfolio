import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

//Styling
import '../Style/Projects.css'
//Data
import Tags_Data from '../Data/Tags.js'

import Avatar from './Avatar'

function parseISOString(s) {
	var b = s.split(/\D+/);
	return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

function Projects() {

	const [Projects_arr, setProjects] = useState([]);
	const [Counter, setCounter] = useState(4);

	const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	let Date_Var;

	const FetchProjects = () => {

		axios.get("https://api.github.com/users/BasmaElhoseny01/repos").then((response) => {
			setProjects(response.data)
		})
	}

	let QR_API = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
	//useEffect
	useEffect(() => {
		FetchProjects();
	}, [])

	return (
		<div className="ProjcetsContainer">
			<div className='Avatar'><Avatar Arr={["P","r","o","j","e","c","t","s"]} Max={8}/></div>
			<div className='Projects'>
				{
					Projects_arr.slice(0, Counter).map((product) => {
						return (
							<article className="product-card" key={product.id}>
								{product.language == null ? null : <div className="product-card__promotion"><span>{product.language}</span></div>}
								<div className="product-card__body">
									<h1 className='Title'>{product.name}</h1>
									<p className='Description'>{product.description}</p>
									<div className="QRCode_Tags">
										<div className="Tags">
											{product.topics.map((topic) => {
												return (
													(Tags_Data[topic] == undefined) ? null : <img className="Tag" key={topic} src={Tags_Data[topic]} alt={topic} />
												)
											})}
										</div>
										<img className='QRCode' src={QR_API + product.html_url} alt="QR code" />
									</div>
								</div>
								<div className="product-card__footer">
									{/* {Date_Var=parseISOString(product.pushed_at)} */}
									<h5 className='Date'>{month[parseISOString(product.pushed_at).getMonth()] + " " + parseISOString(product.pushed_at).getDay() + ", " + parseISOString(product.pushed_at).getFullYear()}</h5>
									{/* <h1>{Date.parse(product.pushed_at).getDay()}</h1> */}
									<button className="product-card__button" onClick={() => {
										window.location = product.html_url;
									}}>View on GitHub</button>
								</div>
							</article>
						)
					})
				}

				{Counter < Projects_arr.length ? <button className="ViewMore" onClick={() => {
					setCounter(Counter + 4)
				}}>View More</button> : null}
			</div>
		</div>
	)
}

//Title 
//date

//language
//descirpion
//topics 
//link

export default Projects