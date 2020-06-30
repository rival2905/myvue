var app = new Vue({
    el: '#latihan',
    data: {
        a:'<b>Hello Vue.js</b>',
        b:10,
        c:12.5,
        d:true,
        e:['satu','dua','tiga']
    }
});

var belajarif = new Vue({
    el:'#latihanif',
    data: {
        pesan:'belajar vue.js',
        pesan2: 'belajar doank',
        tampilkan: 'ok',
    }
});

var belajarcomputed = new Vue({
    el:'#latihancomp',
    data: {
        a:10,
        b:13,
    },
    computed: {
        jumlah: function(){
            return this.a + this.b
        }
    }
});

var belajarmethod = new Vue({
    el:'#latihanmeth',
    data: {
        a:10,
        b:13,
        jumlah : null
    },
    methods: {
        tambah: function(){
            return this.jumlah = this.a + this.b
        }
    }
});

var beljarwatch = new Vue({
    el:'#latihanwac',
    data : {
        pesan: '',
        keterangan: '', 
    },
    watch: {
        pesan: function(){
            return this.keterangan = 'sedang mengetik..'
        }
    }
});
var beljarwatch2 = new Vue({
    el:'#latihanwac2',
    data : {
        password1: '',
        password2: '',
        keterangan: '' 
    },
    // watch: {
    //     password2: function(){
    //         if(this.password1 == this.password2){
    //             this.keterangan = 'password sama'            //tipe1
    //         }else{
    //             this.keterangan = 'password berbeda'
    //         }
    //     }
    // }
        watch: {
            password2: 'validate'
        },
        methods:{
            validate:function(){
                if(this.password1==this.password2){
                    this.keterangan = 'Password sama'
                }else{
                    this.keterangan = 'Password berbeda'
                }
            }
        }
});
var belajarvbind = new Vue({
    el: '#latihanbin',
    data:{
        image:'public/img/try.jpeg',
        size : 100,
        paragraf: 'par',
    },
});

var belajareventvonclik = new Vue({
    el: '#latihanclik',
    data: {
        pesan: ''
    }
});

var belajareventvonclik2 = new Vue({
    el: '#latihanclik2',
    methods: {
        pesan: function(){
            alert('belajar clik methods')
        }
    }
});
var belajareventvonclik3 = new Vue({
    el: '#latihanclik3',
    methods: {
        pesan: function(isi){
            alert(isi)
        }
    }
});

var belajareventvonclik4 = new Vue({
    el: '#latihanclik4',
    data:{
        pesan:''
    },
    methods: {
        enter:function(){
            return this.pesan = 'ini adalah ENTER'
        },
        esc:function(){
            return this.pesan = 'ini adalah ESC'
        },
        up:function(){
            return this.pesan = 'ini adalah UP'
        },
        down:function(){
            return this.pesan = 'ini adalah DOWN'
        },
        left:function(){
            return this.pesan = 'ini adalah Klik KIRI'
        },
        right:function(){
            return this.pesan = 'ini adalah Klik KANAN'
        },
        contoh:function(){
            return this.pesan = 'ini adalah Control + A'
        },
    }
});

var belajararraytunggal = new Vue({
    el: '#latihanarray',
    data: {
        pesan: '',
        hobby: ['coding', 'swimming', 'basket']
    },
    methods: {
        tambah: function(){
           this.hobby.push(this.pesan)
           this.pesan = '' 
        },
        hapus(i){
            this.hobby.splice(i,1)
        }
    }
});