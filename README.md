# Proyecto Pocket. Common Core: Data lovers

## 1. Preámbulo

Según [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 millones de terabytes de datos, una cifra sin
precedentes.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas
grandes cantidades de datos se conviertan en **información** fácil de leer para
los usuarios, necesitamos entender y procesar estos datos. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

## 2. Resumen del proyecto

En este proyecto se construyó un página web para visualizar un
set de datos de Pokemones, que se adecúe a lo que los pokefans necesitan 
facilitando a los jugadore regulares de Pokemon Go una interfaz que les permita 
filtrar el conjunto de datos que les interese 

Estos son los datos seleccionados:

* [Pokémon](src/data/pokemon/pokemon.json):
  En este set encontrarás una lista con los 251 Pokémon de la región de Kanto
  y Johto, junto con sus respectivas estadísticas usadas en el juego
  [Pokémon GO](http://pokemongolive.com).
  - [Investigación con jugadores de Pokémon Go](src/data/pokemon/README.md)

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos primitivos y no primitivos.

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [x] Planear y ejecutar tests de usabilidad.

## 4. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

### Definición del problema

Los pokefans no tienen una interfaz de acceso y filtrado flexible, por lo tanto,
buscan desarrolladores con nuevas ideas de diseño gamming y funcionalidad óptima,
además quieren poder acceder a la plataforma desde cualquier dispositivo móvil

### Historias de usuario

#### Historia de usuario 1:
Los pokefans necesitan ideas de una interfaz para acceder a los datos de los pokemones 
##### Criterios de acepactión 
* [x] Maquetación general de idea de interfaz
* [x] Diseño gaming de visualización de datos 

#### Historia de usuario 2:
Los pokefans quieren visualizar los datos generales de los pokemones para poder identificarlos
##### Criterios de acepactión 
* [x] Deben visualizar la fotografía del pokemon 
* [x] Saber la rareza del pokemon 
* [x] Saber el tipo de pokemon
* [x] A qué generación pertenece el pokemon
* [x] Descripción general
* [x] Interfaz tipo cartas

#### Historia de usuario 3:
Los pokefans necesitan ver la información detallada de cada pokemon para saber sus características en batalla
##### Criterios de acepactión 
* [x] Sección alterna al hacer click a la tarjeta
* [x] Características generales del pokemon
* [x] Imagen del pokemon 

#### Historia de usuario 4:
Los pokefans quieren filtrar la información para acceder más rápido a ciertos pokemones
##### Criterios de acepactión 
* [x] Barra de búsqueda con click de search y estática
* [x] Panel de filtrado como barra lateral que se pueda ocultar 
* [x] Categorías de filtrado 

#### Historia de usuario 5:
El usuario quiere ver la aplicación en su celular y tablet para acceder a la app en cualquier lugar
##### Criterios de acepactión 
* [x] La aplicación es responsive para cualquier dispositivo

#### Historia de usuario 6:
Los pokefans quieren testear el código para verificar su funcionamiento
##### Criterios de acepactión
* [x] Testeo unitario
* [x] Verificación de código con el testeo
* [x] Eslint
* [x] Nomenclatura y semántica correcta

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

![Prototipo de baja fidelidad](https://user-images.githubusercontent.com/72315710/114480342-0552a980-9bc8-11eb-949f-9b9ca3a967f9.png)

#### Prototipo de alta fidelidad

https://www.figma.com/file/bprFyeCjv0yxxXwuAwCJXg/DL_Pocket?node-id=0%3A1


## 5. Hacker edition

Features/características extra sugeridas:

* [x] En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* [ ] Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* [x] 100% Coverage

## 6. Checklist

* [x] Usa VanillaJS.
* [x] No hace uso de `this`.
* [x] Pasa linter (`npm run pretest`)
* [x] Pasa tests (`npm test`)
* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [x] Incluye historias de usuario en `README.md`.
* [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md` en Figma.
* [x] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [x] UI: Permite ordenar data por uno o más campos (asc y desc).
* [x] UI: Permite filtrar data en base a una condición.
* [x] UI: Es _responsive_.
