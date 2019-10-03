[15:26, 10/3/2019] Caro Medina Laboratoria: # Proyecto

## Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restaurante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos Burguer Queen, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 2 menús: uno para el desayuno, que es bien sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Americano                 | 500  |
> | Expresso                  | 500  |
…
[15:46, 10/3/2019] Caro Medina Laboratoria: # Proyecto

## Preámbulo

Nos acaban de enviar un correo con una solicitud para un nuevo proyecto. Hay un
restaurante que nos ha contactado porque quieren que alguien les construya una
interfaz donde puedan tomar pedidos usando una tablet.

Como punto de partida,
nos comparten el siguiente correo recibido del cliente:

> Somos Burguer Queen, una cadena de comida rápida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida, y para
> expandirnos necesitamos un sistema que nos ayude a tomar los pedidos de los
> clientes.
>
> Tenemos 2 menús: uno para el desayuno, que es bien sencillo:
>
> | Item                      |Precio|
> |---------------------------|------|
> | Americano                 | 500  |
> | Expresso                  | 500  |
> | Veggie Latte              | 700  |
> | Sandwich Tofu             | 1000 |
> | Sandwich Seitan           | 1000 |
> | Sandwich Soya             | 1000 |
>
> Y un menú para el resto del dia:
>
> <table width="100%">
>   <tbody>
>     <tr>
>       <td colspan="2" rowspan="1">Hamburguesas</td>
>       <td>Acompañamientos ($500)</td>
>       <td colspan="3" rowspan="1">Bebidas</td>
>     </tr>
>     <tr>
>       <td>Simple</td>
>       <td>$1500</td>
>       <td>Papas fritas</td>
>       <td></td>
>       <td>500ml</td>
>       <td>750ml</td>
>     </tr>
>     <tr>
>       <td>Doble</td>
>       <td>$2500/td>
>       <td>Onion Rings</td>
>       <td>Agua</td>
>       <td>$500</td>
>       <td>$800</td>
>     </tr>
>     <tr>
>       <td></td>
>       <td></td>
>       <td></td>
>       <td>Gaseosa</td>
>       <td>$700</td>
>       <td>$1000</td>
>     </tr>
>   </tbody>
> </table>
>
> Los clientes pueden escoger entre hamburguesas de quinoa, de lentejas, de seitan o de soya.
> Y por $500 pueden agregarle queso vegeno o palta.
>
> Nuestros clientes son bastante indecisos, por lo que es muy común que cambien el
> pedido varias veces antes de finalizarlo.

## Solución: VurgerQueen 

Es una interfaz que permite ejecutar y gestionar la toma de pedidos desde la mesa de un restaurante de forma fácil, intuitiva y agradable de usar mediante dispositivos móviles como tablets y teléfonos. 

¿Cómo funciona?
El mesero dispondrá del menú desde el dispositivo, a través de la cual podrá:

- Cargar productos a la orden al momento que toma el pedido
- Búsqueda de productos por tipo de menú
- Visualizar directamente la precuenta desde el dispositivo
- Enviar el pedido a cocina 
- Conocer el estado de los pedidos
- Ver los pedidos que están listos para entregar
- Acceder a los pedidos archivados

En tanto el módulo de cocina recibirá las órdenes que ingresan en tiempo real , pudiendo: 
- Ver las comandas de forma organizada
- Controlar los tiempos y prioridades de elaboración
- Indicar si un pedido está listo para entregar

> Prueba VurgerQueen [aquí](https://villarrealscarlette.github.io/SCL010-Burger-Queen/)

### Modo de uso

Nuestro usuario principal son los garzon@s que como primera experiencia se encontraran con la pagina principal que les da la opcion de ver el MENU, al cliclear en ella, les dara la opcion de filtrar por desayuno o almuerzo segun el caso, existe al costado izquierdo de la pantalla caja de llenado de texto donde pregunta el nombre del mesero y el numero de mesa que esta asistiendo.
A continuacion se puede ver el ejemplo al entrar en la opcion del MENU de la App

<img src="https://i.ibb.co/w07pxhQ/Whats-App-Image-2019-10-03-at-14-41-33.jpg" alt="Whats-App-Image-2019-10-03-at-14-41-33" border="0">

 Luego de elegir la opcion de MENU, filtra entre DESAYUNO O ALMUERZO.  Si el usuario opta ALMUERZO, la aplicacion entregara tres clasificaciones HAMBURGUESAS, ACOMPAÑAMIENTOS y BEBESTIBLES. En esta interfaz se pueden selecionar los botones con el nombre de la comida ordenada por el cliente, de modo sincrono se muestra a un costado derecho de la pantalla la lista de pedido donde se muestra el producto seleccionado en orden con su valor correspondiente y el total del valor de la orden del cliente.
A continuacion se muestra un ejemplo, donde muestra las opciones de los productos del menu elegido y la lista de la orden con su valor individual y total de la cuenta.

 <img src="https://i.ibb.co/yX0GF3H/Whats-App-Image-2019-10-03-at-14-41-33-2.jpg" alt="Whats-App-Image-2019-10-03-at-14-41-33-2" border="0">

### Planificación de la solución

La planificación del trabajo fue basada en el siguiente backlog del proyecto:

- Mesero/a debe poder tomar orden de una persona
- Jefe de cocina debe poder ver ordenes
- Mesero/a debe poder ver órdenes listas para servir para entregarlas a los clientes

dentro de las cuales se identificaron las funciones y componentes requeridas para su elaboración. 
Posteriormente se diseñó el prototipo de alta fidelidad según estos criterios de aceptación, lo cual dió más claridad sobre el trabajo.

### Herramientas Utilizadas

- Se utilizó [Github Project](https://help.github.com/en/articles/about-project-boards) como herramienta de planificación de tareas.

> Revisa el Github Project de VurgerQueen [aquí](https://github.com/VillarrealScarlette/SCL010-Burger-Queen/projects/1)

- El prototipo de alta fidelidad fue desarrollado con [Figma](https://www.figma.com/)

> El archivo está disponible [aquí](https://www.figma.com/file/psHq5lT4MFdEjhWjsp3AFK/burger-queen?node-id=0%3A1)

- Este proyecto fue desarrollado con [React](https://reactjs.org/) (versión 16.9.0.).

- La data fue almacenada en [Firebase](https://firebase.google.com/) (versión 7.0.0).

### Este proyecto fue esarrollado por

- [Anabel Carrión J.](https://github.com/anabelcarrion)
- [Carolina Medina S.](https://github.com/CarolinaMedin)
- [Scarlette Villarreal Á.](https://github.com/VillarrealScarlette)
