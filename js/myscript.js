// alert('Ciaone');
// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue({
    el: '#root',
    data:{
        message: "Metro",
        image: "img/parigi_metro.JPG",
        myClass: "red-text",
    },
    methods:{
        changColor: function(){
            if (this.myClass == "blue-text"){
                this.myClass = "red-text";
                this.image = "img/parigi_tour-eiffel.JPG";
                this.message = "Tour Eiffel";
            }else{
                this.myClass = "blue-text";
                this.image = "img/parigi_metro.JPG";
                this.message = "Metro";
            }
        }
    }
});