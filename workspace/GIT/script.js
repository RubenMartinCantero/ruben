/* GIT */

/* 

git es la tecnologia, luego tenemos las herramientas, github, gitlab, bitbucket 

Cada usuario tiene una copia del repositorio.

comandos básicos, 
    workspace: espacio de trabajo, carpetas y demás.

    git add/mv/rm (añadir, mover, remover)


    staging: ficheros añadidos pero sin confirmar los cambios en el respositorio local
        commit: confirmar esos cambios.
            con "git commit -a" paso desde workspace a local repository


    local repository: 
        con git push: paso del repositorio local al remoto.
    
    repositorio remoto:
    

La regla es hacer commit pequeños, para que la pull request sea pequeña.

para una funcionalidad específica, hago un commit, vinculado a un gira.

Aprender a utilizar la consola, y luego utilizar VSCode o cualquier otra herramienta.


git fetch: se trae del repositorio remoto al local.

git clone/pull se trae todo del repositorio remoto al workspace.


git diff / git head 


GITFLOW:

metodologia de trabajo, para tener organizado el proyecto. Por defecto tenemos dos ramas:
master y develop. no pueden ser modificadas y estan las dos en el mismo estado.

    abro una rama, comienza en fiture (rama) con una barra le ponemos barra y 
    el nomrbe del gira para trabajar sobre la funcionalidad

    en develop vamos teniendo los commits de cada funcionalidad.

En cada sprint se crea una rama de release. donde se añaden todas las tareas desarrolladas previamente.

Equipo de "cua" encuentra pequeños errores, integración, etc.

Si son cambios pequeños, se trabaja sobre la rama realese y si son grandes se abre rama y se mergea mas tarde.


pasadas todas las pruebas, se mergea a develop y a master. estando ambas al mismo nivel. versiones estables 


Rama hotfix, creada por producción cuando hay un error. puede que el error este en una version anterior 
de donde actualmente estamos.


MERGE REQUEST

Sirven, para aprender (al analizar y ver el código de los compañeros, se puede aprender la forma de afrontar cada comp)

no se pueden hacer push a master o a develop sin pull request.

Explicar en la request lo que se ha hecho, que a la hora de revisar se sepa que hay que mirar, que hace y explicar
porque se ha hecho de esa manera.


tamaño request, preferible de menor tamaño. menos de 100 esta bien, de 200 a 500 demasiado, partirlo en varios commits

a veces es dificil no hacer una funcionalidad con menos de 500 lineas, aunque hay que analizarlo e intentar implementar
el mejor metodo posible para que no tenga muchas lineas.


COMMITS.

Ir añadiendo varios commits para cada merge request. Sencillez de correción y análisis.

Separar commits por funcionalidades. Buenas practicas: modificar solo una cosa.

uso correcto de commit: use present tense imperative style (describir que hace ese commit en concreto.)
        <verb><rest of the commit message>
        Usar "fix, add, change" en vez de "fixed, added, changed" 
        no usar puntos finales.
        no usar cosas genericas (some fixed, changes, etc) que no dan informacion concreta.

Entre tarea y tarea, mirar en el GIRA si hay algo por revisar, hacerlo y luego empezar una tarea.

Aplicar merge request feedback.

*/