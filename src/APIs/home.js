import { apiUrl } from '../config/config';
import { https } from '../config/https';

export async function getSlider() {
    return await https.get(`${apiUrl}/slider`);
}

export async function getBody() {
    return await https.get(`${apiUrl}/setting`);
}

export async function getProductDetails() {
    return await https.get(`${apiUrl}/setting/Product_details`);
}

export async function getOverView() {
    return await https.get(`${apiUrl}/setting/overview`);
}
export async function getBrand() {
    return await https.get(`${apiUrl}/brand`);
}

export async function getSettings() {
    return await https.get(`${apiUrl}/company`);
}