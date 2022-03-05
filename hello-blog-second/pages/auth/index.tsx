import { useAuth } from "../../libs/authContext"

export default function Home() {
  const { currentUser, login,logout} = useAuth()

  return (
    <>
      <div className="constainer mx-auto px-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:gird-cols-3 xl:grid-cols-3">
        <main>
          {!currentUser && <button onClick={login}>ログイン</button>}
          {currentUser &&
          <div>
            <p>{currentUser.email}でログイン中</p>
            <button onClick={logout}>ログアウト</button>
          </div>}
        </main>
      </div>
    </>
  )
}