// import API_URL from "./constants";


// export async function editProduct(product) {
//     try {
//         const response = await fetch(`${API_URL}/${product.id}`, {
//             method: 'PUT',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(product)
//         });

//         if (response.ok) {
//             setIsLoaded(false);
//             return await response.json();
//         }
//     } catch (error) {
//         console.error('editProduct error occurred:', error);
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
//             setIsLoaded(false);
//             const responseData = await response.json();
//             return responseData;
//         }
//     } catch (error) {
//         console.error('createProduct error occurred:', error);
//     }
// }