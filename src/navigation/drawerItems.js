import {
  aviso,
  document,
  faq,
  fibra,
  historial,
  session,
  pagos,
  termino,
} from '../constants/images';

export const drawerItems = [
  {title: 'Historial de inversions', navigation: 'Cuenta', icon: historial},
  {title: 'Pagos recibios', navigation: 'Cuenta', icon: pagos},
  {title: 'Documentos', navigation: 'Cuenta', icon: document},
  {title: 'FAQ', navigation: 'Cuenta', icon: faq},
  {title: 'Fibra Cero', navigation: 'Cuenta', icon: fibra},
  {title: 'Términos y condiciones', navigation: 'Cuenta', icon: termino},
  {title: 'Aviso de privacidad', navigation: 'Cuenta', icon: aviso},
  {title: 'Cerrar sesión', navigation: 'Cuenta', icon: session},
];
