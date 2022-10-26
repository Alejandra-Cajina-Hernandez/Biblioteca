import { autor } from "./Autor";
import { Copia } from './Copia';
import { Lector } from './Lector';
import { Libro } from "./Libro";
const Alejandra=new autor("Alejandra","Veracruz",5_2007)
console.log(Alejandra)

const lectura=new Libro("Julissa","nueva york",14_08_2003,"la monja","terror","un lugar en silencio",2018)
console.log(lectura);

const Gabriela=new Lector("Gabriela",87655,36747757867, "10 de marzo",354677)
console.log(Gabriela);

