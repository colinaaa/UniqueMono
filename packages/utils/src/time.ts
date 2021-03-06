export function getMidnight(dateOrTime: Date | number): Date {
  const newDate = new Date(dateOrTime);
  newDate.setHours(0);
  newDate.setMinutes(0);
  newDate.setSeconds(0);
  newDate.setMilliseconds(0);
  return newDate;
}

export function convertToDateString(data: Date): string;
export function convertToDateString(time: number): string;
export function convertToDateString(dateOrTime: number | Date): string {
  const date = new Date(dateOrTime);
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
}
