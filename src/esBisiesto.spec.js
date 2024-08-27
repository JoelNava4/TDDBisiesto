import { determinarBisiesto } from "./esBisiesto";

describe("Determinar si un año es bisiesto", () => {
    it("El año 400 debe ser bisiesto", () => {
      expect(determinarBisiesto(400)).toEqual(true);
    });
  });