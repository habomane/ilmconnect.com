export enum ImageSizing {
    LARGE,
    MEDIUM,
    SMALL
}

export type ImageProps = {
    src: string
    alt?: string
    size?: ImageSizing
}


export const Image: React.FC<ImageProps> = ({ src, alt = "No caption provided", size=ImageSizing.MEDIUM }) => {
    let tailwindClass;

    switch(size) {
        case ImageSizing.LARGE:
            tailwindClass = "h-[442px] w-[382px] md:h-[642px]  md:w-[582px] lg:h-[742px] lg:w-[682px]";
            break;
        case ImageSizing.SMALL:
            tailwindClass = "h-[300px] w-[200px] md:h-[400px] md:w-[300px]";
            break;
        default:
            tailwindClass = "h-[150px] w-[100px] md:h-[300px] md:w-[200px]";
            break;
    }
    return <img className={tailwindClass} src={src} alt={alt} />
}