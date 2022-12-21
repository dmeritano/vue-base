Proyecto base creado con vue/CLI
Vue 3 - Vanilla Javascript - ES6

Version 4.0

A la version 3.0 se le agrega:

* Autenticacion basica, implementando rutas protegidas (Home)
* Logout
* Persistencia en Vuex con **vuex-persit**
* <code>npm install vuex-persist</code>
* Storage: configuración básica para usar localStorage
<pre>
    import VuexPersistence from 'vuex-persist'

    ...
    plugins:[
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
</pre>
* Tambien se puede usar IndexDB en vez de localstorage, dado que éste ultimo solo puede albergar hasta 5MB.
* > Para usar IndexDB se puede usar un plugin como **localforage**
* Hoja de estilos global para toda la aplicacion, cargada en main.js luego de importar bootstrap:
* > import '@/assets/css/global.css'; 


