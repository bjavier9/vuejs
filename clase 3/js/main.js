var app = new Vue({
   el: '#app',
   data: {
    comidas:['arroz con pollo','carne','arroz con gato','poroto'],
    tareas:[{nombre:'hacer la compra',prioridad:'baja'},
    {nombre:'Aprende vue y firebase', prioridad:'alta'},
    {nombre:'Ir al gimnasio', prioridad:'alta'}],
    persona:{
    nombre: 'Pedro',
    profesion:'dev',
    ciudad:'valencia'
   }
   },

})
