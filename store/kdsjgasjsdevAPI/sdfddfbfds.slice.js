import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_sdfddfbfd_list = createAsyncThunk(
  "sdfddfbfds/api_v1_sdfddfbfd_list",
  async payload => {
    const response = await apiService.api_v1_sdfddfbfd_list(payload)
    return response.data
  }
)
export const api_v1_sdfddfbfd_create = createAsyncThunk(
  "sdfddfbfds/api_v1_sdfddfbfd_create",
  async payload => {
    const response = await apiService.api_v1_sdfddfbfd_create(payload)
    return response.data
  }
)
export const api_v1_sdfddfbfd_retrieve = createAsyncThunk(
  "sdfddfbfds/api_v1_sdfddfbfd_retrieve",
  async payload => {
    const response = await apiService.api_v1_sdfddfbfd_retrieve(payload)
    return response.data
  }
)
export const api_v1_sdfddfbfd_update = createAsyncThunk(
  "sdfddfbfds/api_v1_sdfddfbfd_update",
  async payload => {
    const response = await apiService.api_v1_sdfddfbfd_update(payload)
    return response.data
  }
)
export const api_v1_sdfddfbfd_partial_update = createAsyncThunk(
  "sdfddfbfds/api_v1_sdfddfbfd_partial_update",
  async payload => {
    const response = await apiService.api_v1_sdfddfbfd_partial_update(payload)
    return response.data
  }
)
export const api_v1_sdfddfbfd_destroy = createAsyncThunk(
  "sdfddfbfds/api_v1_sdfddfbfd_destroy",
  async payload => {
    const response = await apiService.api_v1_sdfddfbfd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const sdfddfbfdsSlice = createSlice({
  name: "sdfddfbfds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_sdfddfbfd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfddfbfd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfddfbfd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfddfbfd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfddfbfd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfddfbfd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_sdfddfbfd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_sdfddfbfd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_sdfddfbfd_list,
  api_v1_sdfddfbfd_create,
  api_v1_sdfddfbfd_retrieve,
  api_v1_sdfddfbfd_update,
  api_v1_sdfddfbfd_partial_update,
  api_v1_sdfddfbfd_destroy,
  slice: sdfddfbfdsSlice
}
