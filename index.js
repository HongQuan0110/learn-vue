new Vue({
    el: '#App',
    data: {
        content: 'hello Vue',
        title: 'hihihi',
        link: 'https://www.facebook.com/',
        testMaHTML: '<a href="https://www.youtube.com/">ytb</a>',
        dem: 0,
        x: 0,
        y: 0
    },
    methods: {
        changeValue: function(event) {
            this.content = event.target.value;
        },
        sayHello() {
            document.write('hello')
        },
        showTitle: function() { // no arrow function
            this.title = 'change'
            return this.title
        },
        increase() {
            this.dem++;
        },
        tinhToaDo(v,event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        stopMouse: function(e) {
            e.stopPropagation();
        },
        banPhim: function() {
            alert('keyboard');
        }
    }
})