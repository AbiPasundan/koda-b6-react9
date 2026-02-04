import { useForm } from "react-hook-form";
import {
  SingleInput,
  Button,
  RadioInputSmoke,
  RadioInputGender,
  Checkbox,
} from "./components/Input";
import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { reset, updateData } from "./components/redux/redux";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const data = useSelector(state => state.result);

  console.log(data)
  const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
  watch,
} = useForm({
  defaultValues: {
    fullName: "",
    age: "",
    gender: "",
    smoke: "",
    cigaretteBrands: [],
  },
});

  const onSubmit = (dataInput) => {
  console.log(dataInput)
  const newData = {
    fullName: dataInput.fullName,
    age: dataInput.age,
    gender: dataInput.gender,
    smoke: dataInput.smoke,
    cigaretteBrands: dataInput.cigaretteBrands,
  };
  navigate("/result")
  dispatch(updateData(newData));
};

  const handleReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 mx-10 my-10 justify-center max-w-[640px] text-[rgb(32,33,36)] ">
      <SingleInput
      title="Full Name"
      secondTitle="What is your name"
      placeholder="Nama Anda"
      name="fullName"
      register={register}
      rules={{
        required: "Nama wajib diisi",
        minLength: {
          value: 3,
          message: "Nama minimal 3 karakter",
        },
      }}
      error={errors.fullName}
      />

      <SingleInput
        title="Age"
        secondTitle="Berapa umur anda"
        placeholder="Umur Anda"
        name="age"
        register={register}
        rules={{
          required: "Umur wajib diisi",
          valueAsNumber: true,
          min: {
            value: 1,
            message: "Umur minimal 1 tahun",
          },
          max: {
            value: 120,
            message: "Umur maksimal 120 tahun",
          },
        }}
        error={errors.age}
      />
      <RadioInputGender header="Apa Jenis Kelamin Anda" text="Pilih salah satu" register={register} error={errors.gender} />
      <RadioInputSmoke header="Apakah anda merokok?" text="Pilih salah satu" register={register} error={errors.smoke} />

      <Checkbox register={register} error={errors.cigaretteBrands} />

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
