import { useForm } from "react-hook-form";
import {
  SingleInput,
  Button,
  RadioInputSmoke,
  RadioInputGender,
  Checkbox,
} from "./components/Input";
import { Link } from "react-router";

function App() {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      fullName: "",
      age: "",
      gender: "",
      smoking: "",
      cigaretteBrands: [],
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 mx-auto my-10 justify-center max-w-[640px] text-[rgb(32,33,36)] ">
      <SingleInput
        title="Full Name"
        secondTitle="What is your name"
        placeholder="Nama Anda"
        register={register}
        name="fullName"
      />
      <SingleInput
        title="Age"
        secondTitle="Berapa umur anda"
        placeholder="Umur Anda"
        register={register}
        name="age"
      />
      <RadioInputGender
        header="Apa Jenis Kelamin Anda"
        text="Pilih salah satu"
        register={register}
      />
      <RadioInputSmoke header="Apakah anda merokok?" text="Pilih salah satu" register={register} />
      <Checkbox register={register} />
      <div className="w-full flex gap-5">
        <Button text="Submit" styleColor="text-[#fff] bg-[#777777]" type="submit" />
        <Button
          text="Kosongkan Formulir"
          styleColor="text-[#777777] bg-[transparent]"
          onClick={handleReset}
          type="button"
        />
      </div>
      <Link
        to="/result"
        className="w-full text-center py-3 my-5 bg-red-400 rounded"
      >
        lihat data
      </Link>
    </form>
  );
}
export { App };
