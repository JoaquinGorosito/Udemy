import '../css/componentes.css';
import logo from '../assets/img/hola.jpg';


export const saludar = (nombre) => {
	console.log("Creando etiqueta h1");

	const h1 = document.createElement("h1");
	h1.innerText = `Hola ${nombre}!!!`;

	document.body.append(h1);

	//img
	// console.log(logo);
	// const img = document.createElement('img');
	// img.src = logo;
	// document.body.append(img);
};


