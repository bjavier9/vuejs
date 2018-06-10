const app = new Vue({
   el: '#app',

   data: {
   mensaje: 'instancia vue.js'
   },

   beforeUpdate(){
    console.log('BeforeUpdate:', this.mensaje);
   },
   updated(){
    console.log('update: ',this.mensaje)
   },
   methods:{
      alReves(){
        this.mensaje = this.mensaje.split('').reverse().join('');
        vm.mensaje='hola chavalada'
      }
      },
      computed:{
        mensajeMayuscula(){
          return this.mensaje.toUpperCase();
       
      }
    }
});

const vm = new Vue({
   el: '#vm',

   data: {
   mensaje: 'instancia vue.js 2'
   }
})
