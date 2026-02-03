interface ILoginPost{
    email:string,
    password:string
}

interface IAuthService {
 validateInfoUser(data:ILoginPost):Promise<void>;
}

export{
    ILoginPost,
    IAuthService
}