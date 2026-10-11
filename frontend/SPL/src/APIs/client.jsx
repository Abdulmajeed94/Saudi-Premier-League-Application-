// const url = process.env.EXPO_PUBLIC_BASE_URL
// const API_KEY = process.env.EXPO_PUBLIC_FOOTBALL_API_TOKEN
// export const fetching =async (endpoint , options ={})=>{
//      const fullUrl = `${url}${endpoint}`;

//         console.log('REQUEST URL:', fullUrl);
//         console.log('BASE URL:', url);
//         console.log('ENDPOINT:', endpoint);
//         console.log('API:', API_KEY);
    
//     const response = await fetch(`${url}${endpoint}`,{

        
//         headers:{
//             "Content-Type" : "application/json",
//             "X-API-Key": API_KEY
//         },
//         ...options,
//     })
    
//     const data = response.json()

//     if(!response.ok){
//         throw new Error(`API error: ${response.status}` )
//     }

//     console.log("connected to API")
//     return data
// } 