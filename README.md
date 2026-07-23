# CodeWeb

CodeWeb es una aplicación web basada en Vite, React y TypeScript. Está diseñada para presentar una experiencia profesional de landing page con un enfoque en rendimiento, diseño responsivo y una interfaz moderna.

El proyecto incorpora un layout principal con animaciones discretas, un área de portafolio, un formulario de contacto con opciones de proyecto y un banner de aceptación de cookies. La configuración de Tailwind CSS gestiona el estilo global y los ajustes de diseño.

## Capturas del proyecto

![Vista Principal - Hero Section](./capturas_del_proyecto/captura1.jpg)

![Métricas y Proyectos - Portfolio](./capturas_del_proyecto/captura2.jpg)

![Infraestructura y Seguridad Cloud](./capturas_del_proyecto/captura3.jpg)

![Planes y Servicios Integrales](./capturas_del_proyecto/captura4.jpg)

![Sección Nosotros - Filosofía](./capturas_del_proyecto/captura5.jpg)

## Configuración

El proyecto se inicializa con las dependencias estándar de Vite y React. Para comenzar a trabajar en el entorno de desarrollo, se usa el gestor de paquetes instalado en el proyecto.

El flujo incluye la instalación de dependencias, el arranque del servidor local y la compilación de producción para generar el paquete final.

## Desarrollo

La carpeta `src` contiene los componentes de la aplicación y la hoja de estilos principal. `App.tsx` centraliza la estructura de la página y el control de estado del banner de cookies, mientras que los componentes en `src/components` encapsulan secciones específicas como el portafolio, el formulario de contacto y la arquitectura del proceso.

La página está optimizada para visualizaciones móviles y para vistas de desarrollador en navegadores con un ancho reducido. Las animaciones se adaptan a las preferencias del usuario para mejorar el rendimiento en dispositivos y navegadores con capacidad limitada.

## Producción

La compilación de producción utiliza TypeScript en modo de proyecto y Vite para generar los activos finales en la carpeta `dist`. El proceso de build verifica el código y produce un paquete listo para desplegar.

El archivo `index.html` establece el viewport adecuado y carga el archivo principal de la aplicación. El banner de cookies se guarda en el almacenamiento local del navegador para respetar la elección del usuario.

## Archivos clave

`src/App.tsx` define la estructura de la página, el banner de cookies y las secciones principales. `src/index.css` contiene estilos globales, optimizaciones de scroll y reglas de adaptabilidad. `src/components` agrupa los módulos reutilizables que componen la interfaz.

El documento incluye una página independiente de términos y condiciones disponible como `terms.html`.

## Ejecución

El proyecto se ejecuta con los comandos del gestor de paquetes definidos en `package.json`. La configuración de Vite facilita el desarrollo local con recarga en caliente y la generación de una build de producción eficiente.
