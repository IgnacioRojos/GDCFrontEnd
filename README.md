# 🚀 GDC Frontend

**GDC Frontend** es la interfaz web desarrollada en **React JS** para el sistema de gestión de reclamos, consultas y solicitudes de clientes (**GDC**)
, compuesto por un backend en Node.js y MongoDB → [GDC Back End](https://github.com/IgnacioRojos/GDCBackEnd).

---

## 🌐 Deploy

Puedes ver la aplicación en producción en Netlify:  
👉 [https://sistemadecontacto.netlify.app/](https://sistemadecontacto.netlify.app/)

---

## 📋 Descripción del proyecto

El sistema **GDC (Gestión de Consultas, Derivaciones y Contactos)** permite registrar, administrar y dar seguimiento a los distintos contactos realizados con los clientes (reclamos, solicitudes y consultas).

Los usuarios pueden autenticarse mediante un **login** y acceder a distintas funcionalidades según su rol:

- 🧾 **Registro de reclamos, consultas y solicitudes**.  
- ⚙️ **Derivación de casos** a sectores internos para su resolución.  
- ✅ **Gestión y seguimiento** de los contactos generados.  
- 🔍 **Resolución inmediata** de consultas según la categoría del caso.

La aplicación se comunica con el backend mediante peticiones **HTTP** usando **Axios**, interactuando con la API alojada en:  
👉 [https://gdcbackend.onrender.com](https://gdcbackend.onrender.com)

---

## 🧠 Tecnologías utilizadas

- ⚛️ **React JS** – Biblioteca principal para la interfaz.  
- ⚡ **Vite** – Entorno de desarrollo rápido y optimizado.  
- 🎨 **Bootstrap** – Framework CSS para diseño responsive.  
- 🌐 **Axios** – Cliente HTTP para la comunicación con la API.  
- 🧭 **React Router DOM** – Navegación entre vistas.  

---

## 🧩 Estructura principal del proyecto

```
GDCFrontEnd/
│
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── pages/           # Páginas principales (Login, Dashboard, etc.)
│   ├── services/        # Configuración de Axios y llamadas a la API
│   ├── router/          # Rutas protegidas y públicas
│   ├── App.jsx          # Componente raíz
│   └── main.jsx         # Punto de entrada
│
├── public/
│
├── package.json
└── vite.config.js
```

---

## 🔐 Usuarios de prueba

Puedes iniciar sesión con los siguientes usuarios de prueba:

**Supervisor**
```
USUARIO: ignacio  
CONTRASEÑA: 123456
```

**Agente**
```
USUARIO: martin  
CONTRASEÑA: Ignacio1920
```

---

## 🏷️ Tipificaciones disponibles

| Código | Descripción                              |
|:-------:|-------------------------------------------|
| 507     | Consulta sobre pago de la tarjeta de crédito |
| 838     | Reclamo por servicio mal cobrado          |
| 1999    | Solicitud de baja                         |
| 1223    | Solicitud de stop debit por fraude         |
| 480     | Consulta por resumen                      |
| 100     | Consulta general del producto             |

---

## ⚙️ Instalación y ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/IgnacioRojos/GDCFrontEnd.git
   cd GDCFrontEnd
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto con:
   ```env
   VITE_API_URL=https://gdcbackend.onrender.com
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación se abrirá en 👉 [http://localhost:5173](http://localhost:5173)

---

## 🔗 Conexión con el Backend

Este frontend consume la API desarrollada en el proyecto [**GDC Back End**](https://github.com/IgnacioRojos/GDCBackEnd), donde se encuentran las rutas para:

- Autenticación de usuarios  
- Gestión de reclamos, solicitudes y consultas  
- Derivaciones internas  
- Resolución de casos  

---

## 📸 Capturas 

**Login**  
![Login](https://github.com/user-attachments/assets/42f37ff0-bf75-4abb-8211-a3dca7241144)

**Dashboard Agente**  
![Dashboard Agente](https://github.com/user-attachments/assets/c59f3240-f6e0-4e09-b84b-29e78d5c501a)

**Buscador de gestiones**  
![Buscador](https://github.com/user-attachments/assets/a9d62e3b-01f1-4108-b7c6-6c8716122337)

**Crear cliente**  
![Crear cliente](https://github.com/user-attachments/assets/2fd052bc-4426-45d2-9a6f-5446afe7b565)

**Dashboard Supervisor**  
![Dashboard Supervisor](https://github.com/user-attachments/assets/40c2e0ba-fab4-47ba-9fd8-cd3f983e04fc)

---

## 👨‍💻 Autor

Desarrollado por **Ignacio Rojos**  
📧 [nachorojos99@gmail.com](mailto:nachorojos99@gmail.com)  
💼 [GitHub](https://github.com/IgnacioRojos)


## 🧾 Licencia

Distribuido bajo licencia MIT — libre para uso y modificación con fines educativos o comerciales, dando crédito al autor original.
