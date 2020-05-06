const argv = require('yargs')
            .command('crear','Crea una tarea por hacer',{
                descripcion : {
                    demand : true,
                    alias: 'd',
                    desc: 'Descripcion de la tarea por hacer'
                }})
            .command('actualizar','Actualiza la tarea por hacer',{
                descripcion : {
                    demand : true,
                    alias: 'd',
                    desc: 'Descripcion de la tarea por hacer'
                },
                completado : {
                    alias : 'c',
                    default : true
                }
            })
            .command('borrar','Borra una tarea por hacer',{
                descripcion : {
                    demand : true,
                    alias: 'd',
                    desc: 'Descripcion de la tarea por hacer'
                }})
            .help().argv;

module.exports = {
    argv
}



