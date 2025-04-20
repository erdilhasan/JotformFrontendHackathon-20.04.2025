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

  const apiKey = import.meta.env.VITE_JOTFORM_API_KEY;
  const form_id = import.meta.env.VITE_FORM_ID;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = async (data) => {
    console.log({ ...data, cart: cart });

    const formData = new URLSearchParams();
    formData.append("submission[34]", data.fullname);
    formData.append("submission[36]", data.address);

    try {
      const response = await fetch(
        `https://api.jotform.com/form/${form_id}/submissions?apiKey=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        }
      );

      const data = await response.json();
      console.log("Submission successful:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Submission failed:", error);
    }
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
            <input
              className="border-2 rounded-md"
              {...register("fullname", { required: true })}
            />
          </label>

          {/* include validation with required or other standard HTML validation rules */}

          <label>
            {" "}
            Address:{" "}
            <input
              className="border-2 rounded-md"
              {...register("address", { required: true })}
            />
          </label>

          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input className="border-2 rounded-2xl p-2" type="submit" />
        </form>
      )}
    </div>
  );
}
