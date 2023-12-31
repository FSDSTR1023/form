import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const inputStyles = "text-sm bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500";

const DynamicInput = forwardRef(({
    label,
    type,
    name,
    placeholder,
    options,
    onChange,
    onBlur,
    value,
    ...rest
}, ref) => {
    const renderOptions = () => {
        return options.map((option, index) => (
            <label key={index}>
                <input
                    className={inputStyles}
                    type={type}
                    name={name}
                    value={option.value}
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={type === 'radio' ? value === option.value : value.includes(option.value)}
                    ref={ref}
                    {...rest}
                />
                {option.label}
            </label>
        ));
    };

    const renderInput = () => {
        switch (type) {
            case 'text':
            case 'number':
            case 'email':
            case 'password':
                return <input className={inputStyles} type={type} name={name} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value} ref={ref} {...rest} />;
            case 'textarea':
                return <textarea className={inputStyles} name={name} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value} ref={ref} {...rest} />;
            case 'select':
                return (
                    <select name={name} onChange={onChange} onBlur={onBlur} value={value} ref={ref} {...rest}>
                        {rest.children}
                    </select>
                );
            case 'radio':
            case 'checkbox':
                return <div>{renderOptions()}</div>;
            default:
                return <input className={inputStyles} type="text" name={name} placeholder={placeholder} onChange={onChange} onBlur={onBlur} value={value} ref={ref} {...rest} />;
        }
    };

    return <div className="py-2 justify-start flex flex-col">
        <label className='text-sm pb-1 text-left text-gray-700'>{label}</label>
        {renderInput()}
        </div>;
});

DynamicInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
    })),
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.any,
    // ... otras validaciones para props según sea necesario
};

export default DynamicInput;
