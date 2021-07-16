export enum Status {
    ACTIVA = 'A',
    CONCLUIDA = 'C',
    INACTIVA = 'I'
}

export function getAllEnumValues() {
    return Object.values(Status);
  }
  
  export function getStatusDescription(value: any) {
    switch (value) {
      case 'A':
        return 'Activa';
  
      case 'I':
        return 'Inactiva';
      
      case 'C':
          return 'Concluida';
        default:
            return null;
    }
  }