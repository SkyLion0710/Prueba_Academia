Para poder realizar el desarrollo, necesitarás tener instalado GIT en tu máquina ([acá](https://medium.com/laboratoria-how-to/c%C3%B3mo-instalar-git-368c78187b51) encontrarás una guía de como instalarlo para cada SO) y una cuenta de [Github](https://github.com/) para poder realizar la entrega.

### REALIZAR COPIA DE REPOSITORIO BASE
Antes de empezar con el desarrollo, deberás iniciar sesión en tu cuenta de Github, entrar al repositorio mencionado en el README.md y realizar una copia (fork). Esta acción creará un nuevo repositorio en tu cuenta el cual podrás modificar libremente.
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519725/Academia/fork_oothzf.jpg)

Con la copia ya en tu cuenta, deberás descargar el repositorio para poder trabajarlo localmente, para esto desde el repositorio copiado en tu cuenta, hacé click en el botón llamado *"Code"* y luego en el botón *"copia"* que se encuentra a la derecha de la URL de tu repositorio
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519725/Academia/pull_cy2ku3.jpg)

Accedé desde el cmd en Windows o la terminal en Linux y Mac, navegá a la carpeta donde queres descargar tu repositorio y ejecutá el siguiente comando:

    git clone <url>
donde \<url> es el valor que copiaste anteriormente
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519726/Academia/pull_2_xvsxh6.jpg)

Si todo fue correcto, deberás tener una carpeta llamada **Prueba_Academia**. Para acceder a ella deberás ejecutar el comando

    cd Prueba_Academia

### CREAR RAMA DE TRABAJO
Estando dentro de la carpeta de tu repositorio, es necesario crear una nueva rama, la cual tendrá todo tu código, para esto deberás ejecutar el siguiente comando

    git checkout -b <id>
donde \<id> es el ID de usuario que se te proporcionó.
Este comando creará una nueva rama dentro de tu repositorio y se moverá automáticamente a ella para que puedas empezar con el desarrollo.

### GENERANDO COMMITS DE LOS CAMBIOS
Al finalizar el desarrollo, o en su defecto si queres crear puntos de cambio, en necesario crear un commit. Para esto podemos ver que cambios tenemos pendientes con el siguiente comando

    git status
Este comando nos mostrará en color rojo aquellos archivos nuevos o modificados que no fueron seleccionados para el commit y en color verde aquellos que si lo fueron
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519726/Academia/status_llapeh.jpg)

Para seleccionar un archivo, debemos ejecutar el siguiente comando

    git add <file_path>
donde \<file_path> es la ruta del archivo que queremos incluir

> en case de querer incluir todos los archivos podemos indicar \<file_path> con un punto. El comando sería **git add .**

![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519725/Academia/add_ubqamp.jpg)

Una vez tenemos todos los archivos seleccionados, procederemos a generar el commit, para esto ejecutamos el siguiente comando:

    git commit -m "<mensaje>"
donde \<mensaje> es un texto descriptivo de lo que estamos subiendo
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519725/Academia/commit_xkdy1h.jpg)

### SUBIENDO CAMBIOS AL REPOSITORIO DE GITHUB
Luego de haber creado los commits localmente, necesitaremos subirlos al repositorio de Github. Para esto ejecutamos el siguiente comando:

    git push -u origin <rama>
donde \<rama> es el nombre de la rama que crearon
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519727/Academia/push_e0fzfb.jpg)

Si todo fue correcto, verán en su repositorio de Github la nueva rama haciendo click sobre el boton "master"
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519725/Academia/branch_github_wjqz6g.jpg)

Al seleccionarla, verás los cambios
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519725/Academia/updates_azejm5.jpg)

### ENTREGANDO LA PRUEBA SOBRE EL REPOSITORIO
Luego de haber hecho push al repostorio de Github, deberás realizar un pull request de los cambios al nuestro repositorio, para hacé click en el botón llamado *"Compare & pull request"*
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519726/Academia/pull_request_txtttj.jpg)

En la siguiente pantalla, podrás ingresar una descripción si lo crees necesario y para finalizar el proceso debes hacer click en el botón *"Create pull request"*
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625520288/Academia/pull_request_2_h7y4jy.jpg)

Si todo fue correcto, podrás ver tu pull request en nuestro repositorio
![enter image description here](https://res.cloudinary.com/dplsz3jsv/image/upload/v1625519727/Academia/pull_request_3_nrqcle.jpg)