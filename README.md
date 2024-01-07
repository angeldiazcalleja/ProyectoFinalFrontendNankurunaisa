
# GeeksHubs <img src= "src/assets/Readme/geek-logo.png" width="100"> 

<a>Proyecto Final- FRONTEND Nankurunaisa.</a>

## Tabla de contenidos

- [Descripción 📝](#Descripción)
- [Tecnologías - Bibliotecas - Herramientas 🛠️](#Tecnologías-y-Bibliotecas-Herramientas)
- [Instalación  🚀](#Instalación)
- [Vistas-Componentes ⛏️⚙️](#Vistas-Componentes)
- [Contribuciones  🤝](#Contribuciones)
- [Licencia y Copyright📃](#licencia-y-copyright)


## Descripción

Este Frontend completa el Backend realizado para el retiro espiritual **NANKURUNAISA**. Permite a los usuarios (clientes, personal assistants y administradores) programar, modificar, mostrar y eliminar citas.Permite también la creación y eliminación de reservas de estancias en los retiros espirituales. Además, proporciona funciones de autenticación y autorización para garantizar la seguridad de los datos, así como una vista detallada del estudio, sus tatuadores y trabajos realizados.

## Tecnologías-Bibliotecas-Herramientas

-  **Node.js** <img src= "src/assets/Readme/node-logo.png" width="30">
-  **Vite**    <img src= "src/assets/Readme/logoVite.png" width="30">
-  **React**   <img src= "src/assets/Readme/logoReact.png" width="30">
-  **Axios**   <img src= "src/assets/Readme/logoAxios.png" width="30">
- **JWT para autenticación** <img src= "src/assets/Readme/jwt-logo.png" width="25">
- **Bcrypt para el hashing de contraseñas** <img src= "src/assets/Readme/bcrypt-logo.jpg" width="30">
- **Font Awesome** <img src= "src/assets/Readme/logoFontAwesome.png" width="30">
- **Visual Studio Code** <img src="src/assets/Readme/visual-logo.png" width="30">
- **Github** <img src="src/assets/Readme/github-logo.png" width="30">
- **Git** <img src="src/assets/Readme/git-logo.png" width="30">

## Instalación

1. Clona el repositorio: `git clone <url>`
2. Instala las dependencias: `npm install`

## Vistas - Componentes

 ### Home - Studio (StudioGallery)


<img src="src/assets/Readme/Portada.png" alt="Descripción de la imagen 1" width="700" /> <img src="src/assets/Readme/Studio.png" alt="Descripción de la imagen 2" width="700" />

**Home** es la vista principal, desde donde se puede acceder a las diferentes partes de la página. El Header es interactivo, desplazando al usuario por la página, permitiendo acceder, registrar o cerrar sesión. Se encuentran las opciones de Login/Logout y Register para que el usuario pueda interactuar. Una vez que se ha accedido mediante el login, aparecerá **PROFILE** y **ADMIN**, esta última opción en caso de que se acceda con la cuenta del admin de **NANKURUNAISA**.

**Studio** es una pequeña introducción a las instalaciones de Inks Sydney. La imagen central tiene movimiento. Pulsando "See More" aparece una nueva vista.

**StudioGallery** 

<img src="src/assets/Readme/Studio2.png" alt="Descripción de la imagen 1" width="700" /> <img src="src/assets/Readme/Studio3.png" alt="Descripción de la imagen 2" width="700" />


## Artists - Footer 

<img src="src/assets/Readme/Artists.png" alt="Descripción de la imagen 1" width="700" /> <img src="src/assets/Readme/Artists2.png" alt="Descripción de la imagen 2" width="700" />

**Artists** Pulsando en "View More" te desplazas a la galería de tatuajes, formada por un carousel propio que se desplaza cada 1.5s o mediante teclado. Pulsado sobre la imagen se paraliza el movimiento del carousel.

<img src="src/assets/Readme/Carousel.png" alt="Descripción de la imagen 1" width="700" /> <img src="src/assets/Readme/Carousel1.png" alt="Descripción de la imagen 2" width="700" />

## Login - Register

<img src="src/assets/Readme/Login1.png" alt="Descripción de la imagen 1" width="700" height="400"/> <img src="src/assets/Readme/LoginError.png" alt="Descripción de la imagen 2" width="700" height="400"/>

En caso de no introducir un email y una contraseña que cumplan con los requisitos, aparecen mensajes de alerta. Esto también sucede en el caso del registro.

<img src="src/assets/Readme/Register.png" alt="Descripción de la imagen 1" width="700" height="400" /> <img src="src/assets/Readme/Register1.png" alt="Descripción de la imagen 2" width="700" height="400" />

Una vez registrado, se debe hacer login para poder acceder. Aparecerá un mensaje de bienvenida posteriormente.

## Profile - Admin

<img src="src/assets/Readme/ProfileUser.png" alt="Descripción de la imagen 1" width="700" /> <img src="src/assets/Readme/UsersAdmin.png" alt="Descripción de la imagen 2" width="700" />

En **profile** aparecen los datos recibidos del token una vez que el usuario hace login. En cuanto al listado de los usuarios registrados, solo el admin tiene acceso. Se ha incorporado paginación de 10 elementos por página. También se puede realizar búsqueda por role -customer, tattooArtist o admin- así como de forma ascendente o descendente.


## Book Now

Solo se puede acceder si existe **token**, es decir, si se ha logueado el usuario. Si se intenta entrar sin ese requisito, aparece un mensaje solicitando el login al usuario. 

<img src="src/assets/Readme/BookNow.png" alt="Descripción de la imagen 1" width="700" /> <img src="src/assets/Readme/TablaCitas.png" alt="Descripción de la imagen 2" width="700" />

El borrado de citas se hace de forma lógica, mateniendo la información, pero deshabilitando su celda y aclarando su color. 

## Info

Lista de los diferentes servicios y precios.

<img src="src/assets/Readme/Price.png" alt="Descripción de la imagen 1" width="700" /> <img src="src/assets/Readme/Price2.png" alt="Descripción de la imagen 2" width="700" />

## Contribuciones

Las contribuciones son bienvenidas. Si encuentras algún problema o tienes una mejora, ¡no dudes en abrir un problema o enviar un pull request!

## Licencia y Copyright

Este proyecto pertenece a **Ángel Díaz Calleja** y ha sido creado como proyecto del Bootcamp Full Stack Developer de GeeksHubs Academy.

<img src= "src/assets/Readme/geek-logo.png" width="100"> 





