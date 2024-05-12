import { createSlice } from "@reduxjs/toolkit";


const freelancerInfoSlice = createSlice({
    name: 'freelancerInfoSlice',
    initialState: {
        fullName: '',
        avatar: null,
        phone: '',
        gender: '',
        location: '',
        profession: '',
        dateBirth: '',
        salaryMethod: '',
        educationLevel: '',
        portfolioLink: '',
        user: '',
        salary: '',
        skills: [],
      },
      reducers: {
        setFullName: (state, action) => {
          state.fullName = action.payload;
        },
        setPhone: (state, action) => {
          state.phone = action.payload;
        },
        setGender: (state, action) => {
          state.gender = action.payload;
        },
        setLocation: (state, action) => {
          state.location = action.payload;
        },
        setProfession: (state, action) => {
          state.profession = action.payload;
        },
        setDateBirth: (state, action) => {
          state.dateBirth = action.payload;
        },
        setSalaryMethod: (state, action) => {
          state.salaryMethod = action.payload;
        },
        setEducationLevel: (state, action) => {
          state.educationLevel = action.payload;
        },
        setUser: (state, action) => {
          state.user = action.payload;
        },
        setSalary: (state, action) => {
          state.salary = action.payload;
        },
        setSkills: (state, action) => {
          state.skills = action.payload;
        },
      },
    });
    
    export const {
      setFullName,
      setPhone,
      setGender,
      setLocation,
      setProfession,
      setDateBirth,
      setSalaryMethod,
      setEducationLevel,
      setUser,
      setSalary,
      setSkills,
    } = freelancerInfoSlice.actions;
    
    export default freelancerInfoSlice.reducer;