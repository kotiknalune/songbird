const youtubeAPIKey : string = 'AIzaSyCYIcXBfLc7MKG_5XyrADnNveEx2i7n_vA';
const pexelsAPIKey : string = '563492ad6f9170000100000157115f143c014a38bc27aedba44efebe';

const pexelHeader = new Headers();
pexelHeader.append("Authorization", pexelsAPIKey);
// pexelHeader.append("Cookie", "__cfduid=de180ffa3bd72bc2f597f24467fcce1001596194647");

export const apiConfig = {
    pexels: {
        images: 'https://api.pexels.com/v1/search?per_page=1&query=',
        video: 'https://api.pexels.com/videos/search?per_page=1&query=',
        specs: {
            method: 'GET',
            headers: pexelHeader,
            redirect: 'follow'
        }
    },
    youtube: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&key=${youtubeAPIKey}&videoDuration=short&type=video&q=`,
    wikipedia: 'https://en.wikipedia.org/api/rest_v1/page/summary/',
    xeno_canto: {
        url: 'https://www.xeno-canto.org/api/2/recordings?query=',
        quality: 'A'
    },
    allaboutbirds: 'https://www.allaboutbirds.org/guide/'
}
