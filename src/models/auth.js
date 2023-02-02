import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getPersistor } from "@rematch/persist";
import moment from "moment-timezone";
import * as RNLocalize from "react-native-localize";

import env from "../config/config";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log("store err", e.toString());
  }
};

export default {
  // Initial state
  state: {
    user: {},
    error: false,
    errorMessage: "",
    success: false,
    successMessage: "",
    authenticated: false,
    emailValidated: false,
    OTPVerified: false,
    isFetching: false,
    loginEmail: "",
  },

  /**
   * Reducers
   */
  reducers: {
    setLoginEmail(state, payload) {
      return {
        ...state,
        loginEmail: payload,
      };
    }, 
    setAuthUser(state, payload) {
      return {
        ...state,
        user: payload,
      };
    },
    setAuthStatus(state, payload) {
      return {
        ...state,
        authenticated: payload,
      };
    },
    resetAuth() {
      return {};
    },
    setError(state, payload) {
      return {
        ...state,
        error: true,
        errorMessage: payload,
      };
    },
    setSuccess(state, payload) {
      return {
        ...state,
        success: true,
        successMessage: payload,
      };
    },
    setFetching(state, payload) {
      return {
        ...state,
        isFetching: payload,
      };
    },
    setEmailValidation(state, payload) {
      return {
        ...state,
        emailValidated: payload,
      };
    },
    setOTPVerified(state, payload) {
      return {
        ...state,
        OTPVerified: payload,
      };
    },
    setCategoryList(state, payload) {
      return {
        ...state,
        categoryList: payload,
      };
    },
    setHealthFacility(state, payload) {
      return {
        ...state,
        healthFacility: payload,
      };
    },
    clearEmailValidation(state, payload) {
      return {
        ...state,
        emailValidated: false,
      };
    },
    clearOTPVerified(state, payload) {
      return {
        ...state,
        OTPVerified: false,
      };
    },
    clearError(state, payload) {
      return {
        ...state,
        error: false,
        errorMessage: "",
      };
    },
    clearSuccess(state, payload) {
      return {
        ...state,
        success: false,
        successMessage: "",
      };
    },
  },

  /**
   * Effects/Actions
   */
  effects: dispatch => ({
    /**
     * Request default user token for public apis'
     */
    async getDefaultUserToken(payload) {
      let { fetchDefaultUser } = dispatch.auth;
      let params = new URLSearchParams();
      params.append("username", payload.email);
      params.append("password", payload.password);
      params.append("grant_type", "password");

      let config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };

      let url = `${env.API_BASE_URL}token`;
      try {
        let response = await axios.post(url, params, config);
        console.log("response", response);
        if (response && response.status === 200 && response.data) {
          let { token_type, access_token } = response.data;
          storeData("access_token", `${token_type} ${access_token}`);
          fetchDefaultUser(payload);
        }
      } catch (error) {
        console.log("Something went wrong!", error);
      }
    },

    setUserEmail(email) {
      let { setLoginEmail } = dispatch.auth;
      setLoginEmail(email);
    },

    /**
     * Request default user object for public apis'
     */
    async fetchDefaultUser(payload) {
      var deviceTimeZone = RNLocalize.getTimeZone();
      var formattedTimeZone = moment().tz(deviceTimeZone);
      var currentTimeZoneOffsetInMIni = Number(formattedTimeZone.utcOffset());

      var formattedGMTTimeZone = moment().tz(deviceTimeZone).format("Z");
      var gmtTimeZone = `(GMT ${formattedGMTTimeZone}) ${deviceTimeZone}`;

      console.log(
        "TimeOffSet ValidateLogOnUser:-",
        currentTimeZoneOffsetInMIni,
      );
      console.log("TimeZone ValidateLogOnUser:-", gmtTimeZone);

      let access_token = await AsyncStorage.getItem("access_token");

      let config = {
        headers: {
          Authorization: access_token,
        },
      };

      let url = `${env.API_URL}user/ValidateLogOnUser`;

      const loginData = {
        UserName: payload.email,
        Password: payload.password,
        CookieToken: "",
        IsMobile: true,
        IMEI: "",
        IsActiveDirectoryUser: true,
        UserTimeOffSet: currentTimeZoneOffsetInMIni,
        TimeOffSetLocation: gmtTimeZone,
        Latitude: "",
        Longitude: "",
      };

      try {
        const response = await axios.post(url, loginData, config);

        if (response && response.data) {
          let sessionObject = JSON.stringify(response.data.Session);
          storeData("tenantToken", `${response.data.TenantToken}`);
          storeData("OrgId", `${response.data.Session.OrgId}`);
          storeData("Session", `${sessionObject}`);
        }
      } catch (error) {
        console.log("Something went wrong!", error);
      }
    },

    /**
     * Fetch Auth User V2
     * @returns {Object}
     */
    async fetchAuthUser(payload, rootState) {
      var deviceTimeZone = RNLocalize.getTimeZone();
      var formattedTimeZone = moment().tz(deviceTimeZone);
      var currentTimeZoneOffsetInMIni = Number(formattedTimeZone.utcOffset());

      var formattedGMTTimeZone = moment().tz(deviceTimeZone).format("Z");
      var gmtTimeZone = `(GMT ${formattedGMTTimeZone}) ${deviceTimeZone}`;

      const { geoLocation } = rootState.timeZone;
      let { setAuthUser, setAuthStatus, setError } = dispatch.auth;
      let access_token = await AsyncStorage.getItem("access_token");

      if (access_token) {
        let config = {
          headers: {
            Authorization: access_token,
          },
        };

        let url = `${env.API_URL}user/ValidateLogOnUser`;

        let loginData = {
          UserName: payload.email,
          Password: payload.password,
          CookieToken: "",
          IsMobile: true,
          IMEI: "",
          IsActiveDirectoryUser: true,
          UserTimeOffSet: currentTimeZoneOffsetInMIni,
          TimeOffSetLocation: gmtTimeZone,
          Latitude: "",
          Longitude: "",
        };

        if (geoLocation && geoLocation.latitude && geoLocation.longitude) {
          loginData.Latitude = geoLocation.latitude.toString();
          loginData.Longitude = geoLocation.longitude.toString();
        }

        try {
          const response = await axios.post(url, loginData, config);

          if (response && response.data) {
            let sessionObject = JSON.stringify(response.data.Session);
            storeData("tenantToken", `${response.data.TenantToken}`);
            storeData("OrgId", `${response.data.Session.OrgId}`);
            storeData("Session", `${sessionObject}`);
            storeData("authStatus", "1");
            setAuthUser(response.data);
            setAuthStatus(true);
          }
        } catch (error) {
          if (error && error.response) {
            setError(error.response.data);
          }
          console.log("Something went wrong!", error.response);
        }
      }
    },

    /**
     * password reset API'
     */
    async resetUserPassword(payload) {
      let { setOTPVerified, setError, setFetching } = dispatch.auth;
      const access_token = await AsyncStorage.getItem("access_token");
      const tenantToken = await AsyncStorage.getItem("tenantToken");

      setFetching(true);

      if (access_token && tenantToken) {
        const config = {
          headers: {
            Authorization: access_token,
          },
        };
        const url = `${env.API_URL}user/resetuserpassword/${tenantToken}`;
        try {
          const response = await axios.post(url, payload, config);
          if (response) {
            if (response.data) {
              setOTPVerified(true);
              setFetching(false);
            }
          }
        } catch (error) {
          setFetching(false);
          if (error) {
            if (error && error.response) {
              setError(error.response.data.Payload);
            }
            console.log("Something went wrong!", error.response.data.Payload);
          }
        }
      }
    },

    /**
     * User name validate API for OTPs'
     */
    async validateUserEmail(payload) {
      let { setEmailValidation, setError, setFetching } = dispatch.auth;
      const access_token = await AsyncStorage.getItem("access_token");
      const tenantToken = await AsyncStorage.getItem("tenantToken");

      setFetching(true);

      if (access_token && tenantToken) {
        const config = {
          headers: {
            Authorization: access_token,
          },
        };
        const url = `${env.API_URL}user/sendemailotp/${tenantToken}/2`;
        try {
          const response = await axios.post(url, payload, config);
          console.log("validate works", response);
          if (response && response.data) {
            setEmailValidation(true);
            setFetching(false);
          }
        } catch (error) {
          setFetching(false);
          if (error && error.response) {
            console.log("Something went wrong!", error.response);
          }
        }
      }
    },

    async getListValue() {
      let { setCategoryList } = dispatch.auth;
      const access_token = await AsyncStorage.getItem("access_token");
      const tenantToken = await AsyncStorage.getItem("tenantToken");
      const OrgId = await AsyncStorage.getItem("OrgId");

      const config = {
        headers: {
          Authorization: access_token,
        },
      };
      const url = `${env.API_URL}common/GetListValue/${tenantToken}/3/131`;

      try {
        const response = await axios.get(url, config);
        if (response && response.data) {
          let dataArray = [];
          response.data.map((item, index) => {
            dataArray.push({
              id: item.Id,
              label: item.Value,
              value: String(item.Id),
            });
          });
          setCategoryList(dataArray);
        }
      } catch (error) {
        if (error && error.response) {
          console.log("error.response", error.response);
        }
      }
    },

    async getHealthFacility() {
      let { setHealthFacility } = dispatch.auth;
      const access_token = await AsyncStorage.getItem("access_token");
      const tenantToken = await AsyncStorage.getItem("tenantToken");

      const config = {
        headers: {
          Authorization: access_token,
        },
      };
      const url = `${env.API_URL}organization/gethealthfacility/${tenantToken}/null`;
      try {
        const response = await axios.get(url, config);
        if (response && response.data) {
          let dataArray = [];
          response.data.map((item, index) => {
            dataArray.push({
              id: index,
              name: item.EngOrgName,
              OrgId: item.OrgId,
            });
          });

          setHealthFacility(dataArray);
        }
      } catch (error) {
        if (error && error.response) {
          console.log("error.response", error.response);
        }
      }
    },

    /**
     *  SignUp Step One
     *  send verification email to user
     *@payload Signup Data
     */
    async sendMailOTP(payload) {
      let { setError, setSuccess, saveUserSignUpData } = dispatch.auth;
      let access_token = await AsyncStorage.getItem("access_token");
      let tenantToken = await AsyncStorage.getItem("tenantToken");

      let config = {
        headers: {
          Authorization: access_token,
        },
      };

      let url = `${env.API_URL}user/sendemailotp/${tenantToken}/1`;
      let data = { UserEmail: payload.Email };
      try {
        const response = await axios.post(url, data, config);
        if (response && response.data) {
          console.log("Sign up:- ", payload);
          console.log("Signup API Data:-", data);
          saveUserSignUpData(payload);
          setSuccess(response.data.Payload);
        }
      } catch (error) {
        if (error && error.response) {
          setError(error.response.data.Payload);
          console.log("Something went wrong!", error.response);
        }
      }
    },

    /**
     * SignUp Step Two
     * Keep Signup data till email verification
     *@payload Signup Data
     */
    async saveUserSignUpData(payload) {
      let userData = JSON.stringify(payload);
      storeData("signup_data", `${userData}`);
    },

    /**
     *  SignUp Step Three
     *  OTP - Email verification for User SignUp
     */
    async validateEmailOTP(payload) {
      let { setError, userSignup } = dispatch.auth;
      let access_token = await AsyncStorage.getItem("access_token");
      let tenantToken = await AsyncStorage.getItem("tenantToken");

      const config = {
        headers: {
          Authorization: access_token,
        },
      };

      const url = `${env.API_URL}user/validateemailotp/${tenantToken}`;
      try {
        const response = await axios.post(url, payload, config);

        if (response && response.data) {
          userSignup();
        }
      } catch (error) {
        if (error && error.response) {
          setError(error.response.data.Payload);
          console.log("Something went wrong!", error.response);
        }
      }
    },

    /**
     * API Request for update/signup mobile users
     */
    async userSignup() {
      let { setError, fetchAuthUser } = dispatch.auth;
      let userData = await AsyncStorage.getItem("signup_data");
      let access_token = await AsyncStorage.getItem("access_token");
      let tenantToken = await AsyncStorage.getItem("tenantToken");

      let config = {
        headers: {
          Authorization: access_token,
        },
      };

      let url = `${env.API_URL}user/updatemobileuser/${tenantToken}`;
      let payload = JSON.parse(userData);

      console.log("SIGNUP API call: 123", payload);
      try {
        let response = await axios.post(url, payload, config);
        if (response && response.data) {
          console.log("API Response", response.data);
          fetchAuthUser({ email: payload.Email, password: payload.Password });
          // await AsyncStorage.removeItem("signup_data");
        }
      } catch (error) {
        if (error && error.response) {
          setError(error.response.data.Payload);
          console.log("error.response", error.response);
        }
      }
    },

    /**
     * restErrorMessages Errors
     * @returns {Object}
     */
    async restErrorMessages() {
      let { clearError, clearSuccess } = dispatch.auth;
      clearError(false);
      clearSuccess(false);
    },

    async updateAuthUser(payload) {
      let { setAuthUser } = dispatch.auth;
      setAuthUser(payload);
    },

    /**
     * Logout User
     * @returns {Object}
     */
    async logOutUser() {
      let { setAuthUser, setAuthStatus, getDefaultUserToken } = dispatch.auth;
      try {
        const access_token = await AsyncStorage.getItem("access_token");
        const tenantToken = await AsyncStorage.getItem("tenantToken");
        const sessionString = await AsyncStorage.getItem("Session");
        const { UserLogId } = JSON.parse(sessionString);

        const url = `${env.API_URL}user/LogOffUser/${tenantToken}/${UserLogId}`;

        const config = {
          headers: {
            Authorization: access_token,
          },
        };

        await axios.post(url, {}, config);

        await AsyncStorage.clear();
        getPersistor().purge();
        setAuthUser({});
        setAuthStatus(false);
        getDefaultUserToken({
          email: env.API_USERNAME,
          password: env.API_PASSWORD,
        });
      } catch (error) {
        console.log("API ERROR", error.response);
      }
    },
  }),
};
