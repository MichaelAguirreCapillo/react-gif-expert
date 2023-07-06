import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const apiKey = '13q2lsvxTpO2O3O4LH9CllpCxXH8Eqiw';

export const GifExportApp = () => {

    const [categories, setCategories] = useState([]); //'One Punch'

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory,...categories,]);
    }

    return (
        <>
            <h1>GifExportApp</h1>
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            />
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    );
}