# Portfolio de Julio Mendoza

Sitio personal estático construido con HTML, CSS y JavaScript puro. No requiere instalación de dependencias ni proceso de build.

## Estructura

- `index.html`: estructura principal del sitio.
- `styles.css`: estilos, responsive y animaciones.
- `script.js`: render dinámico, navegación, animaciones y formulario de contacto.
- `data.js`: contenido editable del portfolio.

## Editar contenido

La mayoría del contenido visible se actualiza en `data.js`:

- `PROJECTS`: proyectos, tecnologías, repositorios y demos.
- `SKILL_GROUPS`: habilidades y niveles.
- `PROFESSIONAL_CHALLENGES`: retos profesionales y aprendizajes.
- `PROFILE`: nombre, ubicación, biografía, enlaces sociales y correo.

## Ejecutar localmente

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8080
```

Luego abre `http://localhost:8080` en el navegador.

## Pendientes antes de publicar

- Reemplazar los enlaces placeholder de GitHub, LinkedIn, demos y repositorios.
- Agregar el enlace real de GitHub cuando esté disponible.
- Agregar repositorios y demos reales cuando los proyectos estén listos.
- Crear un formulario en Formspree y pegar su endpoint en `PROFILE.contact.formspreeEndpoint`.
- Agregar capturas reales en la sección de caso de estudio si están disponibles.
