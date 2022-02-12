# Entrevista de trabajo para "El Círculo"
[English version](README.md)

## Indice 
  - [Indice](#indice)
  - [Descripción](#descripcion)
  - [MVP](#mvp)
  - [Bonus para implementar](#bonus-para-implementar)
  - [Estructura](#estructura)
  - [Estados](#estados)
  - [Enlaces adicionales](#enlaces-adicionales)


## Descripción
Una empresa de informática necesita contratar programadores de HTML, CSS o JS. 
El candidato tiene que responder correctamente a las preguntas para conseguir 
el trabajo. Para ello, deberá capturar la respuesta correcta de entre las 
respuestas en movimiento utilizando las teclas de flecha. Ganará el puesto si
 pasa las dos etapas y responde correctamente más del 60% de las respuestas. 
- Enemigos visibles:
  - El entrevistador: a veces formulará preguntas cauciosas para ver las
   capacidades de velocidad de lectura y atención a los detalles del candidato
- Enemigos invisibles:
  - Los errores: En cada ronda, el candidato podrá tener un máximo de fallos
  - El tiempo: 
    - Las respuestas entrarán en pantalla al mismo tiempo que se muestra la
     pregunta y finalizará con la expulsión del candidato si no consigue responder
      a una pregunta antes de que llegue al borde inferior del tablero
    - Cada respuesta tiene una velocidad de descenso aleatoria, por lo tanto,
     es muy posible que una pregunta mas difícil tenga un tiempo permitido de
      respuesta menor, obligando al candidato a responder sin tener demasiado
       tiempo de reflexión
  - El espacio: Las respuestas pueden tener una pequeña zona transparente
   alrededor debiendo el candidato de tener cuidado de no ir demasiado cerca
    de la respuesta equivocada para no tocarla antes que la respuesta correcta
- Bonus: El salario se calculará en función de la velocidad de respuesta.
    Cuando menor sera el tiempo total, mayor será el salario percibido


## MVP
- Manipulación del DOM
- Utilizar canvas para el tablero
- Loops
- Recursión
- Clases
- Colisiones
- Ganar/Perder
- Despliegue


## Bonus para implementar
- Audio de fondo y efectos sonoros enlazados con la respuesta
- Enlaces web en la página final para las respuestas correctas
- Tiempo de entrada variable de las respuestas en función de la longitud de la pregunta
- Posibilidad de crear/modificar dinámicamente las preguntas y respuestas mediante
 formularios para poder personalizar el juego con más preguntas, diferente número
 de respuestas en cada pregunta, o hacerlo multilingüe
- Calcular una escala salarial en función de la velocidad de respuesta para poder
 hacer un ranking entre los diferentes participantes
- Opción para jugar también con el ratón, que haría que fuera mas fácil jugar para
 los principiantes al ser mas responsivo


## Estructura
Definición de los clases y métodos


## Estados
El juego tiene tres estados y dos subestados
- splashScreen
- gameScreen
  - fase I
  - fase II
- gameoverScreen
  - ganar
  - perder


## Enlaces adicionales
[Demo => ](https://artware-solutions-wd-bootcamp.github.io/project-01/)


