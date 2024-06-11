import { useMutation, useQuery } from "react-query"
import { useParams } from "react-router-dom"
import * as apiClient from "../api-client"
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm"
import { useAppContext } from "../contexts/AppContext"

const EditHotel = () => {
    const {hotelId} = useParams()
    const {showToast} = useAppContext()

    const {data: hotel} = useQuery("fetchMyHotelById", () => 
        apiClient.fetchMyHotelById(hotelId || ''), {
            enabled: !!hotelId,
        }
    )

    const {mutate, isLoading} = useMutation(apiClient.updateMyHotelById, {
        onSuccess: () => {
            showToast({message: "Hotel Saved!", type: "SUCCESS"})
        },
        onError: () => {
            showToast({message: "Error saving hotel", type: "ERROR"})
        }
    })

    const handleSave = (hotelFormData: FormData) => {
        mutate(hotelFormData)
    }

    return <ManageHotelForm hotel={hotel} isLoading={isLoading} onSave={handleSave}/>
}

export default EditHotel