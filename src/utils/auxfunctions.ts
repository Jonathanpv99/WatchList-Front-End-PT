// Objeto con eventos sospechosos
const suspiciousEvents = {
  1: "Nuevo dominio sospechoso detectado",
  2: "Intento de acceso no autorizado",
  3: "Tráfico anómalo detectado",
  4: "Posible ataque de phishing identificado",
  5: "Actividad inusual en la cuenta",
  6: "Conexión desde ubicación desconocida",
  7: "Múltiples intentos de inicio de sesión fallidos",
  8: "Descarga de archivo potencialmente malicioso",
  9: "Comunicación con servidor sospechoso",
  10: "Modificación no autorizada de configuración",
};

export function getRandomEvents(): string[] {
  const numberOfEvents = Math.floor(Math.random() * 5) + 1;

  // Obtener las claves del objeto de eventos
  const eventKeys = Object.keys(suspiciousEvents);

  // Arreglo para almacenar los eventos seleccionados
  const selectedEvents: string[] = [];

  // Seleccionar eventos aleatorios
  for (let i = 0; i < numberOfEvents; i++) {
    // Seleccionar una clave aleatoria
    const randomIndex = Math.floor(Math.random() * eventKeys.length);
    const randomKey = eventKeys[randomIndex];

    // Agregar el evento correspondiente al arreglo
    selectedEvents.push(suspiciousEvents[randomKey]);

    eventKeys.splice(randomIndex, 1);

    if (eventKeys.length === 0) break;
  }

  return selectedEvents;
}
