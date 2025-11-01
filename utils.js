/**
 * Utilidades para Baldosas AR
 * Funciones auxiliares para geolocalización, validación y tracking
 */

// ==================== GEOLOCALIZACIÓN ====================

/**
 * Calcular distancia entre dos puntos GPS (fórmula de Haversine)
 * @param {number} lat1 - Latitud del punto 1
 * @param {number} lng1 - Longitud del punto 1
 * @param {number} lat2 - Latitud del punto 2
 * @param {number} lng2 - Longitud del punto 2
 * @returns {number} Distancia en metros
 */
function calcularDistancia(lat1, lng1, lat2, lng2) {
  const R = 6371e3; // Radio de la Tierra en metros
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lng2 - lng1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // en metros
}

/**
 * Verificar si el usuario está dentro del radio permitido
 * @param {object} userLoc - {lat, lng} del usuario
 * @param {object} targetLoc - {lat, lng} del objetivo
 * @param {number} maxDistance - Distancia máxima permitida en metros
 * @returns {object} {dentroDelRadio: boolean, distancia: number}
 */
function verificarProximidad(userLoc, targetLoc, maxDistance = 50) {
  if (!userLoc || !targetLoc) {
    return { dentroDelRadio: false, distancia: null, error: 'Ubicaciones no disponibles' };
  }

  const distancia = calcularDistancia(
    userLoc.lat,
    userLoc.lng,
    targetLoc.lat,
    targetLoc.lng
  );

  return {
    dentroDelRadio: distancia <= maxDistance,
    distancia: Math.round(distancia),
    mensaje: distancia <= maxDistance
      ? `Estás a ${Math.round(distancia)} metros de la baldosa`
      : `Debes acercarte ${Math.round(distancia - maxDistance)} metros más`
  };
}

/**
 * Obtener ubicación del usuario (Promesa)
 * @param {object} options - Opciones de geolocalización
 * @returns {Promise} Promesa con la ubicación
 */
function obtenerUbicacion(options = {}) {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocalización no disponible en este navegador'));
      return;
    }

    const defaultOptions = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0,
      ...options
    };

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp
        });
      },
      (error) => {
        let mensaje = 'Error obteniendo ubicación';
        switch (error.code) {
          case error.PERMISSION_DENIED:
            mensaje = 'Permiso de ubicación denegado';
            break;
          case error.POSITION_UNAVAILABLE:
            mensaje = 'Ubicación no disponible';
            break;
          case error.TIMEOUT:
            mensaje = 'Tiempo de espera agotado';
            break;
        }
        reject(new Error(mensaje));
      },
      defaultOptions
    );
  });
}

// ==================== TRACKING DE AR ====================

/**
 * Configuración de tracking para MindAR
 */
const trackingConfig = {
  // Tolerante para condiciones variadas de iluminación
  filterMinCF: 0.0001,
  filterBeta: 0.001,
  
  // Aumenta si las baldosas se pierden fácilmente
  missTolerance: 5,
  
  // Útil para debugging
  warmupTolerance: 5,
  
  // Tracking más suave
  smoothCount: 3
};

/**
 * Validar calidad de tracking
 * @param {number} confidence - Nivel de confianza del tracking (0-1)
 * @returns {string} Calidad: 'excelente', 'buena', 'regular', 'pobre'
 */
function validarCalidadTracking(confidence) {
  if (confidence > 0.8) return 'excelente';
  if (confidence > 0.6) return 'buena';
  if (confidence > 0.4) return 'regular';
  return 'pobre';
}

// ==================== BASE DE DATOS EXPANDIDA ====================

/**
 * Estructura completa de datos de baldosas
 * Expandir con información real
 */
