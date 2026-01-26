import { useForm } from "react-hook-form"

function SingleInput(props) {
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
    
    
    return (
    <label htmlFor="name" className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff] ">
        <div className="title ">
          <h1 className="text-[24px]">{props.title}</h1>
          <span className="text-[#1f1f1f]">{props.secondTitle}</span>
        </div>
        <input
          placeholder={props.placeholder}
          className="text-[14px] outline-none border-b-1 border-indigo-300 focus:border-indigo-700 focus:border-b-2 focus:ring-0" 
          defaultValue="test" {...register("example")} />
      </label>
    )
}

function RadioInputValue(props) {
    return (
        <label htmlFor={props.value}>
          <input type="radio" id={props.value} name={props.value} value={props.value} className="mx-3" />
          {props.valuetext}
        </label>
    )
}


function RadioInputGender(props) {
    return (
      <div htmlFor="name" className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff] ">
        <div className="title ">
          <h1 className="text-[24px]">{props.header}</h1>
          <span className="text-[#1f1f1f]">{props.text}</span>
        </div>
        <RadioInputValue value="lakilaki" valuetext="Laki laki" />
        <RadioInputValue value="perempuan" valuetext="Perempuan" />
      </div>
    )
}
function RadioInputSmoke(props) {
    return (
      <div htmlFor="name" className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff] ">
        <div className="title ">
          <h1 className="text-[24px]">{props.header}</h1>
          <span className="text-[#1f1f1f]">{props.text}</span>
        </div>
        <RadioInputValue value="ya" valuetext="Ya" />
        <RadioInputValue value="tidak" valuetext="Tidak" />
      </div>
    )
}

function CheckboxVal(props) {
    return (
    <label forhtml="gudanggaramfilter">
        <input type="checkbox" id={props.value} name={props.value} value={props.value} className="mx-3"/>
        {props.text}
    </label>
    )
}

function Checkbox() {
    return (
    <div htmlFor="name" className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff] ">
        <div className="title ">
          <h1 className="text-[24px]">Jika anda pernah merokok, rokok apa yang pernah anda coba </h1>
          <span className="text-[#1f1f1f]">Pilih beberapa jika anda pernah merokok </span>
        </div>
        <CheckboxVal value="gudanggaramfilter" text="Gudang garam filter" />
        <CheckboxVal value="luckystrike" text="Lucky Strike" />
        <CheckboxVal value="marlboro" text="Marlboro" />
        <CheckboxVal value="esse" text="Esse" />
      {/* <label forhtml="gudanggaramfilter">
        <input type="checkbox" id="gudanggaramfilter" name="gudanggaramfilter" value="gudanggaramfilter" className="mx-3"/>
        Gudang garam filter
      </label> */}
      </div>
    )
}

function Button(props) {
    return <button className={`${props.styleColor} rounded w-[50%] py-1`}>{props.text}</button>
}

export { SingleInput, Button, RadioInputSmoke, RadioInputGender, Checkbox}