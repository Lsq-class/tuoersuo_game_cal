import { request } from "./service";

export async function fetchArr(imgCode: any) {
    const options = {
        'method': 'POST',
        'url': 'http://127.0.0.1:3000/getImageData',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        },
        data: {
            image: imgCode,
            
        }
    };

    return request(options)
}
