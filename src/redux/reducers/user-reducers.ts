import {
  CurrentAuthUserState,
  ExtendedKindeUser,
  UserProviderState,
} from "@/types";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialUserState: UserProviderState = {
  data: null,
};

const userSlice = createSlice({
  name: "currentUser",
  initialState: initialUserState,
  reducers: {
    loadUser: (state, action: PayloadAction<ExtendedKindeUser | null>) => {
      state.data = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(
  //     loadUserAsync.fulfilled,
  //     (state, action: PayloadAction<CurrentAuthUserState | null>) => {
  //       state.data = action.payload;
  //     }
  //   );
  // },
});

// export const loadUserAsync = createAsyncThunk(
//   "user/loadUserAsync",
//   async () => {
//     const user = await getCurrentUser();
//     return user;
//   }
// );

export const { loadUser } = userSlice.actions;
export default userSlice.reducer;
