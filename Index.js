const {ObtenerCursoPorID, argv} = require('./Cursos');
const fs = require('fs');

if(argv._[0] == undefined){
    console.log('Cursos Ofrecidos');

    let tiempo = 2000;
    for(let i = 1; i <= 3; i++){
        ObtenerCursoPorID(i,tiempo,function(resultado){
            console.log(resultado);
        });
        tiempo += 2000;
    }
}else if(argv._[0] == 'inscribir'){
    ObtenerCursoPorID(argv.IdCurso,0,function(resultado){
        console.log('El curso seleccionado es ' + resultado.nombre + ' Duracion: ' + resultado.duracion + ' Valor: ' + resultado.valor);
        texto = 'Nombre Aspirante: ' + argv.Nombre + '\n' +
                'Cedula: ' + argv.Cedula + '\n' +
                'Curso: ' + resultado.nombre + ' Duracion: ' + resultado.duracion + ' Valor: ' + resultado.valor;
        fs.writeFile('Informacion.txt',texto,(error) => {
            if(error) throw (error);
            console.log('Archivo generado exitosamente');
        });   
    });
}


