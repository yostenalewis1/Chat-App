import { useEffect, useState } from "react"
import { socket } from "../socket/socket"
import { useDispatch, useSelector } from "react-redux"
import { setActiveChat } from "../app/features/chats"
import { RootState } from "../app/store"

interface IProps {

}

interface IUserObj {
    [id: string]: string
}

interface IUser {
    id: string
    name: string
}

const SideBar = ({}: IProps) => {
    const [users, setUsers] = useState<IUser[]>([])
    const dispatch = useDispatch()
    const { activeChat} = useSelector((state: RootState) => state.chats)
    useEffect(() => {
        socket.on("all users", (users: IUserObj) => {
            console.log(users)
            const usersArray = Object.keys(users).map((key) => ({
                id: key,
                name: users[key]
            }))
            setUsers(usersArray)
        })
    }
    , [])

    const onUser = (id: string, name: string) => {
        console.log(id)
        if (id === socket.id) {
            return
        }
        dispatch(setActiveChat({id, name}))
        socket.emit("getPrivateMessages", activeChat.id);
    }
    
  return (
    <div className="w-1/4 h-full bg-violet-600 text-neutral-content">
        <p className="text-lg text-white p-2">Active Users</p>

        <div className="flex flex-col">
          {users.map((user, index) => (
            <div 
                key={index} 
                className="w-40 p-2 m-2 rounded-xl bg-white text-black self-start border hover:bg-gray-300 truncate"
                onClick={() => onUser(user.id, user.name)}
            >
              {user.name}
            </div>
          ))}
        </div>

    </div>
  )
}

export default SideBar