const baldosasDBExtendida = {
  0: {
    id: 'baldosa-3',
    nombre: 'Baldosa Nélida Ardito y Martha Brea',
    descripcion: 'Aquí trabajaron Militantes Populares detenidas desaparecidas',
    personas: [
      {
        nombre: 'Nélida Beatriz Ardito',
        fechaDesaparicion: '13/10/1976',
        edad: null
      },
      {
        nombre: 'Martha Maria Brea',
        fechaDesaparicion: '31/03/1977',
        edad: null
      }
    ],
    ubicacion: {
      lat: -34.6037, // ⚠️ REEMPLAZAR CON COORDENADA REAL
      lng: -58.3816, // ⚠️ REEMPLAZAR CON COORDENADA REAL
      direccion: 'Dirección exacta de la baldosa',
      barrio: 'Nombre del barrio'
    },
    contexto: {
      tipo: 'trabajo',
      lugar: 'Lugar de trabajo'
    },
    recursosAdicionales: {
      foto: null,
      audio: null,
      video: null,
      biografia: null
    }
  },
  1: {
    id: 'baldosa-4',
    nombre: 'Baldosa Roberto Fernando Tortora',
    descripcion: 'Aquí vivió Roberto Fernando Tortora, secuestrado junto a Adriana Namio',
    personas: [
      {
        nombre: 'Roberto Fernando Tortora',
        fechaDesaparicion: '27/04/1977',
        edad: null
      },
      {
        nombre: 'Adriana Namio de Carlipparro',
        fechaDesaparicion: '27/04/1977',
        edad: null
      }
    ],
    ubicacion: {
      lat: -34.6037, // ⚠️ REEMPLAZAR CON COORDENADA REAL
      lng: -58.3816, // ⚠️ REEMPLAZAR CON COORDENADA REAL
      direccion: 'Dirección exacta de la baldosa',
      barrio: 'Nombre del barrio'
    },
    contexto: {
      tipo: 'vivienda',
      lugar: 'Lugar de residencia'
    },
    recursosAdicionales: {
      foto: null,
      audio: null,
      video: null,
      biografia: null
    }
  }
};

// ==================== UI HELPERS ====================

/**
 * Mostrar notificación toast
 * @param {string} mensaje - Mensaje a mostrar
 * @param {string} tipo - 'info', 'success', 'warning', 'error'
 * @param {number} duracion - Duración en ms
 */
function mostrarNotificacion(mensaje, tipo = 'info', duracion = 3000) {
  const colores = {
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336'
  };

  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colores[tipo]};
    color: white;
    padding: 12px 24px;
    border-radius: 25px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    z-index: 9999;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    animation: slideUp 0.3s ease-out;
  `;
  toast.textContent = mensaje;

  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateX(-50%) translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, duracion);
}

/**
 * Actualizar contador de baldosas encontradas
 */
let baldosasEncontradas = new Set();

function registrarBaldosaEncontrada(indice) {
  baldosasEncontradas.add(indice);
  const total = Object.keys(baldosasDBExtendida).length;
  const encontradas = baldosasEncontradas.size;
  
  console.log(`Progreso: ${encontradas}/${total} baldosas encontradas`);
  
  if (encontradas === total) {
    mostrarNotificacion('¡Has encontrado todas las baldosas! 🎉', 'success', 5000);
  }
}

// ==================== ANALYTICS (OPCIONAL) ====================

/**
 * Registrar evento de tracking (para analytics)
 * @param {string} evento - Nombre del evento
 * @param {object} datos - Datos adicionales
 */
function registrarEvento(evento, datos = {}) {
  const timestamp = new Date().toISOString();
  const eventoCompleto = {
    evento,
    timestamp,
    ...datos
  };
  
  console.log('📊 Evento:', eventoCompleto);
  
  // Aquí podrías enviar a Google Analytics, Mixpanel, etc.
  // Ejemplo con Google Analytics:
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', evento, datos);
  // }
}

// ==================== EXPORTAR PARA USO ====================

// Si usas módulos ES6:
// export { 
//   calcularDistancia, 
//   verificarProximidad, 
//   obtenerUbicacion,
//   trackingConfig,
//   baldosasDBExtendida,
//   mostrarNotificacion,
//   registrarBaldosaEncontrada,
//   registrarEvento
// };

// Para uso directo en HTML:
window.BaldosasUtils = {
  calcularDistancia,
  verificarProximidad,
  obtenerUbicacion,
  trackingConfig,
  baldosasDBExtendida,
  mostrarNotificacion,
  registrarBaldosaEncontrada,
  registrarEvento,
  validarCalidadTracking
};

console.log('✅ Baldosas Utils cargado');
