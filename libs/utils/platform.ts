/**
 * NativeScript helpers
 */

declare var NSObject, NSString, android, java, window;

/**
 * Determine if running on native iOS mobile app
 */
export function isIOS() {
  return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined';
}

/**
 * Determine if running on native Android mobile app
 */
export function isAndroid() {
  return typeof android !== 'undefined' && typeof java !== 'undefined';
}

/**
 * Determine if running on native iOS or Android mobile app
 */
export function isNativeScript() {
  return isIOS() || isAndroid();
}

/**
 * Electron helpers
 */
export function isElectron() {
  return typeof window !== 'undefined' && window.process && window.process.type;
}
