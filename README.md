<p align="center">
  <a href="https://holyguide.es">
    <img width="200" src="https://res.cloudinary.com/manuel-ruiz/image/upload/v1576145416/holygrail/logoholy.svg" alt="Holygrail logo">
  </a>
</p>

<h1 align="center">Holygrail2</h1>

<div align="center">

Un framework CSS minimalista, responsive y agnóstico de estilos con componentes HTML y SCSS de alta calidad.

![Version](https://img.shields.io/github/v/release/holygrail2/holygrail?logo=HolygrailCSS)
[![npm](https://img.shields.io/npm/v/holygrail2.svg)](https://www.npmjs.com/package/holygrail2)
[![npm](https://img.shields.io/npm/dm/holygrail2.svg)](https://www.npmjs.com/package/holygrail2)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/holygrail2/badge)](https://www.jsdelivr.com/package/npm/holygrail2)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/holygrail2/holygrail/blob/main/LICENSE)

</div>

## ✨ Características

- 🎨 **Framework agnóstico** - Sin estilos predefinidos, solo estructura y utilidades
- 📱 **Totalmente responsive** - Diseño mobile-first con breakpoints flexibles
- 🧩 **Componentes modulares** - Botones, formularios, navegación, modales, etc.
- 🎯 **Sistema de grid avanzado** - Grid CSS nativo con múltiples configuraciones
- 🎪 **Animaciones y transiciones** - Efectos suaves y profesionales
- 🌍 **Soporte RTL** - Compatible con idiomas de derecha a izquierda
- ⚡ **Ligero y rápido** - Optimizado para rendimiento
- 🛠 **Herramientas de desarrollo** - Linting, formateo y build automatizado

## 📦 Instalación

### NPM
```bash
npm install holygrail2
```

### Yarn
```bash
yarn add holygrail2
```

### CDN
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/holygrail2@latest/dist/style.css">
```

## 🚀 Uso Rápido

### Importar SCSS
```scss
@import 'holygrail2/scss/style.scss';
```

### HTML Básico
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Proyecto</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/holygrail2@latest/dist/style.css">
</head>
<body>
  <div class="container">
    <button class="btn btn--primary">Botón Primario</button>
    <div class="grid-2">
      <div class="col">Columna 1</div>
      <div class="col">Columna 2</div>
    </div>
  </div>
</body>
</html>
```

## 🧩 Componentes Disponibles

### Elementos Básicos
- **Botones** - Múltiples variantes y estados
- **Formularios** - Inputs, checkboxes, radio buttons
- **Navegación** - Menús, breadcrumbs, tabs
- **Contenido** - Cards, banners, modales
- **Feedback** - Tooltips, toasts, progress bars

### Layouts
- **Grid System** - Grid CSS nativo con 12 columnas
- **Containers** - Múltiples tamaños de contenedor
- **Headers** - Navegación principal y secundaria
- **Cards** - Diferentes estilos de tarjetas

### Utilidades
- **Espaciado** - Sistema de padding y margin
- **Tipografía** - Clases de texto y encabezados
- **Colores** - Variables CSS personalizables
- **Responsive** - Breakpoints y media queries

## 🛠 Desarrollo

### Prerrequisitos
- Node.js 16+
- npm o yarn

### Clonar y configurar
```bash
# Clonar el repositorio
git clone https://github.com/holygrail2/holygrail.git
cd holygrail

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run start:watch
```

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run build` | Genera CSS y documentación |
| `npm run start` | Build + abre la guía |
| `npm run start:watch` | Modo desarrollo con watch |
| `npm run serve` | Servidor de desarrollo |
| `npm run lint` | Verifica errores de estilo |
| `npm run lint:fix` | Corrige errores automáticamente |
| `npm run format` | Formatea código con Prettier |
| `npm run test` | Ejecuta lint + build |
| `npm run docs` | Genera documentación CSS |

### Estructura del Proyecto
```
holygrail2/
├── scss/
│   ├── abstract/     # Variables, mixins, funciones
│   ├── base/         # Estilos base y reset
│   ├── elements/     # Componentes (botones, forms, etc.)
│   ├── layouts/      # Layouts y grid system
│   ├── hg-lite/      # Framework ligero
│   └── style.scss    # Archivo principal
├── dist/             # CSS compilado
├── src/              # Documentación (Eleventy)
├── guia/             # Guía generada
└── package.json
```

## 🎨 Personalización

### Variables SCSS
```scss
// Colores
$c-primary: #000;
$c-secondary: #fff;
$c-accent: #B40016;

// Espaciado
$padding-global: 8px;
$padding-mobile: 24px;
$padding-desktop: 40px;

// Breakpoints
$break-sm: 768px;
$break-md: 1024px;
$break-lg: 1200px;
```

### Configuración de Grid
```scss
// Columnas
$totalCols: 12;
$totalColsXl: 24;

// Contenedores
$container: 800px;
$container-full: 1500px;
```

## 🌍 Internacionalización

Holygrail2 incluye soporte completo para RTL (Right-to-Left):

```html
<!-- CSS RTL -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/holygrail2@latest/dist/style-rtl.css">
```

## 🖥 Compatibilidad

| Navegador | Versión |
|-----------|---------|
| Chrome | Últimas 2 versiones |
| Firefox | Últimas 2 versiones |
| Safari | Últimas 2 versiones |
| Edge | Últimas 2 versiones |
| Electron | Todas las versiones |

## 📚 Documentación

- **Guía Online**: [holyguide.es](https://holyguide.es)
- **NPM Package**: [npmjs.com/package/holygrail2](https://www.npmjs.com/package/holygrail2)
- **CDN**: [jsdelivr.com/package/npm/holygrail2](https://www.jsdelivr.com/package/npm/holygrail2)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! 

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución
- Usa comentarios `//` en lugar de `/* */`
- Sigue las reglas de Stylelint
- Ejecuta `npm run test` antes de hacer commit
- Mantén la compatibilidad con navegadores

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.


Desarrollado por Manuel ruiz redondo. Senior FontEnd UX IT.
---

**Holygrail2** - Un framework CSS minimalista y potente para aplicaciones web modernas.


