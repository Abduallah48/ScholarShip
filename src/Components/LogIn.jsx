
function LogIn({logInClick, SetLogInClick}) {
    return(
        <div className=" bg-black/50 fixed inset-0  flex flex-col">
            <button onClick={() => SetLogInClick(!logInClick)} className="text-4xl text-white cursor-pointer ml-auto pr-8 pt-8">
                ✕
            </button>
        </div>
    );
}

export default LogIn