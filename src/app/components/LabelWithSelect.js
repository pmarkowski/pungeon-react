const LabelWithSelect = ({labelText, options, value, onChange}) => {
    return <label className="block">
        <span className="block mb-2">{labelText}</span>
        <select
            className="border-0 p-2 rounded-sm w-full bg-white dark:bg-gray-900"
            value={value}
            onChange={onChange}>
                {options.map(option =>
                    <option value={option.value}>{option.label}</option>)}
        </select>
    </label>
}

export default LabelWithSelect;
