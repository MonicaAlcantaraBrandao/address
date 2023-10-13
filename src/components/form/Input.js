function Input({type, text, name, data, setData}){
 return(
<div className="sm:col-span-3">
        <label className="block text-sm font-medium leading-6 text-gray-900"
         htmlFor={name}>{text}:</label>

    <div className="mt-2">
        <input 
        className="block w-full rounded-md border-0 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        type={type}
        text={text}
        name={name}
        id={name}
        onChange={(e) => setData( {...data, name:e.target.value})}
        />

    </div>
</div>
    )
}

export default Input