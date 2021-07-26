import { getCustomRepository } from "typeorm"
import { AccountsRepositories } from "../Repositories/AccountsRepositories"

interface IAccountRequest{
    id: string,
    user_id: string
}


class DeleteAccountService{

    async execute({id, user_id}: IAccountRequest){

        const accountRepository = getCustomRepository(AccountsRepositories)

        const account = await accountRepository.findOne({
            where:{
                id,
                id_user: user_id
            }
        })

        if(!account){
            throw new Error("Account doesnt exists")
        }

        await accountRepository.delete(id)

        return account
    }

}

export {DeleteAccountService}