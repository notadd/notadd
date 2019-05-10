/**
 * Test all shared code across /libs and /xplat
 * Split out to allow targeted testing against /libs or various xplat support folders
 */
import './test.libs';

declare const require: any;

// web support only right now
const contextWeb = require.context('../xplat/web', true, /\.spec\.ts$/);
// And load the modules.
contextWeb.keys().map(contextWeb);
