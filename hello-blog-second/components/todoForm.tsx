export default function TodoForm( {handleadd} ) {
  return (
    <>
      <form className="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8" onSubmit={handleadd}>
        <div className="relative border rounded mb-4 shadow appearance-none label-floating">
          <input className="w-full py-2 px-3 text-gray-700 leading-normal rounded" id="todotitle" type="text" placeholder="todotitle" name="todotitle" />
          <label className="absolute block text-gray-700 top-0 left-0 w-full px-3 py-2 leading-normal">
          </label>
        </div>
        <div className="flex items-center justify-between">
          <input type="submit" value="投稿" />
        </div>
      </form>
    </>
  )
}