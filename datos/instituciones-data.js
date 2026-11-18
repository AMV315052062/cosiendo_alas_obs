/* ═══════════════════════════════════════════════════════════════════
   ÍNDICE DE INSTITUCIONES  ·  este es el único archivo que editas
   para que una universidad aparezca en el listado.
   ═══════════════════════════════════════════════════════════════════
   Para agregar una: copia un bloque { ... }, pégalo en la lista y
   cambia los datos. Cuida las comas al final de cada bloque.

   Campos:
     siglas   (obligatorio) como se conoce a la institución
     nombre   (obligatorio) nombre completo
     entidad  (opcional)    estado o ciudad
     regimen  (obligatorio) una de las claves de REGIMENES_NOMBRES
     estado   (opcional)    en qué punto va su evaluación
     ficha    (obligatorio) ruta de su ficha, p. ej. "instituciones/unam.html"
   ═══════════════════════════════════════════════════════════════════ */

window.REGIMENES_NOMBRES = {
  "autonoma-federal":    "Autónoma federal",
  "federal-sectorizada": "Federal sectorizada",
  "local-autonoma":      "Local autónoma",
  "local":               "Local no autónoma",
  "normal":              "Normal",
  "artes":               "Artes",
  "centro-publico":      "Centro público"
};

window.INSTITUCIONES = [
  {
    siglas: "EJEMPLO",
    nombre: "Universidad de Ejemplo (ficticia: borra este bloque)",
    entidad: "Ciudad de México",
    regimen: "autonoma-federal",
    estado: "Registro hemerográfico completo; evaluación contra la matriz pendiente.",
    ficha: "instituciones/_plantilla-ficha.html"
  }
];
