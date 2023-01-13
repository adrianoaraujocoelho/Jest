import Enum from "es6-enum";
import { liquidificadorSucoDeManga } from "./protudos.js";

export const FRUTAS = Enum("manga", "laranja", "uva", "acucarcristal");

liquidificadorSucoDeManga(FRUTAS.manga, FRUTAS.acucarcristal);
