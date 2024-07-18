
import {useState} from 'react'
import {getGalleryPhotosFromRequire, getSlides} from "./helpers"

export function useGallery(images: __WebpackModuleApi.RequireContext, imagesSize?: imagesSizeType ) {
    const [index, setIndex] = useState(-1);
    const [open, setOpen] = useState(false);
    const photos = imagesSize
        ? getGalleryPhotosFromRequire(images, imagesSize.width, imagesSize.height)
        : getGalleryPhotosFromRequire(images);
    const slides = getSlides(photos);

    return { index, setIndex, open, setOpen, photos, slides };
}

type imagesSizeType = {
    width: number
    height: number
}



