import { networkInterfaces } from 'os'
const interfaces = networkInterfaces();
export function getIp() {
    let ip = ``
    Object.keys(interfaces).map(key => {
        const inter = interfaces[key];
        inter.map(it => {
            if (it.family === 'IPv4' && it.address !== '127.0.0.1') {
                ip = ip.length > 0 ? ip : it.address;
            }
        })
    });
    return ip;
}
