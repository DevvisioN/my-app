
export const SET_COORDINATES = 'SET_COORDINATES'

export function setCoordinates( x, y){
    return{
        type:SET_COORDINATES,
        payload:{
            x: x,
            y: y
        }
    }
}