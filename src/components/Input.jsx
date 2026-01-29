function SingleInput(props) {
  return (
    <label htmlFor={props.name}
      className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff]">
      <div className="title">
        <h1 className="text-[24px]">{props.title}</h1>
        <span className="text-[#1f1f1f]">{props.secondTitle}</span>
      </div>
      <input
        placeholder={props.placeholder}
        className={`className="text-[14px] outline-none border-b border-indigo-300 focus:border-indigo-700 focus:border-b-2 focus:ring-0" ${ props.error ? "border-red-500" : "border-gray-300" }`}
        {...props.register(props.name, props.rules)}
      />

      {props.error && (
        <p className="text-red-500 text-sm">
          {props.error.message}
        </p>
      )}
    </label>
  );
}


function RadioInputValue(props) {
  return (
    <label htmlFor={props.value} className="flex items-center">
      <input
        type="radio"
        id={props.value}
        value={props.value}
        className="mx-3"
        {...(props.register ? props.register(props.name, props.rules) : {})}
      />
      {props.valuetext}
    </label>
  );
}


function RadioInputGender(props) {
  return (
    <div className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff]">
      <div className="title">
        <h1 className="text-[24px]">{props.header}</h1>
        <span className="text-[#1f1f1f]">{props.text}</span>
      </div>

      <RadioInputValue value="lakilaki" valuetext="Laki-laki" register={props.register} name="gender" rules={{ required: "Jenis kelamin wajib dipilih" }} />
      <RadioInputValue value="perempuan" valuetext="Perempuan" register={props.register} name="gender" rules={{ required: "Jenis kelamin wajib dipilih" }} />

      {props.error && (
        <span className="text-red-500 text-sm">
          {props.error.message}
        </span>
      )}
    </div>
  );
}
function RadioInputSmoke(props) {
  return (
    <div className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff]">
      <div className="title">
        <h1 className="text-[24px]">{props.header}</h1>
        <span className="text-[#1f1f1f]">{props.text}</span>
      </div>

      <RadioInputValue value="ya" valuetext="Tidak" register={props.register} name="smoke" rules={{ required: "Pilih salah satu" }} />
      <RadioInputValue value="tidak" valuetext="Tidak" register={props.register} name="smoke" rules={{ required: "Pilih salah satu" }} />

      {props.error && (
        <span className="text-red-500 text-sm">
          {props.error.message}
        </span>
      )}
    </div>
  );
}

function CheckboxVal(props) {
  return (
    <label htmlFor={props.value} className="flex items-center gap-3">
      <input
        type="checkbox"
        id={props.value}
        value={props.value}
        {...(props.register ? props.register(props.name, props.rules) : {})}
      />
      {props.text}
    </label>
  );
}


function Checkbox({ register, error }) {
  return (
    <div className="flex flex-col gap-5 py-5 px-10 border border-[#dadce0] rounded-md bg-[#fff]">
      <div className="title">
        <h1 className="text-[24px]">
          Jika anda pernah merokok, rokok apa yang pernah anda coba
        </h1>
        <span className="text-[#1f1f1f]">
          Pilih beberapa jika anda pernah merokok
        </span>
      </div>

      <CheckboxVal value="gudanggaramfilter" text="Gudang Garam Filter" register={register} name="cigaretteBrands" rules={{
          required: "Minimal pilih satu merek rokok, jika tidak pilih tidak ",
        }}
      />

      <CheckboxVal value="luckystrike" text="Lucky Strike" register={register} name="cigaretteBrands" />
      <CheckboxVal value="marlboro" text="Marlboro" register={register} name="cigaretteBrands" />
      <CheckboxVal value="esse" text="Esse" register={register} name="cigaretteBrands" />
      <CheckboxVal value="tidak" text="Tidak" register={register} name="cigaretteBrands" />

      {error && (
        <span className="text-red-500 text-sm">
          {error.message}
        </span>
      )}
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
