const LabelWithInput = ({labelText, type = "text", value, onChange}) => {
    return <label className="block">
        <span className="block mb-2">{labelText}</span>
        <input
            className="border-0 p-2 rounded-sm w-full bg-white dark:bg-gray-900"
            type={type}
            value={value}
            onChange={onChange}>
        </input>
    </label>
}

export default LabelWithInput;
