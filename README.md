# Visualizador de cuentas

El proyecto se encuentra en producción en el siguiente enlace [Visualizador](https://banco-react.vercel.app/), no se requiere descargar el proyecto para correrlo en local. 

## Aclaración de requerimientos:
- La url de la API se configuró como variable de entorno directamente en el hosting Vercel.
- La aplicación utiliza TypeScript en componentes y páginas.
- Se utilizo NextJS como framework de backend, por lo cual se utilizo su sistema de enrutado para el detalle de las cuentas.
- Se utilizó Redux Toolkit para el manejo de estado global.
- Si se quiere ejecutar en local se debe incluir en la raiz del proyecto el archivo .env con la variable NEXT_PUBLIC_API a la que se asigna la ruta de la API. Para el desarrollo descargue los datos en un archivo datos.json ubicado en la carpeta public para revisar el funcionamiento con cantidades diferentes de datos.
- Todo el código esta versionado en git.
- No se realizaron test unitarios. He trabajado con Jest para tal fin en proyectos no en proyectos con TypeScript. Probe la configuracion indicada en la  [documentación](https://jestjs.io/docs/configuration) incluyendo Babel, pero la compilacion del css daba error (Module some-css-transformer in the transform option was not found) a pesar de haber instalado las dependencias y archivos de configuracion indicados.

## Observación en los datos de la API:
Se identifico una cuenta sin numero de cuenta y dos con el mismo número, como no se indico en los requerimientos no se hicieron validaciones para estos casos.
