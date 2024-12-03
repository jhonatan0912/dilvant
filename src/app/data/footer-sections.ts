import type { FooterSection } from '@interfaces/footer-item.interface';

export const sections: FooterSection[] = [
  {
    id: 1, label: "Platos Estrellas", items: [
      { label: "Ceviche", url: "", external: false },
      { label: "Lomo Saltado", url: "", external: false },
      { label: "Causa Rellena", url: "", external: false },
    ]
  },
  {
    id: 1, label: "Contacto", items: [
      { label: "+51 999 999 999", url: "", external: false },
      { label: "dilvant.restaurante@gmail.com", url: "", external: false },
    ]
  },
  {
    id: 1, label: "Encuéntranos", items: [
      { label: "Av. Dirección 1", url: "", external: false }
    ]
  },
];