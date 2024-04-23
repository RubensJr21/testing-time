import { getStringHour, minutes } from '@/lib/time';
import { ChangeEvent, MouseEvent, useCallback, useState } from 'react';
import TimeRangePicker from './TimeRangePicker';

const getStartTime = (delay_time: number) => {
    var d = new Date()
    if (typeof delay_time == "number" ) { d = new Date(d.getTime() + delay_time) }
    return getStringHour(d)
}

export type FormFildState = {
    message: string,
    time: string
}

export type DynamicFormProps = {
    backFunction: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
    nextFunction: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, messages: FormFildState[]) => void
    duration: string
}

const DynamicForm = ({backFunction, nextFunction, duration} : DynamicFormProps) => {
    var hora = getStartTime(minutes(30))
    const [formFields, setFormFields] = useState<FormFildState[]>([{ message: '', time: hora}]);

    const addFormField = useCallback(() => {
        setFormFields((lastState) => [...lastState, { message: '', time: ''}]);
    }, []);

    const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const updatedFields = [...formFields];
        updatedFields[index].message = event.target.value;
        setFormFields(updatedFields);
    };

    const changeTime = (index: number, newTime: string) => {
        const updatedFields = [...formFields];
        updatedFields[index].time = newTime
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
                        name="message"
                        value={field.message}
                        onChange={(e) => handleInputChange(index, e)}
                        placeholder="Digite a mensagem a ser exibida"
                        className="w-full border rounded py-2 px-3 mr-2 focus:outline-none focus:shadow-outline"
                    />
                    <TimeRangePicker key={`TimeRangePicker-${index}`} index={index} duration={duration} timeChange={changeTime} />
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