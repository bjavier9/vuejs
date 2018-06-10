var app = new Vue({
   el: '#app',

   data: {
    nuevaTarea:null,
    tareas:[
      'aprender vue.js',
      'aprende es6',
      'aprender angular'
    ]
   },
   methods:{
    agregarTarea(){
      
      this.tareas.unshift(this.nuevaTarea);
          this.nuevaTarea = null;
          }
   }

})
