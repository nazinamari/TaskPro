import { createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../../axios/apiInstance";

export const needHelp = createAsyncThunk(
  "user/needHelp",
  async (message, thunkAPI) => {
    try {
      await instance.post("/users/help", message);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserTheme = createAsyncThunk(
  "user/updateUserTheme",
  async (theme, thunkAPI) => {
    try {
      const response = await instance.patch(`/theme`, { theme });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "users/updateUserProfile",
  async (userData, thunkAPI) => {
    try {
      const response = await instance.put("/users/update", userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "user/refreshUser",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("/users/current");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const setAvatarUrl = createAsyncThunk(
//   "user/setAvatarUrl",
//   async (newAvatarURL, thunkAPI) => {
//     try {
//       const dataToUpdate = {
//         avatarUrl: newAvatarURL,
//       };

//       // headers: {
//       //    'Content-Type': 'multipart/form-data'
//       //  }
//       await instance.put("/users/update", dataToUpdate);

//       return newAvatarURL;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const setAvatarUrl = createAsyncThunk(
  "user/setAvatarUrl",
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("avatar", file); // Додає файл до об'єкта FormData з ключем 'avatar'

      // Встановлення заголовків вручну
      const response = await instance.put("/users/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.avatarURL;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
