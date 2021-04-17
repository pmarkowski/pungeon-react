const LabelWithSelect = ({labelText, values, selectedValue, onChange}) => {
    return <label className="block">
        <span className="block mb-2">{labelText}</span>
        <select
            className="border-0 p-2 rounded-sm w-full bg-white dark:bg-gray-900"
            value={selectedValue}
            onChange={onChange}>
                {Array.map(values, (value) =>
                    <select value={value.value}>{value.label}</select>)}
        </select>
    </label>
}

export default LabelWithSelect;
