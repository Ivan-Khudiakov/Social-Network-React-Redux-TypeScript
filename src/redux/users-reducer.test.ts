import {setCurrentPage, setIsFetching, setTotalUsersCount, usersReducer, UserType} from "./users-reducer";



const state = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount:0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
    portionSize: 10
}

it('current page should be update', () => {
    // 1. тестовые данные
    let action = setCurrentPage(15)
    // 2. Action
    let newState = usersReducer(state, action)
    // 3. проверка результата
    expect(newState.currentPage).toBe(15)
})

it('total users count should be update', () => {
    // 1. тестовые данные
    let action = setTotalUsersCount(224)
    // 2. Action
    let newState = usersReducer(state, action)
    // 3. проверка результата
    expect(newState.totalUsersCount).toBe(224)
})

it('fetching should be update', () => {
    // 1. тестовые данные
    let action = setIsFetching(true)
    // 2. Action
    let newState = usersReducer(state, action)
    // 3. проверка результата
    expect(newState.isFetching).toBe(true)
})
