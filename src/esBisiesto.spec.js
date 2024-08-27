import { determinarBisiesto } from "./esBisiesto";

describe("Determinar si un año es bisiesto", () => {
    it("El año 400 debe ser bisiesto", () => {
      expect(determinarBisiesto(400)).toEqual(true);
    });

    it("Un año que no es divible entre 400 no debe ser bisiesto bajo la primera regla", () => {
        expect(determinarBisiesto(401)).toEqual(false);
    });

    it("Un año que es divible entre 100 y no por 400 no debe ser bisiesto", () => {
        expect(determinarBisiesto(1900)).toEqual(false);
      });
    
});