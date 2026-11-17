/* Cosiendo Alas · comportamiento común a todas las páginas.
   Sin analítica ni rastreo. */
(function () {
    // Salida rápida: replace() saca la página del historial, así el botón
    // "atrás" del navegador no permite volver aquí.
    function salidaRapida() {
        window.location.replace('https://www.google.com');
    }
    const salida = document.getElementById('salida-rapida');
    if (salida) salida.addEventListener('click', salidaRapida);

    // Menú móvil
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    function toggleMenu() {
        const abierto = mobileMenu.classList.toggle('active');
        menuBtn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    }
    if (menuBtn && mobileMenu) menuBtn.addEventListener('click', toggleMenu);

    // Esc: la primera cierra el menú; dos veces seguidas sale del sitio.
    let escPressTime = 0;
    const DOUBLE_PRESS_DELAY = 600;
    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            toggleMenu();
            menuBtn.focus();
            return;
        }
        const ahora = Date.now();
        if (ahora - escPressTime < DOUBLE_PRESS_DELAY) salidaRapida();
        else escPressTime = ahora;
    });

    // Video sin rastreo: el reproductor de YouTube (modo privacidad mejorada)
    // solo se carga cuando la persona pulsa «Reproducir».
    document.querySelectorAll('.video-sin-rastreo').forEach(function (caja) {
        const btn = caja.querySelector('button');
        if (!btn) return;
        btn.addEventListener('click', function () {
            const id = caja.dataset.video;
            if (!id || id.indexOf('EDITAR') === 0) return;
            const f = document.createElement('iframe');
            f.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) + '?autoplay=1&rel=0';
            f.title = caja.dataset.titulo || 'Video';
            f.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
            f.referrerPolicy = 'strict-origin-when-cross-origin';
            f.className = 'absolute inset-0 w-full h-full';
            caja.innerHTML = '';
            caja.appendChild(f);
        });
    });

    // Secciones plegables: un enlace a #algo abre el bloque que lo contiene.
    function abrirDestino(id, desplazar) {
        if (!id) return;
        var el = document.getElementById(id);
        if (!el) return;
        var d = el.closest('details');
        while (d) { d.open = true; d = d.parentElement && d.parentElement.closest('details'); }
        if (desplazar) el.scrollIntoView();
    }
    document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href*="#"]');
        if (!a) return;
        var url = new URL(a.href, location.href);
        if (url.pathname !== location.pathname) return;
        abrirDestino(decodeURIComponent(url.hash.slice(1)), false);
    });
    window.addEventListener('hashchange', function () { abrirDestino(decodeURIComponent(location.hash.slice(1)), true); });
    if (location.hash) abrirDestino(decodeURIComponent(location.hash.slice(1)), true);
    // Al imprimir, todo abierto.
    window.addEventListener('beforeprint', function () {
        document.querySelectorAll('details').forEach(function (d) { d.open = true; });
    });
    // Botón para cerrar al final de cada bloque largo.
    document.querySelectorAll('details.plegable > .plegable-cuerpo').forEach(function (c) {
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'plegable-cerrar';
        b.innerHTML = '<span aria-hidden="true">↑</span> Cerrar esta sección';
        b.addEventListener('click', function () {
            var d = c.parentElement;
            d.open = false;
            d.scrollIntoView({ block: 'start' });
            d.querySelector('summary').focus();
        });
        c.appendChild(b);
    });

    // Volver arriba: aparece en páginas largas, a la izquierda (la derecha es de la salida rápida).
    var arriba = document.createElement('button');
    arriba.type = 'button';
    arriba.className = 'volver-arriba';
    arriba.setAttribute('aria-label', 'Volver al inicio de la página');
    arriba.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 15l-6-6-6 6"/></svg>';
    arriba.addEventListener('click', function () {
        window.scrollTo({ top: 0 });
        var m = document.getElementById('contenido-principal');
        if (m) m.focus({ preventScroll: true });
    });
    document.body.appendChild(arriba);
    function revisarArriba() { arriba.classList.toggle('visible', window.scrollY > window.innerHeight * 1.5); }
    window.addEventListener('scroll', revisarArriba, { passive: true });
    revisarArriba();
})();
