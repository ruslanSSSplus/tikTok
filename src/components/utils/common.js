export const request = async ({path, method = 'GET', body}) => {

    const url = `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`
     const options = {
        method,
        headers: {
            'X-RapidAPI-Key': '64f452bc67msh52f1ed9edf6738bp1b9c5fjsnea630400d0a7',
            'X-RapidAPI-Host': 'tiktok-video-no-watermark2.p.rapidapi.com'
        }
    };
    
    if(body) options.body = body

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result
    } catch (error) {
        console.error(error);
    }
}