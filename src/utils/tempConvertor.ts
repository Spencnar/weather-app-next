export function tempConvertor(tempInKelvin: number): number {
  const tempInFar = ((tempInKelvin) * 9/5) - 459.67;
  return Math.floor(tempInFar); 
}