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
            tailwindClass = " h-[10vh] w-[15vw] md:h-[9vh] md:w-[5vw] ";
            break;
        default:
            tailwindClass = "h-[200px] w-[400px] md:h-[300px] md:w-[500px]";
            break;
    }
    return <img className={tailwindClass} src={src} alt={alt} />
}