export interface UserDepthInterface {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    alias: string,
    dateOfBirth: string,
    friends: number[]
}

export interface UserInterface {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    alias: string,
    dateOfBirth: string,
    friends: UserDepthInterface[]
}
