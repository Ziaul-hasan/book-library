import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    // console.error(error);

    return (
        <div id="error-page" className="flex flex-col justify-center items-center h-[calc(100vh-180px)]">
            <h1 className="text-5xl font-bold">Oops!</h1>
            <p className="text-2xl font-medium mt-5">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl font-medium mt-5 text-red-600">{error.error.message}</p>
            <p className="text-5xl mt-5"><span>&#128514;</span></p>
            <p className="mt-5">
                <span className="text-2xl font-bold">Error: </span> <i className="text-2xl">{error.status} page {error.statusText}</i>
            </p>
        </div>
    );
}