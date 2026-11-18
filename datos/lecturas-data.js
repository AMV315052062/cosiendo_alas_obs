/* ═══════════════════════════════════════════════════════════════════
   LECTURAS  ·  este es el único archivo que editas para publicar
   un ensayo en el listado.
   ═══════════════════════════════════════════════════════════════════
   Para agregar uno: copia un bloque { ... }, pégalo ARRIBA de la lista
   (lo más nuevo aparece primero) y cambia los datos.

   Campos:
     titulo      (obligatorio)
     eje         (obligatorio) una clave de EJES_NOMBRES
     url         (obligatorio) ruta del ensayo, p. ej. "lecturas/mi-ensayo.html"
     autoria     (opcional)
     fecha       (opcional)  p. ej. "septiembre 2026"
     lectura     (opcional)  p. ej. "8 min"
     resumen     (opcional)  una o dos frases
     advertencia (opcional)  true si el texto aborda violencia sexual
     etiquetas   (opcional)  palabras que solo usa el buscador
     externo     (opcional)  true si el enlace sale del sitio
   ═══════════════════════════════════════════════════════════════════ */

window.EJES_NOMBRES = {
  "juridicos":       "Discursos jurídicos",
  "culturales":      "Discursos culturales",
  "medios":          "Medios",
  "cine-literatura": "Cine y literatura"
};

window.LECTURAS = [
  {
    titulo: "La Furia (2025)",
    eje: "cine-literatura",
    autoria: "Karen Socorro",
    lectura: "6 min",
    resumen: "La oscuridad del trauma y el derecho innegable a transitar la rabia.",
    advertencia: true,
    etiquetas: ["película", "rabia", "teatro / medea", "trauma"],
    url: "lecturas/la-furia.html"
  },
  {
    titulo: "Fue solo un accidente (2025)",
    eje: "cine-literatura",
    autoria: "Karen Socorro",
    lectura: "5 min",
    resumen: "El dilema desgarrador entre la justicia, la rabia y la misericordia.",
    advertencia: true,
    etiquetas: ["película", "tept", "dilema moral", "resistencia"],
    url: "lecturas/fue-solo-un-accidente.html"
  },
  {
    titulo: "Sorry, Baby (2025)",
    eje: "cine-literatura",
    autoria: "Karen Socorro",
    lectura: "7 min",
    resumen: "Un entendimiento cálido que abraza al corazón con esperanza y resistencia.",
    advertencia: true,
    etiquetas: ["película", "sanación", "amistad femenina", "reconstrucción"],
    url: "lecturas/sorry-baby.html"
  },
  {
    titulo: "Amores Materialistas (2025)",
    eje: "cine-literatura",
    autoria: "Karen Socorro",
    lectura: "5 min",
    resumen: "Una deconstrucción madura de la comedia romántica, donde el amor y la frivolidad chocan con la realidad.",
    advertencia: true,
    etiquetas: ["película", "comedia romántica", "materialismo", "responsabilidad colectiva"],
    url: "lecturas/amores-materialistas.html"
  },
  {
    titulo: "How to Have Sex (2023)",
    eje: "cine-literatura",
    autoria: "Karen Socorro",
    lectura: "6 min",
    resumen: "Una exploración matizada del consentimiento y la presión social.",
    advertencia: true,
    etiquetas: ["película", "consentimiento", "amistad femenina", "presión social"],
    url: "lecturas/how-to-have-sex.html"
  },
  {
    titulo: "Promising Young Woman (2020)",
    eje: "cine-literatura",
    autoria: "Karen Socorro",
    lectura: "6 min",
    resumen: "La subversión de la venganza y el dolor disfrazado de tonos pastel.",
    advertencia: true,
    etiquetas: ["película", "duelo", "venganza psicológica", "cómplices"],
    url: "lecturas/promising-young-woman.html"
  },
  {
    titulo: "Atleta A (2020)",
    eje: "cine-literatura",
    autoria: "Karen Socorro",
    lectura: "6 min",
    resumen: "Una visión desgarradora pero esencial que arroja luz implacable sobre el abuso y el sistema que lo protegió.",
    advertencia: true,
    etiquetas: ["documental", "violencia institucional", "periodismo", "abuso deportivo"],
    url: "lecturas/atleta-a.html"
  },
  {
    titulo: "Tengo un nombre (Know my name)",
    eje: "cine-literatura",
    autoria: "Karen Socorro",
    lectura: "3 min",
    resumen: "Reseña de las memorias de Chanel Miller.",
    advertencia: true,
    etiquetas: ["libro", "memorias", "testimonio"],
    url: "lecturas/tengo-un-nombre.html"
  }
];
