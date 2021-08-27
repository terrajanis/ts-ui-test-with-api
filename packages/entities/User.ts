export class User {

    email:string
    password:string
    lastName: string
    firstName: string
    roles: string[]
    avatar: string

    constructor(email: string, roles: string[]) {
        this.email = email
        this.password = 'Qwasz12345@#'
        this.lastName = 'Johnson'
        this.firstName = 'Jane'
        this.roles = roles
        this.avatar = 'packages/files/roses-rainbow-colors.jpg'
    }
}
