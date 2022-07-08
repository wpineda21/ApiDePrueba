![Healthy Pocket 2021](https://user-images.githubusercontent.com/54713857/178040318-4bec53ba-d35d-4d10-b0c1-c7906ba4dab8.png)



## Usuario de Prueba

Para comenzar con la nevegación en la aplicacion Movil

![alt text](https://raw.githubusercontent.com/)

```sh
$ El usuario de Prueba corresponde a las siguientes credenciales para su acceso.
$ Username: Thester
$ Password: password
```

## Guía de instalación

Para una instalación local se necesitan las siguientes herramientas:

- [Spring Tools 4 for Eclipse](https://spring.io/tools)

```sh
$ Descargamos el correspondiente a nuestro Sistema Operativo
```

- [DBeaver Community](https://dbeaver.io/)

```sh
$ Creamos la base de datos que se implementa en el proyecto.
```

- Utilizamos una imagen de [Postgres](https://hub.docker.com/)

```sh
$ Seleccionamos la imagen con la que se desea trabajar, para el desarrollo de este proyecto se utilizo la de Postgres
$ Se procede a la instalacion correspondiente con: docker pull postgres
$ Instalado el Postgres se debe hacer las configuraciones correspondientes con el comando: docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```

- [Docker](https://www.docker.com/products/docker-desktop/)

```sh
$ Administramos la imagen creada de Postgres
$ La imagen debe de tener el estado "RUN"
```

## Manual de usuario

```sh
$ Crear una cuenta en la pagina web.
$ Ingresar las credenciales al login para los accesos correspondientes.
$ Se le dara acceso al funcionamiento de la pagina web para poder agregar y editar información.
$ Puede ver la informacion de su perfil.
$ Necesita un nuevo horario de medicamento para recordarlo
$ Guardar el medicamento que debe tomar
$ Mostrar el historial de medicamentos
$ Agregar un examen medico
```

