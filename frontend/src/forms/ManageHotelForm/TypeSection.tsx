import { useFormContext } from "react-hook-form";
import { hotelTypes } from "../../config/hotel-options-config";
import { HotelFormData } from "./ManageHotelForm";

const TypeSection = () => {
    const {register, watch, formState: {errors}} = useFormContext<HotelFormData>();
    const typeWatch = watch("type")

    return (
        <div>
            <h2 className="text-2xl font-bold mb-3">Type</h2>
            <div className="grid grid-cols-5 gap-2">
                {hotelTypes.map((type) => (
                    <label className={
                        typeWatch === type ? "bg-blue-300 cursor-pointer text-sm rounded-full px-4 py-2 font-semibold" : "bg-gray-300 cursor-pointer text-sm rounded-full px-4 py-2 font-semibold"
                    }>
                        <input type="radio" value={type} {...register("type", {
                            required: "This field is required"
                        })} className="hidden"/>
                        <span>{type}</span>
                    </label>
                ))}
            </div>

            {errors.type && (
                <span className="text-red-500 font-bold text-sm">{errors.type.message}</span>
            )}
        </div>
    )
}

export default TypeSection