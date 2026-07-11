# Portafolio Personal — Joan Steven Jiménez Puerta

Sitio web personal de una sola página (single-page scroll) que presenta mi
perfil profesional, habilidades, proyectos y certificaciones. Construido con
tecnologías web fundamentales (HTML, CSS y JavaScript vanilla), sin frameworks,
para demostrar dominio de las bases del desarrollo web.

**Enfoque profesional:** Soporte IT · Análisis de Datos · Desarrollo Web Junior

---

## Tabla de contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones del sitio](#secciones-del-sitio)
- [Flujo de trabajo](#flujo-de-trabajo)
- [Cómo ejecutar localmente](#cómo-ejecutar-localmente)
- [Despliegue](#despliegue)
- [Estado del proyecto](#estado-del-proyecto)

---

## Descripción

Portafolio de una sola página con navegación por scroll y secciones ancladas.
El objetivo es contar de forma clara mi transición desde nueve años en el sector
comercial y financiero hacia una carrera técnica, y mostrar proyectos reales y
publicados que respalden ese perfil.

Se eligió una única página (en lugar de varias) porque para un portafolio de
este tamaño es más fácil de construir y mantener en vanilla, carga de una sola
vez, funciona bien en móvil y le entrega al reclutador todo el contenido en un
solo recorrido sin clics adicionales.

---

## Tecnologías

| Tecnología       | Uso en el proyecto                                                 |
| ---------------- | ------------------------------------------------------------------ |
| **HTML5**        | Estructura semántica del documento (header, nav, section, footer). |
| **CSS3**         | Estilos, diseño responsive, variables CSS, tema oscuro tipo dashboard. |
| **JavaScript**   | Interactividad: menú de navegación, scroll suave, efectos al hacer scroll. |
| **Git**          | Control de versiones, historial de cambios por fase.               |
| **GitHub**       | Repositorio remoto y alojamiento del código.                       |
| **GitHub Pages** | Despliegue del sitio con una URL pública y gratuita.               |

**Sin frameworks ni librerías externas.** La decisión es intencional: un
portafolio en vanilla demuestra que domino los fundamentos antes de apoyarme en
abstracciones.

---

## Estructura del proyecto

```
portafolio-joan/
├── index.html            # Estructura y contenido de la página
├── css/
│   └── styles.css        # Todos los estilos (variables, layout, responsive)
├── js/
│   └── script.js         # Lógica: menú, scroll suave, interacciones
├── assets/
│   ├── img/              # Imágenes (monograma, foto futura, capturas)
│   ├── icons/            # Íconos usados en la interfaz
│   └── cv/
│       ├── CV-Joan-Jimenez-ATS.pdf   # Versión sin foto (ATS)
│       └── CV-Joan-Jimenez.pdf       # Versión con foto
├── README.md             # Este documento
└── .gitignore            # Archivos y carpetas que Git debe ignorar
```

Separar `css/`, `js/` y `assets/` mantiene el proyecto ordenado y escalable, y
refleja una estructura profesional aunque sea un proyecto pequeño.

---

## Secciones del sitio

El sitio se recorre de arriba hacia abajo en este orden:

1. **Inicio (Hero)** — Nombre, titular con los tres enfoques, presentación breve
   y botones de acción (ver proyectos, descargar CV, contacto).
2. **Sobre mí** — Narrativa de la transición de lo comercial/financiero a lo técnico.
3. **Habilidades** — Tres bloques: Soporte IT, Datos y Desarrollo web.
4. **Proyectos** — Tres tarjetas con proyectos reales y publicados en GitHub.
5. **Certificaciones** — Tres certificaciones obtenidas.
6. **Contacto** — Email, LinkedIn, GitHub y descarga del CV.

---

## Flujo de trabajo

El proyecto se construye por fases, validando cada una antes de pasar a la
siguiente. Este es el proceso de desarrollo de principio a fin:

| Fase       | Objetivo                                                                    |
| ---------- | ----------------------------------------------------------------------------| 
| **FASE 0** | Definir estructura y contenido: secciones, qué muestra cada una, narrativa  |
| **FASE 1** | Estructura HTML semántica (el "esqueleto" de todas las secciones)           |
| **FASE 2** | Estilos CSS base: variables, tipografía, colores, tema oscuro               |  
| **FASE 3** | Layout y diseño responsive (escritorio, tablet, móvil)                      |  
| **FASE 4** | Interactividad con JavaScript (menú, scroll suave, efectos al hacer scroll) |
| **FASE 5** | Contenido real, enlaces a repos y CV descargable                            | 
| **FASE 6** | README, ajustes finales y despliegue en GitHub Pages                        |             
--------------------------------------------------------------------------------------------
Cada fase se cierra con uno o varios commits descriptivos en Git antes de
avanzar a la siguiente.

### Control de versiones (Git)

- Trabajo sobre la rama `main`.
- Un commit por cada avance significativo, con mensajes descriptivos.
- Convención de mensajes sugerida:
  - `feat:` nueva funcionalidad o sección
  - `style:` cambios de estilos/CSS
  - `fix:` corrección de un error
  - `docs:` cambios en documentación

Ejemplo: `feat: agregar sección de proyectos con tres tarjetas`

---

## Cómo ejecutar localmente

Al ser un sitio estático, no requiere instalación ni dependencias.

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/joanjz10/portafolio-joan.git
   ```
2. Entrar a la carpeta:
   ```bash
   cd portafolio-joan
   ```
3. Abrir `index.html` en el navegador (doble clic) o, mejor, usar la extensión
   **Live Server** en VS Code para recarga automática mientras se desarrolla.

---

## Despliegue

El sitio se publica gratis con **GitHub Pages**:

1. Subir el proyecto al repositorio remoto en GitHub.
2. En el repositorio: `Settings` → `Pages`.
3. Seleccionar la rama `main` y la carpeta raíz (`/root`) como fuente.
4. GitHub genera la URL pública (por ejemplo, `joanjz10.github.io/portafolio-joan`).

Esa URL se agrega al CV y al perfil de LinkedIn.

---

## Estado del proyecto

**En desarrollo** — actualmente en la fase de documentación y planeación.
El diseño ya está definido mediante mockup; el siguiente paso es construir la
estructura HTML.

---

## Contacto

- **LinkedIn:** [linkedin.com/in/joanjimenezdev](https://linkedin.com/in/joanjimenezdev)
- **GitHub:** [github.com/joanjz10](https://github.com/joanjz10)