//VA A QUEDAR EN DESUSO YA QUE SE HACE DENTRO DEL THUNK?

export const getGeolocation = async () => {
    return new Promise( (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve(coords);
            },
            (error) => {
                alert("No se pudo obtener la geolocalización.");
                console.log(error);
                reject();
            }
        );
    });
}