import { apiUrl } from '../config/config';
import { https } from '../config/https';

export async function getProduct() {
    return await https.get(`${apiUrl}/product`);
}
