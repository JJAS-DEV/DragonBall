# Dragon Ball API Client ⚡

Aplicación en Angular 19 que consume la [Dragon Ball API](https://dragonball-api.com) para mostrar personajes, aplicar filtros y paginación y agregar favoritos.
 **Demo en línea:** [Ver proyecto aquí](https://jjas-dev.github.io/DragonBall/)
---
## 🎓 Contexto del proyecto
Su objetivo fue aplicar los conocimientos adquiridos en:
- Creación de componentes y servicios en Angular.
- Consumo de APIs REST.
- Manejo de modelos y comunicación entre componentes.
- Buenas prácticas de arquitectura y documentación.

## 🚀 Tecnologías usadas
- Angular 19
- TypeScript
- Bootstrap / CSS3
- Servicios REST
- SweetAlert2 (swalAlert) para alertas y notificaciones

## 📂 Arquitectura del proyecto

src/
└── app/
├── components/
│   ├── buscador/             # Componente para filtrar personajes
│   ├── carrucel-imagenes/    # Carrusel dinámico de imágenes
│   ├── dragonball-z/         # Vista principal de personajes
│   ├── footer/               # Pie de página
│   ├── navbar/               # Barra de navegación
│   ├── paginador/            # Control de paginación
│   ├── personajes-favoritos/ # Gestión de favoritos
│   └── planetas/             # Vista de planetas de origen
├── models/
│   ├── Filtracion.ts         # Modelo de criterios de búsqueda
│   ├── originPlanet.ts       # Modelo de planeta
│   ├── Personaje.ts          # Entidad principal de personaje
│   ├── Personaje_seleccionado.ts # Detalle de personaje elegido
│   └── transformations.ts    # Transformaciones (ej. Super Saiyan)
└── services/
     ├── filtracion/           # Lógica de filtrado
     ├── sharing-data/         # Comunicación entre componentes
     └── Favoritos/            # gestion de personajes favoritos


## 📖 Flujo de datos
1. El usuario ingresa un criterio en **buscador**.  
2. El **filtracion.service** consulta la API.  
3. Los resultados se muestran en **dragonball-z** con ayuda de **paginador**.  
4. **sharing-data.service** permite compartir estado entre componentes.
5. **FavoritosService** permite la gestion de personajes.

## Instalación y ejecución

git clone https://github.com/JJAS-DEV/DragonBall.git
npm install
ng serve





