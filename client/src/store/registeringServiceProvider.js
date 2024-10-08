import { createSlice } from "@reduxjs/toolkit";

const registeringServiceProviderSlice = createSlice({
    name: "registeringServiceProvider",
    initialState: {
        username: "",
        email: "",
        phoneNumber : "",
        password: "",
        totalServiceLength: null,
        serviceTypes: [],
        serviceDetails: [],
    },
    reducers: {
        handleContinue: (state, action) => {
            const { serviceDetail } = action.payload;
            state.serviceDetails.push(serviceDetail);
            state.serviceTypes.shift();  // Removes the first element from state.serviceTypes
        },
        handleInitialRegistration: (state, action) => {
            const { username, email,phoneNumber, password ,serviceTypes} = action.payload;
            console.log( username, email, password ,serviceTypes)
            state.username = username;
            state.email = email;
            state.password = password;
            state.phoneNumber = phoneNumber;
            state.serviceTypes = serviceTypes;
        },
        handleClearRegisteringDetails : (state)=>{
            state.username = "";
            state.email = "";
            state.password = "";
            state.phoneNumber = "";
            state.totalServiceLength = null;
            state.serviceTypes = [];
            state.serviceDetails = [];
        }
    },
});

export default registeringServiceProviderSlice;
export const registeringServiceProviderActions = registeringServiceProviderSlice.actions;
