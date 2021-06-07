let timer;

export default {
  async login(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "login",
    });
  },
  async signup(context, payload) {
    return context.dispatch("auth", {
      ...payload,
      mode: "signup",
    });
  },
  async auth(context, payload) {
    const mode = payload.mode;
    let url = "http://163.47.115.230:30000/api/login";

    if (mode === "signup") {
      url = "http://163.47.115.230:30000/api/login";
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        authorization: this.$store,
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });

    const responseUser = await response.json();
    console.log(responseUser);
    if (!response.ok) {
      const error = new Error(
        responseUser.message ||
          "Failed to authenticate. Check your email Password."
      );
      throw error;
    }

    const expiresIn = 2073600000; //24 h converted to millisecond
    const expirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem("token", responseUser.access_token);
    localStorage.setItem("userId", responseUser.user.id);
    localStorage.setItem("tokenExpirationDate", expirationDate.toString());

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    context.commit("setUser", {
      token: responseUser.access_token,
      userId: responseUser.user.id,
    });
  },
  tryLogin(context) {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    let tokenExpiration = localStorage.getItem("tokenExpirationDate");
    console.log(token, userId, tokenExpiration);
    if (tokenExpiration === null) {
      tokenExpiration = "0";
    }
    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) {
      return;
    }

    timer = setTimeout(function () {
      context.dispatch("autoLogout");
    }, expiresIn);

    if (token && userId) {
      console.log("setUser mutation exicute");
      context.commit("setUser", {
        token: token,
        userId: userId,
      });
    }
  },
  logout(context) {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("tokenExpiration");

    clearTimeout(timer);

    context.commit("setUser", {
      token: null,
      userId: null,
    });
  },
  autoLogout(context) {
    context.dispatch("logout");
    context.commit("setAutoLogout");
  },
};
