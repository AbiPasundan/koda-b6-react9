import { useForm } from "react-hook-form";

function SingleInput(props) {
  const { register, name } = props;

  return (
    <label
      htmlFor={name}
      className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff]"
    >
      <div className="title">
        <h1 className="text-[24px]">{props.title}</h1>
        <span className="text-[#1f1f1f]">{props.secondTitle}</span>
      </div>

      <input
        id={name}
        placeholder={props.placeholder}
        className="text-[14px] outline-none border-b border-indigo-300 focus:border-indigo-700 focus:border-b-2 focus:ring-0"
        {...(register && name ? register(name) : {})}
      />
    </label>
  );
}

function RadioInputValue(props) {
  return (
    <label htmlFor={props.value}>
      <input
        type="radio"
        id={props.value}
        value={props.value}
        className="mx-3"
        {...(props.register && props.name ? props.register(props.name) : {})}
      />
      {props.valuetext}
    </label>
  );
}

function RadioInputGender(props) {
  return (
    <div
      htmlFor="name"
      className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff] "
    >
      <div className="title ">
        <h1 className="text-[24px]">{props.header}</h1>
        <span className="text-[#1f1f1f]">{props.text}</span>
      </div>
      <RadioInputValue value="lakilaki" valuetext="Laki laki" register={props.register} name="gender" />
      <RadioInputValue value="perempuan" valuetext="Perempuan" register={props.register} name="gender" />
    </div>
  );
}
function RadioInputSmoke(props) {
  return (
    <div
      htmlFor="name"
      className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff] "
    >
      <div className="title ">
        <h1 className="text-[24px]">{props.header}</h1>
        <span className="text-[#1f1f1f]">{props.text}</span>
      </div>
      <RadioInputValue value="ya" valuetext="Ya" register={props.register} name="smoking" />
      <RadioInputValue value="tidak" valuetext="Tidak" register={props.register} name="smoking" />
    </div>
  );
}

function CheckboxVal(props) {
  return (
    <label htmlFor={props.value}>
      <input
        type="checkbox"
        id={props.value}
        value={props.value}
        className="mx-3"
        {...(props.register && props.name ? props.register(props.name) : {})}
      />
      {props.text}
    </label>
  );
}

function Checkbox({ register }) {
  return (
    <div
      htmlFor="name"
      className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff] "
    >
      <div className="title ">
        <h1 className="text-[24px]">
          Jika anda pernah merokok, rokok apa yang pernah anda coba{" "}
        </h1>
        <span className="text-[#1f1f1f]">
          Pilih beberapa jika anda pernah merokok{" "}
        </span>
      </div>
      <CheckboxVal value="gudanggaramfilter" text="Gudang garam filter" register={register} name="cigaretteBrands" />
      <CheckboxVal value="luckystrike" text="Lucky Strike" register={register} name="cigaretteBrands" />
      <CheckboxVal value="marlboro" text="Marlboro" register={register} name="cigaretteBrands" />
      <CheckboxVal value="esse" text="Esse" register={register} name="cigaretteBrands" />
    </div>
  );
}

function Button(props) {
  return (
    <button type={props.type || "button"} onClick={props.onClick} className={`${props.styleColor} rounded w-[50%] py-1`}>
      {props.text}
    </button>
  );
}

export { SingleInput, Button, RadioInputSmoke, RadioInputGender, Checkbox };
