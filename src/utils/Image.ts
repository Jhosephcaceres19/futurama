// funcion para ver una imagen por defecto si no tinene imagen la api
export const withFallback = (
  src: string | null | undefined,
  fallback: string
): string => {
  if (!src) return fallback;
  const trimmed = src.trim();
  return trimmed.length > 0 ? trimmed : fallback;
};
