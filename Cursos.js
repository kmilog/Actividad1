const Opciones = {
    Nombre:{
        demand: true
    },
    IdCurso : {
        demand: true,
    },
    Cedula : {
        demand: true
    }
}; 

const Cursos = 
    [{
        id : 1,
        nombre : 'Ingles',
        duracion : '30 Horas',
        valor : 50000   
    },
    {
        id : 2,
        nombre : 'Programacion',
        duracion : '90 Horas',
        valor : 100000   
    },
    {
        id : 3,
        nombre : 'Base de Datos',
        duracion : '80 Horas',
        valor : 80000   
    }      
]

let ObtenerCursoPorID = (id,time,callback) => {
    setTimeout(() => {
        let curso = Cursos.find(x => x.id == id);
        if(curso != undefined)
        {
            callback(curso);
        }else{
            throw new TypeError('El id del curso no existe en la base de datos');
        }
    }, time);
}

const argv = require('yargs')
            .command ('inscribir','Realiza la inscripcion al curso', Opciones)
            .argv

module.exports = {ObtenerCursoPorID, argv};

