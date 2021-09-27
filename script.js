let nota = 0.0;
let suma = 0.0;
let promedio = 0.0;
let baja = 0.0;

nota = Number(prompt('Ingrese nota del estudiante ' + 1));
baja = nota;

for(let i=1;i<40;i++){
    nota = Number(prompt('Ingrese nota del estudiante ' + (i+1)));
    suma = suma + nota;
    if(nota<baja){
        baja = nota;
    }    
}

promedio = suma/40;

alert(`El promedio de las notas es: ${promedio}
        La nota más baja es: ${baja}`);
