export function determinarBisiesto(anio){
    return anio % 400 === 0 ? true:
           anio % 100 === 0 ? false:
           false
}