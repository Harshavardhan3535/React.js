import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch("https://6a900189ff2484963a5d9d22.mockapi.io/crud", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) return rejectWithValue(`Request failed: ${response.status}`);
    return await response.json();
  }
);

export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch("https://6a900189ff2484963a5d9d22.mockapi.io/crud");
    if (!response.ok) return rejectWithValue(`Request failed: ${response.status}`);
    return await response.json();
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`https://6a900189ff2484963a5d9d22.mockapi.io/crud/${id}`, { method: "DELETE" });
    if (!response.ok) return rejectWithValue(`Request failed: ${response.status}`);
    return await response.json();
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(`https://6a900189ff2484963a5d9d22.mockapi.io/crud/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) return rejectWithValue(`Request failed: ${response.status}`);
    return await response.json();
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: { users: [], loading: false, error: null, searchData: "" },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => { state.loading = true; })
      .addCase(createUser.fulfilled, (state, action) => { state.loading = false; state.users.push(action.payload); })
      .addCase(createUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(showUser.pending, (state) => { state.loading = true; })
      .addCase(showUser.fulfilled, (state, action) => { state.loading = false; state.users = action.payload; })
      .addCase(showUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(deleteUser.pending, (state) => { state.loading = true; })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        const { id } = action.payload;
        if (id) state.users = state.users.filter((ele) => ele.id !== id);
      })
      .addCase(deleteUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; })
      .addCase(updateUser.pending, (state) => { state.loading = true; })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map((ele) => (ele.id === action.payload.id ? action.payload : ele));
      })
      .addCase(updateUser.rejected, (state, action) => { state.loading = false; state.error = action.payload; });
  },
});

export default userDetail.reducer;
export const { searchUser } = userDetail.actions;