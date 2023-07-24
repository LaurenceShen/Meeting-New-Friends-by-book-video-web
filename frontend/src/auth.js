// 判斷是否藉由瀏覽器瀏覽
export const isBrowser = () => typeof window !== "undefined"

// 從 LocalStorage 中取得使用者資訊，有的話就 Parse 這筆資訊。
export const getUser = () =>
  isBrowser() && window.localStorage.getItem("gatsbyUser")
    ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
    : {}

// 用來登入成功後，設定資訊在 LocalStorage 中。
const setUser = user =>
  window.localStorage.setItem("gatsbyUser", JSON.stringify(user))


// 處理登入，這邊使用 Hard Code 的方式驗證，此方式極度不安全，只是為了示範登入流程才用此方式，正式環境上會打 API 去跟後端確認資料是否正確，並等回傳結果後才會進行下一步
export const handleLogin = ({ username, email }) => {
    return setUser({
      username: username,
      email: email,
    })
}

// 判斷使用者是否已經登入，如以登入就直接從 LocalStorage 中撈取使用者資料
export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

// 登出，直接將使用者資料清空
export const logout = callback => {
  setUser({})
  callback()
}
