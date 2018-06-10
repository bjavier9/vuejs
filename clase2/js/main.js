var app = new Vue({
    el: '#app',
    data: {
        conectado:true,
        edad: 18,
        nombre: "javier",
        todos: [
            { text: 'arroz con pollo' },
            { text: 'arroz con huevo' },
            { text: 'arroz de pavo' }
        ]
    },
    methods:{
        alrrevez: function(){
            this.nombre = this.nombre.split('').reverse().join('')
        }
    }
})
