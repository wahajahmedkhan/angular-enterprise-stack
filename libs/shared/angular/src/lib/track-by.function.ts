/**
 * Helper functions for using `trackBy` with common properties
 */

export function trackByIndex<T>(index: number, _item: T): number {
  return index;
}

export function trackById<T extends { id: string | number }>(
  _i: number,
  item: T,
): string | number {
  return item.id;
}

export function trackByEmail<T extends { email: string }>(
  _i: number,
  item: T,
): string {
  return item.email;
}

export function trackByUuid<T extends { uuid: string }>(
  _i: number,
  item: T,
): string {
  return item.uuid;
}
