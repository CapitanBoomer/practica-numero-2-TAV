export interface NuevosDatos {
firstName: string,
lastName: string,
age: number,
username: string,
password: string,
birthDate: string,
gender: 'Male'|'Female',

}
export interface Nuevodatoid extends NuevosDatos{
  id:string
}
