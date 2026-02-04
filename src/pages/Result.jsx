import { useSelector } from "react-redux";
import { Link } from "react-router"


export default function Result() {
    const data = useSelector(state => state.result);
    console.log(data.fullName)
    return (
        <>
        <div className="max-w-[80%] mx-auto flex flex-col gap-10 justify-center">
            <Link to="/" className="mt-10 w-24 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Kembali
            </Link>



            <div className="min-w-full overflow-x-auto">
                <table className="text-left min-w-full bg-white border border-gray-200">
                    <thead>
                    <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal [&>th]:py-3 [&>th]:px-6">
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Is Smoke?</th>
                        <th>Smokes</th>
                    </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                    {data.map((data, i) => (
                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50 [&>td]:py-3 [&>td]:px-6 [&>td]:text-left [&>td]:whitespace-nowrap [&>td>span]:font-medium ">
                            <>
                                <td>
                                    <span>{data.fullName}</span>
                                </td>
                                <td>
                                    <span>{data.age}</span>
                                </td>
                                <td>
                                    <span>{data.gender}</span>
                                </td>
                                <td>
                                    <span>{data.smoke}</span>
                                </td>
                                <td>
                                    <span>{data.cigaretteBrands}</span>
                                </td>
                            </>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>

        </>
    )
}