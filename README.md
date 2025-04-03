# MovieApp

## Prototipo de streaming de películas 👋

Esta es un prototipo de streaming de películas desarrollada con React Native y Expo.

## Configuración

1. **Instalar dependencias**

   Asegúrate de tener [Node.js](https://nodejs.org/) y [Expo CLI](https://docs.expo.dev/get-started/installation/) instalados. Para la creación incial de la estructura se utiliza:
   ```bash
   npx create-expo-app MovieApp
   ```
Luego accedemos anuestra carpeta /MovieApp y ejecutamos:
   ```bash
   npm install
   ```

3. **Iniciar la aplicación**

   Para iniciar la aplicación, ejecuta:

   ```bash
   npx expo start
   ```

   En la salida, encontrarás opciones para abrir la aplicación en un emulador de Android, simulador de iOS o en un navegador web, proporcionadas por ExpoGo.

## Documentación de decisiones arquitectónicas

- **Estructura de carpetas**: La aplicación está organizada en carpetas que separan componentes, servicios, tipos y constantes. Esto facilita la escalabilidad y el mantenimiento del código.
- **Uso de TypeScript**: Se utiliza TypeScript para proporcionar tipado estático, lo que ayuda a prevenir errores y mejora la autocompletación en el IDE.
- **Navegación**: Se implementa la navegación utilizando `expo-router`, lo que permite una navegación sencilla entre pantallas.
- **Manejo de estado**: Se utiliza el hook `useState` para manejar el estado de las películas destacadas y las secciones de películas.

## Características implementadas (Pantalla de inicio)

1. **Película destacada**: Muestra una película destacada en la parte superior de la pantalla con su información relevante.
2. **Secciones de películas**: Incluye secciones "You Might Like" y "My List" que permiten a los usuarios explorar diferentes películas.
3. **Carga de datos**: Implementa un spinner de carga mientras se obtienen los datos de las películas.
4. **Diseño responsivo**: La aplicación se adapta a diferentes tamaños de pantalla, asegurando una buena experiencia tanto en dispositivos móviles como en la web.

## Posibles mejoras

- Mejorar la gestión de errores y estados de carga.

