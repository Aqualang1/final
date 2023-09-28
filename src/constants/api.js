// import { response } from "express";
import API_URL from "./constants";

export const deleteProduct = (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    }).then(response => response.json());
}

export const getProduct = () =>
    fetch(API_URL).then(response => response.json());

export const editProduct = (product) => {
    return fetch(`${API_URL}/${product.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
    }).then(response => response.json());
}

export const createProduct = (product) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    }).then(response => response.json());
}

export const getProductById = (productId) => {
    return fetch(`${API_URL}/${productId}`)
        .then(response => response.json());
}

// const getData = async () => {
//     try {
//         const response = await fetch(API_URL);
//         const products = await response.json();
//         setProducts(products);
//     } catch (error) {
//         console.error("not loaded", error);
//     }
//     setIsLoaded(true);
// }

// async function deleteProduct(id) {
//     try {
//         const response = await fetch(`${API_URL}/${id}`, {
//             method: 'DELETE'
//         });
//         if (response.ok) {
//             setIsLoaded(false);
//         }
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// export async function editProduct(product) {
//     try {
//         const response = await fetch(`${API_URL}/${product.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(product)
//         });

//         return await response.json();
//     } catch (error) {
//         return error;
//     }
// }

// export async function createProduct(product) {
//     try {
//         const response = await fetch(API_URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(product),
//         });

//         if (response.ok) {
//             // setIsLoaded(false);
//             const responseData = await response.json();
//             return responseData;
//         }
//     } catch (error) {
//         console.error('createProduct error occurred:', error);
//     }
// }
