


export default class Task {

    public readonly title: string;
    public readonly bgColor: string

    constructor(title: string) {
        this.title = title;
        /*
         * hex color -> #RRGGBBAA
         * RR -> red value
         * GG -> green value
         * BB -> blue value
         * AA -> alpha
         */
        this.bgColor = '#'+ Math.floor(Math.random()*16777215).toString(16) + '80';
        console.log(this.bgColor);
    }
}