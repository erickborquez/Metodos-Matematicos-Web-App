
export const colletIdsAndDocs = doc => { return { id: doc.id, ...doc.data() } }


const spanishMonths = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]
export const parseDateSpanish = (date) => {
    console.log(date.toDate());
    date = new Date(date.toDate());
    if (date === undefined || date == null) return "";
    return `${date.getDate()} de ${spanishMonths[date.getMonth()]} de ${date.getFullYear()}`;

}

export const parseTimeStamp = (timestamp) => {

    if (timestamp === undefined || timestamp == null) return "";
    const date = new Date(timestamp.toDate());
    return `${date.getDate()} de ${spanishMonths[date.getMonth()]} de ${date.getFullYear()}`;

}