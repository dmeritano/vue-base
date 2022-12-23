Proyecto base creado con vue/CLI
Vue 3 - Vanilla Javascript - ES6

Version 7.0

A la version 6.0 se le agrega:

En esta version mejore la estructura del store, creando un modulo para lo referido a usuarios (modules/users.js)
y deje el modulo root/index.js para variables comunes a toda la aplicacion.

Implementé lo de acceder desde un modulo a actions de otro modulo y como acceder desde los componentes a
accions, getters, etc de otros modulos que no sea el root.

Cree el servicio de usuarios (service-apidms.js) e implenté correctamente (en el store users) las funciones
de login, logout y dmsInfo.


