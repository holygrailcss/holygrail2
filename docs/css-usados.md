# CSS/SCSS usados en el build

Archivos que actualmente se incluyen en el CSS compilado. Puedes ir quitando de `_partials.scss` (o del build) los que no uses y borrar el archivo después de comprobar.

**Entrada principal:** `scss/style.scss` → importa `partials` + `base/rtl` + `hg-lite`.

---

## Tabla de archivos SCSS usados

| # | Archivo | Carpeta | Importado en | Notas |
|---|---------|---------|--------------|--------|
| 1 | `abstract/reset` | abstract | partials | Reset global |
| 2 | `abstract/all` | abstract | partials | Incluye: breakpoints, setup, fonts, mixins |
| 3 | `abstract/breakpoints` | abstract | all | Breakpoints y columnas |
| 4 | `abstract/setup` | abstract | all | Variables ($colors, $cols-grids, etc.) |
| 5 | `abstract/fonts` | abstract | all | Tipografías |
| 6 | `abstract/mixins` | abstract | all | Mixins (space, mintypes, etc.) |
| 7 | `base/animations` | base | partials | Animaciones |
| 8 | `base/alignment` | base | partials | Alineación |
| 9 | `base/grid` | base | partials | Grid (grid-cols-*, container, row) |
| 10 | `base/height` | base | partials | Utilidades de altura |
| 11 | `base/icons` | base | partials | Iconos |
| 12 | `base/ratios` | base | partials | Ratios (aspect-ratio) |
| 13 | `base/types` | base | partials | Tipografía base |
| 14 | `base/extras` | base | partials | Extras |
| 15 | `base/spacing` | base | partials | Padding/margin (pt-, pb-, mt-, etc.) |
| 16 | `base/helpers` | base | partials | Clases auxiliares |
| 17 | `base/a11y` | base | partials | Accesibilidad (visually-hidden, etc.) |
| 18 | `base/rtl` | base | style.scss | Estilos RTL |
| 19 | `elements/animated` | elements | partials | Componentes animados (comentado deprecated en código) |
| 20 | `elements/banners` | elements | partials | banner-warning, banner-info, etc. |
| 21 | `elements/buttons` | elements | partials | .btn, .btn-primary, .btn-group, etc. |
| 22 | `elements/checkbox` | elements | partials | checkbox-radio, check-top, check-no, check-center |
| 23 | `elements/form` | elements | partials | Formularios, .form-control, .select, .form-input-label-2 |
| 24 | `elements/links` | elements | partials | link-line, link4, link-raw, etc. |
| 25 | `elements/list` | elements | partials | list-clear, list-disc, list-inline-flex, list-box, etc. |
| 26 | `elements/progressbar` | elements | partials | .progressbar, .progressbar-status |
| 27 | `elements/sidebar` | elements | partials | Sidebar |
| 28 | `elements/tabs` | elements | partials | Tabs |
| 29 | `elements/tag` | elements | partials | tag-warning, tag-info, tag-valid, etc. |
| 30 | `elements/tooltip` | elements | partials | tooltip-sm, has-tooltip, etc. |
| 31 | `elements/datalist` | elements | partials | Datalist |
| 32 | `elements/tabs_specials` | elements | partials | checkbox-ico, checkbox-box, list-box, multiple-table |
| 33 | `elements/color_selector` | elements | partials | Selector de color |
| 34 | `elements/modal` | elements | partials | modalx-*, tamaños y padding |
| 35 | `elements/toast` | elements | partials | .toast, .appear |
| 36 | `elements/bottom-sheet` | elements | partials | Bottom sheet |
| 37 | `elements/stepper` | elements | partials | .stepper, .stepper-btn |
| 38 | `elements/drawer` | elements | partials | .drawer, .drawer-sm, .drawer-xl |
| 39 | `elements/md-buttons` | elements | partials | .md-button-wrapper |
| 40 | `elements/md-accordion` | elements | partials | md-accordion |
| 41 | `elements/md-drawer` | elements | partials | Drawer MD |
| 42 | `elements/md-link` | elements | partials | md-link, line-top, line-bottom |
| 43 | `elements/md-dialog` | elements | partials | Diálogos MD |
| 44 | `elements/md-toggle` | elements | partials | md-toggle, md-toggle-lines |
| 45 | `layouts/card` | layouts | partials | Cards |
| 46 | `layouts/card9` | layouts | partials | Card producto (card9-image, card9-add, etc.) |
| 47 | `layouts/box3` | layouts | partials | box3, box3-content, box3-middle |
| 48 | `layouts/header_account` | layouts | partials | Header cuenta |
| 49 | `layouts/hgbread` | layouts | partials | Breadcrumb |
| 50 | `layouts/runway` | layouts | partials | Runway |

---

## Solo docs (guía)

Estos se usan solo en la guía (`docs.scss` → `dist/docs.css`):

| Archivo | Notas |
|---------|--------|
| `abstract/reset` | También en build principal |
| `base/animations` | También en build principal |
| `abstract/all` | También en build principal |
| `base/guide` | Solo docs (estilos de la guía) |

---

## No incluidos en el build principal

Archivos SCSS que **no** están en `_partials.scss` ni en `style.scss` (candidatos a borrar si no los usas por otro canal):

| Archivo | Notas |
|---------|--------|
| `abstract/0debug` | Comentado en partials |
| `layouts/mainmenu` | No importado en partials |
| `layouts/header` | No importado en partials |
| `_variables.scss` (raíz scss) | Si no se importa desde setup/setup no entra |
| `style-rtl.scss` | Entrada alternativa RTL (no style.scss) |
| `hg-lite/*` | Entra vía `style.scss` (hg-lite) |

---

## Cómo ir borrando

1. Abre `scss/_partials.scss`.
2. Comenta la línea del archivo que quieras dejar de usar, por ejemplo:  
   `// @import 'elements/toast';`
3. Genera el CSS y prueba la app.
4. Si todo va bien, borra el archivo SCSS y la línea en `_partials.scss`.

Si quieres, puedo generar esta misma tabla en HTML para verla en el navegador o en otro formato.
