export interface Event {
    _id: string;
    event: string;
    start: Date;
    cancelled: boolean;
    details: string;
    end: Date;
    pdfFile: string;
    date: string;
    website: string;
    lat: string;
    lon: string;
}
