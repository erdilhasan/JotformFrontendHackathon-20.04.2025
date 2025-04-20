import { useState } from "react";
import { useForm } from "react-hook-form";
import { TiTick } from "react-icons/ti";
import { useOutletContext } from "react-router";

export default function CheckoutPage(params) {
  const { cart, setCart } = useOutletContext();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (data) => {
    console.log({ ...data, cart: cart });
    setIsSubmitted(true);
  };
  return (
    <div>
      <h2>Checkout</h2>

      {isSubmitted ? (
        <div className=" border-2 rounded-xl items-center  justify-center  p-4">
          <TiTick color="03A791" size={100}></TiTick>
          <h2>Thank You For Your Order</h2>
          <p>We Received Your Order and will be processed later.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            {" "}
            Full Name:{" "}
            <input className="border-2 rounded-md" {...register("fullname")} />
          </label>

          {/* include validation with required or other standard HTML validation rules */}

          <label>
            {" "}
            Address: <input {...register("address", { required: true })} />
          </label>

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type="submit" />
        </form>
      )}
    </div>
  );
}
