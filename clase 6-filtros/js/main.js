var app = new Vue({
   el: '#app',

   data: {
    busqueda: '',
    minimo: 5,
    juegos:[
    { titulo: 'Mario party',
      prioridad:'aventura',
      puntuacion: 5
    },
    { titulo: 'Need for speed',
      prioridad:'carreras',
      puntuacion: 9
    },
    { titulo: 'Gran turismo sport',
      genero:'carreras',
      puntuacion: 10
    }
    ]
   },
   methods:{
    
      },
      computed:{
        mejoresJuegos(){
          return this.juegos.filter((juego)=>juego.puntuacion>=this.minimo);
        },
        buscarJuegos(){
          return this.juegos.filter((juego)=> juego.titulo.includes(this.busqueda));
        }
      }

})
