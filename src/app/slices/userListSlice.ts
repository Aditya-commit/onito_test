import { createSlice } from '@reduxjs/toolkit';
import { Step1Interface } from '../../interfaces/step1_interface.ts';
import { Step2Interface } from '../../interfaces/step2_interface.ts';




interface UserInterface extends Step1Interface , Step2Interface{};




const DummyData = [
	{
		name : 'Aman Deep Singh',
		dob : '21',
		sex : 'Male',
		country : 'India',
		pincode : '226005'
	},
	{
		name : 'Shishir Singh',
		dob : '23',
		mob : '+91 5691142389',
		'sex' : 'Male',
		country : 'India',
		pincode : '226005'
	}
] as UserInterface[];







export const UsersListSlice = createSlice({
	'name' : 'usersList',
	initialState : DummyData,
	reducers : {
		usersListInsert : (state , {payload}) => {state.unshift(payload)}
	}
})

export const { usersListInsert } = UsersListSlice.actions;
export default UsersListSlice.reducer