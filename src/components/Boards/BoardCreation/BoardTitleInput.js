import React from 'react';

const BoardTitleInput = (field) => (
    <label>
        <input
            {...field.input}
            placeholder={field.placeholder}
            type="text"
            className="inputTitleBoard"
        />
        {
            field.meta.touched &&
            field.meta.error &&
            <p className="errorMessage">{field.meta.error}</p>
        }
    </label>
)


export default BoardTitleInput;
