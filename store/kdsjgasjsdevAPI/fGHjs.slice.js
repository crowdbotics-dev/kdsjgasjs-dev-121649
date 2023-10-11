import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_fghj_list = createAsyncThunk(
  "fGHjs/api_v1_fghj_list",
  async payload => {
    const response = await apiService.api_v1_fghj_list(payload)
    return response.data
  }
)
export const api_v1_fghj_create = createAsyncThunk(
  "fGHjs/api_v1_fghj_create",
  async payload => {
    const response = await apiService.api_v1_fghj_create(payload)
    return response.data
  }
)
export const api_v1_fghj_retrieve = createAsyncThunk(
  "fGHjs/api_v1_fghj_retrieve",
  async payload => {
    const response = await apiService.api_v1_fghj_retrieve(payload)
    return response.data
  }
)
export const api_v1_fghj_update = createAsyncThunk(
  "fGHjs/api_v1_fghj_update",
  async payload => {
    const response = await apiService.api_v1_fghj_update(payload)
    return response.data
  }
)
export const api_v1_fghj_partial_update = createAsyncThunk(
  "fGHjs/api_v1_fghj_partial_update",
  async payload => {
    const response = await apiService.api_v1_fghj_partial_update(payload)
    return response.data
  }
)
export const api_v1_fghj_destroy = createAsyncThunk(
  "fGHjs/api_v1_fghj_destroy",
  async payload => {
    const response = await apiService.api_v1_fghj_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const fGHjsSlice = createSlice({
  name: "fGHjs",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_fghj_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghj_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghj_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghj_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghj_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghj_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_fghj_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_fghj_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_fghj_list,
  api_v1_fghj_create,
  api_v1_fghj_retrieve,
  api_v1_fghj_update,
  api_v1_fghj_partial_update,
  api_v1_fghj_destroy,
  slice: fGHjsSlice
}
