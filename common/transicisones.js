// ============================================================
// CONTROL DE MODAL CON TRANSICIONES CINEMATOGRÁFICAS
// ============================================================

function abrirModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('closing');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.add('closing');

    // Esperar a que termine la animación de salida
    setTimeout(function () {
        overlay.classList.remove('active', 'closing');
        document.body.style.overflow = '';
    }, 450);
}

// Cerrar modal al hacer clic en el overlay
document.addEventListener('click', function (e) {
    const overlay = document.getElementById('modalOverlay');
    if (e.target === overlay && overlay.classList.contains('active')) {
        cerrarModal();
    }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const overlay = document.getElementById('modalOverlay');
        if (overlay.classList.contains('active')) {
            cerrarModal();
        }
    }
});