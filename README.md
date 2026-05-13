# Portfolio de Julio Mendoza

Portfolio personal de desarrollo web enfocado en Angular, TypeScript, HTML, CSS, retos profesionales y contacto directo mediante Formspree.

Es un sitio estático construido con HTML, CSS y JavaScript puro. No requiere instalación de dependencias ni proceso de build.

## Estructura

- `index.html`: estructura principal del sitio.
- `styles.css`: estilos, responsive y animaciones.
- `script.js`: render dinámico, navegación, animaciones y formulario de contacto.
- `data.js`: contenido editable del portfolio y configuración de contacto.

## Editar contenido

La mayoría del contenido visible se actualiza en `data.js`:

- `PROJECTS`: proyectos, tecnologías, repositorios y demos.
- `SKILL_GROUPS`: habilidades y niveles.
- `PROFESSIONAL_CHALLENGES`: retos profesionales y aprendizajes.
- `PROFILE`: nombre, ubicación, biografía, enlaces sociales, correo y endpoint de Formspree.

## Formulario de contacto

El formulario envía mensajes mediante Formspree usando el endpoint configurado en:

```js
PROFILE.contact.formspreeEndpoint
```

Si Formspree tiene dominios autorizados configurados, el envío funcionará solo desde los dominios permitidos. Para pruebas locales, agrega `127.0.0.1:8080` en Formspree o prueba directamente desde el dominio desplegado.

## Ejecutar localmente

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8080
```

Luego abre `http://localhost:8080` en el navegador.

## Despliegue

El proyecto puede desplegarse como sitio estático en:

- Vercel
- GitHub Pages
- Netlify
- Cloudflare Pages

Para Vercel no se requiere configuración especial de build. El sitio se sirve directamente desde `index.html`.

## Pendientes

- Agregar el enlace real de GitHub cuando esté disponible.
- Agregar repositorios y demos reales cuando los proyectos estén listos.
- Agregar capturas reales cuando existan proyectos publicables.
