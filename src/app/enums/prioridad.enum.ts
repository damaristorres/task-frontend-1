export enum NivelPrioridad {
    ALTA = "A",
    MEDIA = "M",
    BAJA = "B"
}

export function getAllEnumValues() {
  return Object.values(NivelPrioridad);
}

export function getDescription(nivel: any) {
  switch (nivel) {
    case 'A':
      return 'Alta';

    case 'M':
      return 'Media';
    
    case 'B':
        return 'Baja';
    default:
        return null;
  }
}