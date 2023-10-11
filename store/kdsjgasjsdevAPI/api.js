import axios from "axios"
const kdsjgasjsdevAPI = axios.create({
  baseURL: "https://kdsjgasjs-dev-121649.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return kdsjgasjsdevAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_fghj_list(payload) {
  return kdsjgasjsdevAPI.get(`/api/v1/fghj/`)
}
function api_v1_fghj_create(payload) {
  return kdsjgasjsdevAPI.post(`/api/v1/fghj/`, payload)
}
function api_v1_fghj_retrieve(payload) {
  return kdsjgasjsdevAPI.get(`/api/v1/fghj/${payload.id}/`)
}
function api_v1_fghj_update(payload) {
  return kdsjgasjsdevAPI.put(`/api/v1/fghj/${payload.id}/`, payload)
}
function api_v1_fghj_partial_update(payload) {
  return kdsjgasjsdevAPI.patch(`/api/v1/fghj/${payload.id}/`, payload)
}
function api_v1_fghj_destroy(payload) {
  return kdsjgasjsdevAPI.delete(`/api/v1/fghj/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return kdsjgasjsdevAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return kdsjgasjsdevAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return kdsjgasjsdevAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return kdsjgasjsdevAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return kdsjgasjsdevAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return kdsjgasjsdevAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return kdsjgasjsdevAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return kdsjgasjsdevAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return kdsjgasjsdevAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return kdsjgasjsdevAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return kdsjgasjsdevAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return kdsjgasjsdevAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return kdsjgasjsdevAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_fghj_list,
  api_v1_fghj_create,
  api_v1_fghj_retrieve,
  api_v1_fghj_update,
  api_v1_fghj_partial_update,
  api_v1_fghj_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
