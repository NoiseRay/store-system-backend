interface IAuthService {
 greeting(): Promise<string>;
 createMessage(name:string):Promise<string>;
}

export{
    IAuthService
}