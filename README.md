# 📱 Proyecto Frontend – Lista de Usuarios

Este proyecto corresponde al **frontend** de una aplicación que permite visualizar y registrar usuarios.  
Fue desarrollado con **React + Vite**, y consume un backend local que proporciona la información de los usuarios.  

---

## 🚀 Funcionalidades

- Visualización de todos los usuarios almacenados en el backend.  
- Registro de nuevos usuarios mediante un formulario estilizado y minimalista.  
- Cada usuario se muestra como una tarjeta con su nombre, teléfono, correo, dirección, edad e imagen.  
- Los nuevos usuarios se agregan y se muestran de **primeros en la lista**.  
- Diseño responsivo y limpio.  

---

## 🧩 Componentes Principales

- **`Usuarios.jsx`** → Obtiene la lista de usuarios mediante una petición `GET` al backend y la muestra en forma de tarjetas.  
- **`Usuario.jsx`** → Renderiza la tarjeta individual de cada usuario.  
- **`Formulario.jsx`** → Permite crear un nuevo usuario y enviarlo mediante una petición `POST` al backend.  

---

## ⚙️ Tecnologías Utilizadas

- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [Axios](https://axios-http.com/)  
- CSS (estilizado con diseño minimalista y moderno)  

---

## 📦 Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/asmejia28/usuarios-front-end.git
   cd usuarios-front-end

2. Instalar dependencias:

npm install

3. Ejecutar el servidor de desarrollo:

npm run dev

4 Acceder desde el navegador:

http://localhost:5173

## 🔗 Conexión con el Backend

El frontend se comunica con el backend mediante las siguientes rutas:

GET http://localhost:3000/users → Obtiene la lista de usuarios.

POST http://localhost:3000/users → Crea un nuevo usuario.

Asegúrate de tener el backend corriendo antes de iniciar el frontend.

## 📁 Estructura del Proyecto

usuarios-front-end/  
│  
├── public/                     # Archivos estáticos  
├── src/  
│   ├── assets/                 # Imágenes y recursos  
│   ├── components/             # Componentes principales  
│   │   ├── Form.jsx            # Formulario para crear usuarios  
│   │   ├── User.jsx            # Tarjeta individual de usuario  
│   │   └── Users.jsx           # Contenedor que lista los usuarios  
│   ├── App.jsx                 # Estructura principal de la app  
│   ├── App.css                 # Estilos generales  
│   ├── main.jsx                # Punto de entrada React  
│   └── index.css               # Estilos globales  
│  
├── vite.config.js              # Configuración de Vite  
├── package.json  
└── README.md  


## 👨‍💻 Autor

Desarrollado por Sofía Ocampo  
Proyecto académico – Parcial 2  
Ingeniería de Software 💻 | CIAF   