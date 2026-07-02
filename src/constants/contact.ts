export const CONTACT = {
  phone: '11 91271-0373',
  phoneRaw: '+5511912710373',
  whatsappUrl: 'https://wa.me/5511912710373',
  whatsappMessage: 'Olá! Gostaria de contratar internet Chácaranet Fiber.',
} as const;

export function getWhatsAppLink(message = CONTACT.whatsappMessage) {
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(message)}`;
}
