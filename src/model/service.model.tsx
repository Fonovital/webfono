export interface Service {
    readonly title: string;
    readonly duration: string;
    readonly price?: number;
    readonly text: string;
    readonly description: string;
    readonly image?: string;
}