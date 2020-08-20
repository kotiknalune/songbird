const youtubeAPIKey : string = 'AIzaSyCYIcXBfLc7MKG_5XyrADnNveEx2i7n_vA';

export const apiConfig = {
    youtube: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=${youtubeAPIKey}&videoDuration=short&type=video&q=`,
    wikipedia: 'https://en.wikipedia.org/api/rest_v1/page/summary/',
    xeno_canto: {
        url: 'https://www.xeno-canto.org/api/2/recordings?query=',
        quality: {
            A: 'A',
            B: 'B',
            C: 'C'
        }
    },
    allaboutbirds: 'https://www.allaboutbirds.org/guide/'
}
