export function getRandomName(): string {
  return Array(32)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
}

export function getCurrentTimestampString(): string {
  return new Date().getTime().toString();
}

export function snakeToCamel(str: string): string {
  return str.replace(/([-_]\w)/g, (g) => g[1].toUpperCase());
}
