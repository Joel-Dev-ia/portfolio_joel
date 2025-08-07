/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/image5.jpg',
		title: 'Restaurant',
		skills: ['', 
			''],
		descripcion:
			'Découvrez l’authenticité et la richesse des saveurs de Ouidah, préparées avec passion et transmises de génération en génération pour éveiller vos papilles.',
		demoURL: 'https://ouidah-sarveurs.netlify.app/',
		repoURL: '',
		anim: 'fade-right',
	},

	{
		imgSrc: 'https://www.corse.mx/cdn/shop/files/tienda_lenceria-lenceria-hot_sale-ofertas-mexico-lenceria_seyx-encaje-corse_mx-corse_lenceria_1200_x_560_px_13.png?v=1712270274&width=1500',
		title: 'Coffe Store',
		skills: ['', ''],
		descripcion:
			'Sublimez votre féminité avec notre collection de lingerie élégante et confortable. Des matières douces, des coupes raffinées et un style qui allie séduction et bien-être, pour que chaque femme se sente belle et confiante au quotidien.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},

	{
		imgSrc: 'https://i0.wp.com/themes.svn.wordpress.org/cafe-cafeteria/1.5.3/screenshot.png',
		title: 'Coffe Store',
		skills: ['', ''],
		descripcion:
			'Découvrez l’arôme riche et authentique de notre café fraîchement torréfié, accompagné de délices préparés avec passion. Chaque tasse raconte une histoire de saveurs, de tradition et de convivialité, pour un moment unique à partager.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},

	{
	imgSrc: '/img/image7.png',
    title: 'Calculateur d’Empreinte Carbone',
    skills: [''],
    descripcion:
    'Application web interactive permettant d’estimer l’empreinte carbone grâce à une méthodologie scientifique claire et transparente. Interface moderne et responsive développée avec JavaScript et Bootstrap.',
demoURL: 'https://calcul-empreinte-carbone-client.onrender.com/fonctionnement.html',
repoURL: '',
anim: 'fade-up',
averageBrightness: 0.1,
},
	
     
	
	
	
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
