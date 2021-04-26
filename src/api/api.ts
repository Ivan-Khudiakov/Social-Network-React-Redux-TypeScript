import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {"API-KEY": "32f3e865-c36d-45f2-8bd3-3a4a5b923e2a"}
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId: number) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId: number) {
        return instance.delete(`follow/${userId}`)
    }
}

// export const profileAPI ={
//     getProfile(userId: number) {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
//             .then(response => {
//                 this.props.setUserProfile(response.data)
//             })
//     }

// }