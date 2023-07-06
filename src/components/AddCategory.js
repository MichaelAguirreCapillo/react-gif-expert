import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [value, setValue] = useState('');

    const onInputChange = (newValue) => {
        setValue(newValue);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if (value.trim().length <= 1) return;

        // setCategories((categories) => [...categories, value]);
        onNewCategory(value.trim());

        setValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="buscar gifs"
                value={value}
                onChange={(event) => onInputChange(event.target.value)}
            />
        </form>

    );
}