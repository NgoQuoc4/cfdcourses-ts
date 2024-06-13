import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "../../services/authService";
import tokenMethod from "../../utils/token";
import { message } from "antd";

const initialState = {
  showModal: "",
  profile: null,
  loading: {
    login: false,
    register: false,
    getProfile: false,
  },
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    handleShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    handleCloseModal: (state) => {
      state.showModal = "";
    },
    handleLogout: (state) => {
      tokenMethod.remove();
      state.profile = null;
      state.showModal = "";
      message.success("Đăng xuất thành công");
    },
  },
  extraReducers: (builder) => {
    builder
      // handleRegister
      .addCase(handleRegister.fulfilled, (state) => {
        state.loading.register = false;
      })
      .addCase(handleRegister.pending, (state) => {
        state.loading.register = true;
      })
      .addCase(handleRegister.rejected, (state) => {
        state.loading.register = false;
      })
      // handleLogin
      .addCase(handleLogin.fulfilled, (state) => {
        state.loading.login = false;
        state.showModal = "";
      })
      .addCase(handleLogin.pending, (state) => {
        state.loading.login = true;
      })
      .addCase(handleLogin.rejected, (state) => {
        state.loading.login = false;
      })
      // handleGetProfile
      .addCase(handleGetProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
        state.loading.getProfile = false;
      })
      .addCase(handleGetProfile.pending, (state) => {
        state.loading.getProfile = true;
      })
      .addCase(handleGetProfile.rejected, (state) => {
        state.loading.getProfile = false;
      });
  },
});

const { actions, reducer: authReducer } = authSlice;

export const { handleLogout, handleShowModal, handleCloseModal } = actions;
export default authReducer;

export const handleRegister = createAsyncThunk(
  "auth/handleRegister",
  async (payload, thunkApi) => {
    console.log("payload", payload);
    try {
      const registerRes = await authService.register(payload);
      if (registerRes?.data?.data?.id) {
        message.success("Đăng ký thành công!");
        thunkApi.dispatch(
          handleLogin({
            email: payload?.email,
            password: payload?.password,
          })
        );
        return true;
      } else {
        throw false;
      }
    } catch (error) {
      const errorInfo = error?.response?.data;
      if (errorInfo.error === "Forbidden") {
        message.error("Email đã được đăng ký!");
      }
      return thunkApi.rejectWithValue(errorInfo);
    }
  }
);

export const handleLogin = createAsyncThunk(
  "auth/handleLogin",
  async (payload, thunkApi) => {
    console.log("payload", payload);
    try {
      const loginRes = await authService.login(payload);
      const {
        token: accessToken,
        refreshToken,
      }: { token: string; refreshToken: string } = loginRes?.data?.data || {};
      tokenMethod.set({
        accessToken,
        refreshToken,
      });
      thunkApi.dispatch(handleGetProfile());
      message.success("Đăng nhập thành công!");
      return true;
    } catch (error) {
      const errorInfo = error?.response?.data;
      if (errorInfo.error === "Not Found") {
        message.error("Username hoặc password không đúng!");
      }
      return thunkApi.rejectWithValue(errorInfo);
    }
  }
);

export const handleGetProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, thunkApi) => {
    if (tokenMethod.get()) {
      try {
        const profileRes = await authService.getProfiles();
        return profileRes?.data?.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error?.response?.data);
      }
    }
  }
);
