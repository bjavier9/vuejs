var app = new Vue({
   el: '#app',

   data: {

    tareas:[
      {titulo: 'Hacer la compra', completado: false},
      {titulo: 'Aprender vue', completado: false},
      {titulo: 'Aprender Angular', completado: false}
    ]
   },
   methods:{
      completarTarea(tarea){
        tarea.completado = !tarea.completado;
      }
   },
   computed: {
    tareasCompletadas(){
      return this.tareas.filter((tarea) => tarea.completado);
    }
   }

})
