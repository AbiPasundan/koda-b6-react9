import { useForm } from "react-hook-form"
import { SingleInput, Button, RadioInputSmoke, RadioInputGender, Checkbox } from "./components/Input"


export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)


  // console.log(watch("example")) // watch input value by passing the name of it


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 mx-auto my-10justify-center max-w-[640px] text-[rgb(32,33,36)] ">
      <SingleInput title="Full Name" secondTitle="What is your name" placeholder="Nama Anda" />
      <SingleInput title="Age" secondTitle="Berapa umur anda" placeholder="Umur Anda" />
      <RadioInputGender header="Apa Jenis Kelamin Anda" text="Pilih salah satu" />
      <RadioInputSmoke header="Apakah anda merokok?" text="Pilih salah satu" />
      <Checkbox />
      {/* <div htmlFor="name" className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff] ">
        <div className="title ">
          <h1 className="text-[24px]">Jika anda pernah merokok, rokok apa yang pernah anda coba </h1>
          <span className="text-[#1f1f1f]">Pilih beberapa jika anda pernah merokok </span>
      </div>
      <label forhtml="gudanggaramfilter">
        <input type="checkbox" id="gudanggaramfilter" name="gudanggaramfilter" value="gudanggaramfilter" className="mx-3"/>
        Gudang garam filter
      </label>
      </div> */}
      <div className="w-full flex gap-5">
        <Button text="Submit" styleColor="text-[#fff] bg-[#777777]"/>
        <Button text="Kosongkan Formulir" styleColor="text-[#777777] bg-[transparent]"/>
      </div>
    </form>
  )
}