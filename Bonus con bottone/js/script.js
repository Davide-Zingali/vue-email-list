// Descrizione:
// Genera 10 mail tramite api e stampale in una lista
// API: https://flynn.boolean.careers/exercises/api/random/mail

// versione con arrow function, sfruttando il suo this
var app = new Vue({
    el: '#root',
    data: {
        contatore: 10,
        arrayEmail: []
    },
    mounted: function() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(x => {
            var emailRandom = x.data.response
            this.arrayEmail.push(emailRandom)
            });
        }
    },
    methods: {
        aggiungi() {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(x => {
                var emailRandom = x.data.response
                this.arrayEmail.push(emailRandom)
                });
            }
            this.contatore = this.contatore + 10;
        }
    }
})