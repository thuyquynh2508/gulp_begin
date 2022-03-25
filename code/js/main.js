const $ = document.querySelector.bind(document);
const $$ = document.getElementById.bind(document);

const dailyNews = $('#news');
const headerSec = $('.header-nav');

const app = {
    render: function() {
        
    },
    handleEvent: function() {
        
    },
    start: function() {
        headerSec.classList.add('news');
        this.render();
        this.handleEvent();
        console.log(1);
    }
}

app.start()