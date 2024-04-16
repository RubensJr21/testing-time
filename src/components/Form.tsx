import { BaseSyntheticEvent, useState } from 'react';

const DynamicForm = () => {
    var hora = (new Date()).toLocaleTimeString().slice(0,5)
    const [formFields, setFormFields] = useState([{ inputText: 'Hora de início do teste', time: hora, enabled: false}]);

    const addFormField = () => {
        setFormFields([...formFields, { inputText: '', time: '', enabled: true}]);
    };

    const handleInputChange = (index: number, event: BaseSyntheticEvent) => {
        const updatedFields = [...formFields];
        updatedFields[index].inputText = event.target.value;
        setFormFields(updatedFields);
    };

    const handleInputTime = (index: number, event: BaseSyntheticEvent) => {
        const updatedFields = [...formFields];
        updatedFields[index].time = event.target.value;
        setFormFields(updatedFields);
    }

    return (
        <>
        <div className="w-full overflow-auto px-[5%]">
            {formFields.map((field, index) => (
                <div key={index} className="flex items-center mb-4">
                    <input
                        type="text"
                        name="inputText"
                        value={field.inputText}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="Digite a mensagem a ser exibida"
                        className="w-full border rounded py-2 px-3 mr-2 focus:outline-none focus:shadow-outline"
                    />
                    {/* <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time:</label> */}
                    <div className="relative">
                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input type="time" id="time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={field.time} onChange={(e) => handleInputTime(index, e)} required />
                    </div>
                </div>
            ))}
        </div>
        <div className="grid grid-cols-5 gap-4 w-full">
            <button
                type="button"
                onClick={addFormField}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full col-span-4"
            >
                Adicionar mensagem
            </button>
            <button
                type="button"
                onClick={(e) => console.log(e)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full col-span-1"
            >
                next
            </button>
        </div>
        </>
    );
};

export default DynamicForm;