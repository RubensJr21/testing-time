import {ChangeEvent, MouseEvent, useState } from 'react';
import { getStringHour } from '@/lib/time'
import TimeRangePicker from './TimeRangePicker';

const _seconds = 1000
const _minutes = 60 * _seconds

const seconds = (time: number) => time * _seconds
const minutes = (time: number) => time * _minutes

const getStartTime = (delay_time: number) => {
    var d = new Date()
    if (typeof delay_time == "number" ) { d = new Date(d.getTime() + delay_time) }
    return getStringHour(d)
}

const changeTime = (newTime: string) => {

}

export type FormFildState = {
    inputText: string,
    time: string,
    enabled: boolean
}

export type DynamicFormProps = {
    backFunction: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
    nextFunction: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, messages: FormFildState[]) => void
    duration: string
}

const DynamicForm = ({backFunction, nextFunction, duration} : DynamicFormProps) => {
    var hora = getStartTime(minutes(30))
    const [formFields, setFormFields] = useState<FormFildState[]>([{ inputText: '', time: hora, enabled: false }]);

    const addFormField = () => {
        setFormFields([...formFields, { inputText: '', time: '', enabled: true}]);
    };

    const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...formFields];
        updatedFields[index].inputText = event.target.value;
        setFormFields(updatedFields);
    };

    const handleInputTime = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...formFields];
        updatedFields[index].time = event.target.value;
        setFormFields(updatedFields);
    }

    return (
        <>
        <div className="w-full overflow-auto px-[5%]">
            {formFields.map((field, index) => (
                <div key={`div-${index}`} className="flex items-center mb-4">
                    <input
                        key={`input-${index}`}
                        type="text"
                        name="inputText"
                        value={field.inputText}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="Digite a mensagem a ser exibida"
                        className="w-full border rounded py-2 px-3 mr-2 focus:outline-none focus:shadow-outline"
                    />
                    {/* <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time:</label> */}
                    {/* <div className="relative">
                        <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input type="time" id="time" className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" min={"00:00"} max={duration} value={field.time} onChange={(e) => handleInputTime(index, e)} required />
                    </div> */}
                    {/* <input type="time" name="datetime" id="datetime" min={0} max={"02:00"}/> */}
                    <TimeRangePicker key={`TimeRangePicker-${index}`} duration={duration} timeChange={changeTime} />
                </div>
            ))}
        </div>
        <div className="grid grid-cols-5 gap-4 w-full">
            <button
                type="button"
                onClick={(e) => backFunction(e)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full col-span-1"
            >
                voltar
            </button>
            <button
                type="button"
                onClick={addFormField}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full col-span-3"
            >
                Adicionar mensagem
            </button>
            <button
                type="button"
                onClick={(e) => nextFunction(e, formFields)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full col-span-1"
            >
                next
            </button>
        </div>
        </>
    );
};

export default DynamicForm;