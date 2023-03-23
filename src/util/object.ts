function isObjectEmpty(obj: Object): boolean {
  if (obj === null || obj === undefined) {
    throw new Error('Invalid argument: Expected an object');
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

function isObjectValuesEmpty(obj: Object): boolean {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (obj[key] !== null && obj[key] !== '' && obj[key] !== undefined) {
        return false;
      }
    }
  }
  return true;
}

export function hasNonEmptyValue(obj: Object): boolean {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key];
      if (
        value !== null &&
        value !== undefined &&
        value !== '' &&
        !isNaN(value)
      ) {
        return true;
      }
    }
  }
  return false;
}
