import mongoose, {Schema} from "mongoose"

const contactSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    message: {
        type: String
    }
})

export const Contact = mongoose.models.contacts || mongoose.model("contacts", contactSchema);