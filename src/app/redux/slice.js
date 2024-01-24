const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");



const initialState = {
    isloading:false,
    userAPIData:[],
  users: JSON.parse(localStorage.getItem("Users"))
    ? JSON.parse(localStorage.getItem("Users"))
    : [],
};

export const fetchApiUsers = createAsyncThunk('fetchApiUsers',async ()=>{
    console.log('data:')
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
})

const slice = createSlice({
  name: "addUserSlice",
  initialState,
  reducers: {
    addUser: (state, action) => {
      // console.log(action);
      const data = {
        id: nanoid(),
        name: action.payload,
      };

      state.users.push(data);
      //    console.log(current(state.users));
      const userData = JSON.stringify(current(state.users));
      localStorage.setItem("Users", userData);
    },
    removeUser: (state, action) => {
      const data = state.users.filter((item) => item.id !== action.payload);

      state.users = data;

      const userData = JSON.stringify(state.users);
      localStorage.setItem("Users", userData);
    },
    editUser: (state, action) => {
      const { id, newName } = action.payload;

      const userToEdit = state.users.find((item) => item.id === id);

      if (userToEdit) {
        userToEdit.name = newName;
      }
    },
  },
  extraReducers:(builder) =>{
    builder.addCase(fetchApiUsers.fulfilled , (state, action) => {
      console.log(action)
        state.isloading = false;
        state.userAPIData = action.payload;
    } )
  }



});

export const { addUser, removeUser, editUser, } = slice.actions;

export default slice.reducer;
