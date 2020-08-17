import { apiConfig as config } from "../config/apiConfig";
import { capitalizeString } from "../utilities/utils";

export default class APIService {
    async getInformation(url : string, specs : any = undefined) {
        const result = await fetch(url, specs);
        if(!result.ok) throw new Error(`Could not fetch ${url}, received ${result.status}`);
        const data = await result.json();
        return data;
    }

    async getDescription(item : string) {
        const data = await this.getInformation(`${config.wikipedia}${item}`);
        return data.extract;
    }

    async getAudio(item : string) {
        const query = item.toLowerCase().split(' ').join('+');
        const url = `${config.xeno_canto.url}${query}+q:${config.xeno_canto.quality}`;

        const data = await this.getInformation(`${url}`);
        // console.log(data.recordings);
        return data.recordings[0].file;
    }

    async getImage(item : string) {
        const data = await this.getInformation(`${config.wikipedia}${item}`);
        return data.originalimage.source;
    }

    async getVideo(item : string) {
        let data = await this.getInformation(`${config.pexels.video}${item.toLowerCase()}`, config.pexels.specs );
        if (data && data.total_results !== 0) return data.videos[0].video_files[0].link; 

        data = await this.getInformation(`${config.youtube}${item.toLowerCase()},bird`);
        return data;
    }

    getLink(item : string) {
        const query = capitalizeString(item).split(' ').join('_');
        const url = `${config.allaboutbirds}${query}`;
        return url;
    }
}
