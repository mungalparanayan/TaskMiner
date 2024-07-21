const { httpAxios } = require("@/helper/httpHelper");

export async function ContactUs(contactuserdata) {
    const result = await httpAxios
                    .post("/api/contact", contactuserdata)
                    .then((response) => response.data);
    return result;
}