import { useState } from "react";
import PrimaryBtn from "../../components/PrimaryBtn";

const SayHello = () => {
  const [errors, setErrors] = useState();
  const [submitting, setSubmitting] = useState(false);
  const [submited, setSubmited] = useState(false);

  const submitHandler = async (ev) => {
    ev.preventDefault();
    setSubmitting(true);
    const formData = new FormData(ev.target);
    // for (var value of formData.values()) {
    //     console.log(value);
    //  }

    try {
      const res = await fetch(import.meta.env.VITE_APP_SAYHELLO_URL, {
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
        body: formData,
      });

      const resData = await res.json();

      //   console.log(resData);

      res.ok
        ? (setSubmited(true), setSubmitting(false))
        : (setSubmitting(false), setErrors(resData.errors));
    } catch (error) {
      setSubmitting(false);
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-[600px] max-w-full">
        {!submited ? (
          <>
            <h2 className="mb-5 text-3xl">
              <span className="text-gold">Say </span>
              Hello
            </h2>
            <form onSubmit={submitHandler} className="w-full">
              <div className="form-field relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  className="mb-10"
                  required
                />
                {errors?.name ? (
                  <small className="absolute -bottom-[20px]">
                    {errors.name}
                  </small>
                ) : (
                  ""
                )}
              </div>
              <div className="form-field relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="mb-10"
                  required
                />
                {errors?.email ? (
                  <small className="absolute -bottom-[20px]">
                    {errors.email}
                  </small>
                ) : (
                  ""
                )}
              </div>

              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Tell us about your need"
                className="bg-transparent border-2 rounded-none mb-5"
              ></textarea>

              <div className="relative w-[91.8px] h-[36px] flex justify-center items-center">
                {!submitting ? (
                  <button type="submit" className="flex">
                    <PrimaryBtn className={"rounded-none border-white"}>
                      Submit
                    </PrimaryBtn>
                  </button>
                ) : (
                  <span class="flex h-3 w-3">
                    <span class="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-white opacity-75"></span>
                    {/* <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span> */}
                  </span>
                )}
              </div>
            </form>
          </>
        ) : (
          <div className="text-center flex flex-col items-center">
            <h2>
              THANK <span className="text-gold">YOU</span>
            </h2>
            <br />
            <p className="max-w-[400px]">
              It’s great to hear from you! Our representatives will get back to
              you as soon as possible
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SayHello;
