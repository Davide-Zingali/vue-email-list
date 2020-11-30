// Descrizione:
// Genera 10 mail tramite api e stampale in una lista
// API: https://flynn.boolean.careers/exercises/api/random/mail 
var app = new Vue({
    el: '#root',
    data: {
        email: '',
        arrayEmail: []
    },
    mounted: function() {
        // salvo la selezione del this, che in questo caso e' quella di vue, ovvero per tutto il mondo vue
        let self = this;

        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(x) {
            var emailRandom = x.data.response
            self.email = emailRandom;
            self.arrayEmail.push(self.email)
            });
        }
    }
})