var app = new Vue({
   el: '#app',

   data: {
    mensaje: 'hola mundillo',
    nuevaTarea:null,
    tareas:[
    { titulo: 'Aprender angular',
      prioridad:true,
      antigueadad: 120
    },
    { titulo: 'Aprender ES5',
      prioridad:false,
      antigueadad: 142
    },
    { titulo: 'Aprender vuejs',
      prioridad:true,
      antigueadad: 0
    }
    ]
   },
   methods:{
    agregarTarea(){
      
      this.tareas.unshift({
        titulo: this.nuevaTarea,
        prioridad: false,
        antigueadad: 0,
      });
          this.nuevaTarea = null;
          }
      },
      computed:{
        mensajeAlrrevez(){
           return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad(){
          return this.tareas.filter((tarea)=>tarea.prioridad);
        },
        tareasPorAntiguedad(){
          return this.tareas.sort((a, b) => b.antigueadad -a.antigueadad);
        }
      }

})
