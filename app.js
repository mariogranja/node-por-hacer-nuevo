const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

const colors = require('colors');

let comando = argv._[0];
//console.log(argv);

switch (comando) {
    case ('crear'):
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case ('listar'):
        let listado = porHacer.getListado();
        for(let tarea of listado){
            console.log('=====POR HACER======.'.green);
            console.log(tarea.descripcion);
            console.log(tarea.completado);
            console.log('===================='.green);

        }
        break;
    case ('actualizar'):
        porHacer.actualizar(argv.descripcion, argv.completado);
        break;  
    case ('borrar') :
        let bol = porHacer.borrar(argv.descripcion);
        console.log(bol);
        break;  
    
    default: console.log('Comando no encontrado');
}