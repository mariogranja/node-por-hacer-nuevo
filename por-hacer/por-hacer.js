const fs = require ('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('./db/data.json',data,(err)=>{
        if(err){
            console.log('Error al guardar el archivo');
        }else{
            console.log('El archivo se guardo correctamente');
        }
    })
}

const cargarDB = () => {
    try{
        listadoPorHacer = require('../db/data.json');
    }catch(err){
        listadoPorHacer = [];
    }   
    
}

const crear = (descripcion) => {
    cargarDB();
     let porHacer = {
         descripcion,
         completado: false
     }
     listadoPorHacer.push(porHacer);

     guardarDB();

     return porHacer;


}

let getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

let actualizar = (descripcion, completado) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }

}

const borrar = (descripcion) => {
    
    cargarDB();
    let fields = listadoPorHacer.length;
    listadoPorHacer = listadoPorHacer.filter(item => item.descripcion != descripcion)
    guardarDB();
    if(fields === listadoPorHacer.length){
        return false;
    }else{
        return true;
    }

}

module.exports = {
    crear,
    getListado, actualizar, borrar
}