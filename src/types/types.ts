export interface userType {
	id: number,
	name: string
	surname: string
	desc: string
}

export interface stateType {
	users: userType[],
	isLoading: boolean
}

export interface getUsersAPIType {
	users: userType[]
}