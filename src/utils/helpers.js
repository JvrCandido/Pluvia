export function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  }
  
  export function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(1);
  }
  