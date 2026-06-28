export function formatDateSr(dateStr: string): string {
  const date = new Date(dateStr);
  const days = ['Nedjelja','Ponedeljak','Utorak','Srijeda','Četvrtak','Petak','Subota'];
  const months = ['januar','februar','mart','april','maj','jun','jul','avgust','septembar','oktobar','novembar','decembar'];
  return `${days[date.getDay()]}, ${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}.`;
}
export function formatPrice(rsd: number): string {
  return new Intl.NumberFormat('sr-RS', { style: 'decimal', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(rsd) + ' RSD';
}
export function getMonthDates(year: number, month: number): Date[] {
  const dates: Date[] = [];
  const daysInMonth = new Date(year, month, 0).getDate();
  for (let d = 1; d <= daysInMonth; d++) dates.push(new Date(year, month - 1, d));
  return dates;
}
export function toISODate(date: Date): string { return date.toISOString().split('T')[0]; }
export function isPastDate(dateStr: string): boolean { const t = new Date(); t.setHours(0,0,0,0); return new Date(dateStr) < t; }
