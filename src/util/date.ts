import { parse } from 'date-fns';

export function convertToDate(
  dateString: string,
  format: string = 'MM/dd/yyyy',
): Date {
  const date = parse(dateString, format, new Date());

  if (isNaN(date.getTime())) {
    throw new Error(`Invalid date string: ${dateString}`);
  }

  return date;
}
