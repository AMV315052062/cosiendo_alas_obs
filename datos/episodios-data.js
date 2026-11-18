/* ═══════════════════════════════════════════════════════════════════
   EPISODIOS DE CONTRA-ARCHIVO  ·  el único archivo que editas para
   que un videoensayo o un episodio del podcast aparezca en el sitio.
   Lo leen contra-archivo.html (listado) y demasiado-karen.html
   (episodios por parte del libro).
   ═══════════════════════════════════════════════════════════════════
   Para publicar un episodio:
     1. Copia episodios/_plantilla-episodio.html con un nombre nuevo,
        p. ej. episodios/t1-00-no-ser-una-nota.html, y llénala.
     2. Aquí, en su bloque, escribe esa ruta en «url».
        Mientras «url» sea null, la tarjeta dice «En preparación».

   Campos:
     temporada    (obligatorio) 1, 2...
     numero       (obligatorio) número del episodio
     titulo       (obligatorio) título (hoy son títulos de trabajo)
     partes       (obligatorio) partes del libro de las que nace:
                  "I", "II", "III", "IV" o "Epílogo"
     libro        (opcional) capítulo o pasaje concreto
     lectura      (opcional) la teoría u obra que se le cruza
     archivo      (opcional) el documento que lo respalda
     estreno      (opcional) mes previsto o fecha de estreno
     advertencia  (opcional) true si aborda violencia sexual
     url          (opcional) ruta de la página del episodio, o null
   ═══════════════════════════════════════════════════════════════════ */

window.EPISODIOS = [
  { temporada: 1, numero: 0, titulo: "No ser una nota periodística", partes: ["Epílogo"],
    libro: "Página final y Nota del editor",
    lectura: "Conversación entre autora y editor: editar la historia de tu pareja",
    archivo: "Las notas de prensa de marzo de 2023 frente a lo que cuenta el libro",
    estreno: "diciembre 2026", advertencia: true, url: null },
  { temporada: 1, numero: 1, titulo: "Demasiado Karen", partes: ["III", "Epílogo"],
    libro: "«Tienes que ser menos Karen» y el epílogo",
    lectura: "Sara Ahmed y la figura de la aguafiestas feminista",
    archivo: "El meme de «Karen» en redes",
    estreno: "enero 2027", url: null },
  { temporada: 1, numero: 2, titulo: "La casa como Panóptico", partes: ["I"],
    lectura: "Foucault, Vigilar y castigar. Ripstein, El castillo de la pureza (1972)",
    estreno: "febrero 2027", url: null },
  { temporada: 1, numero: 3, titulo: "La escuela que encubre", partes: ["I"],
    lectura: "Rita Segato, Contra-pedagogías de la crueldad",
    archivo: "Protocolos escolares y fichas del Observatorio",
    estreno: "marzo 2027", advertencia: true, url: null },
  { temporada: 1, numero: 4, titulo: "«Una serie de instancias muy confusas»", partes: ["II"],
    libro: "La Unidad de Género y el procedimiento administrativo",
    lectura: "Castoriadis y la credibilidad de quien denuncia. Sara Ahmed, Complaint!",
    archivo: "Acuerdo de la UPAV y protocolo de la UAM",
    estreno: "abril 2027", advertencia: true, url: null },
  { temporada: 1, numero: 5, titulo: "Tendedero y funa", partes: ["II", "Epílogo"],
    lectura: "Mónica Mayer, El Tendedero (1978)",
    archivo: "Los carteles, el tendedero y las amenazas de demanda por difamación",
    estreno: "mayo 2027", url: null },
  { temporada: 1, numero: 6, titulo: "Diamantina: el paro", partes: ["II"],
    libro: "El 8 de marzo de 2023 y los dos meses de paro",
    lectura: "Ann Cvetkovich, An Archive of Feelings",
    archivo: "Comunicados de la UAM y prensa de marzo de 2023",
    estreno: "junio 2027", url: null },
  { temporada: 2, numero: 7, titulo: "La víctima como categoría jurídica", partes: ["Epílogo"],
    lectura: "Fassin y Rechtman, El imperio del trauma",
    archivo: "El «normal desarrollo psicosexual» como bien jurídico en el Código Penal de la CDMX",
    url: null },
  { temporada: 2, numero: 8, titulo: "El proceso como castigo", partes: ["III", "IV"],
    lectura: "Conversación con sus abogados sobre revictimización y contradenuncias",
    archivo: "Solo lo que sus abogados aprueben",
    advertencia: true, url: null },
  { temporada: 2, numero: 9, titulo: "La cinepolita", partes: ["IV"],
    lectura: "Precariedad y apoyo mutuo. BoJack Horseman",
    url: null },
  { temporada: 2, numero: 10, titulo: "Otro modo de ser humana y libre", partes: ["Epílogo"],
    libro: "El epílogo y el análisis de «Ajedrez»",
    lectura: "Rosario Castellanos",
    url: null }
];
