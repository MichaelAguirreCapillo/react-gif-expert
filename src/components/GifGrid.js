import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hoosk/useFetchGifs";

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);

    // const getImages = async () => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages);
    // }

    // useEffect(() => {
    //     getImages();
    // }, [])

    const {images,isLoading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && (<p>Cargando ...</p>)
            }
            <div className='card-grid'>
                {
                    images.map((images)=>(
                        <GifItem 
                        key={images.id}
                        { ...images}
                        />
                        // <li key={id}>{title}</li>
                    ))
                }
            </div>
        </>
    );
}