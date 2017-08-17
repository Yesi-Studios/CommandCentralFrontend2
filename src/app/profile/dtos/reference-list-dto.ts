export class ReferenceListDTO {
  type: string;
  isEditable: boolean;
  values: {
    id: string;
    type: string;
    value: string;
    description: string;
  }[];
}
