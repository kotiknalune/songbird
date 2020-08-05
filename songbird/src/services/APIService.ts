import { apiConfig as config } from "../config/apiConfig";
import { capitalizeString } from "../utilities/utils";

export default class APIService {
    async getInformation(url : string, specs : any = undefined) {
        const result = await fetch(url, specs);
        if(!result.ok) throw new Error(`Could not fetch ${url}, received ${result.status}`);
        const data = await result.json();
        return data;
    }

    async getDescription(item : string) { // full name
        const data = await this.getInformation(`${config.wikipedia}${item}`);
        console.log(data); // extract or extract_html
    }

    async getAudio(item : string) { // full name
        const query = item.toLowerCase().split(' ').join('+');
        const url = `${config.xeno_canto.url}${query}+q:${config.xeno_canto.quality}`;

        const data = await this.getInformation(`${url}`);
        console.log(data); // recordings.file (or url?)
    }

    async getImage(item : string) {
        const data = await this.getInformation(`${config.pexels.images}${item.toLowerCase()}`, config.pexels.specs );
        return data.photos[0].src.large;
    }

    async getVideo(item : string) {
        let data = await this.getInformation(`${config.pexels.video}${item.toLowerCase()}`);
        if (data.total_results !== 0) return data.videos.video_files[0].link; 

        data = await this.getInformation(`${config.youtube}${item.toLowerCase()},bird`);
        console.log(data);
    }

    getLink(item : string) { // full name
        const query = capitalizeString(item).split(' ').join('_');
        const url = `${config.allaboutbirds}${query}`;
        return url;
    }
}
