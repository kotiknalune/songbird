import { apiConfig as config } from "../config/apiConfig";
import { capitalizeString } from "../utilities/utils";

const INIT = 0;

export default class APIService {
    async getInformation(url : string) {
        const result = await fetch(url);
        if(!result.ok) throw new Error(`Could not fetch ${url}, received ${result.status}`);
        const data = await result.json();
        return data;
    }

    async getDescription(item : string) {
        const query = item.toLowerCase().split(' ').join('_');
        const data = await this.getInformation(`${config.wikipedia}${query}`);
        return data.extract;
    }

    async getAudio(item : string) {
        const { quality } = config.xeno_canto;

        const query = item.toLowerCase().split(' ').join('+');
        const url = `${config.xeno_canto.url}${query}`;

        const data = await this.getInformation(`${url}`);
        const recordings = data.recordings.filter((recording:any) => recording.q === quality.A || recording.q === quality.B || recording.q === quality.C);

        return recordings[INIT].file;
    }

    async getImage(item : string) {
        const query = item.toLowerCase().split(' ').join('_');
        const data = await this.getInformation(`${config.wikipedia}${query}`);

        const src = await data.originalimage.source;
        return src;
    }

    async getVideo(item : string) {
        const data = await this.getInformation(`${config.youtube}${item.toLowerCase()}`);
        const urlTemplate = 'https://www.youtube.com/watch?v=';

        console.log( `${ urlTemplate }${ data.items[INIT].id.videoId }`)

        return `${ urlTemplate }${ data.items[INIT].id.videoId }`;
    }

    getLink(item : string) {
        const query = capitalizeString(item).split(' ').join('_');
        const url = `${config.allaboutbirds}${query}`;
        return url;
    }
}
