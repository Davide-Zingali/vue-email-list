// Descrizione:
// Genera 10 mail tramite api e stampale in una lista
// API: https://flynn.boolean.careers/exercises/api/random/mail

// versione con arrow function, sfruttando il suo this
var app = new Vue({
    el: '#root',
    data: {
        arrayEmail: []
    },
    mounted: function() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(x => {
            var emailRandom = x.data.response
            this.arrayEmail.push(emailRandom)
            });
        }
    }
})



// versione senza arrow function, con salvata la posiszione del this
// var app = new Vue({
//     el: '#root',
//     data: {
//         email: '',
//         arrayEmail: []
//     },
//     mounted: function() {
//         // salvo la selezione del this, che in questo caso e' quella di vue, ovvero per tutto il mondo vue
//         let self = this;

//         for (let i = 0; i < 10; i++) {
//             axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(x) {
//             var emailRandom = x.data.response
//             self.email = emailRandom;
//             self.arrayEmail.push(self.email)
//             });
//         }
//     }
// })